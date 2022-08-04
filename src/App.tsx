import { Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Blog, Me, Projects, Error } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/me" element={<Me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
