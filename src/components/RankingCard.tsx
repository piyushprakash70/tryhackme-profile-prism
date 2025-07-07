
import { Crown, TrendingUp, Target } from 'lucide-react';
import { Ranking } from '../services/tryhackmeService';

interface RankingCardProps {
  ranking: Ranking;
}

const RankingCard = ({ ranking }: RankingCardProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Crown className="h-5 w-5 text-yellow-400 mr-2" />
        Your Ranking
      </h3>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-1">
            {ranking.currentRankName}
          </div>
          <p className="text-gray-400 text-sm">Current Rank</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-blue-400">#{ranking.global.toLocaleString()}</div>
            <p className="text-xs text-gray-400">Global</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-green-400">#{ranking.country}</div>
            <p className="text-xs text-gray-400">Country</p>
          </div>
        </div>
        
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Next Rank</span>
            <span className="text-purple-400">{ranking.nextRankPoints} pts needed</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
              style={{ width: `${Math.min((1000 - ranking.nextRankPoints) / 1000 * 100, 100)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm">Top {ranking.percentile}% globally</span>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
