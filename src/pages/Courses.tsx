import CourseDialog from "@components/ui/CourseDialog";
import CourseCard from "@features/courses/CourseCard";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

const Courses: React.FC = () => {
  const courses = [
    {
      name: "React for Beginners",
      image: "/images/react-beginners.jpg",
      rating: 4,
      userCount: 10,
    },
    {
      name: "Advanced JavaScript",
      image: "/images/advanced-javascript.jpg",
      rating: 5,
      userCount: 10,
    },
    {
      name: "Introduction to TypeScript",
      image: "/images/typescript-intro.jpg",
      rating: 4.5,
      userCount: 10,
    },
    {
      name: "AWS Cloud Practitioner",
      image: "/images/aws-cloud-practitioner.jpg",
      rating: 3.5,
      userCount: 10,
    },
    {
      name: "Data Structures and Algorithms",
      image: "/images/data-structures.jpg",
      rating: 4,
      userCount: 10,
    },
    {
      name: "Machine Learning with Python",
      image: "/images/machine-learning-python.jpg",
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
