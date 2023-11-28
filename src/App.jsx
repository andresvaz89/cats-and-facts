import { useEffect, useState } from 'react';

import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
/* const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`; */

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');
        console.log(firstThreeWords);

        fetch(
          `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(`https://cataas.com${url}`);
          });
      });
  }, []);

  return (
    <div className="App">
      <h1>Api de gatitos y facts</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Cat saying first three words from a random quote"
        />
      )}
    </div>
  );
}

export default App;
