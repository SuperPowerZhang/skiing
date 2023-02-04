import React, { useState } from "react";
import { SNOW_FIELDS } from "../constants/SNOW_FEILDS";

function Home() {
  const [isLogin, setLogin] = useState(false);

  if (isLogin) {
    return (
      <>
        <p>Welcome skiing! Get what you need here!</p>
        {SNOW_FIELDS.map((field) => (
          <p key={field}>{field}</p>
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
            console.log(1111, isLogin);
          }}
        >
          login
        </button>
      </p>
    );
  }
}

export default Home;
