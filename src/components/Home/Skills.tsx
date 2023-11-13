import React from 'react';
import ArticleHeader from './ArticleHeader';

type Props = {};

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: 'logo192.png', height: 500 },
    { value: 'Backend', imgUrl: 'logo192.png', height: 350 },
    { value: 'Deployment', imgUrl: 'logo192.png', height: 300 },
    { value: 'Version Control', imgUrl: 'logo192.png', height: 300, width: 300 },
    { value: 'Communication', imgUrl: 'logo192.png', height: 300, width: 300 }
  ];

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section>
        <div style={{ height: '800px' }} className="w-3/5 mx-auto flex flex-col flex-wrap content-around gap-8">
          {skillContainers.map((box, index) => {
            return (
              <div key={index} style={{ height: box.height, width: box.width }} className="interactiveBox">
                <div className="mx-auto font-bold text-yellow-600 text-3xl">{box.value}</div>
                <div className="w-full mx-auto h-[1px] bg-black my-1"></div>
                <img src={process.env.PUBLIC_URL + '/' + box.imgUrl} alt={box.value} />
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Skills;
