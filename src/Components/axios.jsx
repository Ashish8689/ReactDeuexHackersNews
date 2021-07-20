import axios from 'axios';

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStories = `${baseURL}/newstories.json`;
export const itemUrl = `${baseURL}/item/`;

export const getStories = async() =>{
    try{
      const res = await axios.get(newStories).then(({data})=> data);
      return res;
    }
    catch(err){
      console.log(`Error is:- ${err}`);
    }
};


export const getStory = async(storyId) =>{
  try{
    const res = await axios.get(`${itemUrl + storyId}.json`).then(({data})=> data);
    return res;
  }
  catch(err){
    console.log(`Error is:- ${err}`);
  }
};
