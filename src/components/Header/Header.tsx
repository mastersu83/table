import team1logo from "../../assets/team1logo.png";
import team2logo from "../../assets/team2logo.png";
import smallLogo1 from "../../assets/smallLogo1.png";
import smallLogo2 from "../../assets/smallLogo2.png";
import melBet from "../../assets/MelbetLogo.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={team1logo} alt="logo" />
      <div className={styles.headerInner}>
        <div className={styles.leftSide}>
          <div className={styles.headerTitle}>
            <h1>Аналитический хаб РПЛ</h1>
            <p>Отчёт по матчу</p>
          </div>
          <div className={styles.result}>
            <div className={styles.team}>
              <span>РОДИНА</span>
              <img src={smallLogo1} alt="" />
            </div>
            <span className={styles.score}>2:1</span>
            <div className={styles.team}>
              <span>ВОЛГА</span>
              <img src={smallLogo2} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={melBet} alt="melbet" />
          <span>Россия. Мелбет Первая лига. Тур 17</span>
          <span>2022/2023</span>
          <span>06.11.2022</span>
        </div>
      </div>
      <img src={team2logo} alt="logo" />
    </header>
  );
};

export default Header;
