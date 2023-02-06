import staticLogo1 from "../../assets/staticLogo1.png";
import staticLogo2 from "../../assets/staticLogo2.png";
import styles from "./SubHeader.module.scss";

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <img src={staticLogo1} alt="logo" />
      <div className={styles.subHeader__inner}>
        <span>ФК «РОДИНА»</span>
        <span>СТАТИСТИКА ИГРОКОВ</span>
        <span>ФК «ВОЛГА»</span>
      </div>
      <img src={staticLogo2} alt="logo" />
    </div>
  );
};

export default SubHeader;
