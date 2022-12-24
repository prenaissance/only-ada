import { Grid, Card, CardContent, CardMedia, Typography, Rating, Box, Stack } from "@mui/material";
import { MdGroups } from "react-icons/md";

const CourseCard = ({ image, name, rating, userCount, onCardClick, index, price, mentor, token }) => {
  return (
    <Grid item xs={9} sm={6} md={4} lg={3} key={name}>
      <Card raised sx={{ height: "300px", cursor: "pointer" }} onClick={() => onCardClick(index)}>
        <CardMedia sx={{ height: "150px" }} image={image} title={name} />
        <CardContent>
          <Stack height="107px" justifyContent="space-between">
            <Box>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Stack flexDirection={"row"} justifyContent="space-between">
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {mentor}
                </Typography>
                <Typography gutterBottom variant="body1" color="green" fontWeight={"bold"}>
                  {price}$ / {token} tokens
                </Typography>
              </Stack>
            </Box>
            <Stack flexDirection={"row"} justifyContent="space-between">
              <Box
                width="30px"
                sx={{
                  width: "50px",
                  height: "24px",
                  borderRadius: "6px",
                  backgroundColor: "lightGray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                <MdGroups />
                <Typography variant="body2" color="text.secondary">
                  {userCount}
                </Typography>
              </Box>
              <Rating value={rating} readOnly />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseCard;
