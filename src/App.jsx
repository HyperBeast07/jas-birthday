import { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import Confetti from "react-confetti";
import Jas1 from "./assets/1.jpg";
import Jas2 from "./assets/2.jpg";
import Jas3 from "./assets/3.jpg";
import Jas4 from "./assets/4.jpg";
import Jas5 from "./assets/5.jpg";
import Jas6 from "./assets/6.jpg";
import Jas7 from "./assets/7.jpg";
import Jas8 from "./assets/8.jpg";
import Jas9 from "./assets/9.jpg";
import Jas10 from "./assets/10.jpg";
import Jas11 from "./assets/11.jpg";
import Jas12 from "./assets/12.jpg";
import Yang from "./assets/Yang.jpg";
import Jas from "./assets/Jas.jpg";

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isYangModalVisible, setIsYangModalVisible] = useState(false);
  const [isJasModalVisible, setIsJasModalVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const showYangModal = () => {
    setIsYangModalVisible(true);
  };

  const showJasModal = () => {
    setIsJasModalVisible(true);
  };

  const handleClose = () => {
    setIsYangModalVisible(false);
    setIsJasModalVisible(false);
  };

  const images = [
    Jas1,
    Jas2,
    Jas3,
    Jas4,
    Jas5,
    Jas6,
    Jas7,
    Jas8,
    Jas9,
    Jas10,
    Jas11,
    Jas12,
  ];
  const messages = [
    "On your special day, I want you to know how incredibly lucky I am to have met you",
    "Your birthday will always be a special day to me",
    "One year ago today, I was flying to Singapore to begin my university life",
    "Whereas today marks the last day of my first ever internship",
    "My life would be completely different if our paths hadn't crossed - and I can't imagine it any other way",
    "You make every day brighter and fill my day with laughter and joy",
    "Just wanted you to know that :))",
    "Happy birthday again heh",
    "Enjoy your birthday to the fullest",
    "How I wish I could be there with you right now",
    "But hey I am talking to you right now aren't I",
    "Through a website",
    "Who would have thought of that",
    "HAHA this is so fun",
    "Bet you are having fun too",
    "As usual",
    "Stay pretty :>",
    "Mwah <3",
    "See you soon in Penang",
    "Can't wait to make more memories together",
    "Byee",
    "For now ;)",
    "~ Yours, Shi Yang.",
  ];

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth zoom in/out effect
  useEffect(() => {
    let zoomDirection = 1;
    const zoomSpeed = 0.001;
    const minZoom = 1;
    const maxZoom = 1.5;

    const zoomInterval = setInterval(() => {
      setZoomLevel((prev) => {
        if (prev >= maxZoom) zoomDirection = -1;
        if (prev <= minZoom) zoomDirection = 1;

        return prev + zoomSpeed * zoomDirection;
      });
    }, 50); // More frequent small changes for smoother animation

    return () => clearInterval(zoomInterval);
  }, []);
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 12000);
  };
  // Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000); // 8 seconds per image

    return () => clearInterval(interval);
  }, [images.length]);

  const nextMessage = () => {
    if (currentMessageIndex === messages.length - 1) {

      setHasStarted(false); 
      setCurrentMessageIndex(0); 
    } else {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }
  };
  const prevMessage = () => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex flex-col items-center justify-center p-4">
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={true}
          numberOfPieces={500}
        />
      )}

      <div className="bg-white bg-opacity-90 rounded-3xl shadow-xl p-8 max-w-2xl w-full mx-4 hover:scale-105 duration-500 transition-transform">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8 [text-shadow:_0_4px_8px_rgb(236_72_153_/_30%)]">
          Happy Birthday<br></br>
          <span className="text-6xl text-white drop-shadow-[0_0_8px_#ec4899]">
            Jas
          </span>
        </h1>

        {/* Slideshow with smooth continuous zoom */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-64 rounded-full border-4 border-pink-300 overflow-hidden shadow-lg hover:scale-125 transition-transform duration-500 ease-in-out">
            <img
              src={images[currentImageIndex]}
              alt="My Girl"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>
        </div>

        {/* Messages Display with Dots Indicator */}
        <div className="mb-6">
          <div className="text-md text-center border rounded-xl px-2 py-1 border-pink-300 bg-pink-50 text-lg md:text-xl text-gray-700 min-h-[120px] flex items-center justify-center">
            {hasStarted ? messages[currentMessageIndex] : "To Jas 💌"}
          </div>

          {/* Only show dots after starting */}
          {hasStarted && (
            <div className="flex justify-center mt-4 space-x-2">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMessageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentMessageIndex
                      ? "bg-pink-500 w-6"
                      : "bg-pink-200 hover:bg-pink-300"
                  }`}
                  aria-label={`Go to message ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Conditional Buttons */}
        {!hasStarted ? (
          <button
            onClick={() => {
              setHasStarted(true);
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 6000);
            }}
            className="text-center w-full py-3 px-6 bg-gradient-to-b from-pink-400 to-purple-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mb-4"
          >
            Begin
          </button>
        ) : (
          <div className="flex gap-4 mb-4">
            {currentMessageIndex > 0 && (
              <button
                onClick={prevMessage}
                className="flex-1 py-3 px-6 bg-gradient-to-br from-pink-300 to-purple-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Prev
              </button>
            )}

            <button
              onClick={nextMessage}
              className={`text-center py-3 px-6 bg-gradient-to-br from-pink-300 to-purple-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-pink-200 ${
                currentMessageIndex === 0 ? "w-full" : "flex-1"
              }`}
            >
              {currentMessageIndex === messages.length - 1
                ? "Back to Start"
                : "Next"}
            </button>
          </div>
        )}

        <button
          onClick={triggerConfetti}
          className="w-full py-3 px-6 bg-gradient-to-t from-pink-500 to-purple-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          More confetti heh (don't want em to get in the way of ur face 😉)
        </button>
      </div>

      <div className="mt-8 text-center text-black mb-8">
        <p>
          Made with ❤️ by
          <span
            onClick={showYangModal}
            className="text-pink-600 cursor-pointer hover:underline font-medium"
          >
            {" "}
            Shi Yang{" "}
          </span>
          for
          <span
            onClick={showJasModal}
            className="text-pink-600 cursor-pointer hover:underline font-medium"
          >
            {" "}
            Jas{" "}
          </span>
          on 21/07/2025
        </p>
        <p>With 3 hours of sleep and 2 cups of coffee</p>
        <p></p>
      </div>

      <Modal
        title="Look who it is! He is so lucky! Little easter egg for you hehehe"
        open={isYangModalVisible}
        onCancel={handleClose}
        footer={null}
        closable={false}
        maskClosable={true}
        className="text-center"
      >
        <div>
          <img src={Yang} alt="" />
        </div>
      </Modal>

      <Modal
        title="Lil Chubby Baby :>"
        open={isJasModalVisible}
        onCancel={handleClose}
        footer={null}
        closable={false}
        maskClosable={true}
        className="text-center"
      >
        <div className="flex justify-center text-center">
          <img src={Jas} alt="" className="w-80 h-128" />
        </div>
      </Modal>
    </div>
  );
}
