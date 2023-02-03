import React, { FC } from "react";
import styles from "./Table.module.scss";
import TableItem from "./TableItem/TableItem";
import Title from "./Title/Title";
import { ITableData } from "../../consts/table.data";

const Table: FC<{ table: ITableData }> = ({ table }) => {
  const {
    statisticsTitle,
    actionsTitle,
    tableTitleStatistics,
    tableTitleActions,
    players,
  } = table;
  return (
    <div className={styles.tableBox}>
      <div className={styles.table}>
        <p className={styles.title}>{statisticsTitle}</p>
        <div className={styles.tableList}>
          <div className={`${styles.tableList__titleBox} ${styles.statistic}`}>
            {tableTitleStatistics.map((t) => (
              <Title key={t} title={t} />
            ))}
          </div>
          {players.map((i, index) => (
            <TableItem key={i.id} item={i} bg={index % 2 !== 0} statistic />
          ))}
        </div>
      </div>
      <div className={styles.table}>
        <p className={styles.title}>{actionsTitle}</p>
        <div className={styles.tableList}>
          <div className={`${styles.tableList__titleBox} ${styles.actions}`}>
            {tableTitleActions.map((t) => (
              <Title key={t} title={t} />
            ))}
          </div>
          {players.map((i, index) => (
            <TableItem key={i.id} item={i} bg={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
