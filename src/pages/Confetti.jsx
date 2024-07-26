import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from "@/components/ui/button";

const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(false);

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Celebrate Stockholm!</h1>
      <Button 
        onClick={() => setShowConfetti(true)} 
        className="bg-blue-500 hover:bg-blue-600 text-white mb-8"
      >
        Start Celebration
      </Button>
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <p className="text-xl">Click the button to see a burst of confetti!</p>
    </div>
  );
};

export default Confetti;
