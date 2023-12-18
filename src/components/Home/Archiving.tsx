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
                href="https://example.com"
                className="text-lg text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com
              </a>
              <p className="text-lg font-bold ">이 텍스트는 강조됩니다.</p>
              <ul className="list-disc">
                <li className="text-lg">THIS IS CONTENT</li>
                <li className="text-lg">THIS IS CONTENT</li>
                <li className="text-lg">THIS IS CONTENT</li>
              </ul>
            </div>
          </div>

          <div style={{ width: '500px' }} className="interactiveBox">
            <div className="text-lg container mx-auto p-4 pl-8">
              <img style={{ width: '60%', height: '80%', border: '1px solid black' }} src={tistory} alt="tistory" />
              <a
                href="https://example.com"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tistory.com
              </a>
              <p className="text-lg font-bold">이 텍스트는 강조됩니다.</p>
              <ul className="list-disc">
                <li className="text-lg">THIS IS CONTENT</li>
                <li className="text-lg">THIS IS CONTENT</li>
                <li className="text-lg">THIS IS CONTENT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Archiving;
