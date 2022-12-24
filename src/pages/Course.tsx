import Comment from "@components/ui/Comment";
import GridContainer from "@components/ui/GridContainer";
import VideoPlayer from "@components/VideoPlayer";
import { TextField } from "@mui/material";

const comments = [
  {
    author: "John Doe",
    text: "This is an amazing tutorial! I learned so much from it.",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    author: "Jane Smith",
    text: "I had some trouble understanding the concepts at first, but the explanations in this video were very clear.",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    author: "Bob Johnson",
    text: "I love how the instructor breaks down the steps and provides real-world examples.",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    author: "Alice Williams",
    text: "This is my first time trying out this technology and I feel much more confident now after watching this tutorial.",
    logoUrl: "https://via.placeholder.com/150",
  },
];

type Props = {};

const Course = (props: Props) => {
  return (
    <GridContainer display="flex" flexDirection="column">
      <VideoPlayer />
      <div className="flex flex-col gap-y-3 w-full justify-center sm:mx-4 lg:mx-32 my-4">
        <div className="flex flex-col gap-y-3 text-orange">
          <h1 className="text-3xl font-bold text-center">Introduction to React</h1>
          <p className="text-base font-medium">
            In this tutorial, we will learn the basics of React. We will start with the fundamentals of React and then
            move on to more advanced concepts.
          </p>
        </div>
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment {...comment} />
          </li>
        ))}
        <TextField fullWidth placeholder="Comment" />
      </div>
    </GridContainer>
  );
};

export default Course;
