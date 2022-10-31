import useWeb3Instance from "./useWeb3";
import ERC20ABI from "../abis/ERC20.json";
import { useCallback, useState } from "react";
import { ERC20_ADDRESS } from "../utils/addresses";
import Web3 from "web3";

export default function useMintErc20() {
  const {web3Instance, account} = useWeb3Instance();
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState(null);
  const mintErc20 = useCallback((amount) => {
    const erc20Contract = new web3Instance.eth.Contract(ERC20ABI, ERC20_ADDRESS);
    setMinting(true);
    erc20Contract.methods.mint(Web3.utils.toWei(`${amount}`))
    .send({from: account})
    .on("error", (error) => {
      setError(error);
      setMinting(false);
    })
    .then(()=>{
      setMinting(false);
    });
  },[account, web3Instance.eth.Contract])
  return {mintErc20, minting, error};
}