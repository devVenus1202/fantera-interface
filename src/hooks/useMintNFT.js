import { useCallback } from "react";
import { ERC721_ADDRESS } from "../utils/addresses";
import useWeb3Instance from "./useWeb3";
import ERC721ABI from "../abis/ERC721.json";
import Web3 from "web3";

export default function useMintNFT(){
  const {web3Instance, account} = useWeb3Instance();
  const mintErc20 = useCallback((url, amount) => {
    const erc721Contract = new web3Instance.eth.Contract(ERC721ABI, ERC721_ADDRESS);
    erc721Contract.methods.safeMint(url,Web3.utils.toWei(amount)).send({from: account});
  },[])
  return mintErc20;
}