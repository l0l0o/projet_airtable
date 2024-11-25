import { useState } from "react";
import updateClient from "../../utils/airtable/updateClient";
import { Clients, Status } from "../../utils/types/client";

type ModifyProps = {
  display: "absolute" | "hidden";
  clientId: string;
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modify = ({ display, clientId, setClients, setDisplay }: ModifyProps) => {
  const [updatedFields, setUpdatedFields] = useState<{
    notes: string;
    status: Status;
  }>({
    notes: "",
    status: Status.NOT_CONTACTED,
  });

  const updateClientById = () => {
    updateClient(setClients, clientId, updatedFields);
    setDisplay(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    setUpdatedFields((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event?.target.value);
    setUpdatedFields((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value as Status,
      };
    });
  };

  return (
    <form
      className={`w-md mx-auto p-6 bg-white rounded-lg shadow-lg ${display}`}
    >
      <div className="mb-4">
        <label
          htmlFor="notes"
          className="block text-gray-700 font-semibold mb-2"
        >
          Notes
        </label>
        <input
          onChange={handleChange}
          name="Notes"
          type="text"
          id="notes"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Entrez vos notes ici"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-gray-700 font-semibold mb-2"
        >
          Statut
        </label>
        <select
          onChange={handleSelect}
          name="Status"
          id="status"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{Status.CONTACTED}</option>
          <option value="">{Status.CONTACT_IN_FUTURE}</option>
          <option value="">{Status.NOT_CONTACTED}</option>
        </select>
      </div>

      <div className="mt-6">
        <button
          onSubmit={() => updateClientById}
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default Modify;
