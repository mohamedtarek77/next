import React from 'react'

const PostDetails = async ({postID}) => {

// the promise code use to take sometimes till the data come before render the data 

await new Promise ( (resolve) => {

    setTimeout(()=>{
        resolve();
},2000);
});


    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,{
        next:{
            revalidate:120
        }
    }) ;

    const post = await response.json();

  return (
    <div className="bg-red-800 m-2 p-5 text-center flex flex-col justify-center items-center" >
    
    <div>
        <h2>
            {post.title}

        </h2>
        <p>{post.body}</p>
    </div></div>
  )
}

export default PostDetails