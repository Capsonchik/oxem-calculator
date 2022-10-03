import './App.css';
import {Header} from './components/header/header';
import {MainForm} from './components/form/main-form';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <MainForm/>
      </div>
    </div>
  );
}

export default App;
