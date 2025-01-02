import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-6 flex flex-col justify-center px-4">
      <div className="max-w-3xl mx-auto w-full bg-white/10 backdrop-blur rounded-xl shadow-xl p-8">
        <div className="mb-8 text-white space-y-6">
          <p className="text-lg">
            Привіт! Ти один з небагатьох, хто почує цю пісню першим. Вона про мого друга, якого забрала війна. Знаю, що багато хто з нас втратив близьких... Якщо відчуваєш, що комусь з твоїх друзів ця пісня може відгукнутись - просто перешли їм це посилання. Дякую, що ти тут ♥️
          </p>
          <hr className="border-white/20" />
          <p className="text-lg">
            Hi! You're among the few to hear this song first. It's about my friend who was lost in russia's war against Ukraine. I know many of us have lost someone dear... If you feel this song might resonate with your friends - please share this link with them. Thank you for being here ♥️
          </p>
        </div>
        
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
      </div>
    </div>
  );
};

export default LandingPage;
