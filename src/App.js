import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Service from './Component/Service'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from 'react-router-dom'
import NavMenu from './Component/NavMenu'
function App() {
  return (
    <>
      <NavMenu/>      
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/service" component={Service}/>

          {/* If path is not from the above ones */}
          <Redirect to = '/' />

      </Switch>
      </>
    
  );
}

export default App;
