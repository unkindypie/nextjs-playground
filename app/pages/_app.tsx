import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import themeDark from 'lib/themes/dark';
import themeLight from 'lib/themes/light';

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // этот компонент маунтится уже на стороне клиента.
    // (т.к. в данном случае сср используется для начального рендера страницы)
    // в дальнейшем все перерендеривается на стороне клиента( вот здесь)
    // и отрендеренный на сервере css заменяется css от клиента
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={false ? themeDark : themeLight}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
