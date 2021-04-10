# Popular Ethereum ABIs

```bash
npm install eth-abis
```

## ERC20 Token

```js
import erc20 from 'eth-abis/abis/ERC20.json';
```

## Uniswap

```js
import UniswapPair from 'eth-abis/abis/UniswapPair.json';
import UniswapFactory from 'eth-abis/abis/UniswapFactory.json';
import UniswapRouter from 'eth-abis/abis/UniswapRouter.json';
```

## Get Custom Abi

```js
import { getAbi } from 'eth-abis';


function doSomething() {
  const abi = await getAbi('xxxaddress');
}
```
