import React from "react";
import Dashboardmaincomponent from "../../components/dashboardmaincomponent";
import { useGetUserQuery } from "../../state/api";
import DashboardFooter from "../../components/DashboardFooter";
import { getUserId } from "../../components/getUserId";




const DashboardMain =  () => {
  const userId = getUserId();
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <Dashboardmaincomponent user={ data || {}} />
      <DashboardFooter />
    </>
   );
};

export default DashboardMain;
