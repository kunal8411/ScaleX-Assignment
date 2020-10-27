
import './App.css';
import Header from './components/header/header.components'
import signInAndSignUp from './pages/signInAndSignUp/signInAndSignUp.component'
import { Switch, Route}  from 'react-router-dom';
import ClippedDrawer from './pages/sidebar/sidebar.component'
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/signin' component={signInAndSignUp} />
        <Route path='/dashboard' component={ClippedDrawer}/>
      </Switch>
    </div>
  );
}

export default App;
