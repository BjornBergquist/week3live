import { useState } from "react";
import axios from "axios";

export const AccessoriesView = () => {
  const [serverResponse, setServerResponse] = useState();
  const API_URL = "https://pokeapi.co/api/v2/pokemon/1";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setServerResponse(response);
    } catch (error) {
      alert("Error retrieving data from server: " + error);
    }
  };

  const showLoadingIfNoAPICall = () => {
    if (serverResponse) {
      return serverResponse.data?.name;
    } else {
      return "Loading...";
    }
  };

  return (
    <main>
      <section>
        <h1>This is the Accessories View</h1>
        <h2>{showLoadingIfNoAPICall()}</h2>
        <button onClick={() => fetchData()}>Make API call</button>
        <br />
        <img
          src={serverResponse?.data.sprites.front_default}
          alt={serverResponse?.data.name}
        />
      </section>
    </main>
  );
};
