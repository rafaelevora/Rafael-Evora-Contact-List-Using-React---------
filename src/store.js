export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fetchedContacts':
      const contactArray = action.payload;
      return {
        ...store,
        contacts: [...contactArray]
      }

    default:
      throw Error('Unknown action.');
  }    
}
