import axios from 'axios';
import { useEffect, useState } from 'react';



const PostsPages = () => {

  const apiUrl = 'http://localhost:3000';
  const [posts, setPosts] = useState([])


  const fetchPosts = () => {
    axios.get(`${apiUrl}/routerposts`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.log('Errore nel caricamento dei posts');
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Posts Page</h1>
        <ul className="list-group">
          {posts.map(post => (
            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">{post.title}<button className="btn btn-primary">Vedi dettagli</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PostsPages;