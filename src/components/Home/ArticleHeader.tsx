import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';
import { Link } from 'react-router-dom';
import ButterflyPointer from '../ButterflyPointer';

type Props = {
  name: string;
};

// 아티클 제목을 띄어줍니다

const ArticleHeader = ({ name }: Props) => {
  return (
    <header className="flex justify-center gap-1 mb-12 text-center mt-6">
      <ButterflyPointer />

      <div style={{ fontWeight: 900 }} className="text-5xl font-bold underline">
        {name.toUpperCase()}
      </div>
    </header>
  );
};

export default ArticleHeader;
