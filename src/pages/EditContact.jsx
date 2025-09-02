// 1 Create a new Page  EditContact.jsx
// 2 Edit Contact.jsx is almost identical to AddContact.jsx
// 3 Except that the contact information to edit should be already populated in each input textbox
// 4 Create a fetch function that will update the edited contact and dispatch an action to update the store
// 5 Have a link to return Home
// 6 Have Link to go to EditContact.jsx
// 7 EditContact.jsx needs to be a route



import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editContact } from "../lib/fetch";

export const EditContact = () => {
  const { id } = useParams(); // grab ID from URL
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  // find the contact in store
  const contactToEdit = store.contacts.find(c => c.id === parseInt(id));

  // set up state for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  // preload with contact info
  useEffect(() => {
    if (contactToEdit) {
      setForm(contactToEdit);
    }
  }, [contactToEdit]);

  // handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editContact(id, form, dispatch); // API + reducer
    navigate("/"); // back to contact list
  };

  return (
    <div className="container">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};


