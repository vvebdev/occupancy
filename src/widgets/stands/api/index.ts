import type { Stand } from "./types";

export const getStands = () => {
  return fetch("https://leather-lush-shoe.glitch.me/stands");
};

export const sendStands = (data: Stand[]) => {
  return fetch("https://leather-lush-shoe.glitch.me/stands", {
    method: "POST",
    body: JSON.stringify({
      stands: data,
    }),
  });
};
