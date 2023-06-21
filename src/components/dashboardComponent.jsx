import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "../theme.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardMain from "../scenes/dashboardmain";
import Layout from "../scenes/layout";

const DashboardComponent = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={<Navigate to="/dashboard/user" replace />}
              />
              <Route path="/dashbboard/user" element={<DashboardMain />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default DashboardComponent;
