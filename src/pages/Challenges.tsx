import ChallengeCard from "@components/ui/ChallengeCard";
import GridContainer from "@components/ui/GridContainer";
import { Grid } from "@mui/material";

const challenges = [
  {
    type: "daily",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    reward: 30,
  },
  {
    type: "weekly",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    reward: 50,
  },
  {
    type: "monthly",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    reward: 100,
  },
];

const Challenges = () => {
  return (
    <GridContainer spacing={2}>
      {challenges.map((challenge, index) => (
        <Grid key={index} item xs={4}>
          <ChallengeCard type={challenge.type} text={challenge.text} reward={challenge.reward} />
        </Grid>
      ))}
    </GridContainer>
  );
};

export default Challenges;
