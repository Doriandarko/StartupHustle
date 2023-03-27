import React from 'react';

const Challenges = ({ character, onCompleteChallenge }) => {
  const handleCompleteChallenge = () => {
    onCompleteChallenge();
  };

  return (
    <div className="challenges">
      <h1>{character.name}'s Challenges</h1>
      {/* Add challenge logic and UI here */}
      <button onClick={handleCompleteChallenge}>Complete Challenge</button>
      <style jsx>{`
        /* Add your styles here */
      `}</style>
    </div>
  );
};

export default Challenges;
