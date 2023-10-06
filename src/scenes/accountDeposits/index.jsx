import React, { useState } from "react";
import { Button, Box, useMediaQuery, useTheme } from "@mui/material";
import DashboardHeading from "../../components/dashboard-heading";
import BitcoinLogo from "../../pictures/bitcoin-logo.png";
import EthereumLogo from "../../pictures/ethereum-logo.png";
import TronLogo from "../../pictures/tron-logo.png";
import DogecoinLogo from "../../pictures/dogecoin-logo.jpg";
import TetherLogo from "../../pictures/tether-logo.png";
import SolanaLogo from "../../pictures/solana-logo.jpg";
import RippleLogo from "../../pictures/ripple-logo.png";
import BinanceLogo from "../../pictures/binance-logo.png";
import LitecoinLogo from "../../pictures/litecoin-logo.png";
import cancelLogo from "../../pictures/cancel-logo.jpg";
import stellarLogo from "../../pictures/stellar-logo.png";
import BuyAPlan from "../../components/depositsComponents/BuyAPlan";
import TetherOnEthereumAddress from "../../pictures/Tetheronethereum-address.jpg";
import BitcoinAddress from "../../pictures/bitcoin-address.jpg";
import StellerAddress from "../../pictures/steller-address.jpg";
import LitecoinAddress from "../../pictures/litecoin-address.jpg";
import DogecoinAddress from "../../pictures/dogecoin-Address.jpg";
import TronAddress from "../../pictures/tron-address.jpg";
import RippleAddress from "../../pictures/ripple-address.jpg";
import BinancecoinAddress from "../../pictures/binanceCoin-address.jpg";
import EthereumAddress from "../../pictures/ethereum-address.jpg";
import SolanaAddress from "../../pictures/solana-address.jpg";
import CryptoAddress from "../../components/depositsComponents/CryptoAddress";

