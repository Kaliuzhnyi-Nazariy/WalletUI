import { useEffect, useState } from "react";
import Modal from "react-modal";
import Contract_ABI from "../Contracts/Contract_ABI.json";
import Web3 from "web3";
import { useForm, SubmitHandler } from "react-hook-form";
const BigNumber = require("bignumber.js");
const EthereumAddress = require("ethereum-address");

// const {
//   isValidEthereumAddress,
// } = require("@getdelta/wallet-address-validator");

export function ModalWindow() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [walletAddress, setWalletAddress] = useState(null);
  const [contract, setContract] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reset();
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
    let tempProvider = new Web3(window.ethereum);
    const contrAdd = "0xE5D2AfFc981ac560DdEE0AcA81BadfF9c4104649";

    let tempContract = new tempProvider.eth.Contract(Contract_ABI, contrAdd);
    setContract(tempContract);
  }

  async function updateBalance() {
    let balanceBigN = await contract.methods.balanceOf(walletAddress).call();
    let bigN = BigNumber(balanceBigN).toFixed();
    setBalance(bigN);
    // let balanceBigN = await contract.methods.balanceOf(walletAddress).call();
    // let bigN = BigNumber(balanceBigN).toFixed();
    // console.log("bigN: ", bigN);
    // const decimalsProm = await contract.methods.decimals().call();
    // const decimals = BigNumber(decimalsProm).toFixed();
    // console.log(decimals);
    // const balanceValue = bigN / 10 ** decimals;
    // console.log(balanceValue);
    // setBalance(balanceValue);
  }

  useEffect(() => {
    if (contract != null) {
      updateBalance();
    }
  }, [contract]);

  function openClick() {
    openModal();
    walletChangeHandler();
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (EthereumAddress.isAddress(data.toWalletAddress)) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const senderAddress = accounts[0]; // Assuming you're using the first account
        const tx = await contract.methods
          .transfer(data.toWalletAddress, data.value)
          .send({ from: senderAddress });
        updateBalance();
      } catch (error) {
        console.error("Error transferring and burning tokens:", error);
      }
    } else {
      console.log("Address is NOT valid");
    }
  };
  return (
    <div>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Wallet</p>
          <input
            {...register("toWalletAddress", {
              required: "Address field is obvious!",
            })}
          />
          <p>{errors.toWalletAddress?.message}</p>
          <p>Amount</p>
          <input
            {...register("value", { required: "Value field is obvious!" })}
          />
          <p>{errors.toWalletAddress?.message}</p>
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
}

export default ModalWindow;
