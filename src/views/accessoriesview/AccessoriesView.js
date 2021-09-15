import { useState } from "react";
import axios from "axios";
import spinner from "../../shared/img/spinner.gif";
import "./AccessoriesView.css";

export const AccessoriesView = () => {
  const [serverResponse, setServerResponse] = useState();
  const [count, setCount] = useState(1);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/" + count; // = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setServerResponse(response);
      setCount(count + 1);
    } catch (error) {
      alert("Error retrieving data from server: " + error);
    }
  };

  const showLoadingIfNoAPICall = () => {
    if (serverResponse) {
      return <h2>{serverResponse.data?.name}</h2>;
    } else {
      return (
        <img className="accessories__spinner" src={spinner} alt="Spinner" />
      );
    }
  };

  return (
    <main>
      <section>
        <h1>This is the Accessories View</h1>
        {showLoadingIfNoAPICall()}
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
