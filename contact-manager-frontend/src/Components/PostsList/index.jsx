import { useNavigate } from "react-router-dom"

const PostsList = ({posts})=>{

  const navigate = useNavigate();
  

  const handleNavigate=(id)=>{
    console.log(id)
    navigate(`${id}`)
  }

  return (
    <div>
      <ul>
        {posts.map((post, index)=>(<li style={{backgroundColor: "cyan", margin: 10}} key={index} onClick={()=>handleNavigate(post.id)}>{post.title}</li>))}
      </ul>
    </div>
  )
}

export default PostsList