import EmblaCarousel from '../common/EmblaCarousel';

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
            <img key={idx} src={`${imageSrc}`} className="w-full object-cover max-h-[320px] p-3" alt=""></img>
          ))}
          options={{
            align: 'start',
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0.7,
            dragFree: false
          }}
          slideHeight="h-[45vh]"
          slideWidth="w-full sm:w-1/2 lg:w-full"
          isSlideLength={true}
          buttonPosition="bottom"
        />
      )}
    </div>
  );
};

export default ProjectsImageSlider;
