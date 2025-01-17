import { ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import LeftArrow from '../../static/svgs/LeftArrow';

interface PropType {
  options?: EmblaOptionsType;
  slides: ReactNode[];
  slideWidth: string;
  slideHeight: string;
  buttonPosition: string;
  isSlideLength: boolean;
  buttonPositionStyleL?: string;
  buttonPositionStyleR?: string;
}

const carouselButton = `flex justify-between items-center absolute top-1/2 -translate-y-1/2 bg-transparent cursor-pointer z-10`;

export const EmblaCarousel = (props: PropType) => {
  const {
    options,
    slides,
    slideHeight,
    slideWidth,
    buttonPosition,
    isSlideLength,
    buttonPositionStyleL,
    buttonPositionStyleR
  } = props; // props로 가져온 옵션과 슬라이드 리스트

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [emblaRef, embla] = useEmblaCarousel(options); // 슬라이더 구현에 필요한 요소들을 useEmblaCarousel 에서 가져온다.
  const [selectedIndex, setSelectedindex] = useState(0); // 현재 보여지는 인덱스를 설정

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  // 이 코드는 구현할 때 사용하지 않았다. 하지만 나중에 혹시 쓰일 수 있을 것 같아서 남겨뒀다.

  // 현재 선택된 슬라이더의 순서(인덱스)를 저장을 위한 함수
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedindex(embla.selectedScrollSnap());
    // selectedScrollSnap:  선택한 스냅 Point의 인덱스를 가져온다.
    setPrevBtnDisabled(!embla.canScrollPrev());
    setNextBtnDisabled(!embla.canScrollNext());
  }, [embla, setSelectedindex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();

    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <div className="w-full h-full lg:h-4/5 absolute top-0 rounded-md">
      <div className="overflow-hidden lg:relative rounded-md" ref={emblaRef}>
        <div className={`flex flex-col flex-wrap ${slideHeight} flex-none`}>
          {slides.map((slide, index) => (
            <div className={`${slideWidth} h-full relative`} key={index}>
              {slide}
            </div>
          ))}
        </div>
        {isSlideLength && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-16 lg:bottom-24 bg-[#0e0e0e72] rounded-full">
            <div className="flex justify-evenly items-center text-xs w-9 font-semibold">
              <span className="text-white">{selectedIndex + 1}</span>
              <div className="w-[2.05px] h-[2.05px] rounded-full bg-[#ffffffb2]" />
              <span className="text-[#ffffffb2]">{slides.length}</span>
            </div>
          </div>
        )}

        {buttonPosition === 'center' && (
          <>
            <div className={`${carouselButton} left-10 ${buttonPositionStyleL}`}>
              <button onClick={scrollPrev} disabled={prevBtnDisabled}>
                <LeftArrow />
              </button>
            </div>
            <div className={`${carouselButton} right-10 ${buttonPositionStyleR}`}>
              <button onClick={scrollNext} disabled={nextBtnDisabled}>
                <LeftArrow />
              </button>
            </div>
          </>
        )}
        {buttonPosition === 'bottom' && (
          <>
            <div className={`absolute bottom-12 lg:bottom-20 left-10 z-10 ${buttonPositionStyleL}`}>
              <button onClick={scrollPrev} disabled={prevBtnDisabled}>
                <LeftArrow />
              </button>
            </div>
            <div
              className={`absolute right-10 bottom-12 lg:bottom-20 
            z-10 ${buttonPositionStyleR}`}
            >
              <button className="rotate-180" onClick={scrollNext} disabled={nextBtnDisabled}>
                <LeftArrow />
              </button>
            </div>
          </>
        )}
        {/* {buttonPosition === 'rightTop' && (
          <div className="absolute top-[40px] right-[40px] z-10">
            <div className="flex items-center">
              <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} className="p-1 rounded-full cursor-pointer" />
              <NextButton onClick={scrollNext} disabled={nextBtnDisabled} className="p-1 rounded-full cursor-pointer" />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
