import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const pages = [
  "Chatbot (Regex)",
  "Chatbot (Gemini)",
  "Sentiment Analysis",
  "Classification",
  "About",
  "Help",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#22212C" }}>
      {" "}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#92FFFF",
              textDecoration: "none",
            }}
          >
            Techno AI App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <IoMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={"/" + page.toLowerCase()}
                  style={{ textDecoration: "none", textTransform: "none" }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        marginY: 0,
                        color: "black",
                        display: "block",
                      }}
                      style={{ textTransform: "none" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Button>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3.5,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "#92FFFF",
              textDecoration: "none",
            }}
          >
            Techno AI App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(
              (page) =>
                page !== "Home" && (
                  <Link
                    to={"/" + page.toLowerCase()}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "#D4CCFF", display: "block" }}
                      style={{ textTransform: "none" }}
                    >
                      {page}
                    </Button>
                  </Link>
                )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
