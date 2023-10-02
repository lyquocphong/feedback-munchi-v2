"use client";

import React, { useEffect } from "react";

import DashboardResponses from "@/app/dashboard/components/responses/DashboardResponses";
import DashboardScore from "@/app/dashboard/components/score/DashboardScore";
import FeedbackChart from "@/app/dashboard/components/chart/FeedbackChart";
import { NextPage } from "next";
import Spinner from "@/components/shared/Spinner";
import { getFetcher } from "@/utils/fetcher";
import styles from "./dashboardInfo.module.css";
import { useAuthContext } from "@/context/AuthContext";
import { useBusinessContext } from "@/context/BusinessContext";
import { useDashboardFeedbackContext } from "@/context/DashboardFeedbackContext";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const DashboardInfo: NextPage = () => {
  const { business, businessId } = useBusinessContext();
  const { setOrderFeedbacks, setServiceFeedbacks } =
    useDashboardFeedbackContext();
  const { userIsLoggedIn } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!userIsLoggedIn) {
      router.push("/dashboard/login");
    }
  }, [router, userIsLoggedIn]);

  const { data, error, isLoading } = useSWR(
    `/api/feedback/${business?.slug}`,
    getFetcher
  );

  if (data) {
    setOrderFeedbacks(data.orderFeedback);
    setServiceFeedbacks(data.serviceFeedback);
  }
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={`${styles["dashboard-info"]}`}>
      <div className={`${styles["dashboard-content"]}`}>
        <DashboardScore data={data?.serviceFeedback!} />
        <DashboardScore data={data?.orderFeedback!} />
        <DashboardResponses
          data={(data?.serviceFeedback ?? []).concat(data?.orderFeedback ?? [])}
          businessId={businessId as number}
        />
      </div>
      <div className={`${styles["dashboard-chart"]}`}>
        <div className={`${styles["chart"]}`}>
          <h4>Service feedback</h4>
          <FeedbackChart data={data?.serviceFeedback!} type="service" />
        </div>
        <h4>Order feedback</h4>
        <div className={`${styles["chart"]}`}>
          <FeedbackChart data={data?.orderFeedback!} type="order" />
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
