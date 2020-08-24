import Menu from '../src/components/Menu/menu';
import resetCSS from '../src/css/reset.css';
import baseCSS from '../src/css/base.css';

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <style jsx global>{resetCSS}</style>
      <style jsx global>{baseCSS}</style>
      <Menu className="menu" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;