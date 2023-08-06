import axios from "axios";
import PostForm from "../../Components/PostForm"
import PostsList from "../../Components/PostsList"
import { useEffect, useState } from "react";

const Posts = ()=>{
  const [posts, setPosts] = useState([]);

  const fetchPosts = async ()=>{
    const response = await axios.get("http://localhost:3000/posts");
    console.log(response.data)
    setPosts(response.data)
  }
  useEffect(()=>{
    fetchPosts()
  }, [])

  return (
    <div>
      <h1 className="center flex">Posts</h1>
      <PostForm setPosts={setPosts}/>
      <PostsList posts={posts}/>
      
    </div>
  )
}

export default Posts