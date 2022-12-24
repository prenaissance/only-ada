import CourseDialog from "@components/ui/CourseDialog";
import CourseCard from "@features/courses/CourseCard";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

const Courses: React.FC = () => {
  const courses = [
    {
      name: "React for Beginners",
      image: "https://picsum.photos/201/301",
      rating: 4,
      userCount: 10,
    },
    {
      name: "Advanced JavaScript",
      image: "https://picsum.photos/199/299",
      rating: 5,
      userCount: 10,
    },
    {
      name: "Introduction to TypeScript",
      image: "https://picsum.photos/201/300",
      rating: 4.5,
      userCount: 10,
    },
    {
      name: "AWS Cloud Practitioner",
      image: "https://picsum.photos/200/301",
      rating: 3.5,
      userCount: 10,
    },
    {
      name: "Data Structures and Algorithms",
      image: "https://picsum.photos/199/300",
      rating: 4,
      userCount: 10,
    },
    {
      name: "Machine Learning with Python",
      image: "https://picsum.photos/200/299",
      rating: 5,
      userCount: 10,
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(1);
  const [showDialog, setShowDialog] = useState(false);

  const onCardClick = (cardIndex: any) => {
    setSelectedCourse(cardIndex);
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: "1" }}>
        <Grid container spacing={2} sx={{ maxWidth: "80%", m: "0 auto", height: "100%" }}>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              name={course.name}
              rating={course.rating}
              userCount={course.userCount}
              onCardClick={onCardClick}
              index={index}
            />
          ))}
        </Grid>
      </Box>
      <CourseDialog showDialog={showDialog} handleDialogClose={handleDialogClose} course={courses[selectedCourse]} />
    </>
  );
};

export default Courses;
