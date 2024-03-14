import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Box, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to={"/forms"}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              My Forms
            </Button>
            <Button
              component={Link}
              to={"/submissions"}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Submissions
            </Button>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
}
