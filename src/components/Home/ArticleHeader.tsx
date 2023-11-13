import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';

type Props = {
  name: string;
};

// 아티클 제목을 띄어줍니다

const ArticleHeader = ({ name }: Props) => {
  return (
    <header className="flex justify-center gap-1 mb-12 text-center mt-6">
      <div
        onClick={() => scrollToSection(name.toLowerCase())}
        style={{ transition: 'transform 0.3s ease' }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'rotate(-25deg)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
      >
        <img
          src={process.env.PUBLIC_URL + '/linkbutterfly.svg'}
          alt="lightning"
          width="24"
          height="24"
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div style={{ fontWeight: 900 }} className="text-5xl font-bold underline">
        {name.toUpperCase()}
      </div>
    </header>
  );
};

export default ArticleHeader;
