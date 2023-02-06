import styles from "./Content.module.scss";
import Table from "../Table/Table";
import { TABLE_DATA1, TABLE_DATA2 } from "../../consts/table.data";

const Content = () => {
  const data = [TABLE_DATA1, TABLE_DATA2];
  return (
    <div className={styles.content}>
      {data.map((table, index) => (
        <Table key={index} table={table} />
      ))}
    </div>
  );
};

export default Content;
