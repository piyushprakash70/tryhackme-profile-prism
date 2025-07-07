
import { User, MapPin, Calendar, Star } from 'lucide-react';
import { User as UserType } from '../services/tryhackmeService';

interface UserProfileProps {
  user: UserType;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 mb-8">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-20 h-20 rounded-full border-2 border-green-400"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {user.level}
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">{user.username}</h2>
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{user.country}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Joined {new Date(user.joinDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">Level {user.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
