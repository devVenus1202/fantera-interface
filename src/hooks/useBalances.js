import useWeb3Instance from "./useWeb3";
import ERC20ABI from "../abis/ERC20.json";
import { useEffect, useState } from "react";
import { ERC20_ADDRESS } from "../utils/addresses";
import { fromWei } from "../utils/helper";

export default function useBalance(status) {
  const {web3Instance, account} = useWeb3Instance();
  const [balance, setBalance] = useState("0");
  const erc20Contract = new web3Instance.eth.Contract(ERC20ABI, ERC20_ADDRESS);
  useEffect(() => {
    erc20Contract.methods.balanceOf(account)
      .call()
      .then(res => setBalance(fromWei(res)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, status])
 
  return {balance};
}