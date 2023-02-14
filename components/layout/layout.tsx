import React from "react";
import Header from "./header";

export interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
