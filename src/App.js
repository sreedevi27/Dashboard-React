import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProjectStatus from './components/ProjectStatus';
import Table from './components/Table';
import mockData from './components/Mock_Data.json';

function App() {
  return (
   <div className="App">
      <Header />
     
     <ProjectStatus data={mockData}/>
 
    </div>
  );
}

export default App;
