import { useState } from "react";

function App(){

  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  async function getName(){

    try{
      setError(null);
      const response = await fetch('/api/getName');
      const data = await response.json();
      setName(data.name);
    }
    catch{
      setName(null);
      setError("Error fetching name.")
    }

  }

  return (
    <div>
      <h1>Hello, CI/CD Pipeline!</h1>
      <p>This is a test deployment using GitHub Actions & AWS EC2.</p>
      <p>Current version is V5. Date 29 March, 2024. Time 23:58 PM</p>
      {!name && <button onClick={getName}>Who am I ?</button>}
      {!error && name && <p>My name is {name}</p>}
      {!name && error && <p>{error}</p>}
    </div>
  )

}


export default App;
