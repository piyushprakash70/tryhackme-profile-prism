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

// Sample user data for different usernames
const sampleUsers: Record<string, UserData> = {
  "piyushprakash70": {
    user: {
      username: "piyushprakash70",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      joinDate: "2023-05-20",
      country: "India",
      level: 8
    },
    stats: {
      totalPoints: 8750,
      globalRank: 12543,
      countryRank: 892,
      roomsCompleted: 28,
      badgesEarned: 15,
      streakDays: 7
    },
    rooms: [
      {
        id: "1",
        name: "Introduction to Penetration Testing",
        difficulty: "Easy",
        category: "Penetration Testing",
        completed: true,
        completedDate: "2023-06-01",
        points: 200,
        progress: 100
      },
      {
        id: "2",
        name: "Linux Fundamentals Part 1",
        difficulty: "Easy",
        category: "Linux",
        completed: true,
        completedDate: "2023-06-15",
        points: 300,
        progress: 100
      },
      {
        id: "3",
        name: "Web Application Security",
        difficulty: "Medium",
        category: "Web Application Security",
        completed: false,
        points: 450,
        progress: 40
      },
      {
        id: "4",
        name: "Network Services",
        difficulty: "Medium",
        category: "Network Security",
        completed: true,
        completedDate: "2023-07-10",
        points: 400,
        progress: 100
      }
    ],
    badges: [
      {
        id: "1",
        name: "Welcome Badge",
        description: "Welcome to TryHackMe!",
        icon: "🎉",
        rarity: "Common",
        earnedDate: "2023-05-20"
      },
      {
        id: "2",
        name: "Linux Learner",
        description: "Complete 5 Linux rooms",
        icon: "🐧",
        rarity: "Rare",
        earnedDate: "2023-07-01"
      },
      {
        id: "3",
        name: "Web Explorer",
        description: "Start exploring web security",
        icon: "🌐",
        rarity: "Common",
        earnedDate: "2023-06-20"
      }
    ],
    ranking: {
      global: 12543,
      country: 892,
      percentile: 75.2,
      nextRankPoints: 1250,
      currentRankName: "Script Kiddie"
    },
    recentActivity: [
      {
        action: "Started 'Web Application Security' room",
        timestamp: "4 hours ago"
      },
      {
        action: "Completed 'Network Services' room",
        timestamp: "2 days ago",
        points: 400
      },
      {
        action: "Earned 'Linux Learner' badge",
        timestamp: "1 week ago"
      }
    ]
  },
  "CyberNinja42": {
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
  },
  "HackMaster99": {
    user: {
      username: "HackMaster99",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      joinDate: "2022-06-10",
      country: "United Kingdom",
      level: 18
    },
    stats: {
      totalPoints: 28750,
      globalRank: 567,
      countryRank: 45,
      roomsCompleted: 89,
      badgesEarned: 41,
      streakDays: 45
    },
    rooms: [
      {
        id: "1",
        name: "Nmap",
        difficulty: "Easy",
        category: "Network Security",
        completed: true,
        completedDate: "2022-07-15",
        points: 300,
        progress: 100
      },
      {
        id: "2",
        name: "Metasploit Introduction",
        difficulty: "Medium",
        category: "Penetration Testing",
        completed: true,
        completedDate: "2022-08-20",
        points: 450,
        progress: 100
      },
      {
        id: "3",
        name: "Burp Suite",
        difficulty: "Medium",
        category: "Web Application Security",
        completed: true,
        completedDate: "2022-09-10",
        points: 500,
        progress: 100
      },
      {
        id: "4",
        name: "Active Directory Basics",
        difficulty: "Hard",
        category: "Windows",
        completed: false,
        points: 700,
        progress: 80
      }
    ],
    badges: [
      {
        id: "1",
        name: "Elite Hacker",
        description: "Reach the top 1000 globally",
        icon: "👑",
        rarity: "Legendary",
        earnedDate: "2023-12-01"
      },
      {
        id: "2",
        name: "Network Ninja",
        description: "Complete 20 network security rooms",
        icon: "🌐",
        rarity: "Epic",
        earnedDate: "2023-08-15"
      },
      {
        id: "3",
        name: "Persistence Pro",
        description: "Maintain a 60-day streak",
        icon: "⚡",
        rarity: "Epic",
        earnedDate: "2023-10-30"
      }
    ],
    ranking: {
      global: 567,
      country: 45,
      percentile: 98.7,
      nextRankPoints: 250,
      currentRankName: "Elite Hacker"
    },
    recentActivity: [
      {
        action: "Completed 'Active Directory Basics' room",
        timestamp: "30 minutes ago",
        points: 700
      },
      {
        action: "Earned 'Elite Hacker' badge",
        timestamp: "3 hours ago"
      },
      {
        action: "Started 'Advanced Persistent Threats' room",
        timestamp: "1 day ago"
      }
    ]
  }
};

// Simulated API call to TryHackMe
export const getUserData = async (username: string): Promise<UserData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Check if user exists in our sample data
  const userData = sampleUsers[username];
  
  if (!userData) {
    throw new Error(`User "${username}" not found`);
  }

  return userData;
};
