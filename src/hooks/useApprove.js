import useWeb3Instance from "./useWeb3";
import ERC20ABI from "../abis/ERC20.json";
import { useCallback, useState } from "react";
import { ERC20_ADDRESS } from "../utils/addresses";
import BigNumber from 'bignumber.js';
import { fromWei, toWei } from "../utils/helper";

export default function useApprove(spenderAddress) {
  const {web3Instance, account} = useWeb3Instance();
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const erc20Contract = new web3Instance.eth.Contract(ERC20ABI, ERC20_ADDRESS);
  const approve = useCallback((amount) => {
    console.log("toWei(amount)",toWei(amount))
    erc20Contract.methods.approve(spenderAddress, toWei(amount)).send({from: account});
  },[])
  erc20Contract.methods.allowance(spenderAddress,account)
    .call()
    .then(res => setAllowance(fromWei(res)));
  return {allowance, approve};
}