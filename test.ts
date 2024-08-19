import { Keypair } from '@solana/web3.js';
import bs58 from "bs58"
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('devnet'));
const secreteKey = bs58.decode("Your Private Key")
const keypair = Keypair.fromSecretKey(secreteKey);
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);

