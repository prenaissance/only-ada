import { Box, Grid, GridProps } from "@mui/material";

type Props = GridProps;

const GridContainer = ({ children, ...rest }: Props) => {
  return (
    <>
      <Box
        sx={{
          mt: {
            sm: "125px",
            md: "80px",
            xl: "100px",
          },
        }}
      />
      <Box sx={{ flexGrow: "1" }}>
        <Grid container spacing={2} sx={{ maxWidth: "80%", m: "0 auto", height: "100%" }}>
          {children}
        </Grid>
      </Box>
    </>
  );
};

export default GridContainer;
