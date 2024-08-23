import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

import './Header.css';

// header component

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav>
          <Button className={"home-redirect"} onClick={() => navigate('/')}> RISC-V Cache </Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
