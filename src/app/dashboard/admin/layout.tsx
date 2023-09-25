"use client";

import { API_BASE_URL } from "@/utils/constantAPI";
import React from "react";
import Sidebar from "@/app/dashboard/components/sidebar/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";
import Spinner from "@/components/shared/Spinner";
import { fetcher } from "@/utils/fetcher";
import styles from "./dashboard.module.css";
import { useBusinessContext } from "@/context/BusinessContext";
import useSWR from "swr";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { businessId, setBusiness } = useBusinessContext();
  const { data, error } = useSWR(
    `${API_BASE_URL}/business/${businessId}?params=logo,slug,name`,
    fetcher
  );

  if (error) {
    console.log(error);
  }

  if (!data) {
    // Data is still loading
    return <Spinner />;
  }

  // Data has been fetched, update the business context
  if (data.result) {
    setBusiness(data.result);
  }

  return (
    <SidebarProvider>
      <div className={styles.dashboard}>
        <Sidebar business={data.result} />
        <>{children}</>
      </div>
    </SidebarProvider>
  );
}
