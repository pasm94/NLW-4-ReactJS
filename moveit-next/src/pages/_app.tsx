import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    /* 
    todos os elementos dentro do provider (component, que ali eh todo o app em si),
    terao acesso aos dados daquele contexto
    */
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
