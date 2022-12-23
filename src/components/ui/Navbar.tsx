import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

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
    path: "/",
    text: "Link3",
  },
  {
    path: "/",
    text: "Link4",
  },
];

const Navbar = () => {
  return (
    <div className="absolute top-0 inset-x-0 h-16 bg-beige">
      <Grid container spacing={2} sx={{ maxWidth: "80%", m: "0 auto", height: "100%" }}>
        <Grid item xs={7}>
          <div className="flex justify-between items-center text-lg text-blue">
            {navabar_links.map(({ text, path }) => (
              <Link to={path} key={text} className="no-underline text-blue hover:text-blue">
                {text}
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item xs={1} sx={{ marginLeft: "auto" }}>
          <Link to="/" className="no-underline text-blue hover:text-blue">
            <AiOutlineUser className="w-9 h-9" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
