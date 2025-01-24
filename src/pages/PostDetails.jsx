import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

  const apiUrl = 'http://localhost:3000';
  const [posts, setPosts] = useState(null)
  const navigate = useNavigate();
  const { id } = useParams();


  const fetchPosts = () => {
    axios.get(`${apiUrl}/routerposts/${id}`)
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
        navigate('/posts')
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
      <div key={posts?.id} className="card container my-5">
        <img src={posts?.image} className="card-img-top my-4" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{posts?.title}</h5>
          <p className="card-text">{posts?.content}</p>
          <p className="card-text">Tags: {posts?.tags.join(', ')}</p>
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-primary" onClick={() => navigate(-1)}>Torna alla lista</a>
            <a href="#" className="btn btn-danger" onClick={() => handleDelete(posts?.id)}>Elimina</a>
          </div>
        </div>
      </div>
    </>

  )
}

export default PostDetails