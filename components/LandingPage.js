import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6">Бувай (our time is up)</h1>
        
        {/* SoundCloud Player */}
        <div className="mb-8">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1984740499%3Fsecret_token%3Ds-gTNTUlpC6E6&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        {/* Share Button */}
        <button 
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Share with friends
        </button>
      </div>
    </div>
  );
};

export default LandingPage;