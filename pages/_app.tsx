import React from 'react';
import { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from '@components/ThemeProvider';
import { PrimitivesDocsPage } from '@components/PrimitivesDocsPage';
import { ColorsDocsPage } from '@components/ColorsDocsPage';
import { handleUrlChange } from '@utils/analytics';
import { CssLibPreferenceProvider } from '@components/CssLibPreference';
import { ThemesDocsPage } from '@components/ThemesDocsPage';
import { Favicon } from '@components/Favicon';
import '@radix-ui/themes/styles.css';
import './styles.css';
import './syntax-highlighting.css';

function Pages({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/primitives/docs')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <PrimitivesDocsPage>
          <Favicon />
          <Component {...pageProps} />
        </PrimitivesDocsPage>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/primitives')) {
    return (
      <Theme accentColor="blue" grayColor="slate" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/colors/docs')) {
    return (
      <Theme accentColor="pink" grayColor="gray" className="radix-themes-custom-fonts">
        <ColorsDocsPage>
          <Favicon />
          <Component {...pageProps} />
        </ColorsDocsPage>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/colors')) {
    return (
      <Theme accentColor="pink" grayColor="gray" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/docs')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <ThemesDocsPage>
          <Favicon />
          <Component {...pageProps} />
        </ThemesDocsPage>
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes/playground')) {
    return (
      <Theme accentColor="indigo">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/themes')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/icons')) {
    return (
      <Theme accentColor="teal" grayColor="slate" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  if (router.pathname.startsWith('/blog')) {
    return (
      <Theme accentColor="indigo" className="radix-themes-custom-fonts">
        <Favicon />
        <Component {...pageProps} />
      </Theme>
    );
  }

  return (
    <Theme accentColor="indigo" className="radix-themes-custom-fonts">
      <Favicon />
      <Component {...pageProps} />
    </Theme>
  );
}

function App(props: AppProps) {
  useAnalytics();

  return (
    <CssLibPreferenceProvider>
      <ThemeProvider>
        <Pages {...props} />
      </ThemeProvider>
    </CssLibPreferenceProvider>
  );
}

export default App;

function useAnalytics() {
  React.useEffect(() => {
    Router.events.on('routeChangeComplete', handleUrlChange);
    return () => {
      Router.events.off('routeChangeComplete', handleUrlChange);
    };
  }, []);
}
