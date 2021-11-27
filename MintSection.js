import React, { useState, useEffect} from 'react';
import { connectWallet, getCurrentWalletConnected } from "./interact.js";
import { Container, Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Form,
    FormInput
} from './MintSection.elements';
import getWeb3 from '../getWeb3.js';
import DreamyDucklingsContract from "../../contracts/DreamyDucklings.json";
import snapshot from './snapshot.json';
import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'




function MintSection({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) {

    const [formStr, setformStr] = useState('1');
    const [status, setStatus] = useState("");
    const [account, setAccount] = useState("");
    const [web3, setWeb3] = useState("");
    const [approved, setApproved] = useState(false);

    // const snapshot = JSON.parse(snapshotjson)

    


    function addWalletListener() {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setAccount(accounts[0]);
              findApproved(accounts[0])
              setStatus("");
            } else {
              setAccount("");
              setStatus("🦊 Connect to Metamask using the blue Connect button.");
              findApproved('beepboop')
            }
          });
        } else {
          setStatus(
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
                You must install Metamask to interact.
              </a>
            </p>
          );
        }
    }

    const findApproved = async (address) => {
        const web3 = await getWeb3();
        const numApp = snapshot[web3.utils.toChecksumAddress(address.toLowerCase())]
        // console.log(snapshot[csaddress])
        // console.log(numApp)
        // console.log(typeof numApp === 'undefined')
        if (typeof numApp === 'undefined') {
            return false
        } else {
            return true
        }
    }


    useEffect(() => {
        async function mountweb3(){
            const {address, status} = await getCurrentWalletConnected();
            const web3 = await getWeb3();
            const approval = await findApproved(address)
            console.log(approval)
            setAccount(address)
            setStatus(status); 
            setWeb3(web3)
            setApproved(approval)
            addWalletListener();
        }
        mountweb3();
    }, []);

    const getProof = () => {
        let leaves = new Array(snapshot.length).fill('');
        let i = 0
        for (var key in snapshot) {
            leaves[i] = keccak256(key.toLowerCase())
            i++
        }
        const tree = new MerkleTree(leaves, keccak256, { sort: true })
        const leaf = keccak256(account.toLowerCase())
        const proof = tree.getHexProof(leaf)
        return proof
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setAccount(walletResponse.address);
        setApproved(await findApproved(walletResponse.address));
      };

    const handleClick = async (e) => {
        e.preventDefault()
        
        if (status !== "") {
            return;
        }

        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId(); //Get the network ID
        const contract = new web3.eth.Contract(DreamyDucklingsContract, "0xc6f4cB7889D2Ad9B768AA6F4c392EE7128EC86DA");

        
        console.log(contract)
        console.log("Tokens to mint: " + formStr)

        //check here if the formStr is a positive number and less than available NFTs
        const mintCost = 0.00;
        const quantity = parseInt(formStr)
        const amount = parseInt(formStr) * mintCost
        console.log(mintCost)
        console.log(amount)

        // if (isNaN(quantity) || quantity < 1 || quantity > 20) {
        //     setStatus("Not a valid number for minting. Refresh page to try again.");
        //     return;
        // }

        const PAUSE = false



        if (PAUSE) {
            contract.methods.pause(false).send({ from: account })
        } else {
            console.log(approved)
            const proof = getProof()
            const addGasLimitBuffer = (value) =>
                value.mul(web3.utils.toBN(10000 + 2000)).div(web3.utils.toBN(10000))
            try {
                const gasLimit = await contract.methods.claim(proof, quantity).estimateGas({ from: account, value: web3.utils.toWei(amount.toString(), 'ether') })
                const _gasPrice = await web3.eth.gas_price    
                const result = await contract.methods.claim(proof, quantity).send({
                    from: account,
                    gasLimit: addGasLimitBuffer(web3.utils.toBN(gasLimit)),
                    gasPrice: _gasPrice,
                    value: web3.utils.toWei(amount.toString(), 'ether')
                });
            } catch (err) {
                window.alert(err)
            }
        }
    };





    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <Button fontBig onClick={connectWalletPressed}>{account.length > 0 ? (
                                "Connected: " +
                                String(account).substring(0, 6) +
                                "..." +
                                String(account).substring(38)
                                ) : (
                                <span>Connect Wallet</span>
                            )}</Button>
                            <div>&nbsp;&nbsp;</div>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>


                                <Form>
                                    <FormInput type="number" min="1" max="20" placeholder='1'
                                        onChange={event => setformStr(event.target.value)} />
                                    <Button fontBig onClick={handleClick}>Mint Now</Button>
                                </Form>

                                <Subtitle lightTextDesc={lightTextDesc}>{approved ? (
                                "You are eligible to mint up to 20 tokens at a time." ) : (
                                <span>You are not eligible to claim any tokens.</span>
                            )}</Subtitle>
                                <Subtitle lightTextDesc={lightTextDesc}>{status}</Subtitle>

                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default MintSection;
