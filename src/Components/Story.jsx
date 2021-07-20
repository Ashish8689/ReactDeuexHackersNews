import React, { useEffect, useState } from "react";
import { getStory } from "./axios";
import Time from "./time.svg";

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
        setStory(data);
    });
  }, [storyId]);

  return (
    <div className="story-block">
      <a href={story.url} target="_blank">
        <div className="storys-content">
          <h1>{story.title}</h1>
          <div className="timing-comments-container">
            <h4>
              <img src={Time} alt={story.title} />
              <span>
                {new Date(story.time).getMinutes()} min ago
              </span>
            </h4>{" "}
            | <h5>12 comments </h5>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Story;
