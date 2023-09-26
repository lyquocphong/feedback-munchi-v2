"use client";

import React, { useEffect, useState } from "react";

import LogoutBtn from "@/app/dashboard/components/LogoutBtn";
import { NextPage } from "next";
import Spinner from "@/components/shared/Spinner";
import TradeMark from "@/app/feedback/components/TradeMark";
import getUserBusiness from "@/lib/getUserBusinesses";
import styles from "./businessOption.module.css";
import { useBusinessContext } from "@/context/BusinessContext";
import { useRouter } from "next/navigation";

interface BusinessProps {
  id: number;
  name: string;
}
const Page: NextPage = () => {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<number | null>(null);
  const router = useRouter();
  const { setBusinessId } = useBusinessContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedBusiness !== null) {
      setBusinessId(selectedBusiness);
      router.push(`/dashboard/admin/info/${selectedBusiness}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const businessesData = await getUserBusiness();
        setBusinesses(businessesData);
        console.log(businessesData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBusiness(Number(event.target.value));
    setBusinessId(Number(event.target.value));
  };
  return (
    <div className={styles.container}>
      <h2>Choose business</h2>
      <form className={`${styles["choose"]}`} onSubmit={handleSubmit}>
        <select
          className={styles.select}
          onChange={handleChange}
          value={selectedBusiness || ""}
        >
          <option value="">Select a business</option>
          {businesses.map((business: BusinessProps) => (
            <option key={business.id} value={business.id}>
              {business.name}
            </option>
          ))}
        </select>
        <br />
        <button
          className={styles.button}
          type="submit"
          disabled={
            isLoading || selectedBusiness === null || selectedBusiness == 0
          }
        >
          {isLoading ? <Spinner /> : "Go To Dashboard"}
        </button>
        <LogoutBtn />
        <TradeMark />
      </form>
    </div>
  );
};

export default Page;
