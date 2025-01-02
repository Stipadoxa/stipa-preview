import React from 'react';

const LandingPage = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    window.gtag('event', 'share_click', {
      'event_category': 'engagement',
      'event_label': 'Share button clicked'
    });
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-6 flex flex-col justify-center px-4">
      <div className="max-w-3xl mx-auto w-full bg-white/10 backdrop-blur rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Бувай (our time is up)</h1>
        
        {/* SoundCloud Player */}
        <div className="mb-8 rounded-lg overflow-hidden">
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
          onClick={handleShare}
          className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg font-medium 
                   hover:bg-blue-600 transition-all duration-200 shadow-lg 
                   hover:shadow-blue-500/25 active:transform active:scale-95"
        >
          Share with friends
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
