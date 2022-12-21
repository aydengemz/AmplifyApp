import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';
import PostUI from './mycomponents/Post.js';
import awsconfig from "./aws-exports";
import { Amplify } from 'aws-amplify';
import AllPosts from './mycomponents/AllPost.js';
import React, { useState, useEffect } from "react";
import Form from './mycomponents/Form'
import PostCreateForm from "./ui-components/PostCreateForm.jsx"

Amplify.configure(awsconfig);


function App() {

  useEffect(() => {
    const subscription = DataStore.observe(Post).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });

    return () => subscription.unsubscribe();
  }, []);

  //const posts =[]
  const [posts, setPosts] = useState([{ title: "DataStore is easy", rating: "5", content:"This is the body " }]);

  const handlePush = async () => {
    const posts = await DataStore.query(Post);
    console.log(posts);
    setPosts(posts)
  }
/*
  const addPost = async () =>{

    await DataStore.save(
      new Post({
      "title": "New pOSt",
      "rating": "Lorem ipsum dolor sit amet",
      "content": "Lorem ipsum dolor sit amet"
    })
  );
  }
  */

  return (
    
    <div>
   
        <PostCreateForm />
        <br></br>
        <button onClick={handlePush}>GET ALL POSTS</button>

        <AllPosts posts={posts} />
    
    </div>
  );
}

export default App;

