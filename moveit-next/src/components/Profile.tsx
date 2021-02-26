import styles from "../styles/components/Profile.module.css";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pasm94.png" alt="PASM94" />
      <div>
        <strong>Paulo A. S. Müller</strong>
        <p>
          {/* arquivos na pasta public, sao publicos automaticamente */}
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
