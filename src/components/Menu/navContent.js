const NavContent = (props) => {
  const { open } = props;
  return (
    <>
      <div className={`wrapper ${open ? 'open' : ''}`}>
      </div>
      <style jsx>{`
        .wrapper {
          position: fixed;
          top: 0;
          right: 0;
          background-color: white;
          width: 50vw;
          height: 80vh;
          overflow: hidden;
          transform-origin: top;
          transform: scaleY(0) translateZ(0);
          transition: transform 1.2s cubic-bezier(.77,0,.175,1) .4s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .wrapper.open {
          transform: scaleY(1) translateZ(0);
        }
      `}
      </style>
    </>
  )
}

export default NavContent;