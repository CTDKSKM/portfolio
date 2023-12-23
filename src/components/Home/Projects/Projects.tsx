import React, { useState } from 'react';
import ArticleHeader from '../ArticleHeader';
import moviebaba from '../../../static/projectsimages/moviebaba/index';
import ProjectsImageSlider from '../ProjectsImageSlider';

type Props = {};

const Projects = (props: Props) => {
  const contents = ['Photo', 'Video'];
  const [showContent, setShowContent] = useState(contents[0]);
  const moviebabaImages = [...moviebaba];
  const [showProjectSkillState, setShowProjectSkillState] = useState(false);

  return (
    <article id="projects" className="w-full py-5 bg-blue-300 flex flex-col justify-center items-center">
      <ArticleHeader name={'projects'} />
      <section className="mainSection">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-2xl">무비바바</span>
          <span className="text-md">23.08 - 23.09</span>
        </div>
        <div className="w-full h-full flex justify-center items-center mx-auto p-4 bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:translate-y-1">
          <div className="w-full lg:w-1/2 h-full p-2">
            <div className="w-1/2 mx-auto p-2">
              <ul className="flex justify-between">
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
              <div className="h-full">
                <ProjectsImageSlider imgs={moviebabaImages} />
              </div>
            )}
            {showContent === contents[1] && (
              <iframe
                className="p-2 w-full h-4/5"
                src={`https://www.youtube.com/embed/${'id5dVG9Su8Q'}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=ko&modestbranding=1&fs=1&autohide=1`}
              />
            )}
          </div>

          <div className="hidden relative flex-col justify-between items-stretch lg:flex w-full lg:w-1/2 h-full p-5">
            <div className="border-b border-black pb-5">
              <span className="font-bold">
                영화 정보를 찾아보거나 추천 받을 수 있고 다른 사람들의 리뷰 및 토론을 통해 이야기를 나눌 수 있는
                커뮤니티 기반 영화 평론 서비스
              </span>
              <span>
                입니다. <br />
                국비지원캠프 참여 중 최종 팀프로젝트로, 영화를 좋아하는 팀원분의 제안으로 시작하게되었습니다.
                <br />
                <br />
                <span className="font-bold">반응형 및 Interactive UI</span>에 대해 배울 수 있었고,{' '}
                <span className="font-bold">토론게시판CRUD</span>를 구현하면서 프론트엔드 개발자로서{' '}
                <span className="font-bold">유효성 검사 및 성능 최적화로 인한 UX증진</span>에 대한 중요성을 체감할 수
                있었습니다.
              </span>
            </div>

            <div className="relative">
              <button
                className="w-[100px] border shadow-sm p-2 mt-2 rounded-full bg-white"
                onMouseEnter={() => setShowProjectSkillState(true)}
                onMouseLeave={() => setShowProjectSkillState(false)}
                onClick={() => setShowProjectSkillState((prev) => !prev)}
              >
                사용기술
              </button>
              {showProjectSkillState && (
                <div
                  onMouseEnter={() => setShowProjectSkillState(true)}
                  onMouseLeave={() => setShowProjectSkillState(false)}
                >
                  <div className="w-full absolute bottom-16 left-0 p-5 text-sm rounded-2xl bg-blue-200">
                    - <span className="font-bold text-lg">Front-end</span> :{' '}
                    {'NextJS TypeScript Tanstack-Query Zustand Lodash TailwindCSS AntDesign React-Hook-Form Embla-Carousel'.replaceAll(
                      ' ',
                      ', '
                    )}{' '}
                    <br />- <span className="font-bold text-lg">Back-end</span> :{' '}
                    {'Supabase Axios Sharp'.replaceAll(' ', ', ')} <br />-{' '}
                    <span className="font-bold text-lg">DevOps</span> : Vercel, Git/Github
                  </div>
                  <div className="absolute w-[80px] h-[40px] left-5 bottom-10 bg-transparent">
                    <div
                      style={{ clipPath: `polygon(0 0, 0 100%, 100% 0)` }}
                      className="w-full h-full bg-blue-200"
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Projects;
