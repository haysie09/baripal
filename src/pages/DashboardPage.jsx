import React, { useState } from 'react';

// Import our new dashboard components
import ProgressCircle from '../components/dashboard/ProgressCircle';
import QuickAddItem from '../components/dashboard/QuickAddItem';
import LogItem from '../components/dashboard/LogItem';

// Mock Data - In the future, this will come from the user's settings in Firebase
const mockCustomMeals = [
  { id: 1, name: 'Protein Coffee', protein: 25, collagen: 10 },
  { id: 2, name: 'Greek Yogurt Bowl', protein: 15, collagen: 0 },
  { id: 3, name: 'Chicken Salad Lunch', protein: 30, collagen: 0 },
  { id: 4, name: 'Post-Workout Shake', protein: 30, collagen: 5 },
];

const DashboardPage = () => {
  // === STATE MANAGEMENT ===
  // This is the "memory" of our page.
  const [dailyGoal, setDailyGoal] = useState({ protein: 80, collagen: 20 });
  const [currentIntake, setCurrentIntake] = useState({ protein: 0, collagen: 0 });
  const [logEntries, setLogEntries] = useState([]);

  // === LOGIC ===
  // This function runs when a user clicks a QuickAddItem button
  const handleLogMeal = (meal) => {
    // Update the current protein and collagen intake
    setCurrentIntake(prevIntake => ({
      protein: prevIntake.protein + meal.protein,
      collagen: prevIntake.collagen + meal.collagen,
    }));

    // Create a new log entry with a timestamp
    const newEntry = {
      ...meal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Add the new entry to the top of the log list
    setLogEntries(prevEntries => [newEntry, ...prevEntries]);
  };

  // === RENDER ===
  // This is what the user sees.
  return (
    <div className="space-y-6">
      {/* --- Top Section: Daily Goal Tracker --- */}
      <section className="text-center">
        <h1 className="text-3xl font-bold">Today's Progress</h1>
        <ProgressCircle goal={dailyGoal.protein} current={currentIntake.protein} />
      </section>

      {/* --- Middle Section: Quick Add Menu --- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Add Menu</h2>
        <div className="space-y-3">
          {mockCustomMeals.map(meal => (
            <QuickAddItem key={meal.id} meal={meal} onAdd={handleLogMeal} />
          ))}
        </div>
      </section>

      {/* --- Bottom Section: Today's Log --- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Today's Log</h2>
        <div className="space-y-2">
          {logEntries.length > 0 ? (
            logEntries.map((entry, index) => (
              <LogItem key={index} entry={entry} />
            ))
          ) : (
            <p className="text-center text-gray-400 py-4">No entries logged yet today.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;