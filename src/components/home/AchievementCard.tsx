import Counter from "../global/Counter";
import { Card, CardContent } from "../ui/card";
import { Achievement } from "./HomepageData";

interface Props {
  achievement: Achievement
}

const AchievementCard: React.FC<Props> = ({ achievement }) => {
  return (
    <Card className={`border-0 text-center transition-all duration-300 hover:shadow-md rounded-xl`}>
      <CardContent className="pt-6">
        <div className={`text-2xl md:text-3xl font-bold flex justify-center items-center`}>
          {achievement.symbol == "$" && achievement.symbol}
          <Counter targetNumber={achievement.targetNumber} duration={1000} />
          {achievement.symbol !== "$" && achievement.symbol}
        </div>

        <p className="text-sm">{achievement.text}</p>
      </CardContent>
    </Card>
  )
}

export default AchievementCard