const AccountDeposits = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isDepositButton, setDepositButton] = useState(false);
  const [isSecondDepositButton, setSecondDepositButton] = useState(false);
  const [isConfirmClicked, setConfirmClick] = useState(false);
  const [isCryptoSent, setCryptoSent] = useState(false);
  const [isCryptoSentLast, setCryptoSentLast] = useState(false);

  const [isPayWithTetherOnEthereumClicked, setPayWithTetherOnEthereum] =
    useState(false);
  const [TetherOnEthereumBackground, setTetherOnEthereumBackground] =
    useState(false);
  const [isTetherOnEthereumConfirmClicked, setTetherOnEthereumConfirmClick] =
    useState(false);
  const [isTetherOnEthereumSentClicked, setTetherOnEthereumSentClick] =
    useState(false);
  const [TetherOnEthereumMessage, setTetherOnEthereumMessage] = useState(false);

  const [isPayWithBinanceCoinClicked, setPayWithBinanceCoin] = useState(false);
  const [BinanceCoinBackground, setBinanceCoinBackground] = useState(false);
  const [isBinanceCoinConfirmClicked, setBinanceCoinConfirmClick] =
    useState(false);
  const [isBinanceCoinSentClicked, setBinanceCoinSentClick] = useState(false);
  const [BinanceCoinMessage, setBinanceCoinMessage] = useState(false);

  const [isPayWithEthereumClicked, setPayWithEthereum] = useState(false);
  const [EthereumBackground, setEthereumBackground] = useState(false);
  const [isEthereumConfirmClicked, setEthereumConfirm] = useState(false);
  const [isEthereumSentClicked, setEthereumSent] = useState(false);
  const [EthereumMessage, setEthereumMessage] = useState(false);

  const [isPayWithBitcoinClicked, setPayWithBitcoin] = useState(false);
  const [BitcoinBackground, setBitcoinBackground] = useState(false);
  const [isBitcoinConfirmedClicked, setBitcoinConfirm] = useState(false);
  const [isBitcoinSentClicked, setBitcoinSent] = useState(false);
  const [BitcoinMessage, setBitcoinMessage] = useState(false);

  const [isPayWithSolanaClicked, setPayWithSolana] = useState(false);
  const [SolanaBackground, setSolanaBackground] = useState(false);
  const [isSolanaConfirmClicked, setSolanaConfirm] = useState(false);
  const [isSolanaSentClicked, setSolanaSent] = useState(false);
  const [SolanaMessage, setSolanaMessage] = useState(false);

  const [isPayWithDogeClicked, setPayWithDoge] = useState(false);
  const [DogeBackground, setDogeBackground] = useState(false);
  const [isDogeConfirmClicked, setDogeConfirm] = useState(false);
  const [isDogeSentClicked, setDogeSent] = useState(false);
  const [DogeMessage, setDogeMessage] = useState(false);

  const [isPayWithRippleClicked, setPayWithRipple] = useState(false);
  const [RippleBackground, setRippleBackground] = useState(false);
  const [isRippleConfirmClicked, setRippleConfirm] = useState(false);
  const [isRippleSentClicked, setRippleSent] = useState(false);
  const [RippleMessage, setRippleMessage] = useState(false);

  const [isPayWithTronClicked, setpayWithTron] = useState(false);
  const [TronBackground, setTronBackground] = useState(false);
  const [isTronSentClicked, setTronSent] = useState(false);
  const [isTronConfirmClicked, setTronConfirm] = useState(false);
  const [TronMessage, setTronMessage] = useState(false);

  const [isPayWithLitecoinClcked, setPayWithLitecoin] = useState(false);
  const [LitecoinBackground, setLitecoinBackground] = useState(false);
  const [isLitecoinConfirmClicked, setLitecoinConfirm] = useState(false);
  const [isLitecoinSentClicked, setLitecoinSent] = useState(false);
  const [LitecoinMessage, setLitecoinMessage] = useState(false);

  // stellar
  const handleCryptoSentClick = () => {
    setCryptoSent(true);
    setTimeout(() => {
      setCryptoSentLast(true);
    }, 2000);
  };
  const handleRemoveClick = () => {
    setDepositButton(false);
    setConfirmClick(false);
    setCryptoSent(false);
    setCryptoSentLast(false);
  };
  const handleDepositClick = () => {
    if (isDepositButton === false && isSecondDepositButton === false) {
      setDepositButton(true);
      setSecondDepositButton(true);
    } else {
      setDepositButton(false);
      setSecondDepositButton(false);
    }
  };
  const handleConfirmClick = () => {
    setConfirmClick(true);
    setSecondDepositButton(false);
  };

  // Tether on Ethereum
  const handleTetherOnEthereumSentClick = () => {
    setTetherOnEthereumSentClick(true);
    setTimeout(() => {
      setTetherOnEthereumMessage(true);
    }, 2000);
  };
  const handleTetherOnEthereumRemoveClick = () => {
    setPayWithTetherOnEthereum(false);
    setTetherOnEthereumConfirmClick(false);
    setTetherOnEthereumSentClick(false);
    setTetherOnEthereumMessage(false);
  };
  const handlePayTetherOnEthereumClick = () => {
    if (
      isPayWithTetherOnEthereumClicked === false &&
      TetherOnEthereumBackground === false
    ) {
      setPayWithTetherOnEthereum(true);
      setTetherOnEthereumBackground(true);
    } else {
      setPayWithTetherOnEthereum(false);
      setTetherOnEthereumBackground(false);
    }
  };
  const handlePayWithTetherOnEthereumConfirmClick = () => {
    setTetherOnEthereumConfirmClick(true);
    setTetherOnEthereumBackground(false);
  };

  // Binance coin
  const handleBinanceCoinSentClick = () => {
    setBinanceCoinSentClick(true);
    setTimeout(() => {
      setBinanceCoinMessage(true);
    }, 2000);
  };
  const handleBinanceCoinRemoveClick = () => {
    setPayWithBinanceCoin(false);
    setBinanceCoinConfirmClick(false);
    setBinanceCoinSentClick(false);
    setBinanceCoinMessage(false);
  };
  const handlePayBinanceCoinClick = () => {
    if (
      isPayWithBinanceCoinClicked === false &&
      BinanceCoinBackground === false
    ) {
      setPayWithBinanceCoin(true);
      setBinanceCoinBackground(true);
    } else {
      setPayWithBinanceCoin(false);
      setBinanceCoinBackground(false);
    }
  };
  const handleBinanceCoinConfirmClick = () => {
    setBinanceCoinConfirmClick(true);
    setBinanceCoinBackground(false);
  };

  // Ethereum
  const handlePayWithEtherumClick = () => {
    if (isPayWithEthereumClicked === false && EthereumBackground === false) {
      setPayWithEthereum(true);
      setEthereumBackground(true);
    } else {
      setPayWithEthereum(false);
      setEthereumBackground(false);
    }
  };
  const handleEthereumConfirmClick = () => {
    setEthereumConfirm(true);
    setEthereumBackground(false);
  };
  const handleEthereumRemoveClick = () => {
    setPayWithEthereum(false);
    setEthereumConfirm(false);
    setEthereumSent(false);
    setEthereumMessage(false);
  };
  const handleEthereumSentClick = () => {
    setEthereumSent(true);
    setTimeout(() => {
      setEthereumMessage(true);
    }, 2000);
  };

  // Bitcoin
  const handlePayWithBitcoinClick = () => {
    if (isPayWithBitcoinClicked === false && BitcoinBackground === false) {
      setPayWithBitcoin(true);
      setBitcoinBackground(true);
    } else {
      setPayWithBitcoin(false);
      setBitcoinBackground(false);
    }
  };
  const handleBitcoinConfirmClick = () => {
    setBitcoinConfirm(true);
    setBitcoinBackground(false);
  };
  const handleBitcoinRemoveClick = () => {
    setPayWithBitcoin(false);
    setBitcoinConfirm(false);
    setBitcoinMessage(false);
    setBitcoinSent(false);
  };
  const handleBitcoinSentClick = () => {
    setBitcoinSent(true);
    setTimeout(() => {
      setBitcoinMessage(true);
    }, 2000);
  };

  // Solana
  const handlePayWithSolanaClick = () => {
    if (isPayWithSolanaClicked === false && SolanaBackground === false) {
      setPayWithSolana(true);
      setSolanaBackground(true);
    } else {
      setPayWithSolana(false);
      setSolanaBackground(false);
    }
  };
  const handleSolanaConfirmClick = () => {
    setSolanaConfirm(true);
    setSolanaBackground(false);
  };
  const handleSolanaRemoveClick = () => {
    setPayWithSolana(false);
    setSolanaConfirm(false);
    setSolanaMessage(false);
    setSolanaSent(false);
  };
  const handleSolanaSentClick = () => {
    setSolanaSent(true);
    setTimeout(() => {
      setSolanaMessage(true);
    }, 2000);
  };

  // Tron
  const handlePayWithTronClick = () => {
    if (isPayWithTronClicked === false && TronBackground === false) {
      setpayWithTron(true);
      setTronBackground(true);
    } else {
      setpayWithTron(false);
      setTronBackground(false);
    }
  };
  const handleTronConfirmClick = () => {
    setTronConfirm(true);
    setTronBackground(false);
  };
  const handleTronRemoveClick = () => {
    setpayWithTron(false);
    setTronConfirm(false);
    setTronMessage(false);
    setTronSent(false);
  };
  const handleTronSentClick = () => {
    setTronSent(true);
    setTimeout(() => {
      setTronMessage(true);
    }, 2000);
  };

  // Ripple
  const handlePayWithRippleClick = () => {
    if (isPayWithRippleClicked === false && RippleBackground === false) {
      setPayWithRipple(true);
      setRippleBackground(true);
    } else {
      setPayWithRipple(false);
      setRippleBackground(false);
    }
  };
  const handleRippleConfirmClick = () => {
    setRippleConfirm(true);
    setRippleBackground(true);
  };
  const handleRippleRemoveClick = () => {
    setPayWithRipple(false);
    setRippleConfirm(false);
    setRippleSent(false);
    setRippleMessage(false);
  };
  const handleRippleSentClick = () => {
    setRippleSent(true);
    setTimeout(() => {
      setRippleMessage(true);
    }, 2000);
  };

  // Doge
  const handlePayWithDogeClick = () => {
    if (isPayWithDogeClicked === false && DogeBackground === false) {
      setPayWithDoge(true);
      setDogeBackground(true);
    } else {
      setPayWithDoge(false);
      setDogeBackground(false);
    }
  };
  const handleDogeConfirmClick = () => {
    setDogeConfirm(true);
    setDogeBackground(false);
  };
  const handleDogeRemoveClick = () => {
    setPayWithDoge(false);
    setDogeConfirm(false);
    setDogeSent(false);
    setDogeMessage(false);
  };
  const handleDogeSentClick = () => {
    setDogeSent(true);
    setTimeout(() => {
      setDogeMessage(true);
    }, 2000);
  };

  // Litecoin
  const handlePayWithLitecoinClick = () => {
    if (isPayWithLitecoinClcked === false && LitecoinBackground === false) {
      setPayWithLitecoin(true);
      setLitecoinBackground(true);
    } else {
      setPayWithLitecoin(false);
      setLitecoinBackground(false);
    }
  };
  const handleLitecoinConfirmClick = () => {
    setLitecoinConfirm(true);
    setLitecoinBackground(false);
  };
  const handleLitecoinRemoveClick = () => {
    setPayWithLitecoin(false);
    setLitecoinSent(false);
    setLitecoinConfirm(false);
    setLitecoinMessage(false);
  };
  const handleLitecoinSentClick = () => {
    setLitecoinSent(true);
    setTimeout(() => {
      setLitecoinMessage(true);
    }, 2000);
  };

  return (
    <>
      <Box height="55px"></Box>
      <DashboardHeading
        title="ACCOUNT DEPOSIT"
        subTitle="Our recommended payment systems"
      />

      {/* <div>
    CRYPTOCURRENCY
    </div> */}

      <Box
        mt="20px"
        ml="10px"
        mr="10px"
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="2.43%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 1" },
        }}
      >
        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={stellarLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handleDepositClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Steller
            </Button>
          </Box>
          {/* Stellar */}
          <BuyAPlan
            isDepositButton={isDepositButton}
            isSecondDepositButton={isSecondDepositButton}
            handleDepositClick={handleDepositClick}
            cancelLogo={cancelLogo}
            cryptoLogo={stellarLogo}
            nameText="Stellar (XLM)"
            contentText="BEP2, BEP20, ERC20"
            secondContentText="XLM"
            handleConfirmClick={handleConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={stellarLogo}
            cryptoAddressText="GCQCUGSMPWDI2D6OFLHCSAUGZW5MQMFWYJ6VOTPMH6SKAJC36GZJ5M36"
            cryptoAddressImg={StellerAddress}
            isConfirmClicked={isConfirmClicked}
            priceOfCrypto="1 Steller (XLM) = 0.1121 USD"
            minimumDepositAmount="450 XLM"
            handleCryptoSentClick={handleCryptoSentClick}
            handleRemoveClick={handleRemoveClick}
            isCryptoSent={isCryptoSent}
            isCryptoSentLast={isCryptoSentLast}
            cryptoSentButtonText="XLM"
          />
          {/* Tether on Ethereum */}
          <BuyAPlan
            isDepositButton={isPayWithTetherOnEthereumClicked}
            isSecondDepositButton={TetherOnEthereumBackground}
            handleDepositClick={handlePayTetherOnEthereumClick}
            cancelLogo={cancelLogo}
            cryptoLogo={TetherLogo}
            nameText="Tether (USDT)"
            contentText="BEP2, BEP20, OMNI, TRC20, SOL"
            secondContentText="Ethereum (ERC20)"
            handleConfirmClick={handlePayWithTetherOnEthereumConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={TetherLogo}
            cryptoAddressText="0x59371c19cC97779783800935D9cdbFAdAfE436cB"
            cryptoAddressImg={TetherOnEthereumAddress}
            isConfirmClicked={isTetherOnEthereumConfirmClicked}
            priceOfCrypto="1 Tether (USDT) = 1.00 USD"
            minimumDepositAmount="50 USDT"
            handleCryptoSentClick={handleTetherOnEthereumSentClick}
            handleRemoveClick={handleTetherOnEthereumRemoveClick}
            isCryptoSent={isTetherOnEthereumSentClicked}
            isCryptoSentLast={TetherOnEthereumMessage}
            cryptoSentButtonText="USDT"
          />
          {/* Binance */}
          <BuyAPlan
            isDepositButton={isPayWithBinanceCoinClicked}
            isSecondDepositButton={BinanceCoinBackground}
            handleDepositClick={handlePayBinanceCoinClick}
            cancelLogo={cancelLogo}
            cryptoLogo={BinanceLogo}
            nameText="Binance Coin (BNB)"
            contentText="BEP2, ERC20"
            secondContentText="Binance Smart Chain (BEP20)"
            handleConfirmClick={handleBinanceCoinConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={BinanceLogo}
            cryptoAddressText="0x59371c19cC97779783800935D9cdbFAdAfE436cB"
            cryptoAddressImg={BinancecoinAddress}
            isConfirmClicked={isBinanceCoinConfirmClicked}
            priceOfCrypto="1 Binance coin (BNB) = 213.64 USD"
            minimumDepositAmount="0.24 BNB"
            handleCryptoSentClick={handleBinanceCoinSentClick}
            handleRemoveClick={handleBinanceCoinRemoveClick}
            isCryptoSent={isBinanceCoinSentClicked}
            isCryptoSentLast={BinanceCoinMessage}
            cryptoSentButtonText="BNB"
          />

          {/* Ethereum */}
          <BuyAPlan
            isDepositButton={isPayWithEthereumClicked}
            isSecondDepositButton={EthereumBackground}
            handleDepositClick={handlePayWithEtherumClick}
            cancelLogo={cancelLogo}
            cryptoLogo={EthereumLogo}
            nameText="Ethereum"
            contentText="BEP2, BEP20, ERC20"
            secondContentText="ETH"
            handleConfirmClick={handleEthereumConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={EthereumLogo}
            cryptoAddressText="0x59371c19cC97779783800935D9cdbFAdAfE436cB"
            cryptoAddressImg={EthereumAddress}
            isConfirmClicked={isEthereumConfirmClicked}
            priceOfCrypto="1 Ethereum (ETH) = 1,647.67 USD"
            minimumDepositAmount="0.031 ETH"
            handleCryptoSentClick={handleEthereumSentClick}
            handleRemoveClick={handleEthereumRemoveClick}
            isCryptoSent={isEthereumSentClicked}
            isCryptoSentLast={EthereumMessage}
            cryptoSentButtonText="ETH"
          />

          {/* Bitcoin */}
          <BuyAPlan
            isDepositButton={isPayWithBitcoinClicked}
            isSecondDepositButton={BitcoinBackground}
            handleDepositClick={handlePayWithBitcoinClick}
            cancelLogo={cancelLogo}
            cryptoLogo={BitcoinLogo}
            nameText="Bitcoin (BTC)"
            contentText="BEP2, BEP20, ERC20, Polygon"
            secondContentText="BTC"
            handleConfirmClick={handleBitcoinConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={BitcoinLogo}
            cryptoAddressText="bc1qa055z8t6hmdv9evj0992nm5y8gd873h6kq3fdu"
            cryptoAddressImg={BitcoinAddress}
            isConfirmClicked={isBitcoinConfirmedClicked}
            priceOfCrypto="1 Bitcoin (BTC) = 27,465.90 USD"
            minimumDepositAmount="0.0018 BTC"
            handleCryptoSentClick={handleBitcoinSentClick}
            handleRemoveClick={handleBitcoinRemoveClick}
            isCryptoSent={isBitcoinSentClicked}
            isCryptoSentLast={BitcoinMessage}
            cryptoSentButtonText="BTC"
          />

          {/* tron */}
          <BuyAPlan
            isDepositButton={isPayWithTronClicked}
            isSecondDepositButton={TronBackground}
            handleDepositClick={handlePayWithTronClick}
            cancelLogo={cancelLogo}
            cryptoLogo={TronLogo}
            nameText="Tron (TRX)"
            contentText="BEP2, BEP20, ERC20"
            secondContentText="Tron"
            handleConfirmClick={handleTronConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={TronLogo}
            cryptoAddressText="0x59371c19cC97779783800935D9cdbFAdAfE436cB"
            cryptoAddressImg={TronAddress}
            isConfirmClicked={isTronConfirmClicked}
            priceOfCrypto="1 Tron (TRX) = 0.088 USD"
            minimumDepositAmount="566 TRX"
            handleCryptoSentClick={handleTronSentClick}
            handleRemoveClick={handleTronRemoveClick}
            isCryptoSent={isTronSentClicked}
            isCryptoSentLast={TronMessage}
            cryptoSentButtonText="TRX"
          />
          {/* Ripple */}
          <BuyAPlan
            isDepositButton={isPayWithRippleClicked}
            isSecondDepositButton={RippleBackground}
            handleDepositClick={handlePayWithRippleClick}
            cancelLogo={cancelLogo}
            cryptoLogo={RippleLogo}
            nameText="Ripple (XRP)"
            contentText="BEP2, BEP20"
            secondContentText="XRP"
            handleConfirmClick={handleRippleConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={RippleLogo}
            cryptoAddressText="0x916aa21f6f81005b85a51ca21c91aeb649fb07b3"
            cryptoAddressImg={RippleAddress}
            isConfirmClicked={isRippleConfirmClicked}
            priceOfCrypto="1 Ripple (XRP) = 0.52 USD"
            minimumDepositAmount="95.80 XRP"
            handleCryptoSentClick={handleRippleSentClick}
            handleRemoveClick={handleRippleRemoveClick}
            isCryptoSent={isRippleSentClicked}
            isCryptoSentLast={RippleMessage}
            cryptoSentButtonText="XRP"
          />
          {/* Doge */}
          <BuyAPlan
            isDepositButton={isPayWithDogeClicked}
            isSecondDepositButton={DogeBackground}
            handleDepositClick={handlePayWithDogeClick}
            cancelLogo={cancelLogo}
            cryptoLogo={DogecoinLogo}
            nameText="Dogecoin (DOGE)"
            contentText="BEP2, BEP20"
            secondContentText="DOGE"
            handleConfirmClick={handleDogeConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={DogecoinLogo}
            cryptoAddressText="0x916aa21f6f81005b85a51ca21c91aeb649fb07b3"
            cryptoAddressImg={DogecoinAddress}
            isConfirmClicked={isDogeConfirmClicked}
            priceOfCrypto="1 DOGE = 0.061 USD"
            minimumDepositAmount="816.50 DOGE"
            handleCryptoSentClick={handleDogeSentClick}
            handleRemoveClick={handleDogeRemoveClick}
            isCryptoSent={isDogeSentClicked}
            isCryptoSentLast={DogeMessage}
            cryptoSentButtonText="DOGE"
          />
          {/* Solana */}
          <BuyAPlan
            isDepositButton={isPayWithSolanaClicked}
            isSecondDepositButton={SolanaBackground}
            handleDepositClick={handlePayWithSolanaClick}
            cancelLogo={cancelLogo}
            cryptoLogo={SolanaLogo}
            nameText="Solana"
            contentText="BEP20"
            secondContentText="SOL"
            handleConfirmClick={handleSolanaConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={SolanaLogo}
            cryptoAddressText="0x59371c19cC97779783800935D9cdbFAdAfE436cB"
            cryptoAddressImg={SolanaAddress}
            isConfirmClicked={isSolanaConfirmClicked}
            priceOfCrypto="1 Solana (SOL) = 23.61 USD"
            minimumDepositAmount="2.16 SOL"
            handleCryptoSentClick={handleSolanaSentClick}
            handleRemoveClick={handleSolanaRemoveClick}
            isCryptoSent={isSolanaSentClicked}
            isCryptoSentLast={SolanaMessage}
            cryptoSentButtonText="SOL"
          />
          {/* Litecoin */}
          <BuyAPlan
            isDepositButton={isPayWithLitecoinClcked}
            isSecondDepositButton={LitecoinBackground}
            handleDepositClick={handlePayWithLitecoinClick}
            cancelLogo={cancelLogo}
            cryptoLogo={LitecoinLogo}
            nameText="Litecoin (LTC)"
            contentText="BEP2, BEP20"
            secondContentText="LTC"
            handleConfirmClick={handleLitecoinConfirmClick}
          />
          <CryptoAddress
            cancelLogo={cancelLogo}
            cryptoLogo={LitecoinLogo}
            cryptoAddressText="0x916aa21f6f81005b85a51ca21c91aeb649fb07b3"
            cryptoAddressImg={LitecoinAddress}
            isConfirmClicked={isLitecoinConfirmClicked}
            priceOfCrypto="1 Litecoin (LTC) = 64.88 USD"
            minimumDepositAmount="0.77 LTC"
            handleCryptoSentClick={handleLitecoinSentClick}
            handleRemoveClick={handleLitecoinRemoveClick}
            isCryptoSent={isLitecoinSentClicked}
            isCryptoSentLast={LitecoinMessage}
            cryptoSentButtonText="LTC"
          />
        </Box>

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={TetherLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
              marginRight="6px"
            />
            <Box
              component="img"
              alt="Bitcoin"
              src={EthereumLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
              textAlign="left"
            />
          </Box>
          <Box
            sx={{ backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayTetherOnEthereumClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Tether on Ethereum
            </Button>
          </Box>
        </Box>

        {/* second column */}

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={BinanceLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayBinanceCoinClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Binance coin
            </Button>
          </Box>
        </Box>

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={EthereumLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithEtherumClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Ethereum
            </Button>
          </Box>
        </Box>

        {/* Third column */}

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={BitcoinLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithBitcoinClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Bitcoin
            </Button>
          </Box>
        </Box>

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={SolanaLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithSolanaClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Solana
            </Button>
          </Box>
        </Box>

        {/* Fourth column */}

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={DogecoinLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithDogeClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Dogecoin
            </Button>
          </Box>
        </Box>

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={RippleLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithRippleClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Ripple
            </Button>
          </Box>
        </Box>

        {/* fifth column */}

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={TronLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithTronClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Tron
            </Button>
          </Box>
        </Box>

        <Box boxShadow="2px 2px 2px #383F67" height="130px" textAlign="center">
          <Box
            sx={{ backgroundColor: theme.palette.secondary[100] }}
            height="65%"
            paddingTop="15px"
          >
            <Box
              component="img"
              alt="Bitcoin"
              src={LitecoinLogo}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{ pt: "10px", backgroundColor: theme.palette.primary[500] }}
            height="35%"
            marginBottom="0px"
          >
            <Button
              onClick={handlePayWithLitecoinClick}
              sx={{ color: "white", opacity: "0.6" }}
            >
              Pay with Litecoin
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountDeposits;
