"use client";

import { usePersonActions, usePersonState } from "./flat-updates-store";

function FlatUpdatesPage() {
  const { firstName, lastName } = usePersonState();
  const { updateFistName, updateLastName } = usePersonActions();
  return (
    <main className="p-10 text-center">
      <h2>Flat Updates using </h2>
      <div>
        <h2>
          Person: {firstName} {lastName}
        </h2>
        <label>
          First Name
          <input
            onChange={(e) => {
              updateFistName(e.target.value);
            }}
            value={firstName}
          />
        </label>
        <label>
          Last Name
          <input
            onChange={(e) => {
              updateLastName(e.target.value);
            }}
            value={lastName}
          />
        </label>
      </div>
    </main>
  );
}

export default FlatUpdatesPage;
