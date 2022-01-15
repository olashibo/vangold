import React, {useEffect, useState} from 'react';
import axios from 'axios';

function VgdPrice (props) {
  const [coins, setCoins] = useState ([]);

  useEffect (() => {
    axios
      .get (
        'https://deep-index.moralis.io/api/v2/erc20/0x487ecd4cfa635d1a9409e86cd22d33d5abeb7b44/price?chain=bsc',
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

export default VgdPrice;
