
import { Trophy, Target, Award, Flame, Users, TrendingUp } from 'lucide-react';
import { Stats } from '../services/tryhackmeService';

interface StatsOverviewProps {
  stats: Stats;
}

const StatsOverview = ({ stats }: StatsOverviewProps) => {
  const statCards = [
    {
      title: 'Total Points',
      value: stats.totalPoints.toLocaleString(),
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20'
    },
    {
      title: 'Global Rank',
      value: `#${stats.globalRank.toLocaleString()}`,
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    },
    {
      title: 'Rooms Completed',
      value: stats.roomsCompleted.toString(),
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20'
    },
    {
      title: 'Badges Earned',
      value: stats.badgesEarned.toString(),
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20'
    },
    {
      title: 'Learning Streak',
      value: `${stats.streakDays} days`,
      icon: Flame,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20'
    },
    {
      title: 'Country Rank',
      value: `#${stats.countryRank}`,
      icon: TrendingUp,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/20'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {statCards.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className={`${stat.bgColor} backdrop-blur-sm rounded-xl border ${stat.borderColor} p-4 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-2">
              <IconComponent className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
