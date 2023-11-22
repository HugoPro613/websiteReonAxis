import './App.css';
import BuildingPage from './pages/BuildingPage';
import MainPage from './pages/MainPage';

function App() {

  const underConstruction = true;

  return (
    <div className="App">
      {underConstruction ?
        <BuildingPage />
        :
        <MainPage />
      }
    </div>
  );
}

export default App;
