import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    /* todos os elementos dentro do provider, terao acesso aos dados daquele contexto */
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

/* 
Back-end -> Next.js -> Front-end
ao declarar um function com o nome getServerSideProps em uma page, eh possivel manipular quais dados 
sao passados da camada do next, para o front-end. O next.js eh um back-end em nodejs

Podemos fazer chamadas a api dentro do getServerSideProps, e utiliza-los no componente, a vantagem de
fazer isso, inves de fazer direto no componente, eh que assim ele vai aparecer em um motor de busca, 
ex: google, pois esses motores de busca nao aguardam a chamada a api no componente ser finalizada.

*/
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada api
  // const user = {
  //   level: 1,
  //   currentExperience: 50,
  //   challengesCompleted: 2,
  // };

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), /* converter pois vem como string dos cookies */
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
