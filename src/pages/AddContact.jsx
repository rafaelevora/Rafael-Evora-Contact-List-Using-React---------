// 1. we need to create a from to get info from the user. name, phone, address, and email
// 2. we need usestates for each string: name, phone, address, email
// 3. we need to make controlled inputs
// 4. we need a link to go back to the home page (contact page)
// 5. we need the useGlobalReducer to save updated information
// 6. we need a fetch to post data to the api

export const AddContact = () => {

    return (
        <>
            <div className="row add-contact-row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}