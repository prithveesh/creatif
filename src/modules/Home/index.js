import Title from './components/Title';
import BG from './assets/bg.svg';

function Home() {
  return (
    <>
      <div className="home">
        <div className="title" >
          <Title />
        </div>
        <BG style={{ position: "fixed", bottom: 0, left: 0 }} />
        <section className="content">
          <div className="tag-line">
            <p className="yellow">We change the gut feeling</p>
            <p>of your audience towards your brand.</p>
          </div>
          <div className="detail">
            We are a creatively led Visual Communication Studio that helps brand elevate their image to make them stand out, connect and prosper.
            </div>
        </section>
      </div>
      <style jsx>{`
        .home {
          height: 100vh;
          width: 100vw;
          position: relative;
          background-color: #777777;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .title {
          margin-top: 76px;
        }
        .content {
          font-family: "serif";
          color: #fff;
          display: flex;
          flex-direction: column;
          width: 594px;
          margin-top: 120px;
        }
        .tag-line {
          font-weight: 500;
          font-size: 57px;
          text-align: left;
          line-height: 70px;
        }
        .yellow {
          color: #FFFF07
        }
        .detail {
          font-weight: 500;
          font-size: 18px;
          text-align: left;
          margin-top: 60px;
          font-style: italic;
        }
      `}</style>
    </>
  )
}

export default Home;