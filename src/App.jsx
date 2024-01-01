import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './component/Loader/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/AboutUs'));

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
