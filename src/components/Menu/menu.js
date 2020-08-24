import { useState, useCallback } from 'react';

import MenuList from './menuList';
import NavContent from './navContent';
import Hamburger from './hamburger';

function Menu(props) {
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="menu">
      <Hamburger open={open} toggleMenu={toggleMenu} />
      <MenuList open={open} />
      <NavContent open={open} />
      <style jsx>{`
        .menu {
          z-index: 10;
          position: fixed;
          top:0;
          left:0;
        }
      `}</style>
    </div>
  );
}

export default Menu;
