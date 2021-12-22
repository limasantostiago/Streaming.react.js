import './Navbar.css';

const Navbar = (props) => (
  <div className='navbar'>
    <h1 className='navbar__title'></h1>
    <form onSubmit={props.onSubmit} className='navbar__search'>
      <input type='text' placeholder='Digite o nome...' required />
      <input type='submit' value='Procurar' />
    </form>
  </div>
)

export default Navbar;