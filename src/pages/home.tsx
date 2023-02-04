import React, { useState } from "react";
import { SNOW_FIELDS } from "../constants/SNOW_FEILDS";

function Home() {
  const [isLOgin, setLogin] = useState(false);

  if (isLOgin) {
    return (
      <>
        <p>Welcome skiing! Get what you need here!</p>
        {SNOW_FIELDS.map((field) => (
          <p>{field}</p>
        ))}
      </>
    );
  } else {
    return (
      <p>
        Need Login first
        <button
          onClick={() => {
            setLogin(true);
          }}
        >
          login
        </button>
      </p>
    );
  }
}

export default Home;
