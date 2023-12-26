import React, { useCallback, useMemo, useState } from 'react';
import ArticleHeader from '../ArticleHeader';
import { PROJECT_ITEMS } from '../../../static/projectItems';
import ProjectContainer from './ProjectContainer';

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
      </div>
      <div className="relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">{`${showIndex + 1}/${maxIndex + 1}`}</div>
        {showIndex > 0 && (
          <button className="absolute top-3 left-8" onClick={decreaseShowIndex}>
            Prev
          </button>
        )}
        {showIndex < maxIndex && (
          <button className="absolute top-3 right-8" onClick={increaseShowIndex}>
            Next
          </button>
        )}
        {PROJECT_ITEMS.map(
          (project, idx) => idx === showIndex && <ProjectContainer key={project.project_name} project={project} />
        )}
      </div>
    </article>
  );
};

export default Projects;
