
import './App.css';
import Layout from './layouts/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
// import Portfolio from './screens/Portfolio';
// import About from './screens/About';
// import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {/* <Route path = "/Portfolio" component ={Portfolio}></Route>
          <Route path = "/About" component ={About}></Route>
          <Route path = "/Contact" component ={Contact}></Route> */}
          <Route path = "/" component ={Home}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
