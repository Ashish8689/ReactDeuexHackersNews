import React, { useEffect, useState } from "react";
import Story from "./Story";
import { getStories } from "./axios";
import Pagination from "./Pagination";
import Loader from "./Loader";

function New() {
  const [loading, setLoading] = useState(true);
  const [storyId, setStoryId] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: showPerPage });

  useEffect(() => {
    getStories("new").then((ids) => {
      setLoading(false);
      setStoryId(ids);
    });
  }, []);

  const showPerPage = 10;
  const pageCount = Math.ceil(storyId.length / showPerPage);

  const HandlePagination = (newPageStart, newPageEnd) => {
    setPagination({
      start: newPageStart,
      end: newPageEnd,
    });
  };

  return (
    <div className="new-container">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {storyId.slice(pagination.start, pagination.end).map((ids) => (
            <Story key={ids} storyId={ids} />
          ))}
          <Pagination
            showPerPage={showPerPage}
            pageCount={pageCount}
            HandlePagination={HandlePagination}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default New;
