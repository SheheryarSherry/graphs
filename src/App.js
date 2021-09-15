
import './App.css';
import SearchAppBar from './Components/Header';
import Content from './Components/Content'
function App() {
  return (
    <div style={{backgroundColor:'#F4FBFF'}} className="App">
     <SearchAppBar/>
     <Content/>
    </div>
  );
}

export default App;
