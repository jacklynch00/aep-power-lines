import {ChakraProvider} from "@chakra-ui/react";
import {Global, css} from "@emotion/react";

import {AuthProvider} from "@/lib/auth";

const GlobalStyle = ({children}) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          textArea {
            color: #000;
          }
          div.kMGxMA {
            color: #000;
          }
        `}
      >
        {children}
      </Global>
    </>
  );
};

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider resetCSS>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
