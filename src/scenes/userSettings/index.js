import React from "react";
import DashboardHeading from "../../components/dashboard-heading";
import DashboardFooter from "../../components/DashboardFooter";
import SettingsComp from "../../components/SettingsComp";
import { getUserId } from "../../components/getUserId";
import { useGetUserQuery } from "../../state/api";

const Settings = () => {
    const userId = getUserId();
    const { data } = useGetUserQuery(userId);
    

  return (
    <>
      <div>
      <DashboardHeading title="Settings" />
    <SettingsComp data={data || {}} />
    <DashboardFooter />
      </div>
    </>
  );
};

export default Settings;