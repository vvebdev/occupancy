"use client";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import type { Stand } from "../api/types";
import { getStands, patchStand } from "../api";
import { StandCard } from "./card";
import { Spinner } from "react-bootstrap";

export const Stands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [standList, setStandList] = useState<Stand[]>([]);
  const user = localStorage.getItem("user");

  const toggleStand = async (stand: Stand) => {
    try {
      const response = await patchStand(stand.id, user ? user : "");
      const nextStand = (await response.json()) as Stand;

      setStandList(
        standList.map((prevStand) => {
          if (prevStand.id === nextStand.id) {
            return nextStand;
          }
          return prevStand;
        })
      );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStands();
      const stands = await response.json();
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
