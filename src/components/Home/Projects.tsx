import React, { useState } from 'react';
import ArticleHeader from './ArticleHeader';
import moviebaba from '../../static/projectsimages/moviebaba/index';
import ProjectsImageSlider from './ProjectsImageSlider';

type Props = {};

const Projects = (props: Props) => {
  const contents = ['Photo', 'Video'];
  const [showContent, setShowContent] = useState(contents[0]);
  const moviebabaImages = [...moviebaba];

  return (
    <article id="projects" className="w-full py-5 bg-blue-300 flex flex-col justify-center items-center">
      <ArticleHeader name={'projects'} />
      <section className="mainSection">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-2xl">무비바바</span>
          <span className="text-md">23.08 - 23.09</span>
        </div>
        <div className="w-full h-full flex justify-center items-center mx-auto p-4 bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:translate-y-1">
          <div className="w-1/2 h-full bg-slate-300 p-2">
            <div className="w-1/2 mx-auto p-2">
              <ul className="flex justify-between">
                {contents.map((opt) => {
                  return (
                    <li key={opt}>
                      <button onClick={() => setShowContent(opt)}>{opt}</button>
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

          <div className="w-1/2 h-full bg-slate-500 p-5">
            <span className="font-bold">
              영화 정보를 찾아보거나 추천 받을 수 있고 다른 사람들의 리뷰 및 토론을 통해 이야기를 나눌 수 있는 커뮤니티
              기반 영화 평론 서비스
            </span>
            <span>
              입니다. <br />
              영화를 좋아하는 팀원분의 제안으로 시작하게되었습니다.
            </span>
            <br />
          </div>
        </div>
      </section>
      {/* <section
        style={{ width: '60vw', height: '80vh' }}
        className="mx-auto flex flex-col flex-wrap content-around gap-8 justify-center"
      >
        <div style={{ width: '100%', height: '100%' }} className="interactiveBox container mx-auto pl-8">
          <div className="text-5xl font-bold text-center mt-5">[PROJECT'S NAME]</div>
          <div className="text-2xl font-bold text-gray-400 text-center mt-5">YEAR.MM.DD</div>
          <div className="container flex flex-row mt-5">
            <div style={{ height: '100vh', border: '1px solid black' }} className="w-1/2  bg-gray-300 p-4">
              <img style={{ width: '100%', height: '100%', border: '1px solid black' }} src={tistory} alt="tistory" />
            </div>
            <div style={{ height: '100vh', border: '1px solid black' }} className="w-1/2 h-80 bg-gray-300 p-4">
              <p className="text-lg font-bold " id="info">
                1/8 복잡한 상황에서의 N빵 계산을 도와 누가 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다.
                동아리 활동을 하던 당시 여러 모임에서 N빵 계산 시 어려움을 겪은 몇몇 상황에서 아이디어를 얻어
                개발하였습니다.
                <br />
                <br /> 이미 Android Native로 개발을 완료한 프로젝트였지만, React Native의 학습을 위해 이를 다시 React
                Native로 개발하였습니다. 이전 프로젝트와 달리 이번에는 전반적인 로직과 UI & UX를 개선하고 실제로
                스토어에 출시까지 했다는 점에서 의미가 있습니다. 이제는 마음만 먹으면 모바일 앱도 개발하고 출시할 수
                있다는 자신감을 준 프로젝트입니다.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline my-5">
                자세히보기 - README
              </button>
              <div className="border-b border-gray-500 my-3"></div>

              <ul className="list-disc m-3">
                <li className=" text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  주요기능
                  <div className="ml-5">참석자의 이름∙부담 금액∙비중 입력, 최소한으로 이체하는 방법 계산</div>
                </li>
                <li className="text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  GITHUB
                  <a
                    href="https://example.com"
                    className="text-blue-500 hover:underline ml-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com
                  </a>
                </li>
                <li className="text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  FRONTEND
                  <a
                    href="https://example.com"
                    className="text-blue-500 hover:underline ml-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tistory.com
                  </a>
                </li>
                <li className="text-lg flex my-8 font-bold">
                  <AiOutlineCheck />
                  BACKEND
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </article>
  );
};

export default Projects;
