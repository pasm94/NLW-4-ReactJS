import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pasm94.png" alt="PASM94" />
      <div>
        <strong>Paulo A. S. Müller</strong>
        <p>
          {/* arquivos na pasta public, sao publicos automaticamente */}
          <img src="icons/level.svg" alt="Level" />
          {level}
        </p>
      </div>
    </div>
  );
}
