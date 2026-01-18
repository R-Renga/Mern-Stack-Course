import axios from "axios";
import { Baseurl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { data } from "autoprefixer";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed);
  
  const getFeed = async () => {
    try {
      if (feed && feed.length > 0) return;
      const res = await axios.get(`${Baseurl}/feed?page=1&limit=5`, {
        withCredentials: true,
      });
      console.log(res.data,"rrrrrrrrrr")
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log(feed,"feed")
  return (
    feed && (<div className="flex justify-center my-10"> 
        {feed.map((value,index)=>(
          <UserCard user={value} key={index} />
        ))}
    </div>
  )
  );
};

export default Feed;
