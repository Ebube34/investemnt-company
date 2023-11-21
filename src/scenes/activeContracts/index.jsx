import React from "react";
import DashboardHeading from "../../components/dashboard-heading";
import { useGetUserQuery } from "../../state/api";
import ActiveContractComp from "../../components/investmentPlanComponent/ActiveContractComp";
import { getUserId } from "../../components/getUserId";
import DashboardFooter from "../../components/DashboardFooter";

const ActiveContracts = () => {
  const userId = getUserId();
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <DashboardHeading title="Active Contract" subTitle="Your contracts" />
      <ActiveContractComp data={data || {}} />
      <DashboardFooter />
    </>
  );
};

export default ActiveContracts;
