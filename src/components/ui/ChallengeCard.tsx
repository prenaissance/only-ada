import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

type Props = {
  text: string | JSX.Element;
  type: string;
  reward: number;
};

const ChallengeCard = ({ text, type, reward }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, height: 445 }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Typography gutterBottom variant="h4" component="div" textAlign={"center"} paddingBottom="20px">
            {type}
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingBottom={"15px"}>
            {text}
          </Typography>
          <Typography variant="body1" color="orange" fontWeight={"bold"} textAlign={"center"} paddingBottom="20px">
            Reward: {reward} Tokens
          </Typography>
          <Button variant="outlined" sx={{ mt: "auto" }} fullWidth color="error">
            Claim Reward
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChallengeCard;
