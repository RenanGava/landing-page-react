import './App.css';
import Header from './Header';
import Services from './Services';
import Team from './Team';
import Form from './Form';
import Footer from './Footer';
import device from './images/device.png'
import mockup from './images/mockup.jpg'
import actor from './images/actor1.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Services 
      device = {device}
      mockup = {mockup}
      />
      <Team actor = {actor}/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
