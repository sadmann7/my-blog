import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Blog, Me, Projects, Error } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/me" element={<Me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
