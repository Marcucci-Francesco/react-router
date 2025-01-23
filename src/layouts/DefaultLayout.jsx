import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav';
import Header from '../components/header';
import { menu } from '../assets/menu';


const DefaultLayout = () => {
  return (
    <>
      <Header menu={menu} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout