import React, { useEffect, useState } from "react";
import Story from "./Story";
import { getStoriesByType } from "./axios";


function Job() {
  const [storyId, setStoryId] = useState([]);

  useEffect(() => {
    getStoriesByType("job").then((ids) => setStoryId(ids));
  }, []);

  return (
    <div className="new-container">
      {storyId.slice(0, 10).map((ids) => (
        <Story key={ids} storyId={ids} />
      ))}
    </div>
  );
}


export default Job;
