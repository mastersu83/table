import { FC } from "react";
import styles from "./TableItem.module.scss";
import { ITableItemData } from "../../../interfaces/tableData.interface";

const TableItem: FC<{
  item: ITableItemData;
  bg: boolean;
  statistic?: boolean;
}> = ({ item, bg, statistic }) => {
  return (
    <div
      className={`${styles.tableItem} ${bg ? styles.tableItem__grayBg : ""} ${
        statistic ? styles.statistic : styles.actions
      }`}
    >
      <span className={styles.tableItem__number}>{item.number}</span>
      <span className={styles.tableItem__name}>{item.name}</span>
      <span>{item.minutes}'</span>
      {statistic ? (
        <>
          <span>{item.goals}</span>
          <span>{item.goalsPass}</span>
          <span>
            {item.actions}/{item.luckyActions}
          </span>
          <div>
            <span>
              {item.shots}/{item.shotsOnTarget}
            </span>
            <span>0%</span>
          </div>
          <span>{item.coefficient}</span>
          <span>
            {item.fouls}/{item.foulsOn}
          </span>
          <span>{item.offsides}</span>
          {statistic && (
            <span>
              {item.yellowCard}/{item.redCard}
            </span>
          )}
        </>
      ) : (
        <>
          <span>{item.actions}</span>
          <span>{item.actionsOnPenalty}</span>
          <span>
            {item.scoringChances}/{item.scoringChancesComplete}
          </span>
          <span>{item.scoringChancesCreate}</span>
          <span>
            {item.loss}/{item.lossOnOwn}
          </span>
          <span>
            {item.returnBall}/{item.returnBallOpponentHalf}
          </span>
          <span>{item.poorBall}</span>
        </>
      )}
    </div>
  );
};

export default TableItem;
