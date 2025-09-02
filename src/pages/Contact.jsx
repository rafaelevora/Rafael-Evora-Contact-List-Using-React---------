// things to do
// 1. link to the addcontacts page
// 2. create a fetch to get the contacts via the api
// 3. useEffect hook is needed for syncing with the api
// 4. useGlobalReducer hook is needed to save the state in the store and to dispatch any needed actions (edit, delete)


import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer  from "../hooks/useGlobalReducer/"
import { ContactCard } from "../components/ContactCard"
import { fetchAllContacts, deleteContact } from "../lib/fetch";


export const Contact = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetchAllContacts(dispatch);
  }, []);

  return (
    <div className="container mt-4">
      {!store || !store.contacts ? (
        <h1>Loading...</h1>
      ) : (
        store.contacts.map((contact) => (
          <div className="d-flex justify-content-center mb-4" key={contact.id}>
            <div className="card col-6 p-3">
              <ContactCard
                name={contact.name}
                address={contact.address}
                phone={contact.phone}
                email={contact.email}
              />
              
              {/* Buttons wrapper */}
              <div className="d-flex justify-content-between mt-3">
                <Link to={`/edit/${contact.id}`} className="btn btn-primary flex-fill me-2">
                  Edit
                </Link>
                <button
                  className="btn btn-danger flex-fill ms-2"
                  onClick={() => deleteContact(contact.id, dispatch)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
