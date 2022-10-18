import Content from './components/content';
import './App.css';
import Section from './components/section';
import Bottom from './components/bottom';
// import Header from './components/header';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Bottom/>
      <Content/>
      <Section/>
    </div>
  );
}

export default App;
