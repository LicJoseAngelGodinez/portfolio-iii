import { Routes, Route } from 'react-router-dom';

// import { GlobalProvider } from './Context';

import Home from './pages/home/home';
import Navbar from './component/navbar/navbar';
import About from './pages/about/about';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
