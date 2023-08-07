import React from 'react'
import Link from 'next/link' 

export const NavBar = () => {
  return (
    <div className='flex  justify-between items-center bg-stone-200    '>
    
    <Link href="/" ><button>Home</button></Link>

    <Link href="/posts" ><button>posts</button></Link>
    <Link href="/articles" ><button>articles</button></Link>
    </div>
  )
}
