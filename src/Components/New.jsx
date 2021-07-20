import React, { useEffect, useState } from 'react'
import Story from './Story'
import {getStories} from './axios';


function New() {

    const [storyId,setStoryId] = useState([]);

    useEffect(() => {
         getStories().then((ids) =>setStoryId(ids));
    }, [])

    return (
        <div className="new-container">
            {storyId.slice(0,10).map((ids) => (
                <Story  key={ids} storyId={ids}/>
            ))}
        </div>
    )
}

export default New
