import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom';


const App = () => (
  <div>
    <h1>Super Store New</h1>
    <nav>
      <Link to="/about">About</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default App
