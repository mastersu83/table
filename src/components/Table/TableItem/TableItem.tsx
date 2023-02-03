import React, { FC } from "react";
import styles from "./TableItem.module.scss";
import { ITableItemData } from "../../../interfaces/tableData.interface";

const TableItem: FC<{
  item: ITableItemData;
  bg: boolean;
  statistic?: boolean;
}> = ({ item, bg, statistic }) => {
  const {
    actions,
    luckyActions,
    fouls,
    foulsOn,
    goals,
    goalsPass,
    minutes,
    name,
    coefficient,
    offsides,
    redCard,
    yellowCard,
    shots,
    shotsOnTarget,
    number,
    loss,
    lossOnOwn,
    actionsOnPenalty,
    returnBallOpponentHalf,
    returnBall,
    poorBall,
    scoringChancesComplete,
    scoringChancesCreate,
    scoringChances,
  } = item;

  return (
    <div
      className={`${styles.tableItem} ${bg ? styles.tableItem__grayBg : ""} ${
        statistic ? styles.statistic : styles.actions
      }`}
    >
      <span className={styles.tableItem__number}>{number}</span>
      <span className={styles.tableItem__name}>{name}</span>
      <span>{minutes}'</span>
      {statistic ? (
        <>
          <span>{goals}</span>
          <span>{goalsPass}</span>
          <span>
            {actions}/{luckyActions}
          </span>
          <div>
            <span>
              {shots}/{shotsOnTarget}
            </span>
            <span>0%</span>
          </div>
          <span>{coefficient}</span>
          <span>
            {fouls}/{foulsOn}
          </span>
          <span>{offsides}</span>
          {statistic && (
            <span>
              {yellowCard}/{redCard}
            </span>
          )}
        </>
      ) : (
        <>
          <span>{actions}</span>
          <span>{actionsOnPenalty}</span>
          <span>
            {scoringChances}/{scoringChancesComplete}
          </span>
          <span>{scoringChancesCreate}</span>
          <span>
            {loss}/{lossOnOwn}
          </span>
          <span>
            {returnBall}/{returnBallOpponentHalf}
          </span>
          <span>{poorBall}</span>
        </>
      )}
    </div>
  );
};

export default TableItem;
