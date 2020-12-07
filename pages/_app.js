import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Theme from '../src/ui/Theme.js';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';

export const cache = createCache({ key: 'css' });

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  ReactGA.initialize('G-MR93H92LJR');

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id='G-MR93H92LJR'"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MR93H92LJR');
        `,
          }}
        />
        <title>Arc Development</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Component {...pageProps} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
