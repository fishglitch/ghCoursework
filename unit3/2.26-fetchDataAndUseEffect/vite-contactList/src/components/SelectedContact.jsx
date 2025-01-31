import React, { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          // remember to use back ticks for interpolation in template literals  (embedding expressions ${})
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        // `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);

  return (
    <div>
      {contact && (
        <div>
          <p>
            <b>ID:</b>{contact.id}
          </p>
          <p>
            <b>Name: </b> {contact.name}
          </p>
          <p>
            <b>Username:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b>{contact.phone}
          </p>
        </div>
      )}
      <button onClick={() =>setSelectedContactId(null)}> Go Back</button>
    </div>
  );
}

//export default function SelectedContact
//</div>({
//     selectedContactId,
//     setSelectedContactId,
// }) {
//     const [contact, setContact] = useState(null);

//     useEffect(() => {
//         async function fetchSelectedContact() {
//             try {
//                 const response = await fetch(
//                     `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}` // Corrected string interpolation
//                 );
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const result = await response.json();
//                 setContact(result);

//             } catch (error) {
//                 console.error(error);
//             }
//         }

//         if (selectedContactId) { // Only fetch if selectedContactId is valid
//             fetchSelectedContact();
//         }
//     }, [selectedContactId]); // Only run when selectedContactId changes

//     return (
//         <div>
//             {contact && (
//                 <div>
//                     <p>
//                         <b>Name:</b> {contact.name}
//                     </p>
//                     <p>
//                         <b>Email:</b> {contact.email}
//                     </p>
//                     <p>
//                         <b>Phone:</b> {contact.phone}
//                     </p>
//                 </div>
//             )}
//             <button onClick={() => setSelectedContactId(null)}>
//                 Back
//             </button>
//         </div>
//     );
// }
