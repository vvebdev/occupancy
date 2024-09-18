const BASE_ULR = "https://smart-even-fold.glitch.me";

export const getStands = () => {
  return fetch(BASE_ULR + "/stands");
};

export const patchStand = (id: number, user: string) => {
  return fetch(BASE_ULR + "/stands/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      user,
    }),
  });
};
