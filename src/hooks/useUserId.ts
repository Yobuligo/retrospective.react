import { useState } from "react";
import { useFetchLocalStorage } from "./useFetchLocalStorage";

export const useUserId = (): string => {
  const [user] = useState(
    useFetchLocalStorage<string>("user", crypto.randomUUID())
  );
  return user;
};
