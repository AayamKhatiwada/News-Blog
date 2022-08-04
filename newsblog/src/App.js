import './App.css';
import Home from './pages/home/home';
import Topbar from './items/topbar/Topbar';
import Single from './pages/single/Single';

function App() {
  return (
    <div>
      <Topbar />
      {/* <Home/> */}
      <Single />
    </div>
  );
}

export default App;
