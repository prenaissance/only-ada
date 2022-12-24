import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

const ChallengeCard = ({ text, type, reward }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 445 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign={"center"} paddingBottom="20px">
            {type}
          </Typography>
          <Typography variant="body2" color="text.secondary" paddingBottom={"15px"}>
            {text}
          </Typography>
          <Typography variant="body1" color="orange" fontWeight={"bold"} textAlign={"center"} paddingBottom="20px">
            Reward: {reward} Tokens
          </Typography>
          <Button variant="outlined" color="error">
            Claim Reward
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChallengeCard;
