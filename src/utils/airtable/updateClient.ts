import { Clients, Status } from "../types/client";
import connectAirtable from "./connect";

const updateClient = async (
  setClients: React.Dispatch<React.SetStateAction<Clients>>,
  recordId: string,
  updatedFields: { notes?: string; status: string }
) => {
  const base = connectAirtable();

  // Fonction pour modifier un enregistrement
  try {
    const updatedRecord = await base("Clients").update([
      {
        id: recordId,
        fields: updatedFields,
      },
    ]);
    console.log("Enregistrement mis à jour:", updatedRecord);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'enregistrement:", error);
  }
};

export default updateClient;
