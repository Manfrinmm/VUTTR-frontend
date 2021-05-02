import React from "react";

import { Container } from "./styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
