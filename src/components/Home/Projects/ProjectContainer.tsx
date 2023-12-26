import React, { useEffect, useRef, useState } from 'react';
import ProjectsImageSlider from '../ProjectsImageSlider';
import { PROJECT_ITEM } from '../../../static/projectItems';
import { Link } from 'react-router-dom';

type Props = {
  project: PROJECT_ITEM;
};

const ProjectContainer = ({ project }: Props) => {
  const { project_name, imgs, period, desc, skills } = project;
  const contents = project.videoKey ? ['Photo', 'Video'] : ['Photo'];
  const [showContent, setShowContent] = useState(contents[0]);
  const [showProjectSkillState, setShowProjectSkillState] = useState(false);
  const skillContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skillContainerRef.current instanceof HTMLDivElement) {
      console.log(skillContainerRef.current.style.opacity);
      setTimeout(() => (skillContainerRef.current!.style.opacity = '1'), 1);
    }
  }, [showProjectSkillState]);

  return (
    <section className="mainSection">
      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-xl lg:text-2xl">{project_name}</span>
        <span className="text-md">{period}</span>
      </div>
      <div className="w-full h-full flex justify-center items-center mx-auto p-4 bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:translate-y-1">
        <div className="w-full lg:w-1/2 h-full p-2">
          <div className="w-1/2 mx-auto p-2">
            <ul className={`flex ${contents.length > 1 ? 'justify-between' : 'justify-center'}`}>
              {contents.map((opt) => {
                return (
                  <li key={opt}>
                    <button className={`${opt === showContent && 'font-bold'}`} onClick={() => setShowContent(opt)}>
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {showContent === contents[0] && (
            <div className="w-full h-full">
              <ProjectsImageSlider imgs={imgs} />
            </div>
          )}
          {showContent === contents[1] && project?.videoKey && (
            <iframe
              className="p-2 w-full h-4/5"
              src={`https://www.youtube.com/embed/${project.videoKey}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=ko&modestbranding=1&fs=1&autohide=1`}
            />
          )}
        </div>

        <div className="text-sm md:text-md lg:text-md hidden relative flex-col justify-between items-stretch lg:flex w-full lg:w-1/2 h-full p-5">
          <div className="p-2 flex flex-col justify-center items-center border-b border-black pb-5 h-[350px] overflow-auto">
            {desc}
          </div>
          <div className="flex flex-col gap-2 my-2">
            <div className="font-bold">
              Github:{' '}
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-500 hover:underline transition-all duration-300"
              >
                {project.github_url}
              </a>
            </div>
            <div className="font-bold">
              Deployment:{' '}
              <a
                href={project.deployment_url || ''}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-500 hover:underline transition-all duration-300"
              >
                {project.deployment_url}
              </a>
            </div>
          </div>

          <div className="relative">
            <button
              className={`w-[100px] border shadow-sm p-2 mt-2 rounded-full ${
                showProjectSkillState ? 'bg-blue-200' : 'bg-white'
              } transition-all duration-500`}
              onMouseEnter={() => setShowProjectSkillState(true)}
              onMouseLeave={() => setShowProjectSkillState(false)}
              onClick={() => setShowProjectSkillState((prev) => !prev)}
            >
              사용기술
            </button>
            {showProjectSkillState && (
              <div
                ref={skillContainerRef}
                onMouseEnter={() => setShowProjectSkillState(true)}
                onMouseLeave={() => setShowProjectSkillState(false)}
                style={{
                  opacity: '0',
                  transition: 'opacity 0.5s'
                }}
              >
                <div className="w-full absolute bottom-16 left-0 p-5 text-sm rounded-2xl bg-blue-200">{skills}</div>
                <div className="absolute w-[80px] h-[40px] left-5 bottom-10 bg-transparent">
                  <div style={{ clipPath: `polygon(0 0, 0 100%, 100% 0)` }} className="w-full h-full bg-blue-200"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
