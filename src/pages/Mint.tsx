import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { TransactionReceipt, Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import PageTitle from "../components/common/PageTitle";
import { COLORS } from "../constants";
import BG from "../images/bg.jpg";
import useSWR from "swr";
import { formatEther, parseEther } from "@ethersproject/units";
import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { keccak256 } from "@ethersproject/keccak256";
import MerkleTree from "merkletreejs";
import { arrayify, BytesLike } from "@ethersproject/bytes";
import MoonLoader from "react-spinners/MoonLoader";
import Alert from "react-bootstrap/Alert";
import Countdown from "react-countdown";
import mintingContractAbi from "../abi/mintingContract.json";
import snapshotJson from "../snapshot.json";

const PageWrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  width: 100%;
  height: auto;
  min-height: 90vh;
  text-align: left;
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  min-height: 400px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-family: "LeagueSpartan-Light";
    font-size: 18px;
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
`;

const MintButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "grey" : COLORS.red)};
  border-radius: 48px;
  font-family: "LeagueSpartan-Bold";
  font-size: 18px;
  width: 250px;
  margin: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 16px 32px;
  transition: background-color 0.2s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "grey" : "black")};
  }
`;

const MintInputWrapper = styled.div`
  font-size: 30px;
  font-family: "LeagueSpartan-Bold";
`;

const MintInput = styled.input`
  border: none;
  outline: none;
  font-family: "LeagueSpartan-Bold";
  font-size: 30px;
  border-bottom: 2px solid black;
  background-color: transparent;
  text-align: center;
  width: 60px;
`;

const ErrorMessage = styled(Alert)`
  overflow-wrap: break-word;
  font-family: "LeagueSpartan-Light";
  text-align: center;
  padding: 1em;
  max-width: 400px;
`;

const TxReceipt = styled(Alert)`
  font-family: "LeagueSpartan-Light";
  text-align: left;
  max-width: 400px;
`;

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    4, // Rinkeby
    1337, // Localhost
  ],
});

const keccack256Buffer = (data: BytesLike) => {
  const asArray = arrayify(keccak256(data));
  return Buffer.from(asArray);
};

const leaves = snapshotJson.addresses.map((addr) => keccack256Buffer(addr));
const TREE = new MerkleTree(leaves, keccack256Buffer, { sort: true });

const getMerkleProof = (account: string | null) => {
  if (!account) return null;
  const leaf = keccak256(account.toLowerCase());
  const proof = TREE.getHexProof(leaf);
  return proof;
};

const isPresale = (account: string | null) => {
  if (!account) return false;
  const proof = getMerkleProof(account);
  if (!proof) return false;
  return TREE.verify(
    proof,
    keccak256(account.toLowerCase()),
    TREE.getHexRoot()
  );
};

const fetcher =
  (library: Web3Provider, abi?: any) =>
  (...args: any) => {
    const [arg1, arg2, ...params] = args;
    // it's a contract
    if (isAddress(arg1)) {
      const address = arg1;
      const method = arg2;
      const contract = new Contract(address, abi, library.getSigner());
      return contract[method](...params);
    }
    // it's a eth call
    const method = arg1;
    return (library as any)[method](arg2, ...params);
  };

const Balance: React.FC = () => {
  const { account, library } = useWeb3React<Web3Provider>();
  const { data: balance } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library!),
  });
  if (!library || balance === undefined) {
    return null;
  }

  return (
    <>
      <h3>Welcome, {account?.slice(0, 6) + "..." + account?.slice(-4)}</h3>
      <h3>Balance: Ξ{parseFloat(formatEther(balance)).toPrecision(4)}</h3>
    </>
  );
};

