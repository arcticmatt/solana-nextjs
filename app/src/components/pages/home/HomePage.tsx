import { Connection, PublicKey } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { Program, Provider, web3 } from "@project-serum/anchor";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import ResponsiveContainer from "src/components/ResponsiveContainer";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
import idl from "src/idl.json";
import styles from "@/css/pages/home/HomePage.module.css";
import { useState } from "react";

const wallets = [
  /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
  getPhantomWallet(),
];

const { SystemProgram, Keypair } = web3;
/* create an account  */
const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "processed",
};
const programID = new PublicKey(idl.metadata.address);

export default function HomePage(): JSX.Element {
  return (
    <ResponsiveContainer>
      <div className={styles.container}>Hi</div>
    </ResponsiveContainer>
  );
}
