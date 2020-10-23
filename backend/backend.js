// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');

// Construct
const wsProvider = new WsProvider('wss://rpc.polkadot.io');

ApiPromise
.create({ provider: wsProvider })
.then((api) =>
  api.rpc.chain.getHeader().then((header)=>{
    console.log(`========last Block========`)
    console.log(`Hash:${header.hash.toHex()}`)
    console.log(`parentHash:${header.parentHash.toHex()}`)
    console.log(`number:${header.number.toHuman()}`)
    console.log(`stateRoot:${header.stateRoot.toHuman()}`)
    console.log(`extrinsicsRoot:${header.extrinsicsRoot.toHuman()}`)
  })
);