const Mint: React.FC = () => {
  const { chainId, account, activate, library } = useWeb3React<Web3Provider>();
  const [mintNum, setMintNum] = useState<string>("1");
  const [confirming, setConfirming] = useState<boolean>(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [presaleStart, setPresaleStart] = useState<Date | null>(null);
  const [publicStart, setPublicStart] = useState<Date | null>(null);
  const [presaleStarted, setPresaleStarted] = useState<boolean>(false);
  const [publicSaleStarted, setPublicSaleStarted] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<TransactionReceipt | null>(
    null
  );
  const [error, setError] = useState("");

  const connectWallet = async () => {
    await activate(injectedConnector);
  };

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contractAddress =
    chainId === 1
      ? "0x39476d6a89243D2DbC061C8249822DEF652cb3Cc"
      : "0x7C5F6E1d2062b9eE665c7cDeF5DF739429Ff5eeE"; //change to localhost version
  const contract = useMemo(
    () =>
      new Contract(contractAddress, mintingContractAbi, library?.getSigner()),
    [library, contractAddress]
  );

  useEffect(() => {
    if (!contract || !contract.provider) return;
    async function getTiming() {
      const presaleStartTime = await contract.presaleStartTime();
      const presaleDuration = await contract.presaleLengthTime();
      const publicSaleStartDate = new Date(
        (presaleStartTime.toNumber() + presaleDuration.toNumber()) * 1000
      );
      const presaleStartDate = new Date(presaleStartTime.toNumber() * 1000);
      setPresaleStart(new Date(presaleStartTime.toNumber() * 1000));
      setPublicStart(
        new Date(
          (presaleStartTime.toNumber() + presaleDuration.toNumber()) * 1000
        )
      );
      // setPresaleStart(new Date(Date.now() + 3000));
      // setPublicStart(new Date(Date.now() + 15000));
      setPresaleStarted(Date.now() > presaleStartDate.getTime());
      setPublicSaleStarted(Date.now() > publicSaleStartDate.getTime());
      // setPresaleStarted(false);
      // setPublicSaleStarted(false);
    }

    getTiming();
  }, [contract]);

  const price = chainId === 1 ? 0.03 : 0.003;
  const showConnectButton = account === undefined;
  const isPresaleEligible = isPresale(account || "");

  const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      <>
        <h3>{presaleStarted ? "Presale ends in:" : "Presale starts in:"}</h3>
        <h2>
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </h2>
      </>
    );
  };

  const getMintButtonContent = () => {
    if (showConnectButton) return null;
    if (!chainId)
      return <h2>Unsupported network detected, please connect to mainnet</h2>;
    if (confirming) return <MoonLoader loading={true} size={30} />;
    if (account && library)
      return (
        <>
          <MintInputWrapper>
            #
            <MintInput
              value={mintNum}
              onChange={(e) => {
                setMintNum(e.currentTarget.value);
              }}
              type="number"
              max={20}
              min={1}
            />
            /20
          </MintInputWrapper>
          <MintButton
            disabled={
              !presaleStarted ||
              Number(mintNum) > 20 ||
              Number(mintNum) <= 0 ||
              (!isPresaleEligible && !publicSaleStarted && presaleStarted)
            }
            onClick={async () => {
              try {
                setTransaction(null);
                setError("");
                setConfirming(true);
                // const proof = getMerkleProof(account || "");
                const fn = "claimPublicSale";
                const args = [Number(mintNum)];
                const gasEstimate = await contract.estimateGas[fn](
                  ...args,
                  {
                    value: parseEther(String(Number(mintNum) * price)),
                  }
                );
                const tx = await contract[fn](...args, {
                  value: parseEther(String(Number(mintNum) * price)),
                  gasLimit: Math.floor(gasEstimate.toNumber() * 1.2),
                });
                const receipt = await library.waitForTransaction(tx.hash);
                setConfirming(false);
                setTransaction(receipt);
                setError("");
                setShowError(false);
                setShowSuccess(true);
              } catch (e: any) {
                setConfirming(false);
                setTransaction(null);
                setError(String(e.message));
                setShowError(true);
                setShowSuccess(false);
              }
            }}
          >
            Mint (Ξ
            {(Number(mintNum) * price).toPrecision(2)})
          </MintButton>
          {!isPresaleEligible && presaleStarted && !publicSaleStarted && (
            <Alert variant="warning">You are not eligible for presale</Alert>
          )}
          {error && showError && (
            <ErrorMessage
              variant="danger"
              dismissible
              onClose={() => setShowError(false)}
            >
              {error}
            </ErrorMessage>
          )}
          {transaction && showSuccess && (
            <TxReceipt
              variant="success"
              dismissible
              onClose={() => setShowSuccess(false)}
            >
              Mint successful!{" "}
              <a
                href={`https://${
                  chainId === 1 ? "" : "rinkeby."
                }etherscan.io/tx/${transaction.transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Etherscan
              </a>
            </TxReceipt>
          )}
        </>
      );
  };

  return (
    <PageWrapper>
      <PageContent>
        <PageTitle style={{ marginBottom: "16px" }}>
          Mint Decentrazines
        </PageTitle>
        {presaleStart && !presaleStarted && (
          <Countdown
            date={presaleStart}
            onMount={({ completed }) => completed && setPresaleStarted(true)}
            onComplete={() => setPresaleStarted(true)}
            renderer={renderCounter}
          />
        )}
        {publicStart && presaleStarted && !publicSaleStarted && (
          <Countdown
            date={publicStart}
            onMount={({ completed }) => completed && setPublicSaleStarted(true)}
            onComplete={() => setPublicSaleStarted(true)}
            renderer={renderCounter}
          />
        )}
        {showConnectButton &&
          (!chainId ? (
            <h2>Unsupported chain, please connect to mainnet</h2>
          ) : (
            <MintButton onClick={connectWallet}>Connect Wallet</MintButton>
          ))}
        {account && library && (
          <>
            <Balance />
            {getMintButtonContent()}
          </>
        )}
      </PageContent>
    </PageWrapper>
  );
};

export default Mint;
