
import { useState, useEffect } from 'react';
import { Shield, Trophy, Target, Users, TrendingUp, Calendar, Clock, Award } from 'lucide-react';
import UserProfile from '../components/UserProfile';
import BadgeCollection from '../components/BadgeCollection';
import RoomProgress from '../components/RoomProgress';
import RankingCard from '../components/RankingCard';
import StatsOverview from '../components/StatsOverview';
import { getUserData, type UserData } from '../services/tryhackmeService';

const Index = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchUserData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading TryHackMe Data...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="mx-auto h-16 w-16 text-red-400 mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Connection Failed</h1>
          <p className="text-gray-300">Unable to fetch TryHackMe data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-green-400" />
              <h1 className="text-2xl font-bold text-white">TryHackMe Tracker</h1>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last Updated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Section */}
        <UserProfile user={userData.user} />

        {/* Stats Overview */}
        <StatsOverview stats={userData.stats} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <RoomProgress rooms={userData.rooms} />
            <BadgeCollection badges={userData.badges} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <RankingCard ranking={userData.ranking} />
            
            {/* Recent Activity */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {userData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <Trophy className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
