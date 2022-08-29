import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navigation';
import SignIn from './components/SignIn';
import {Link,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      hello
      <div>
        <Link to = '/sign-in'>
          Go to website
        </Link>
      </div>
    </div>
  );
}

export default App;
