
import { useState, useEffect } from 'react';
import { Shield, Trophy, Target, Users, TrendingUp, Calendar, Clock, Award, Search } from 'lucide-react';
import UserProfile from '../components/UserProfile';
import BadgeCollection from '../components/BadgeCollection';
import RoomProgress from '../components/RoomProgress';
import RankingCard from '../components/RankingCard';
import StatsOverview from '../components/StatsOverview';
import { getUserData, type UserData } from '../services/tryhackmeService';

const Index = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchUsername: string) => {
    if (!searchUsername.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await getUserData(searchUsername.trim());
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setError(`User "${searchUsername}" not found. Please check the username and try again.`);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(username);
  };

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

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Search className="h-5 w-5 text-green-400 mr-2" />
            Search TryHackMe User
          </h2>
          
          <form onSubmit={handleSubmit} className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter TryHackMe username..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* User Data Display */}
        {userData ? (
          <>
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
          </>
        ) : (
          !error && (
            <div className="text-center py-16">
              <Shield className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Search for a TryHackMe User</h2>
              <p className="text-gray-300">Enter a username above to view their progress and achievements</p>
            </div>
          )
        )}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <Trophy className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
