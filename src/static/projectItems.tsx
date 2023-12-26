import moviebaba_imgs from '../static/projectsimages/moviebaba';
import portfolio_imgs from '../static/projectsimages/portfolio';

export interface PROJECT_ITEM {
  project_name: string;
  imgs: string[];
  period: string;
  desc: JSX.Element;
  skills: JSX.Element;
  videoKey?: string | null;
}

export const PROJECT_ITEMS: PROJECT_ITEM[] = [
  {
    project_name: '무비바바',
    imgs: [...moviebaba_imgs],
    period: '23.08 - 23.09',
    desc: (
      <>
        <span className="font-bold">
          영화 정보를 찾아보거나 추천 받을 수 있고 다른 사람들의 리뷰 및 토론을 통해 이야기를 나눌 수 있는 커뮤니티 기반
          영화 평론 서비스
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
      </>
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
    videoKey: 'id5dVG9Su8Q'
  },
  {
    project_name: '포트폴리오',
    imgs: [...portfolio_imgs],
    period: '23.12',
    desc: <></>,
    skills: <></>
  }
];
