import React from 'react';
import ArticleHeader from '../ArticleHeader';
import person from '../../../static/images/person.svg';
import calender from '../../../static/images/calender.svg';
import locator from '../../../static/images/locator.svg';
import phoneCall from '../../../static/images/phone-call.svg';
import mail from '../../../static/images/mail.svg';
import pen from '../../../static/images/pen.svg';

type Props = {};

const About = (props: Props) => {
  const information = [
    { title: '이름', value: '서경모', icon: person },
    { title: '생년월일', value: '1994.08.05', icon: calender },
    { title: '주소지', value: '대한민국', icon: locator },
    { title: '연락처', value: '010-5536-5480', icon: phoneCall },
    { title: '이메일', value: 'skmdldy001@gmail.com', icon: mail },
    { title: '학력', value: '인덕원고등학교 졸업', icon: pen }
  ];

  return (
    <article id="about-me" className="w-full py-10 bg-white">
      <ArticleHeader name={'About-Me'} />

      <section className="flex flex-wrap w-3/5 mx-auto">
        {information.map((info) => {
          return (
            <div key={info.title} className="flex justify-center sm:w-1/2 lg:w-1/3">
              <div className="w-[300px] flex gap-5 my-5">
                <div className="w-[50px]">
                  <img src={info.icon} alt={info.title} width="35" height="35" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                  <h4 className="font-bold text-xl">{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default About;
