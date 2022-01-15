import React, {useEffect, useState} from 'react';
import axios from 'axios';

function VswapPrice (props) {
  const [coins, setCoins] = useState ([]);

  useEffect (() => {
    axios
      .get (
        'https://deep-index.moralis.io/api/v2/erc20/0x2ed7cbffef349a56f8600dbe86e9392e400edbc1/price?chain=bsc',
        {
          headers: {
            'X-API-Key': 'v8lvaPW0IoL7vNfoiwBzXT3q840Kkni5pfC8KIvWp4aa3n6gY4qwVv2y5yNNgtFi',
          },
        }
      )
      .then (res => {
        console.log (res.data);
        setCoins (res.data);
      })
      .catch (error => console.log (error));
  }, []);

  return (
    <div>

          {(coins?.usdPrice ?? 0).toFixed(8)}
        
    </div>
  );
}

export default VswapPrice;
