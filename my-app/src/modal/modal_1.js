import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ethers } from "ethers";
import Contract_ABI from "../Contracts/Contract_ABI.json";

import Web3, { Web3BaseWallet } from "web3";

export function ModalWindow() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [balance, setBalance] = useState(0);
  const [walletAddress, setWalletAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const walletChangeHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((res) => {
          if (res.length === 0) {
            console.log("empty: ", res);
            return;
          }
          console.log(res);
          changeHandlerWallet(res[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("need to instal MetaMask");
    }
  };

  const changeHandlerWallet = (newAddress) => {
    setWalletAddress(newAddress);
    updateEthers();
  };

  function updateEthers() {
    let tempProvider = new Web3BaseWallet(window.ethereum);
    // const tempProvider = new Web3Provider(window.ethereum);

    // console.log(tempProvider);
    let tempSigner = tempProvider.getSigner();
    let tempContract = new ethers.Contract(
      tempProvider,
      Contract_ABI,
      tempSigner
    );

    setProvider(tempProvider);
    setSigner(tempSigner);
    setContract(tempContract);
  }

  async function updateBalance() {
    let balanceBigN = await contract.balanceOf(walletAddress);
    console.log(balanceBigN);
    let balanceNumber = balanceBigN.toNumber();

    let decimals = contract.decimals();

    let tokenBalance = balanceNumber / Math.pow(10, decimals);

    setBalance(tokenBalance);
  }

  useEffect(() => {
    if (contract != null) {
      updateBalance();
    }
  }, [contract]);

  function openClick() {
    console.log(contract.methods.balanceOf(walletAddress));
    openModal();
    walletChangeHandler();
    // updateBalance();
    // accountChangedHandler();
    // connectWalletHandler();
  }

  return (
    <div>
      <p>
        <b>Wallet: </b>
        {walletAddress}
      </p>
      <p>
        <b>Balance:</b> {balance}
      </p>

      <button onClick={openClick}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <p>
          <b>Balance:</b> {balance}
        </p>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button type="button">tab navigation</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalWindow;

// const updateBalance = async () => {
//   // let balanceBigN = await contract.balanceOf(walletAddress);
//   // let balanceNumber = balanceBigN.toNumber();
//   // let tokenDecimals = await contract.decimals();
//   // let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);
//   // setBalance(tokenBalance);
// };

// const connectWalletHandler = () => {
//   if (window.ethereum && window.ethereum.isMetaMask) {
//     window.ethereum
//       .request({ method: "eth_accounts" })
//       .then((res) => {
//         if (res.length === 0) {
//           console.log("empty: ", res);
//           return;
//         }
//         console.log(res);
//         accountChangedHandler(res[0]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     console.log("need to instal MetaMask");
//   }
// };

// useEffect(() => {
//   connectWalletHandler();
// }, []);

// useEffect(() => {
//   if (window.ethereum && window.ethereum.isMetaMask) {
//     window.ethereum
//       .request({ method: "eth_requestAccounts" })
//       .then((res) => {
//         accountChangedHandler(res[0]);
//         setContract(res[0]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     console.log("need to instal MetaMask");
//   }
// }, []);

// const accountChangedHandler = async (newAddress) => {
//   console.log(newAddress);
//   let tempProvider = new Web3BaseWallet(newAddress);
//   const accAdd = "0x8856e0572c7fc07842767e880185dbd0065c0d26";

//   const tempContract = new ethers.Contract(
//     accAdd,
//     Contract_ABI,
//     tempProvider // Use the provider here
//   );
//   console.log(tempContract);
//   setContract(tempContract);
//   console.log(contract)
//   setWalletAddress(newAddress);
// };

// console.log(contract);

// const updateBalance = async () => {
//   if (contract) {
//     // Check if contract is not null
//     let balanceOfOwner = await contract.balanceOf(walletAddress);
//     let balanceNumber = balanceOfOwner.toNumber();
//     let tokenBalance = balanceNumber / Math.pow(10, contract.decimals());

//     setBalance(tokenBalance);
//   }
// };

// useEffect(() => {
//   if (contract != null) {
//     updateBalance();
//   }
// }, [contract]);
