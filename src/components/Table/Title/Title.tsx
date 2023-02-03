import React, { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <span>{title}</span>
    </>
  );
};

export default Title;
