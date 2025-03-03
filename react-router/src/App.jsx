import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav.jsx';
import One from './One.jsx';
import Two from './Two.jsx';
import Three from './Three.jsx';

function App() {


  return (
    <>
      <Router>
        <Nav />
          <Routes>
            <Route path="./One" element={<One />} />
            <Route path="./Two" element={<Two />} />
            <Route path="./Three" element={<Three />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;