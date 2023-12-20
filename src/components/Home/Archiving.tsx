import React from 'react';
import ArticleHeader from './ArticleHeader';
import github from '../../static/images/github.png';
import tistory from '../../static/images/tistory.jpg';

type Props = {};

const Archiving = (props: Props) => {
  return (
    <article id="archiving" className="w-full py-10 bg-red-300">
      <ArticleHeader name={'archiving'} />
      <section>
        <div style={{ height: '400px' }} className="w-3/5 mx-auto flex flex-col flex-wrap content-around gap-8">
          <div style={{ width: '500px' }} className="interactiveBox">
            <div className="container mx-auto pl-8">
              <img style={{ width: '60%', height: '80%', border: '1px solid black' }} src={github} alt="github" />
              <a
                href="https://github.com/CTDKSKM"
                className="text-lg text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/CTDKSKM
              </a>
              <br />
              <span className="text-lg font-bold ">소스 코드 저장소</span>
              <span>입니다.</span>
              <ul className="list-disc">
                <li className="text-lg">과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                <li className="text-lg">코딩 연습을 위해 끄적이던 소스 코드</li>
              </ul>
            </div>
          </div>

          <div style={{ width: '500px' }} className="interactiveBox">
            <div className="text-lg container mx-auto p-4 pl-8">
              <img style={{ width: '60%', height: '80%', border: '1px solid black' }} src={tistory} alt="tistory" />
              <a
                href="https://ezsswil.tistory.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ezsswil.tistory.com
              </a>
              <br />
              <span className="text-lg font-bold ">공부 및 지식 공유 목적의 블로그</span>
              <span>입니다.</span>
              <ul className="list-disc">
                <li className="text-lg">학습한 것을 보다 자세히 이해하고 진정한 나만의 것으로 만들기 위한 기록</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Archiving;
