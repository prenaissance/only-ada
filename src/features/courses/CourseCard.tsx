import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Rating, Box, Stack } from "@mui/material";
import { MdGroups } from "react-icons/md";

const CourseCard = ({ image, name, rating, userCount, onCardClick, index }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
      <Card sx={{ height: "145px", cursor: "pointer" }} onClick={() => onCardClick(index)}>
        <CardMedia image={image} title={name} />
        <CardContent>
          <Stack height="107px" justifyContent="space-between">
            <Box>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Ada Adams
              </Typography>
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
