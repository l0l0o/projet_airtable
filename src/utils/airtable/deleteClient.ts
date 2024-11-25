import { Clients } from "../types/client";
import connectAirtable from "./connect";

const deleteClient = async (
  clientId: string,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  // Configurez votre clé API Airtable et ID de la base
  const base = connectAirtable();

  // Fonction pour supprimer un enregistrement
  try {
    // Supprimer un enregistrement de la table 'Contacts'
    await base("Clients").destroy(clientId);

    setClients((previousClients) =>
      previousClients.filter((client) => client.id !== clientId)
    );
  } catch (error) {
    console.error("Erreur lors de la suppression de l'enregistrement:", error);
  }
};

export default deleteClient;
