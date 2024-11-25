import "./App.css";
import { clientDto, Clients } from "./utils/types/client";
import Chip from "./components/Chip/Chip";
import deleteClient from "./utils/airtable/deleteClient";
import { useEffect, useState } from "react";
import { getClients } from "./utils/airtable";
import Modify from "./components/Modify/Modify";

function App() {
  const [clients, setClients] = useState<Clients>([]);

  useEffect(() => {
    (async () => {
      getClients(setClients);
    })();
  }, []);

  const deleteClientById = (id: clientDto["id"]) => {
    deleteClient(id, setClients);
  };

  const [display, setDisplay] = useState(Boolean);
  const [id, setId] = useState("");

  const updateClientById = (id: string) => {
    setDisplay(true);
    setId(id);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Airtable App
        </h1>
        <h4 className="text-amber-500 text-xl mb-8">Liste des clients</h4>

        {/* Formulaire centré */}
        <Modify
          display={display ? "absolute" : "hidden"}
          clientId={id}
          setClients={setClients}
          setDisplay={setDisplay}
        />

        {/* Liste des clients */}
        <ul className="w-full max-w-4xl space-y-4">
          {clients.map((client) => (
            <li
              key={client.id}
              className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between flex-wrap lg:flex-nowrap"
            >
              {/* Informations du client affichées sur une seule ligne (format desktop) */}
              <div className="flex flex-wrap lg:flex-nowrap items-center text-gray-700 space-x-6">
                <span className="font-semibold text-lg">
                  {client.firstname} {client.lastname}
                </span>
                <span>Email: {client.email}</span>
                <span>Phone: {client.phoneNumber}</span>
                <span>Notes: {client.notes}</span>
                <Chip status={client.status} />
              </div>

              {/* Actions à droite */}
              <div className="flex gap-3 items-center mt-4 lg:mt-0">
                <button
                  onClick={() => deleteClientById(client.id)}
                  className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Supprimer
                </button>

                <button
                  onClick={() => updateClientById(client.id)}
                  className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Modifier
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
