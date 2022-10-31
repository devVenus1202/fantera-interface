import React from 'react'
import { useState } from 'react'
import Button from './Button'
import LoadingSpinner from './LoadingSpinner';
import MintForm from './MintForm';

import useApprove from '../hooks/useApprove';
import useBalance from '../hooks/useBalances';
import useMintErc20 from '../hooks/useMintErc20';
import { ERC721_ADDRESS } from '../utils/addresses';


export default function Mint() {
  const [showUploader, setShowUploader] = useState(false);
  const {mintErc20 : mintErc20Token, minting: mintingErc20} = useMintErc20();
  const {balance} = useBalance(mintingErc20)
  const {allowance, approve} = useApprove(ERC721_ADDRESS);
  const getToken = () => {
    mintErc20Token(1000);
  }
  const approveToken = () => {
    approve(1000);
  }
  const completeMint = () => {

  }
  return (
    <div className='mint'>
      <div>
        FANT(Fantera Token) : {balance}
      </div>
      <div className='action-bar'>
        {!mintingErc20 && <Button
          title="Click to obtain FANT token"
          onClick={getToken}
          icon="prefix-icon"
        >
          Obtain 1000 FANT
        </Button>}
        {mintingErc20 && <Button
          title="Click to obtain FANT token"
          icon="prefix-icon"
          disabled
        >
          Confirming <LoadingSpinner/>
        </Button>}
       
        {allowance === '0' ? <Button
            title="Click to disconnect wallet"
            onClick={approveToken}
            icon="prefix-icon"
          >
            Approve FANT(1000)
          </Button>:<Button
            title="Click to disconnect wallet"
            onClick={() => setShowUploader(true)}
            icon="prefix-icon"
          >
            Mint with 100 FANT
          </Button>}
      </div>
      <div className='input-area'>
        
      </div>
      {showUploader && <MintForm onCompleted={completeMint} />}
    </div>
  )
}
