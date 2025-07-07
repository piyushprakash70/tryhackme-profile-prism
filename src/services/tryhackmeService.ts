
export interface User {
  username: string;
  avatar: string;
  joinDate: string;
  country: string;
  level: number;
}

export interface Stats {
  totalPoints: number;
  globalRank: number;
  countryRank: number;
  roomsCompleted: number;
  badgesEarned: number;
  streakDays: number;
}

export interface Room {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Insane';
  category: string;
  completed: boolean;
  completedDate?: string;
  points: number;
  progress: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  earnedDate: string;
}

export interface Ranking {
  global: number;
  country: number;
  percentile: number;
  nextRankPoints: number;
  currentRankName: string;
}

export interface Activity {
  action: string;
  timestamp: string;
  points?: number;
}

export interface UserData {
  user: User;
  stats: Stats;
  rooms: Room[];
  badges: Badge[];
  ranking: Ranking;
  recentActivity: Activity[];
}

// Simulated API call to TryHackMe
export const getUserData = async (): Promise<UserData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    user: {
      username: "CyberNinja42",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      joinDate: "2023-01-15",
      country: "United States",
      level: 12
    },
    stats: {
      totalPoints: 15420,
      globalRank: 2847,
      countryRank: 156,
      roomsCompleted: 47,
      badgesEarned: 23,
      streakDays: 15
    },
    rooms: [
      {
        id: "1",
        name: "Basic Pentesting",
        difficulty: "Easy",
        category: "Penetration Testing",
        completed: true,
        completedDate: "2024-01-05",
        points: 250,
        progress: 100
      },
      {
        id: "2",
        name: "Blue Team Fundamentals",
        difficulty: "Medium",
        category: "Blue Team",
        completed: true,
        completedDate: "2024-01-08",
        points: 400,
        progress: 100
      },
      {
        id: "3",
        name: "Advanced SQL Injection",
        difficulty: "Hard",
        category: "Web Application Security",
        completed: false,
        points: 600,
        progress: 65
      },
      {
        id: "4",
        name: "Buffer Overflow Prep",
        difficulty: "Medium",
        category: "Binary Exploitation",
        completed: true,
        completedDate: "2024-01-12",
        points: 500,
        progress: 100
      },
      {
        id: "5",
        name: "OWASP Top 10",
        difficulty: "Easy",
        category: "Web Application Security",
        completed: false,
        points: 300,
        progress: 20
      }
    ],
    badges: [
      {
        id: "1",
        name: "First Blood",
        description: "Complete your first room",
        icon: "🩸",
        rarity: "Common",
        earnedDate: "2023-01-16"
      },
      {
        id: "2",
        name: "Web Warrior",
        description: "Complete 10 web application security rooms",
        icon: "🕸️",
        rarity: "Rare",
        earnedDate: "2023-03-22"
      },
      {
        id: "3",
        name: "Streak Master",
        description: "Maintain a 30-day learning streak",
        icon: "🔥",
        rarity: "Epic",
        earnedDate: "2023-05-15"
      },
      {
        id: "4",
        name: "Binary Beast",
        description: "Master binary exploitation techniques",
        icon: "💀",
        rarity: "Legendary",
        earnedDate: "2023-08-10"
      }
    ],
    ranking: {
      global: 2847,
      country: 156,
      percentile: 92.3,
      nextRankPoints: 580,
      currentRankName: "Advanced Hacker"
    },
    recentActivity: [
      {
        action: "Completed 'Buffer Overflow Prep' room",
        timestamp: "2 hours ago",
        points: 500
      },
      {
        action: "Earned 'Binary Beast' badge",
        timestamp: "1 day ago"
      },
      {
        action: "Started 'Advanced SQL Injection' room",
        timestamp: "2 days ago"
      },
      {
        action: "Ranked up to Advanced Hacker",
        timestamp: "3 days ago"
      }
    ]
  };
};
