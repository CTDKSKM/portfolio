import React from 'react';
import ArticleHeader from './ArticleHeader';
import { AiOutlineCheck } from 'react-icons/ai';
import tistory from '../../static/images/tistory.jpg';

type Props = {};

const Projects = (props: Props) => {
  return (
    <article id="projects" className="w-full py-10 bg-blue-300">
      <ArticleHeader name={'projects'} />

      <section
        style={{ width: '1500px', height: '1200px' }}
        className="mx-auto flex flex-col flex-wrap content-around gap-8 justify-center"
      >
        <div style={{ width: '100%', height: '100%' }} className="interactiveBox container mx-auto pl-8">
          <div className="text-5xl font-bold text-center mt-5">[PROJECT'S NAME]</div>
          <div className="text-2xl font-bold text-gray-400 text-center mt-5">YEAR.MM.DD</div>
          <div className="container flex flex-row mt-5">
            <div style={{ height: '100vh', border: '1px solid black' }} className="w-1/2  bg-gray-300 p-4">
              <img style={{ width: '100%', height: '100%', border: '1px solid black' }} src={tistory} alt="tistory" />
              {/* <ImageSlider/> */}
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
              {/* 수평선 */}
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
      </section>
    </article>
  );
};

export default Projects;
