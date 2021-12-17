import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

import s from "./Layout.module.css";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={s.app}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  // eslint-disable-next-line react/display-name
  return (props: T): JSX.Element => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
