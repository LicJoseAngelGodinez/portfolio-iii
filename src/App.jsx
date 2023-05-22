import { Routes, Route } from 'react-router-dom';

// import { GlobalProvider } from './Context';

import Home from './pages/home/home';
import Navbar from './component/navbar/navbar';
import About from './pages/about/about';
import Experiencie from './pages/experience/experiencie';
import Work from './pages/work/work';
import Contact from './pages/contact/contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experiencie />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
