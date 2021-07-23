import React, { useEffect, useState } from "react";
import Story from "./Story";
import { getStories } from "./axios";
import Pagination from "./Pagination";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

function StoriesId() {
  
  const { type } = useParams();
  
  const [loading, setLoading] = useState(true);
  const [storyId, setStoryId] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: ShowPerPage });


  useEffect(() => {
    getStories(type ? type : "new").then((ids) => {
      setLoading(false);
      setStoryId(ids);
    });
  }, [type]);



  const ShowPerPage = 10;
  const PageCount = Math.ceil(storyId.length / ShowPerPage);

  const HandlePagination = (NewPageStart, NewPageEnd) => {
    setPagination({
      start: NewPageStart,
      end: NewPageEnd,
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
            ShowPerPage={ShowPerPage}
            PageCount={PageCount}
            HandlePagination={HandlePagination}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default StoriesId;
