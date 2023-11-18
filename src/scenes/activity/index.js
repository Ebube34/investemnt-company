import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useGetUserQuery } from "../../state/api";
import DashboardHeading from "../../components/dashboard-heading";
import { Box, useTheme, Typography } from "@mui/material";
import {  
  PendingActionsOutlined,
} from "@mui/icons-material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


const Activity = () => {
  const token = Cookies.get("Token");
  const navigate = useNavigate();

  const secretPass = "Xkhzg478tYUAEQivas65";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
  const userId = JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));
  const { data, isLoading } = useGetUserQuery(userId);

  const theme = useTheme();

const columns = [
  {
    field: "_id",
    headerName: "transaction ID",
    flex: 1,
  },
  {
    field: "network",
    headerName: "Network",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1.5,
  },
  {
    field: "amount",
    headerName: "Amount (USD)",
    flex: 0.5,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: ({ status }) => {
      <Box
        width="60%"
        m="0 auto"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor={
          status === "Pending"
            ? theme.palette.secondary[600]
            : status === "Confirmed"
            ? theme.palette.secondary[700]
            : theme.palette.secondary[700]
        }
        borderRadius="4px"
      >
        {status === "Pending" && <PendingActionsOutlined />}
        {status === "Confirmed" && <CheckOutlinedIcon /> }
        <Typography color={theme.palette.grey[100]} sx={{ ml: "5px" }}>
          {status}
        </Typography>
      </Box>;
    },
  },
];

  if (token) {
    return (
      <>
        <Box>
          <DashboardHeading title="Activity" subTitle="List of transactions" />
          <Box height="30px"></Box>
          <Typography 
        variant="h2" 
        color="#fff" 
        fontWeight="bold" 
        sx={{ mb: "5px", textAlign: "center"}}>
           Deposits
        </Typography>
          <Box
            mt="40px"
            height="45vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme.palette.primary.light,
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderTop: "none",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.secondary[200]} !important`,
              },
            }}
          >
            <DataGrid
              loading={isLoading || !data}
              getRowId={(row) => row._id}
              rows={data.deposits || []}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
          <Typography 
        variant="h2" 
        color="#fff" 
        fontWeight="bold" 
        sx={{ mb: "30px", textAlign: "center", mt: "30px"}}>
           Withdrawals
        </Typography>

        <Box
            mt="40px"
            height="45vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme.palette.primary.light,
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderTop: "none",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.secondary[200]} !important`,
              },
            }}
          >
            <DataGrid
              loading={isLoading || !data}
              getRowId={(row) => row._id}
              rows={data.withdrawals || []}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </>
    );
  } else {
    return navigate("/login");
  }
};

export default Activity;
