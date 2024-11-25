import { useEffect, useState } from "react";
import { getClients } from "../utils/airtable";
import { Clients } from "../utils/types/client";

const useGetClients = () => {
  const [clients, setClients] = useState<Clients>([]);

  useEffect(() => {
    (async () => {
      getClients(setClients);
    })();
  }, []);

  return clients;
};

export default useGetClients;
