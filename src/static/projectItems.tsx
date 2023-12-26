import moviebaba_imgs from '../static/projectsimages/moviebaba';
import portfolio_imgs from '../static/projectsimages/portfolio';

export interface PROJECT_ITEM {
  project_name: string;
  imgs: string[];
  period: string;
  desc: JSX.Element;
  skills: JSX.Element;
  video_url?: string | null;
  github_url: string;
  deployment_url?: string | null;
}

export const PROJECT_ITEMS: PROJECT_ITEM[] = [
  {
    project_name: `Portfolio`,
    imgs: [...portfolio_imgs],
    period: '23.12',
    desc: (
      <div className="descTextContainer">
        지금 보고 계신 <span className="descMainText">포트폴리오 사이트</span>
        <span>
          입니다. <br />
          프론트엔드 개발자로서 자신만의 포트폴리오 사이트가 있으면 좋겠다는 생각으로 제작하였습니다.
          <br />
          <br />
          평소 유저와 상호작용하는 이벤트에 대해 많은 관심이 있었고, 이에{' '}
          <span className="descMainText">마우스 이벤트</span>를 주제로하여 마우스움직임에 따른 이펙트효과를 구현하였고{' '}
          <span className="descMainText">클릭,</span> <span className="descMainText">휠</span> 움직임으로 화면움직임을
          제어할 수 있도록 하였습니다.
          <br />
        </span>
      </div>
    ),
    skills: (
      <>
        - <span className="font-bold text-lg">Front-end</span> :{' '}
        {'ReactJS TypeScript Lodash TailwindCSS Embla-Carousel'.replaceAll(' ', ', ')} <br />-{' '}
        <span className="font-bold text-lg">DevOps</span> : Vercel, Git/Github
      </>
    ),
    github_url: 'https://github.com/CTDKSKM/portfolio',
    deployment_url: 'https://portfolio-ctdkskm.vercel.app/'
  },
  {
    project_name: '무비바바',
    imgs: [...moviebaba_imgs],
    period: '23.08 - 23.09',
    desc: (
      <div className="descTextContainer">
        <span className="descMainText">
          영화 정보를 찾아보거나 추천 받을 수 있고 다른 사람들의 리뷰 및 토론을 통해 이야기를 나눌 수 있는 커뮤니티 기반
          영화 평론 서비스
        </span>
        입니다. <br />
        국비지원캠프 참여 중 최종 팀프로젝트로, 영화를 좋아하는 팀원분의 제안으로 시작하게되었습니다.
        <br />
        <br />
        <span className="descMainText">반응형 및 Interactive UI</span>에 대해 배울 수 있었고,{' '}
        <span className="descMainText">토론게시판CRUD</span>를 구현하면서 프론트엔드 개발자로서{' '}
        <span className="descMainText">유효성 검사 및 성능 최적화로 인한 UX증진</span>에 대한 중요성을 체감할 수
        있었습니다.
      </div>
    ),
    skills: (
      <>
        - <span className="font-bold text-lg">Front-end</span> :{' '}
        {'NextJS TypeScript Tanstack-Query Zustand Lodash TailwindCSS AntDesign React-Hook-Form Embla-Carousel'.replaceAll(
          ' ',
          ', '
        )}{' '}
        <br />- <span className="font-bold text-lg">Back-end</span> : {'Supabase Axios Sharp'.replaceAll(' ', ', ')}{' '}
        <br />- <span className="font-bold text-lg">DevOps</span> : Vercel, Git/Github
      </>
    ),
    video_url:
      'https://www.youtube.com/embed/id5dVG9Su8Q?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=ko&modestbranding=1&fs=1&autohide=1',
    github_url: 'https://github.com/Hediar/NBC-Project',
    deployment_url: 'https://moviebaba.vercel.app/'
  }
];
