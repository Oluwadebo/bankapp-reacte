import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Debo from './component/Debo';
import Fam from './component/Familyapi';

function App() {
  return (
    <div className="App">
      <Debo/>
      <Fam/>
    </div>
  );
}

export default App;