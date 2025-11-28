import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='bg-gray-900 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='navbar-brand'>
            <Link to="/" className='text-2xl font-bold text-white hover:text-blue-400 transition-colors'>
              Movie App
            </Link>
          </div>
          <div className='navbar-links flex gap-6'>
            <Link to="/" className='nav-link text-white hover:text-blue-400 transition-colors font-medium'>
              Home
            </Link>
            <Link to="/favorites" className='nav-link text-white hover:text-blue-400 transition-colors font-medium'>
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar