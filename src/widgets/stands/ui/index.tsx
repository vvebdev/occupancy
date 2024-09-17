"use client";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import type { Stand } from "../api/types";
import { getStands, sendStands } from "../api";
import { StandCard } from "./card";
import { Spinner } from "react-bootstrap";

export const Stands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [standList, setStandList] = useState<Stand[]>([]);
  const user = localStorage.getItem("user");

  const toggleStand = async (stand: Stand) => {
    const nextStandList = standList.map((prevStand) => {
      if (prevStand.id === stand.id) {
        return {
          ...prevStand,
          status: prevStand.status === "free" ? "busy" : "free",
          user: user ? user : "",
        };
      }
      return prevStand;
    });

    try {
      await sendData(nextStandList);
      setStandList(nextStandList);
    } catch (error) {
      throw error;
    }
  };

  const sendData = async (stands: Stand[]) => {
    const response = await sendStands(stands);
    const responseData = await response.json();
    setStandList(responseData.stands);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStands();
      const { stands } = await response.json();
      setStandList(stands);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.main}>
      {isLoading ? (
        <div className={styles.loader}>
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          {standList && (
            <ul className={styles.list}>
              {standList.map((stand) => (
                <li className={styles.listItem} key={stand.id}>
                  <StandCard stand={stand} onClick={() => toggleStand(stand)} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
};
