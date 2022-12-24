import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineGeneratingTokens } from "react-icons/md";

const navabar_links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/courses",
    text: "Courses",
  },
  {
    path: "/challenges",
    text: "Challenges",
  },
  {
    path: "/",
    text: "Link4",
  },
];

const Navbar = () => {
  return (
    <div className="absolute top-0 inset-x-0 h-16 bg-medium_blue">
      <Grid container spacing={2} sx={{ maxWidth: "80%", m: "0 auto", height: "100%" }}>
        <Grid item xs={7}>
          <div className="flex justify-between items-center text-lg">
            <Link to="/">
              <img className="h-10 w-30" src={"/logos/onlyAdaWhite.png"}></img>
            </Link>
            {navabar_links.map(({ text, path }) => (
              <Link to={path} key={text} className="no-underline text-dark_blue font-bold hover:text-dark_blue">
                {text}
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item sx={{ marginLeft: "auto", marginTop: "-4px" }}>
          <div className="flex items-center gap-4">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MdOutlineGeneratingTokens className="w-8 h-8 text-orange mr-1" />
              <Typography sx={{ color: "#F8A061", fontWeight: "700" }}>400</Typography>
            </Box>
            <Link to="/" className="no-underline text-dark_blue hover:text-dark_blue">
              <AiOutlineUser className="w-9 h-9" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
