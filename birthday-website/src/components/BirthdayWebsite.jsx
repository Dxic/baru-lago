import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const BirthdayWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const photos = [
    { id: 1, url: 'https://i.imgur.com/Q20jxAo.jpeg' },
    { id: 2, url: 'https://i.imgur.com/0erhrQ4.jpeg' },
    { id: 3, url: 'https://i.imgur.com/kJ1jwVR.jpeg' },
    { id: 4, url: 'https://i.imgur.com/cmgF1ia.jpeg' },
    { id: 5, url: 'https://i.imgur.com/tKLy2kL.jpeg' },
    { id: 6, url: 'https://i.imgur.com/uWlPE0t.jpeg' },
    { id: 7, url: 'https://i.imgur.com/VE2P3F3.jpeg' },
    { id: 8, url: 'https://i.imgur.com/G39TmE1.jpeg' }
  ];

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlay = () => {
    setShowVideo(true);
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleVideo = () => {
    if (isVideoPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
    setShowVideo(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <audio ref={audioRef} src="/src/NEMEN Jersey Drill - Asw1n Arkwood Cinsko & Nikolski.mp3" loop />

      <button 
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-red-600 rounded-full p-3 hover:bg-red-500 transition duration-300"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 15.536L2.404 2.404M2.404 15.536L15.536 2.404" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        )}
      </button>

      <header className="fixed top-0 left-0 w-full z-40 p-4 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="text-red-600 text-2xl md:text-3xl font-bold tracking-wide">NETFLIX</div>
            <nav className="hidden md:flex items-center space-x-5">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 font-semibold">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 font-semibold">Photos</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 font-semibold">Series</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 font-semibold">Movies</a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 font-semibold">My List</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-white">
              <img src="https://img.icons8.com/material-outlined/24/ffffff/search.png" alt="Search" className="w-6 h-6" />
            </button>
            <div className="relative">
              <img src="https://img.icons8.com/material-outlined/24/ffffff/appointment-reminders.png" alt="Notifications" className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
            </div>
            <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition duration-300">
              login
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="https://i.imgur.com/mDNocyV.jpeg" 
              alt="Birthday Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          <div className="relative pt-[60vh] md:pt-[68vh] px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Happy Birthday!</h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              This is how we celebrate someone special, someone who brightens every day with their presence.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handlePlay}
                className="bg-white text-black px-6 md:px-8 py-2 rounded flex items-center gap-2 hover:bg-gray-200"
              >
                Play
              </button>
              <button className="bg-gray-500/50 text-white px-6 md:px-8 py-2 rounded flex items-center gap-2 hover:bg-gray-500/70">
                More Info
              </button>
            </div>
          </div>
        </div>

        <section className="px-4 md:px-12 py-8">
          <h2 className="text-xl font-semibold mb-6">More to Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative aspect-[3/4] overflow-hidden rounded-md"
              >
                <img 
                  src={photo.url} 
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm">Memory #{photo.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleCloseVideo()}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  poster="https://i.imgur.com/mDNocyV.jpeg"
                  src="/src/video1724572408.mp4"
                  controls={false}
                />
              </div>
              
              <div className="p-4 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={toggleVideo}
                      className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2"
                    >
                      {isVideoPlaying ? 'Pause' : 'Play Now'}
                    </button>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                      Add to Playlist
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayWebsite;