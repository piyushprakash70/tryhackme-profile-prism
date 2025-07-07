
import { Award } from 'lucide-react';
import { Badge } from '../services/tryhackmeService';

interface BadgeCollectionProps {
  badges: Badge[];
}

const BadgeCollection = ({ badges }: BadgeCollectionProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-gray-400 bg-gray-400/10';
      case 'Rare': return 'border-blue-400 bg-blue-400/10';
      case 'Epic': return 'border-purple-400 bg-purple-400/10';
      case 'Legendary': return 'border-yellow-400 bg-yellow-400/10';
      default: return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Award className="h-5 w-5 text-green-400 mr-2" />
        Badge Collection
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`${getRarityColor(badge.rarity)} border rounded-lg p-4 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{badge.icon}</div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{badge.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{badge.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${getRarityColor(badge.rarity)} border`}>
                    {badge.rarity}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(badge.earnedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeCollection;
