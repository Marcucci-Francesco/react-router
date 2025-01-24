import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import AboutPages from './pages/AboutPages';
import PostsPages from './pages/PostsPages';
import DefaultLayout from './layouts/DefaultLayout';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePages} />
          <Route path='/chi siamo' Component={AboutPages} />
          <Route path='/posts' Component={PostsPages} />
          <Route path='/dettagli-post/:id' Component={PostDetails} />
          <Route path='/nuovo-post' Component={NewPost} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
