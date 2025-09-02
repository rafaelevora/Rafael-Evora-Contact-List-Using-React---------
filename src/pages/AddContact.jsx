// 1. we need to create a from to get info from the user. name, phone, address, and email
// 2. we need usestates for each string: name, phone, address, email
// 3. we need to make controlled inputs
// 4. we need a link to go back to the home page (contact page)
// 5. we need the useGlobalReducer to save updated information
// 6. we need a fetch to post data to the api
import { useState } from "react" ;
import { addContact } from "../lib/fetch";
import  useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const AddContact = () => {
    const [contactName, setContactName] = useState ('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const {store, dispatch } = useGlobalReducer();

    return (
        <>
            <div className="row add-contact-row">
                <div className="col-2"></div>
                <div className="col-8">
                    <form className="contact-form d-flex row">

                            <div class="mb-3">
                                    <label htmlFor="contactName" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="contactName" 
                                    value={contactName}
                                    onChange={e => setContactName(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                    <label htmlFor="contactAddress" className="form-label">Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="contactAddress" 
                                    value={contactAddress}
                                    onChange={e => setContactAddress(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                    <label htmlFor="contactPhone" className="form-label">Phone</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="contactPhone" 
                                    value={contactPhone}
                                    onChange={e => setContactPhone(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="contactEmail" 
                                    value={contactEmail}
                                    onChange={e => setContactEmail(e.target.value)}
                                />
                            </div>
                        <button
                            type="submit"
                            className="btn btn-success align-self-center"
                            onClick={() => addContact(contactName, contactAddress, contactPhone, contactEmail, dispatch)}>
                            Submit
                        </button>
                    </form>
                    <Link to="/">
                    Go Back Home
                    </Link>
                </div>
                <div className="col-2"></div>
            </div>

        </>
    );
}