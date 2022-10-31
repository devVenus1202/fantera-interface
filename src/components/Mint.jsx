import React from 'react'
import { useState } from 'react'
import useApprove from '../hooks/useApprove';
import useMintErc20 from '../hooks/useMintErc20';
import { ERC721_ADDRESS } from '../utils/addresses';
import Button from './Button'
import UploadFile from './UploadFile';

export default function Mint() {
  const [showUploader, setShowUploader] = useState(false);
  const mintErc20Token = useMintErc20();
  const {allowance, approve} = useApprove(ERC721_ADDRESS);
  const getToken = () => {
    mintErc20Token(100);
  }
  const mintNFT = () => {

  }
  const approveToken = () => {
    approve(1000);
  }
  return (
    <div>
      <div className='action-bar'>
        <Button
          title="Click to disconnect wallet"
          onClick={getToken}
          icon="prefix-icon"
        >
          Obtain
        </Button>
        <Button
          title="Click to disconnect wallet"
          onClick={() => setShowUploader(true)}
          icon="prefix-icon"
        >
          Mint
        </Button>
      </div>
      <div className='input-area'>
        {allowance === '0' && <Button
          title="Click to disconnect wallet"
          onClick={approveToken}
          icon="prefix-icon"
        >
          Approve
        </Button>}
      </div>
      {showUploader && <UploadFile />}
    </div>
  )
}
