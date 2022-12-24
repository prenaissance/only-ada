import CourseDialog from "@components/ui/CourseDialog";
import CourseCard from "@features/courses/CourseCard";
import CategoryFilter from "@components/ui/CategoryFilter";
import { Grid } from "@mui/material";
import { useState } from "react";
import GridContainer from "@components/ui/GridContainer";

const Courses: React.FC = () => {
  const courses = [
    {
      name: "Caricature Tutorial",
      image: "https://picsum.photos/201/301",
      rating: 4,
      userCount: 130,
      price: 20,
      token: 170,
      mentor: "Ada Addams",
    },
    {
      name: "Outside workout",
      image: "https://picsum.photos/199/299",
      rating: 5,
      userCount: 210,
      price: 22,
      token: 220,
      mentor: "Johnny Does",
    },
    {
      name: "Introduction to Sculpture",
      image: "https://picsum.photos/201/300",
      rating: 3.5,
      userCount: 50,
      price: 13,
      token: 100,
      mentor: "Lori Impus",
    },
    {
      name: "Athlethic workout",
      image: "https://picsum.photos/200/301",
      rating: 4,
      userCount: 80,
      price: 20,
      token: 170,
      mentor: "Boris Tinab",
    },
    {
      name: "Data Structures and Algorithms",
      image: "https://picsum.photos/199/300",
      rating: 4,
      userCount: 10,
      price: 20,
      token: 150,
      mentor: "Ada Addams",
    },
    {
      name: "Mental Health tutorial",
      image: "https://picsum.photos/200/299",
      rating: 2,
      userCount: 41,
      price: 26,
      token: 23,
      mentor: "Sandu Vosta",
    },
    {
      name: "Meditation course",
      image: "https://picsum.photos/200/298",
      rating: 2,
      userCount: 41,
      price: 26,
      token: 23,
      mentor: "Lorem Ipsum",
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
    <GridContainer>
      <Grid item xs={3}>
        <CategoryFilter />
      </Grid>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          image={course.image}
          name={course.name}
          rating={course.rating}
          userCount={course.userCount}
          onCardClick={onCardClick}
          index={index}
          price={course.price}
          mentor={course.mentor}
          token={course.token}
        />
      ))}
      <CourseDialog showDialog={showDialog} handleDialogClose={handleDialogClose} course={courses[selectedCourse]} />
    </GridContainer>
  );
};

export default Courses;
