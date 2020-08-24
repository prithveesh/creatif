import Link from 'next/link';

const list = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Work',
    path: '/',
  },
  {
    name: 'Design Thought',
    path: '/',
  },
  {
    name: 'Capabilities',
    path: '/',
  },
  {
    name: 'Contact Us',
    path: '/',
  },
]
const MenuList = (props) => {
  const { open } = props;
  return (
    <>
      <div className={`wrapper ${open ? 'open' : ''}`}>
        <ul className="list">
          {list.map((elem) => (
            <li className="list-item-wrapper" key={elem.name}>
              <Link
                href={elem.path}
              >
                <a className="list-item">{elem.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .wrapper {
          position: fixed;
          top: 0;
          left: 0;
          background-color: white;
          width: 50vw;
          height: 80vh;
          overflow: hidden;
          transform-origin: top;
          transform: scaleY(0) translateZ(0);
          transition: transform 1.2s cubic-bezier(.77,0,.175,1) .2s;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .wrapper.open {
          transform: scaleY(1) translateZ(0);
        }

        .list {
          flex-direction: column;
          display: flex;
          margin-top: -5vh;
        }

        .list-item-wrapper {
          margin-bottom: 1vh;
          overflow: hidden;
          display: flex;
          position: relative;
        }

        .list-item {
          display: flex;
          font-family: 'Roboto', sans-serif;
          font-size: 3vw;
          opacity: 0;
          transform: translateY(105%) translateZ(0);
          transition: opacity .4s cubic-bezier(.165,.84,.44,1),transform 0s cubic-bezier(.165,.84,.44,1) .4s;
        }

        .open .list-item {
          opacity: 1;
          transform: translateZ(0);
        }
        .open .list-item:nth-child(1) {
          transition: transform .8s cubic-bezier(.165,.84,.44,1) 1.0s;
        }
        .open .list-item:nth-child(2) {
          transition: transform .8s cubic-bezier(.165,.84,.44,1) 1.1s;
        }
        .open .list-item:nth-child(3) {
          transition: transform .8s cubic-bezier(.165,.84,.44,1) 1.2s;
        }
        .open .list-item:nth-child(4) {
          transition: transform .8s cubic-bezier(.165,.84,.44,1) 1.3s;
        }
        .open .list-item:nth-child(5) {
          transition: transform .8s cubic-bezier(.165,.84,.44,1) 1.4s;
        }

        .list-item:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #000;
          transform-origin: left;
          transform: scaleX(0) translateZ(0);
          transition: transform .6s cubic-bezier(.165,.84,.44,1);
        }

        .list-item:hover:before {
          transform: scaleX(1) translateZ(0);
        }
      `}
      </style>
    </>
  )
}

export default MenuList;