import SIgnUp from './AWS/SIgnUp';
import SignIn from './AWS/SignIn';
import Status from './AWS/Status';
import './App.css';
import Settings from './Components/Settings';
import { Account } from './Context/Account';
import GoogleSignIn from './Google/GoogleSignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Account>

          <Status />
          <SIgnUp />
          <SignIn />
          <Settings />
          <GoogleSignIn />
        </Account>
      </header>
    </div>
  );
}

export default App;
