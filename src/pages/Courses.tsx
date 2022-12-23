import { Grid, Card, CardContent, CardMedia, Typography, Rating, Box } from "@mui/material";

const Courses: React.FC = () => {
  const courses = [
    {
      name: "React for Beginners",
      image: "/images/react-beginners.jpg",
      rating: 4,
    },
    {
      name: "Advanced JavaScript",
      image: "/images/advanced-javascript.jpg",
      rating: 5,
    },
    {
      name: "Introduction to TypeScript",
      image: "/images/typescript-intro.jpg",
      rating: 4.5,
    },
    {
      name: "AWS Cloud Practitioner",
      image: "/images/aws-cloud-practitioner.jpg",
      rating: 3.5,
    },
    {
      name: "Data Structures and Algorithms",
      image: "/images/data-structures.jpg",
      rating: 4,
    },
    {
      name: "Machine Learning with Python",
      image: "/images/machine-learning-python.jpg",
      rating: 5,
    },
  ];

  return (
    <Box sx={{ flexGrow: "1", marginTop: "54px" }}>
      <Grid container spacing={2} sx={{ maxWidth: "80%", m: "0 auto", height: "100%" }}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.name}>
            <Card sx={{ height: "145px" }}>
              <CardMedia image={course.image} title={course.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.name}
                </Typography>
                <Rating value={course.rating} readOnly />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
