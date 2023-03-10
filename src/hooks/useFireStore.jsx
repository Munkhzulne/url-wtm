import { useEffect, useState } from "react";

export const useFireStoreDoc = (user) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {}, [user]);

  const updateDoc = (data) => {};

  const deleteDoc = () => {};
  return { doc, updateDoc, deleteDoc };
};

export const useFireStoreCol = (user) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {}, [user]);
  return { collection };
};
