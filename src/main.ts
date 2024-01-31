import { configDotenv } from 'dotenv';
import { Contract, keyStores, connect } from 'near-api-js';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { HotGameContract } from './types';

configDotenv();

const accountId = process.env.ACCOUNT_ID as string;

const keyStore = new keyStores.InMemoryKeyStore();
keyStore.setKey('mainnet', accountId, new KeyPairEd25519(process.env.PRIVATE_KEY as string));

const config = {
  keyStore,
  networkId: 'mainnet',
  nodeUrl: 'https://beta.rpc.mainnet.near.org'
};

async function main() {
  const near = await connect(config);

  const account = await near.account(accountId);
  const contract = new Contract(account, 'game.hot.tg', {
    changeMethods: ['claim'],
    viewMethods: [],
    useLocalViewExecution: false
  }) as HotGameContract;

  await contract.claim({ args: {} });
}
main();
