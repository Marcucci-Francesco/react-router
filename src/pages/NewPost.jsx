import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPost = () => {

  const initialFormPost = {
    title: '',
    content: '',
    image: '',
    tags: ''
  }

  const apiUrl = 'http://localhost:3000';
  const [formPosts, setFormPosts] = useState(initialFormPost)
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormPosts((prevFormPosts) => ({
      ...prevFormPosts,
      [name]: value
    }))
  }

  const handleAddPost = (e) => {
    e.preventDefault();
    const tagsArray = formPosts.tags.split(',').map(item => item.trim());

    const newPost = { ...formPosts, tags: tagsArray }

    axios.post(`${apiUrl}/routerposts`, newPost)
      .then(res => {
        setFormPosts(initialFormPost)
        navigate('/posts')
      })
  }

  return (
    <div className="container my-5">
      <h1 className='text-center'>I NUOVI POST</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title mb-4">
            <h2>Aggungi un nuovo post</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="name">Titolo post</label>
              <input id='title' type="text" name='title' value={formPosts.title} className='form-control' placeholder='Titolo del post...' onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="image">URL immagine</label>
              <input id='image' type="text" name='image' value={formPosts.image} className='form-control' placeholder='Inserisci URL immagine' onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Descrizione del post</label>
              <textarea className="form-control" id="content" name="content" value={formPosts.content} rows="3" placeholder='Descrivi il tuo post...' onChange={handleInputChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tags">Tags</label>
              <input id='tags' type="text" name='tags' value={formPosts.tags} className='form-control' placeholder='Tags del post...' onChange={handleInputChange} />
            </div>
            <div className="mb-3 mt-4 d-flex justify-content-between">
              <button className="btn btn-primary" type='submit' onClick={handleAddPost}>Aggiungi post</button>
              <Link className="btn btn-success" to={'/posts'}>Torna alla lista</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default NewPost