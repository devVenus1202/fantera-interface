import Web3 from "web3"

export const fromWei = (value) => {
  console.log("Web3.utils.fromWei(value)", Web3.utils.fromWei(value))
  return Web3.utils.fromWei(value)
}

export const toWei = (value) => {
  console.log("value", value)
  return Web3.utils.toWei(`${value}`)
}