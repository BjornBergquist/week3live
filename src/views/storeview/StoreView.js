import { useState, useEffect } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";

export const StoreView = () => {
  const [count, setCount] = useState(0);
  const [serverData, setServerData] = useState();

  const fetchData = async () => {
    const { data } = await PokemonAPIService.getAllPokemon();
    setServerData(data);
  };

  const displayData = () => {
    return serverData?.results.map((pokemon, i) => (
      <div key={pokemon.name}>
        <h3>
          {i + 1}. {pokemon.name}
        </h3>
      </div>
    ));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Hej dotNet20D!");
    return () => {
      console.log("Hejdå!");
    };
  }, [count]);

  return (
    <main>
      <section>
        <h1>Our Amazing Product</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count > 0 ? count - 1 : 0);
          }}
        >
          -
        </button>
      </section>
      <section>
        <h2>List of pokemon</h2>
        <button onClick={() => console.log(serverData)}> API </button>
        {displayData()}
      </section>
    </main>
  );
};
