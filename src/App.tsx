import React from "react";
import styles from "./App.module.scss";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SubHeader />
      <Content />
    </div>
  );
}

export default App;
