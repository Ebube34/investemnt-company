import React from 'react';
import {
    Button,
    Box,
    Typography,
    useTheme,
  } from "@mui/material";

const BuyAPlan = ({
    isDepositButton,
    cancelLogo,
    cryptoLogo,
    nameText,
    contentText,
    secondContentText,
    handleDepositClick,
    isSecondDepositButton,
    handleConfirmClick,
  
}) => {
    const theme = useTheme();
  
  return (
    <>
   <Box
            height="700px"
            width="100%"
            sx={{ backgroundColor: "RGB(0, 0, 0, 0.7)", visibility: isDepositButton ? "visible" : "hidden" }}
            position="absolute"
            top="45%"
            zIndex="1"
            
          >
            <Box
              position="relative"
              zIndex="2"
              sx={{ backgroundColor: "white", visibility: isSecondDepositButton ? "visible" : "hidden" }}
             
              marginTop="100px"
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
                    onClick={handleDepositClick}
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
                  <Typography sx={{ p: "10px" }}>
                   <span style={{ color: "red" }}> ONLY send {nameText} </span> to this deposit address. 
                  </Typography>
                  <Typography sx={{ p: "10px" }}>
                    <span style={{ color: "red" }}> Do NOT use </span> {contentText} or other network standards as you may lose your funds <span style={{ color: "red" }}>ONLY make deposits through the {secondContentText} network.</span>
                  </Typography>
                  <Typography sx={{ p: "20px" }}>
                    <span style={{ color: "red" }}>The use of contract addresses is not allowed!</span>
                  </Typography>

                  <Typography>
                    By clicking the "Confirm" button you indiate that you agree to the above-mentioned risks.
                  </Typography>
                  
                  <Button onClick={handleConfirmClick} sx={{ backgroundColor: theme.palette.primary[500], color: "white", letterSpacing: "1.5", marginBottom: "40px" }} fullWidth>
                      Confirm
                    </Button>
                </Box>

            
            </Box>
          </Box>
    </>
  )
}

export default BuyAPlan;