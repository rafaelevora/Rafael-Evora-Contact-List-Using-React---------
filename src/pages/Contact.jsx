// things to do
// 1. link to the addcontacts page
// 2. create a fetch to get the contacts via the api
// 3. useEffect hook is needed for syncing with the api
// 4. useGlobalReducer hook is needed to save the state in the store and to dispatch any needed actions (edit, delete)


import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer  from "../hooks/useGlobalReducer/"
import { ContactCard } from "../components/ContactCard"


export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchAllContacts();
    }, [])

    const fetchAllContacts = async () => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/rafael/contacts`)
        try {
            if (!response.ok) {
                throw new Error(response.status);
            }
            const data = await response.json();
            // console.log(data.contacts);
            // we need to be able to save the contacts in the store
            // to accomplish this, we need to create a dispatch to set the contact key in the store

            dispatch({
                type: 'fetchedContacts',
                payload: data.contacts,
            })
        }
        catch (error){
            console.error("Error getting agenda. Check if URL is incorrect or if that agenda doesn't exists.", error)
        }
    }

return (
    <>
        <div className="container">
            {
                store && !store.contacts
                ?
                <h1>Loading...</h1>
                :
                store.contacts.map(contact => {
                    return (
                        <div className="card" key={contact.id}>
                            <ContactCard 
                                name={contact.name}
                                address={contact.address}
                                phone={contact.phone}
                                email={contact.email}
                            />
                            <button>Edit</button>
                            <button>Del</button>
                        </div>
                    )
                })
            }
        </div>
    </>

    );
}