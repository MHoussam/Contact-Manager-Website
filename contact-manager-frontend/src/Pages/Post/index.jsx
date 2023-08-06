import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState()
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/posts/${id}`).then(response=>setPost(response.data)).catch(e=>console.log(e))
  },[])

  return (
   <div className="test">
    {post ? 
      <>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </>
      : <h2>Post not found</h2>}
   </div>
  )
}

export default Post;