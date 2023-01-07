import UserForm from './components/UserForm';
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState ({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  /*const [errors, setErrors] = useState("")*/
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  return (
    <div className="App">
      <UserForm state={state} setState={setState}  hasBeenSubmitted={hasBeenSubmitted} setHasBeenSubmitted={setHasBeenSubmitted}/>
    </div>
  );
}

export default App;