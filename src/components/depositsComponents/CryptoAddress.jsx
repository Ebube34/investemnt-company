import React, { useState } from 'react';
import {
    Button,
    Box,
    Typography,
    useTheme,
  } from "@mui/material";

const CryptoAddress = ({
    cancelLogo,
    cryptoLogo,
    cryptoAddressText,
    cryptoAddressImg,
    isConfirmClicked,
    priceOfCrypto,
    minimumDepositAmount,
    handleCryptoSentClick,
    handleRemoveClick,
    isCryptoSent,
    isCryptoSentLast,
    cryptoSentButtonText,
}) => {
    const theme = useTheme();
    const [isCopied, setIsCopied] = useState(false);
    

    async function copyTextToClipboard(text) {
        if ("clipboard" in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand("copy", true, text);
        }
      }
    
      const handleCopyClick = () => {
        copyTextToClipboard(cryptoAddressText)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      };

     

    
  return (
    <>
        <Box
            height="200px"
            width="100%"
            position="absolute"
            top="45%"
            zIndex="3"
            sx={{ visibility: isConfirmClicked ? "visible" : "hidden" }}
          >
            <Box
              position="relative"
              zIndex="4"
              sx={{ backgroundColor: "white" }}
              
              marginTop="100px"
              border="2px solid white"
            >
              <Box>
                <Box
                  sx={{ backgroundColor: theme.palette.secondary[200] }}
                  height=""
                  padding="0 0 25px 0"
                >
                  <Box paddingTop="10px">
                    <Box
                      component="img"
                      alt="remove"
                      src={cancelLogo}
                      height="23px"
                      width="23px"
                      borderRadius="50%"
                      marginLeft="87%"
                      sx={{ objectFit: "cover" }}
                      onClick={handleRemoveClick}
                    />
                  </Box>

                  <Box>
                    <Box
                      component="img"
                      alt="Bitcoin"
                      src={cryptoLogo}
                      height="50px"
                      width="50px"
                      borderRadius="50%"
                      sx={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box color="black">
                <Typography padding="10px 0 5px 0">{priceOfCrypto }</Typography>
                <Typography>copy the address or scan the QR code:</Typography>
                <Box color="black">
                  <input  type="text" value={cryptoAddressText} readOnly style={{ width: "60%", border: "0"}} />
                  <Button onClick={handleCopyClick}>
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </Button>
                </Box>
                <Box padding="10px 0 10px 0">
                  <Box
                    component="img"
                    alt="Tether address"
                    src={cryptoAddressImg}
                    sx={{ objectFit: "cover" }}
                    height="200px"
                    width="200px"
                  />
                </Box>
              </Box>

              <Box padding="15px" sx={{ backgroundColor: "RGB(33, 41, 92)" }}>
                <Typography paddingBottom="15px">Minimum deposit amount is {minimumDepositAmount}</Typography>
                <Typography>
                  Please note that the exchange rate at the completion of the
                  transaction may differ slightly from the above. 
                </Typography>
              </Box>

              <Box  margin="40px 0 10px 0">
                <Button onClick={handleCryptoSentClick} sx={{ color: "RGB(255, 255, 255, 0.8)", backgroundColor: "RGB(33, 41, 92)" }}>
                  I have sent {cryptoSentButtonText} to the address above
                </Button>
              </Box>

              <Box>
                <Typography sx={{ visibility: isCryptoSent ? "visible" : "hidden" }} color="green">
                  Please wait while we confirm your transaction...
                </Typography>
                <Typography sx={{ visibility: isCryptoSentLast ? "visible" : "hidden" }} color="red">
                  Kindly contact our customer support for confrimation.
                </Typography>
              </Box>
            
            </Box>
       
          </Box>
    </>
  )
}

export default CryptoAddress