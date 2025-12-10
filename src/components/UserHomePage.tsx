import { useState } from 'react';
import { LogOut, Newspaper, Trophy, BarChart3, User, X } from 'lucide-react';

interface UserHomePageProps {
  user: any;
  onLogout: () => void;
}

// Mock leaderboard data
const leaderboardData = [
  { rank: 1, name: 'Phoenix Warriors', country: 'United States', points: 2450 },
  { rank: 2, name: 'Thunder Strikers', country: 'United Kingdom', points: 2380 },
  { rank: 3, name: 'Dragon Slayers', country: 'Canada', points: 2310 },
  { rank: 4, name: 'Shadow Legends', country: 'Australia', points: 2240 },
  { rank: 5, name: 'Storm Chasers', country: 'Germany', points: 2180 },
  { rank: 6, name: 'Night Hawks', country: 'France', points: 2120 },
  { rank: 7, name: 'Iron Titans', country: 'Spain', points: 2050 },
  { rank: 8, name: 'Swift Eagles', country: 'Italy', points: 1990 },
  { rank: 9, name: 'Mystic Knights', country: 'Brazil', points: 1920 },
  { rank: 10, name: 'Blaze Runners', country: 'Japan', points: 1850 },
];

export default function UserHomePage({ user, onLogout }: UserHomePageProps) {
  const [activeSection, setActiveSection] = useState('news');
  const [showModal, setShowModal] = useState<string | null>(null);

  // Add user's team to leaderboard
  const userTeam = { rank: 11, name: user?.fullName, country: user?.country, points: 0 };
  const fullLeaderboard = [...leaderboardData, userTeam];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Top Bar with Logout */}
      <div className="bg-slate-800/50 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white font-medium">{user?.fullName}</p>
                <p className="text-slate-400 text-sm">{user?.email}</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all border border-red-500/30"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section - Centered */}
      <div className="py-12 flex justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64">
          <img 
            src="/logo.png" 
            alt="Phoenix League Logo" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <nav className="bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 p-2">
          <div className="grid grid-cols-4 gap-2">
            {/* News */}
            <button
              onClick={() => setActiveSection('news')}
              className={`flex flex-col items-center gap-2 py-4 px-6 rounded-xl transition-all ${
                activeSection === 'news'
                  ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <Newspaper size={24} />
              <span className="font-semibold">News</span>
            </button>

            {/* League */}
            <button
              onClick={() => setActiveSection('league')}
              className={`flex flex-col items-center gap-2 py-4 px-6 rounded-xl transition-all ${
                activeSection === 'league'
                  ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <Trophy size={24} />
              <span className="font-semibold">League</span>
            </button>

            {/* Stats */}
            <button
              onClick={() => setActiveSection('stats')}
              className={`flex flex-col items-center gap-2 py-4 px-6 rounded-xl transition-all ${
                activeSection === 'stats'
                  ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <BarChart3 size={24} />
              <span className="font-semibold">Stats</span>
            </button>

            {/* Profile */}
            <button
              onClick={() => setActiveSection('profile')}
              className={`flex flex-col items-center gap-2 py-4 px-6 rounded-xl transition-all ${
                activeSection === 'profile'
                  ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <User size={24} />
              <span className="font-semibold">Profile</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-500/20 p-8 min-h-[400px]">
          
          {/* News Section */}
          {activeSection === 'news' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Newspaper className="text-cyan-400" size={32} />
                Latest News
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Welcome to Phoenix League!</h3>
                  <p className="text-slate-300">
                    Your journey begins here. Stay tuned for exciting updates, tournaments, and community events.
                  </p>
                  <p className="text-slate-500 text-sm mt-2">Posted today</p>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50">
                  <p className="text-slate-400 text-center py-8">More news coming soon...</p>
                </div>
              </div>
            </div>
          )}

          {/* League Section */}
          {activeSection === 'league' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Trophy className="text-cyan-400" size={32} />
                League Information
              </h2>

              {/* Season Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-medium mb-2">Your Rank</p>
                  <p className="text-white text-4xl font-bold">11th</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 rounded-xl border border-teal-500/20">
                  <p className="text-teal-400 text-sm font-medium mb-2">Total Teams</p>
                  <p className="text-white text-4xl font-bold">11</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-medium mb-2">Season Year</p>
                  <p className="text-white text-4xl font-bold">2024</p>
                </div>
              </div>

              {/* Information Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => setShowModal('points')}
                  className="px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg font-semibold transition-all border border-cyan-500/30"
                >
                  Points System
                </button>
                <button
                  onClick={() => setShowModal('rules')}
                  className="px-6 py-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 rounded-lg font-semibold transition-all border border-teal-500/30"
                >
                  Rules
                </button>
                <button
                  onClick={() => setShowModal('ranks')}
                  className="px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg font-semibold transition-all border border-cyan-500/30"
                >
                  Ranks System
                </button>
              </div>

              {/* Leaderboard */}
              <div className="bg-slate-700/50 rounded-xl border border-slate-600 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">🏆 Season Leaderboard - Top 20</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Rank</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Team Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Country</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((team, index) => (
                        <tr 
                          key={team.rank}
                          className={`border-b border-slate-700/50 transition-colors ${
                            team.name === user?.fullName 
                              ? 'bg-cyan-500/10 hover:bg-cyan-500/20' 
                              : 'hover:bg-slate-700/30'
                          }`}
                        >
                          <td className="px-6 py-4">
                            <span className={`font-bold ${
                              team.rank === 1 ? 'text-yellow-400 text-xl' :
                              team.rank === 2 ? 'text-slate-300 text-lg' :
                              team.rank === 3 ? 'text-orange-400 text-lg' :
                              'text-slate-400'
                            }`}>
                              {team.rank === 1 && '🥇'}
                              {team.rank === 2 && '🥈'}
                              {team.rank === 3 && '🥉'}
                              {team.rank > 3 && `#${team.rank}`}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`font-medium ${
                              team.name === user?.fullName ? 'text-cyan-400' : 'text-white'
                            }`}>
                              {team.name}
                              {team.name === user?.fullName && ' (You)'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-300">{team.country}</td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-white font-bold text-lg">{team.points}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Stats Section */}
          {activeSection === 'stats' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="text-cyan-400" size={32} />
                Your Statistics
              </h2>

              {/* Statistics Overview */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-medium mb-2">Games Played</p>
                  <p className="text-white text-4xl font-bold">0</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 rounded-xl border border-teal-500/20">
                  <p className="text-teal-400 text-sm font-medium mb-2">Wins</p>
                  <p className="text-white text-4xl font-bold">0</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-medium mb-2">Rank</p>
                  <p className="text-white text-4xl font-bold">11th</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 rounded-xl border border-teal-500/20">
                  <p className="text-teal-400 text-sm font-medium mb-2">Points</p>
                  <p className="text-white text-4xl font-bold">0</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 text-sm font-medium mb-2">P/G</p>
                  <p className="text-white text-4xl font-bold">-</p>
                </div>
              </div>

              {/* Team Name */}
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 mb-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Team Name</h3>
                <p className="text-white text-2xl font-semibold">{user?.fullName}</p>
                <p className="text-slate-400 text-sm mt-1">Captain & Solo Player</p>
              </div>

              {/* Trophies Section */}
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <Trophy size={24} />
                  Trophies & Achievements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Locked Trophy 1 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-slate-400 text-sm font-medium">First Win</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 2 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">🥇</div>
                    <p className="text-slate-400 text-sm font-medium">Season Winner</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 3 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="text-slate-400 text-sm font-medium">Sharpshooter</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 4 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">🔥</div>
                    <p className="text-slate-400 text-sm font-medium">Phoenix Master</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>

                  {/* Locked Trophy 5 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="text-slate-400 text-sm font-medium">Speed Demon</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 6 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">🎖️</div>
                    <p className="text-slate-400 text-sm font-medium">MVP</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 7 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">💎</div>
                    <p className="text-slate-400 text-sm font-medium">Diamond Rank</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                  
                  {/* Locked Trophy 8 */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-600 text-center opacity-50">
                    <div className="text-4xl mb-2">👑</div>
                    <p className="text-slate-400 text-sm font-medium">Legend</p>
                    <p className="text-slate-500 text-xs mt-1">Locked</p>
                  </div>
                </div>
              </div>

              {/* Team Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg">
                  Create Team
                </button>
                <button className="flex-1 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-lg rounded-xl transition-all border border-cyan-500/30 hover:border-cyan-500/50">
                  Join Team
                </button>
              </div>
            </div>
          )}

          {/* Profile Section */}
          {activeSection === 'profile' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <User className="text-cyan-400" size={32} />
                Your Profile
              </h2>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Full Name</p>
                    <p className="text-white text-lg font-medium">{user?.fullName}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <p className="text-white text-lg font-medium">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Country</p>
                    <p className="text-white text-lg font-medium">{user?.country}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone</p>
                    <p className="text-white text-lg font-medium">{user?.phone}</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-slate-400 text-sm mb-1">Player Level</p>
                    <p className="text-cyan-400 text-2xl font-bold">Level 1</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modal Popups */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-cyan-500/30 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">
                {showModal === 'points' && '📊 Points System'}
                {showModal === 'rules' && '📜 League Rules'}
                {showModal === 'ranks' && '🏅 Ranks System'}
              </h3>
              <button
                onClick={() => setShowModal(null)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Points System Modal */}
              {showModal === 'points' && (
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold text-lg mb-3">Points</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>🎯 Opponent (close)</span>
                        <span className="text-cyan-400 font-bold">+10 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🎯 Mid-range (5–10 m)</span>
                        <span className="text-cyan-400 font-bold">+20 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🎯 Long-range (&gt;10 m)</span>
                        <span className="text-yellow-400 font-bold">+30 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🎯 Headshot</span>
                        <span className="text-cyan-400 font-bold">+15 extra</span>
                      </li>
                      <li className="flex justify-between">
                        <span>⚡ Double hit (2 in 10 s)</span>
                        <span className="text-cyan-400 font-bold">+25 bonus</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🏃 Moving target</span>
                        <span className="text-cyan-400 font-bold">+15 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>🔥 Phoenix</span>
                        <span className="text-orange-400 font-bold">+50 points</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-red-400 font-bold text-lg mb-3">Penalties</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>❌ Hit by player</span>
                        <span className="text-red-400 font-bold">-15 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>❌ Hit teammate</span>
                        <span className="text-red-400 font-bold">-15 points</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-sm">
                      <strong className="text-cyan-400">Note:</strong> Points are calculated at the end of each match and updated in real-time on the leaderboard.
                    </p>
                  </div>
                </div>
              )}

              {/* Rules Modal */}
              {showModal === 'rules' && (
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold text-lg mb-3">General Rules</h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>All teams must register before the season starts</li>
                      <li>Each team must have a minimum of 5 players and maximum of 10 players</li>
                      <li>Matches are scheduled every weekend throughout the season</li>
                      <li>Teams must arrive 15 minutes before match time or risk forfeiture</li>
                      <li>All players must wear appropriate sportswear and safety equipment</li>
                    </ol>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-teal-400 font-bold text-lg mb-3">Match Rules</h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>Each match consists of two 30-minute halves with a 10-minute break</li>
                      <li>Substitutions are allowed during breaks or timeouts only</li>
                      <li>Referees' decisions are final and must be respected</li>
                      <li>Fair play and sportsmanship are mandatory at all times</li>
                      <li>Any form of cheating results in immediate disqualification</li>
                    </ol>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold text-lg mb-3">Season Structure</h4>
                    <ul className="space-y-2">
                      <li>• Regular season: 10 weeks of matches</li>
                      <li>• Playoffs: Top 8 teams qualify</li>
                      <li>• Finals: Best of 3 matches</li>
                      <li>• Championship Trophy awarded to the winner</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Ranks System Modal */}
              {showModal === 'ranks' && (
                <div className="space-y-4 text-slate-300">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-bold text-lg mb-3">Ranking Tiers</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <span className="text-3xl">🥇</span>
                        <div>
                          <p className="font-bold text-yellow-400">Diamond League</p>
                          <p className="text-sm">2000+ points - Top Elite Teams</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-slate-600/30 border border-slate-500/30 rounded-lg">
                        <span className="text-3xl">🥈</span>
                        <div>
                          <p className="font-bold text-slate-300">Platinum League</p>
                          <p className="text-sm">1500-1999 points - Advanced Teams</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                        <span className="text-3xl">🥉</span>
                        <div>
                          <p className="font-bold text-orange-400">Gold League</p>
                          <p className="text-sm">1000-1499 points - Intermediate Teams</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-slate-600/30 border border-slate-500/30 rounded-lg">
                        <span className="text-3xl">🎖️</span>
                        <div>
                          <p className="font-bold text-cyan-400">Silver League</p>
                          <p className="text-sm">500-999 points - Developing Teams</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-3 bg-slate-600/30 border border-slate-500/30 rounded-lg">
                        <span className="text-3xl">🏅</span>
                        <div>
                          <p className="font-bold text-teal-400">Bronze League</p>
                          <p className="text-sm">0-499 points - Beginner Teams</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <h4 className="text-cyan-400 font-bold mb-2">Promotion & Relegation</h4>
                    <p className="text-sm">
                      At the end of each season, top teams from lower leagues get promoted, while bottom teams from higher leagues may be relegated. Keep earning points to climb the ranks!
                    </p>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowModal(null)}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}