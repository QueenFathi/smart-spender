import Counter from "../global/Counter";
import { Card, CardContent } from "../ui/card";
import { Achievement } from "./HomepageData";

interface Props {
  achievement: Achievement
}

const AchievementCard: React.FC<Props> = ({ achievement }) => {
  return (
    <Card className={`text-center border-2 border-${achievement.color}-100 hover:border-${achievement.color}-500 transition-all duration-300 hover:shadow-lg`}>
      <CardContent className="pt-6">
        <div className={`text-3xl font-bold text-${achievement.color}-500 mb-2 flex justify-center items-center`}>{achievement.symbol == "$" && achievement.symbol}<Counter targetNumber={achievement.targetNumber} duration={1000} />{achievement.symbol !== "$" && achievement.symbol}</div>
        <p className="text-sm text-gray-600">{achievement.text}</p>
      </CardContent>
    </Card>
  )
}

export default AchievementCard