import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <div className="App">
      <h1>Api de gatitos y facts</h1>
      <p>{fact}</p>
    </div>
  );
}

export default App;
