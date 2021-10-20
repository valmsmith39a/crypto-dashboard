import { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const fetchTokens = async () => {
    const URL_BASE = `${process.env.REACT_APP_API_URL}`
    const { data } = await axios.get(URL_BASE + '/api/tokens')
  }

  useEffect(() => { 
    fetchTokens()
  })

  return (
    <div className="App">
          <h1 className="bg-dark text-light main-title">Cryptomania</h1>
          <table class="table table-dark">       
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
                <th scope="col">Sentiment Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Bitcoin</td>
                <td>BTC</td>
                <td>64,000</td>
                <td>80</td>
              </tr>
              <tr>
                <td scope="row">Ethereum</td>
                <td>ETH</td>
                <td>3,800</td>
                <td>82</td>
              </tr>
              <tr>
                <td scope="row">Solana</td>
                <td>SOL</td>
                <td>150</td>
                <td>55</td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default App;
