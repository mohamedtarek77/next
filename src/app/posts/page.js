

import Link from "next/link.js";
import Todo from "../components/Todo.jsx"

const PostsPage = async () => {



 const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
 // "By default"   
 //cache:"force-cache",
    //to convert the component from SSG (static server generation) to SSR (server side rendering)
    
    //cache:"no-cache",

    //to convert the component from SSG (static server generation) to ISG (incremental static regeneration)
    // ISG make request for first time and cahe the value for sometimes it is mix between SSG and SSR

    next:{

        //this number represents the number of seconds for cache for this request before it make another request 
        revalidate:120
    }
}) ;
 const posts =  await response.json();

const postsJSX =  posts.map((post)=>{
    return(

        <Link href={`/posts/${post.id}`}>
              <div key={post.title} className="bg-red-800 m-2 p-5 text-center flex flex-col justify-center items-center">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        </Link>
      
    )
})
  return (
    <div>show me the posts

    <div>
        {postsJSX}
    </div>
    {/* <Todo/> */}
    </div>
  )
}

export default PostsPage