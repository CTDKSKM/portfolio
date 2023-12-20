import React, { useEffect, useState } from 'react';
import Guide from './Guide';

type Props = {};

const VisitedChecker = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (!window.localStorage.getItem('visited')) {
      setIsOpen(true);
      window.localStorage.setItem('visited', 'true');
    }
  }, []);
  return <>{isOpen && <Guide close={closeModal} />}</>;
};

export default VisitedChecker;
