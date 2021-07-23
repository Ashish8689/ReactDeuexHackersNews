import React, { useEffect, useState } from 'react'

function Pagination({ShowPerPage,PageCount,HandlePagination}) {

    const [counter,setCounter] = useState(1);

    useEffect(() => {
        const NewPageEnd = ShowPerPage * counter;
        const NewPageStart = NewPageEnd - ShowPerPage;
        HandlePagination(NewPageStart, NewPageEnd);
    }, [counter])

    return (
      <div className="pagination-button-container">
        {/* <button onClick={() => setCounter(counter - 1)}>Previous</button> */}
        <button onClick={() => setCounter(counter + 1)}>Load More</button>
        <h1 className="pagination-page" >Page : {counter} / {PageCount} </h1>
      </div>
    );
}

export default Pagination
