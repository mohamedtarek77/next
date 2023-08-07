import React, { Suspense } from 'react'

import PostDetails from '@/app/components/PostDetails'
const PostDetailsPage = async (props) => {

const postID= props.params.postid;

//Suspense component is in react server  component is used to load the Async component in background  and let the  components in the page loading without him , it divides the page (streaming) ,  it is a great advantage in server  side rendering 



const loadingJSX = (<div><h1>Loading....</h1></div>)
  return (
    <div  >

  <h2>post Details</h2>


  <Suspense  fallback={loadingJSX}>

  <PostDetails postID={postID}/>  

  </Suspense>
  </div>
  )
}

export default PostDetailsPage