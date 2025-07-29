import React from 'react';

const LogItem = ({ entry }) => {
  return (
    <div className="w-full flex justify-between items-center py-2 border-b border-gray-700">
      <div>
        <p className="font-semibold">{entry.name}</p>
        <p className="text-xs text-gray-400">{entry.time}</p>
      </div>
      <p className="text-gray-300">+{entry.protein}g P</p>
    </div>
  );
};

export default LogItem;