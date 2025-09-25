import React from "react";
import "../pages/Tutorial.css";
import { id } from "date-fns/locale";

const Tutorial = () => {
    const videos = [
      {
        id: 1,
        title: "How to get started with Review-Ocean",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "Managing Reviews Effectively",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 3,
        title: "Analyzing Feedback with Analytics",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ];
    const screenshots = [
      {
        id: 1,
        src: "https://picsum.photos/200/300?random=1",
        desc: "Description for Screenshot 1",
        alt: "Screenshot 1"

      },
      {
        id: 2,
        src: "https://picsum.photos/200/300?random=2",
        desc: "Description for Screenshot 2",
        alt: "Screenshot 2"
      },
      {
        id: 3,
        src: "https://picsum.photos/200/300?random=3",
        desc: "Description for Screenshot 3",
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
            <h1>Screenshots of our PPlatform</h1>
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

           