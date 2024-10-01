"use client";
import styles from "./index.module.css";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getStands, patchStand } from "../api";
import { StandCard } from "./card";
import { InputBranchModal } from "./inputBranchModal";
import type { Stand } from "../api/types";

export const Stands = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [editStandData, setEditStandData] = useState<Stand>({} as Stand);
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

  const modalShow = () => setIsShowModal(true);
  const modalClose = () => setIsShowModal(false);

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
                  <StandCard
                    stand={stand}
                    onChange={() => toggleStand(stand)}
                    onEdit={(stand) => {
                      setEditStandData(stand);
                      modalShow();
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
          <InputBranchModal
            value={editStandData}
            isShow={isShowModal}
            onClose={modalClose}
          />
        </>
      )}
    </section>
  );
};
