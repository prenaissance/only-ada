import ChallengeCard from "@components/ui/ChallengeCard";
import GridContainer from "@components/ui/GridContainer";
import { Grid } from "@mui/material";

const challenges = [
  {
    type: "Daily",
    text: (
      <ul>
        <li className="pt-2">
          Daily outdoor challenge: Get outside and enjoy the benefits of nature by taking a daily walk, bike ride, or
          hike.
        </li>
        <li className="pt-2">
          Daily hydration challenge: Make sure to drink a certain number of glasses of water each day to stay hydrated
          and support overall health.
        </li>
        <li className="pt-2">
          Daily hydration challenge: Make sure to drink a certain number of glasses of water each day to stay hydrated
          and support overall health.
        </li>
      </ul>
    ),
    reward: 30,
  },
  {
    type: "Weekly",
    text: (
      <ul>
        <li className="pt-2">
          Color challenge: Choose a specific color or color palette to use for all of your paintings in a week. This can
          be a great way to experiment with color and push your creative boundaries.
        </li>
        <li className="pt-2">
          Technique challenge: Try a new painting technique each week, such as working with watercolors, acrylics, oils,
          or mixed media.
        </li>
        <li className="pt-2">
          Prompt challenge: Use a painting prompt or theme each week to inspire your work. You might find prompts online
          or create your own based on your interests and goals.
        </li>
      </ul>
    ),
    reward: 50,
  },
  {
    type: "Monthly",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
