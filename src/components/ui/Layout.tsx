import Navbar from "@components/ui/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          mt: {
            sm: "125px",
            md: "80px",
            xl: "100px",
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
