import React from 'react'

export const metadata = {
    title:"Article page"
  }

const layout = (
    {children}
) => {
  return (
    <div>
    <h1>Articles</h1>

    <div className='  font-mono flex bg-red-700'>
    {children}
    </div>
   </div>
  )
}

export default layout