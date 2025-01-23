import { Outlet } from 'react-router-dom'
import MainNav from '../components/MainNav';


const DefaultLayout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout