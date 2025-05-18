import React, { useState } from "react";

const Practice = () => {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
})

let starIcon = contact.isFavorite ? "A true Button" : "A False Button";

function toggleFavorite() {
    // Challenge: re-write it :)
}

return (
    <main>
        <article className="card">
            <img
                src="https://randomuser.me/api/portraits"
                className="avatar"
                alt="User profile picture of John Doe"
            />
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={contact.isFavorite}
                    aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    className="favorite-button"
                >
                   {starIcon}
                </button>
                <h2 className="name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact">{contact.phone}</p>
                <p className="contact">{contact.email}</p>
            </div>

        </article>
    </main>
)
};

export default Practice;
