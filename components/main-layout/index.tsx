import React from "react";
import styles from "./index.module.css";

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${styles.mainLayout} ${className}`}>{children}</div>;
};

export default MainLayout;
