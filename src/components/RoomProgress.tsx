
import { CheckCircle, Clock, Target } from 'lucide-react';
import { Room } from '../services/tryhackmeService';

interface RoomProgressProps {
  rooms: Room[];
}

const RoomProgress = ({ rooms }: RoomProgressProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Hard': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'Insane': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Target className="h-5 w-5 text-green-400 mr-2" />
        Room Progress
      </h3>
      
      <div className="space-y-4">
        {rooms.map((room) => (
          <div key={room.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {room.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-400" />
                )}
                <div>
                  <h4 className="text-white font-medium">{room.name}</h4>
                  <p className="text-gray-400 text-sm">{room.category}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(room.difficulty)}`}>
                  {room.difficulty}
                </span>
                <span className="text-yellow-400 font-medium">{room.points}pts</span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Progress</span>
                <span className="text-white">{room.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${room.progress}%` }}
                ></div>
              </div>
            </div>
            
            {room.completedDate && (
              <p className="text-xs text-gray-500">
                Completed on {new Date(room.completedDate).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomProgress;
