import React, { useState } from 'react';
import ArticleHeader from './ArticleHeader';
import SKILL_IMGS from '../../static/images/skills/index';
type Props = {};

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: SKILL_IMGS['frontend'] },
    { value: 'Backend', imgUrl: SKILL_IMGS['backend'] },
    { value: 'Deployment', imgUrl: SKILL_IMGS['deployment'] },
    { value: 'Version Control', imgUrl: SKILL_IMGS['versionControl'] },
    { value: 'Communication', imgUrl: SKILL_IMGS['communication'] }
  ];
  const [skillState, setSkillState] = useState(skillContainers[0].value);

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section className="w-[100vw]">
        <div className="hidden lg:flex w-3/5 h-[800px] mx-auto flex-col flex-wrap content-around gap-8">
          {skillContainers.map((box, index) => {
            console.log('index=>', index, box.imgUrl);
            return (
              <div key={index} className="interactiveBox">
                <div className="mx-auto font-bold text-yellow-600 text-3xl">{box.value}</div>
                <div className="w-full mx-auto h-[1px] bg-black my-1"></div>
                <img src={box.imgUrl} alt={box.value} />
              </div>
            );
          })}
        </div>

        <ul className="lg:hidden w-[360px] relative min-h-[500px] mx-auto flex flex-col justify-center items-center">
          {skillContainers.map((box, index) => {
            return (
              <li key={index} style={{ top: `${index * 50}px` }} className={`absolute left-0  w-[155px]`}>
                <button
                  className={`w-full h-full ${
                    box.value === skillState && 'rounded-r-none bg-pink-200'
                  } hover:rounded-r-none interactiveBox hover:bg-pink-200`}
                  onClick={() => {
                    setSkillState(box.value);
                  }}
                >
                  {box.value}
                </button>

                {box.value === skillState && (
                  <div
                    style={{ top: `${-index * 50}px` }}
                    className="absolute w-[220px] left-[143px] p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl z-50"
                  >
                    <div className="mx-auto font-bold text-yellow-600 text-2xl lg:text-3xl">{box.value}</div>
                    <div className="w-full mx-auto h-[1px] bg-black my-1"></div>
                    <img src={box.imgUrl} alt={box.value} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Skills;
