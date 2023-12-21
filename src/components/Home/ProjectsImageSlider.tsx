import EmblaCarousel from '../EmblaCarousel';

type Props = {
  imgs: string[];
};

const ProjectsImageSlider = ({ imgs }: Props) => {
  const photoData = imgs;

  return (
    <div className="relative flex h-4/5 lg:h-auto justify-center items-center w-full rounded-md font-thin text-xl my-3 border-black">
      {!!imgs.length && (
        <EmblaCarousel
          slides={photoData.map((imageSrc, idx) => (
            <img key={idx} src={`${imageSrc}`} className="object-cover p-3" alt=""></img>
          ))}
          options={{
            align: 'start',
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0.7,
            dragFree: false
          }}
          slideHeight="h-[220px] sm:h-[10.5rem] lg:h-[28rem]"
          slideWidth="w-full sm:w-1/2 lg:w-full"
          isSlideLength={true}
          buttonPosition="bottom"
        />
      )}
    </div>
  );
};

export default ProjectsImageSlider;
