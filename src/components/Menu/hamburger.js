const backgroundColorDelay = 0.6;

const Hamburger = (props) => {
  const { open, black, toggleMenu } = props;
  return (
    <>
      <div className={`hamburger ${open ? 'open' : ''} ${black ? 'black' : ''}`} onClick={toggleMenu}>
        <span className='top' />
        <span className='bottom' />
      </div>

      <style jsx>{`
        .hamburger {
          position: fixed;
          top: 100px;
          left: 100px;
          width: 24px;
          height: 5px;
          display: block;
          cursor: pointer;
          padding: 2px;
          margin: 5px;
          z-index: 1;
        }

        .top, .bottom {
          display: block;
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          transform: translateZ(0);
          transition: transform .6s cubic-bezier(.165,.84,.44,1);
          pointer-events: none;
        }

        .top {
          top: 0;
        }

        .bottom {
          bottom: 0;
        }

        .open .top {
          transform: translateY(2px) rotate(45deg) translateZ(0);
        }

        .open .bottom {
          transform: translateY(-2px) rotate(-45deg) translateZ(0);
        }

        .top:after, .bottom:after,
        .top:before, .bottom:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: .99;
          background-color: #fff;
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(.165,.84,.44,1), background-color 0.1s ease ${backgroundColorDelay}s;
        }

        .open .top:after, .open .bottom:after,
        .open .top:before, .open .bottom:before {
          background-color: #000;
        }

        .top:after {
          transform-origin: left;
          transform: scaleX(0) translateZ(0);
        }
        
        .bottom:after {
          transform-origin: right;
          transform: scaleX(0) translateZ(0);
        }

        .top:before {
          transform-origin: right;
          transform: scaleX(1) translateZ(0);
          transition-delay: 0.2s, ${backgroundColorDelay}s;
        }
        
        .bottom:before {
          transform-origin: left;
          transform: scaleX(1) translateZ(0);
          transition-delay: 0.2s, ${backgroundColorDelay}s;
        }


        .hamburger:hover .top:after, .hamburger:hover .bottom:after {
          transform: scaleX(1) translateZ(0);
          transition-delay: 0.2s, ${backgroundColorDelay}s;
        }

        .hamburger:hover .top:before, .hamburger:hover .bottom:before {
          transform: scaleX(0) translateZ(0);
          transition-delay: 0s, ${backgroundColorDelay}s;
        }
      `}
      </style>
    </>
  )
};

export default Hamburger;
