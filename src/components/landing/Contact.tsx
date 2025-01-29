import React from "react";

function Contact() {
  return (
    <div className="relative bg-white w-full max-w-6xl mx-auto mt-20 p-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Optimize Your GitHub Profile for{" "}
        <span className="text-pink-500"> Maximum Impact</span>
      </h2>
      <p className="text-center mb-10 text-gray-600">
        Our tool helps you analyze your GitHub profile to enhance your
        contributions, track your progress, and discover new opportunities.
      </p>
      <div className="relative h-[600px]">
        {feedbacks.map((feedback, idx) => (
          <div
            key={idx}
            className={`absolute p-4 max-w-xs shadow-lg rounded-lg bg-white flex items-center space-x-4 
            transform ${getRandomPosition(idx)} rotate-${getRotationAngle()}`}
            style={{ width: "350px" }}
          >
            <img
              src={getProfileImage(idx)}
              alt={`profile-${idx + 1}`}
              className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"
            />
            <p className="text-gray-700">{feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Geri bildirimler
const feedbacks = [
  "Your profile's activity is inconsistent. Try contributing to more open-source projects.",
  "Great work on maintaining a high commit frequency over the last few months!",
  "Consider improving your README files to better showcase your projects.",
  "You could increase visibility by contributing to popular repositories.",
  "Add more detailed descriptions to your projects for better visibility.",
  "It's a good time to explore new technologies and expand your skill set!",
];

// Profil resimlerini getirir
const getProfileImage = (idx: number) => {
  const images = [
    "/profile1.png",
    "/profile2.png",
    "/profile3.png",
    "/profile4.png",
    "/profile5.png",
    "/profile6.png",
  ];
  return images[idx % images.length];
};

const getRandomPosition = (idx: any) => {
  const positions = [
    "top-0 left-0",
    "top-0 right-0",
    "top-24 left-48",
    "top-48 right-10",
    "top-72 left-12",
    "top-96 right-40",
    "top-[420px] left-20",
  ];
  return positions[idx % positions.length];
};

// Geri bildirim baloncuklarının rastgele dönüş açısı
const getRotationAngle = () => {
  const angles = [1, 2, -1, 3, -2, 0];
  const randomAngle = angles[Math.floor(Math.random() * angles.length)];
  return randomAngle;
};

export default Contact;
