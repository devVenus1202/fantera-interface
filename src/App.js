import './App.scss';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import Mint from './components/Mint';
import useWeb3Instance from './hooks/useWeb3';
import { ERC20_ADDRESS, ERC721_ADDRESS } from './utils/addresses';

function App() {
  const {status, connectWallet} = useWeb3Instance();

  const renderWalletButton = () => {
    switch (status) {
      case "initializing":
        return (
          <LoadingSpinner />
        );

      case "notConnected":
        return (
          <div className="connect-wallet">
            <Button 
              color="fantra"
              title="Click to connect wallet"
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          </div>
        );

      case "connecting":
        return (
          <LoadingSpinner/>
        );

      case "connected":
        return (
          <Mint/>
        );
      default:
        return <div>Metamask unavailable</div>;
    }
  }

  return (
    <div className="App">
      <h1>Fantera Collection</h1>
      <div>
        Token(FANT) address: {ERC20_ADDRESS}
      </div>
      <div>
        Collection(FANTC) address: {ERC721_ADDRESS}
      </div>
      {renderWalletButton()}
    </div>
  );
}

export default App;
