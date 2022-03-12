import CatList from './components/CatList.js';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


function App() {
  return (
    <div style={{ backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, }} className="App">
       <h1 style={{backgroundColor: "lightblue", textAlign: "center",}}>DAFTAR MEONG</h1>
      <CatList />
    </div>

    
  );
}

export default App;