import { Routes, Route, HashRouter } from 'react-router-dom';

// import { GlobalProvider } from './Context';

import Home from './pages/home/home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
