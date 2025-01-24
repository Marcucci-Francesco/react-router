import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

const PostDetails = () => {

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

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/routerposts/${id}`)
      .then(res => {
        fetchPosts();
      })
      .catch(error => {
        console.log('Errore', error);
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {posts.map(post => (
        <div key={post.id} className="card container my-5">
          <img src={post.image} className="card-img-top my-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-primary" onClick={() => Navigate(-1)}>Torna alla lista</a>
              <a href="#" className="btn btn-danger" onClick={() => handleDelete(post.id)}>Elimina</a>
            </div>
          </div>
        </div>
      ))}

    </>

  )
}

export default PostDetails