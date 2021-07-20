import React, { useEffect, useState } from 'react'

function Pagination({showPerPage,pageCount,HandlePagination}) {

    const [counter,setCounter] = useState(1);

    useEffect(() => {
        const newPageEnd = showPerPage * counter;
        const newPageStart = newPageEnd - showPerPage;
        HandlePagination(newPageStart, newPageEnd);
    }, [counter])

    return (
      <div className="pagination-button-container">
        {/* <button onClick={() => setCounter(counter - 1)}>Previous</button> */}
        <button onClick={() => setCounter(counter + 1)}>Load More</button>
        <h1 className="pagination-page" >Page : {counter} / {pageCount} </h1>
      </div>
    );
}

export default Pagination
