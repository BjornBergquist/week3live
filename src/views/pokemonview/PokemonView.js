import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { ItemsInCartContext } from "../../shared/provider/ItemsInCartProvider";

export const PokemonView = () => {
  const location = useLocation();
  console.log(location);
  const [serverData, setServerData] = useState();
  const [itemsInCart, setItemsInCart] = useContext(ItemsInCartContext);

  const fetchData = async () => {
    await fetch(location.state.url)
      .then((response) => response.json())
      .then((data) => setServerData(data))
      .catch((error) => alert(error));
  };

  const fetchData2 = async () => {
    await axios
      .get(location.state.url)
      .then((response) => setServerData(response.data))
      .catch((error) => alert(error));
  };

  const displayData = () => {
    return serverData ? (
      <div>
        <p>Weight: {(serverData?.weight * 0.1).toFixed(2)} kg</p>
        <p>Height: {(serverData?.height * 0.1).toFixed(2)} m</p>
        <img
          src={serverData?.sprites?.other?.dream_world?.front_default}
          alt="A pokemon"
        />
      </div>
    ) : (
      <div>Loading...</div>
    );
  };

  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <main>
      <section>
        <h1>{location.state.name}</h1>
        <button onClick={() => console.log(serverData)}>Show ServerData</button>
        {displayData()}
        <button
          onClick={() => setItemsInCart([...itemsInCart, location.state.name])}
        >
          Add to cart
        </button>
      </section>
    </main>
  );
};
