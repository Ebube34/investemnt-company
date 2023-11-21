import React, { useEffect, useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ReactLoading from "react-loading";

const ActivityComp = ({ data, isLoading }) => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    if (data === undefined || data === null) {
      setLoading(true);
    } else if (Object.keys(data).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);

  const columns = [
    {
      field: "_id",
      headerName: "transaction ID",
      flex: 0.5,
    },
    {
      field: "network",
      headerName: "Network",
      flex: 0.5,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
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
    },
  ];

  return (
    <>
      <Typography
        variant="h2"
        color="#fff"
        fontWeight="bold"
        sx={{ mb: "5px", textAlign: "center" }}
      >
        Deposits
      </Typography>
      <Box
        mt="40px"
        height="65vh"
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
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactLoading
              type={"spinningBubbles"}
              color={"#1CEEEB"}
              height={20}
              width={20}
            />
          </div>
        ) : (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data.deposits}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        )}
      </Box>
      <Typography
        variant="h2"
        color="#fff"
        fontWeight="bold"
        sx={{ mb: "5px", textAlign: "center" }}
      >
        Withdrawals
      </Typography>
      <Box
        mt="40px"
        height="65vh"
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
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactLoading
              type={"spinningBubbles"}
              color={"#1CEEEB"}
              height={20}
              width={20}
            />
          </div>
        ) : (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data.withdrawals}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        )}
      </Box>
    </>
  );
};

export default ActivityComp;
