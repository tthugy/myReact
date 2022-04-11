import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(response => 
    response.json()
    ).then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])

  return (
    <div>
      <h1>🔮 Coin Tracker {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
      <div>
        <input className={styles.trackBox}></input>
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      </div>
      }
    </div>
  );
}

export default App;
