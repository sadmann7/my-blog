import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/main';
import { Home, Blog, Me, Projects, Error } from './pages/main';

function App() {
  return (
    <div className=" bg-white dark:bg-gray-900 transition-all">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/me" element={<Me />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
