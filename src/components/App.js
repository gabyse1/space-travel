import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../scss/App.scss';
import Navbar from './Navbar';
import Rockets from './Rockets';
import Missions from './Missions';
import Dragons from './Dragons';
import Profile from './Profile';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Rockets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
