import React from "react";
import "../pages/Tutorial.css";


const Tutorial = () => {
    const videos = [
      {
        id: 1,
        title: "How to get started with Review-Ocean",
        src: "https://www.youtube.com/embed/anDIgB1BHm8"
      },
     
    ];
    const screenshots = [
      {
        id: 1,
        src:"../src/images/review.png",
        desc: "Easy to use interface for managing reviews",
        alt: "Screenshot 1"

      },
      {
        id: 2,
        src: "../src/images/screenshot2.png",
        desc: "Know all about what your customers are saying",
        alt: "Screenshot 2"
      },
      {
        id: 3,
        src: "../src/images/google2.png",
        desc: "Give a chance to your business to grow",
        alt: "Screenshot 3"
      }
    ];
  return (
    <>
      <div className="tutorial-container">
        <div className="container">
          <h1 className="main-heading">How to Use Review-Ocean</h1>
          <div className="top">
            <h1>Still confused?</h1>
            <p>we are here to help you out</p>
          </div>
          <div className="videos">
            {videos.map(video => (
              <div className="video" key={video.id}>
                <div className="iframe-wrapper">
                  <iframe
                    src={video.src}
                    title="YouTube video"
                  ></iframe>
                </div>
                <h2>{video.title}</h2>
              </div>
            ))}
          </div>
          <div className="screenShotHeading">
            <h1>Screenshots of our Platform</h1>
            <div className="line"></div>
            
            {screenshots.map(screenshot => (
              <div className="screenshot" key={screenshot.id}>
                <img src={screenshot.src} alt={screenshot.alt} />
                <p>{screenshot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;

           