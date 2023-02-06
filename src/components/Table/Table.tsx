import { FC } from "react";
import styles from "./Table.module.scss";
import TableItem from "./TableItem/TableItem";
import { ITableData } from "../../consts/table.data";

const Table: FC<{ table: ITableData }> = ({ table }) => {
  return (
    <div className={styles.tableBox}>
      <div className={styles.table}>
        <p className={styles.title}>{table.statisticsTitle}</p>
        <div className={styles.tableList}>
          <div className={`${styles.tableList__titleBox} ${styles.statistic}`}>
            {table.tableTitleStatistics.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {table.players.map((i, index) => (
            <TableItem key={i.id} item={i} bg={index % 2 !== 0} statistic />
          ))}
        </div>
      </div>
      <div className={styles.table}>
        <p className={styles.title}>{table.actionsTitle}</p>
        <div className={styles.tableList}>
          <div className={`${styles.tableList__titleBox} ${styles.actions}`}>
            {table.tableTitleActions.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {table.players.map((i, index) => (
            <TableItem key={i.id} item={i} bg={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
