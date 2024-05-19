import { Container } from "@mui/material";
import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Root = (): ReactElement => {
  return (
    <Container maxWidth={false} disableGutters>
      <Outlet />
    </Container>
  );
};

export default Root;
