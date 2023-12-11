import React from "react";
import { useGetUserQuery } from "../../state/api";
import DashboardHeading from "../../components/dashboard-heading";
import { Box } from "@mui/material";
import ActivityComp from "../../components/ActivityComp/ActivityComp";
import { getUserId } from "../../components/getUserId";
import DashboardFooter from "../../components/DashboardFooter";

const Activity = () => {
  const userId = getUserId();
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <Box>
        <DashboardHeading title="Activity" />
        <Box height="30px"></Box>
        <ActivityComp data={data || {}} />
        <DashboardFooter />
      </Box>
    </>
  );
};

export default Activity;
