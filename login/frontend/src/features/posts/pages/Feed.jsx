import { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import Nav from "../../shared/components/Nav";
import Fotter from "../../shared/components/Fotter";
import Stories from "../../shared/components/Stories";


export default function Feed() {

  const{feed,handleGetFeed,loading} = usePost()

  useEffect(()=>{
    handleGetFeed()
  },[])
  if(loading||!feed){
    return(
      <main className="text-3xl flex justify-center items-center h-screen " > <h1>Feed is loading</h1></main>
    )
  }
  console.log(feed);
  
  return (
    <div className=" bg-black text-white flex justify-center items-center flex-col gap-2">
      <Nav/>
      <Stories/>
      {feed.map(post=>{
        return <Post user={post.user} post={post}/>
      })}
      <Fotter/>
    </div>
  );
}