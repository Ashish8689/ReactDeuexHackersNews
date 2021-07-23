import axios from 'axios';

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
// export const newStories = `${baseURL}/newstories.json`;
export const itemUrl = `${baseURL}/item/`;


// ***********************  Get Stories Ids  *******************************
export const getStories = async(type) =>{
    try{
      const res = await axios.get(`${baseURL}${type}stories.json`).then(({data})=> data);
      return res;
    }
    catch(err){
      console.log(`Error is:- ${err}`);
    }
};


// ********************  Get Single Story   ***************************
export const getStory = async(storyId) =>{
  try{
    const res = await axios.get(`${itemUrl + storyId}.json`).then(({data})=> data);
    return res;
  }
  catch(err){
    console.log(`Error is:- ${err}`);
  }
};


// https://hacker-news.firebaseio.com/v0/beststories.json
