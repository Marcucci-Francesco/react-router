import { NavLink } from 'react-router-dom'

const header = (props) => {
  const { menu } = props;

  return (
    <header>
      <h1 className='text-center py-3'>FOOD BLOG</h1>
      <div className="container-fm container-fluid pb-3">
        <nav>
          <ul className='d-flex justify-content-center justify-content-between'>
            {menu.map(item =>
              <li className='py-1 px-4' key={item.id}>
                <NavLink to={item.url}>{item.text}</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default header