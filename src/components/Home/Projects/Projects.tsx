import React, { useCallback, useMemo, useState } from 'react';
import ArticleHeader from '../ArticleHeader';
import { PROJECT_ITEMS } from '../../../static/projectItems';
import ProjectContainer from './ProjectContainer';
import LeftArrowFull from '../../../static/svgs/LeftArrowFull';

type Props = {};

const Projects = (props: Props) => {
  const [showIndex, setShowIndex] = useState(0);
  const maxIndex = useMemo(() => PROJECT_ITEMS.length - 1, [PROJECT_ITEMS]);

  const increaseShowIndex = useCallback(() => {
    setShowIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  }, []);
  const decreaseShowIndex = useCallback(() => {
    setShowIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  return (
    <article id="projects" className="w-full py-5 bg-blue-300 flex flex-col justify-center items-center">
      <div className="relative">
        <ArticleHeader name={'projects'} />
        <div className="absolute flex gap-2 -bottom-0 left-1/2 -translate-x-1/2 px-2 font-bold text-sm text-gray-500">
          {PROJECT_ITEMS.map((project, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  idx === showIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-500'
                } w-[30px] h-[8px] rounded-2xl transition-all duration-300`}
                onClick={() => setShowIndex(idx)}
              ></button>
            );
          })}
        </div>
        {showIndex > 0 && (
          <button className="absolute -bottom-10 left-0 z-10" onClick={decreaseShowIndex}>
            <LeftArrowFull />
          </button>
        )}
        {showIndex < maxIndex && (
          <button className="absolute -bottom-10 right-0 rotate-180 z-10" onClick={increaseShowIndex}>
            <LeftArrowFull className="transition-all duration-500" />
          </button>
        )}
      </div>
      <div className="relative">
        {PROJECT_ITEMS.map((project, idx) => idx === showIndex && <ProjectContainer key={idx} project={project} />)}
      </div>
    </article>
  );
};

export default Projects;
