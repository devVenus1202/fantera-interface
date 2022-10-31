import './App.scss';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import Mint from './components/Mint';
import useWeb3Instance from './hooks/useWeb3';

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
      {renderWalletButton()}
    </div>
  );
}

export default App;
