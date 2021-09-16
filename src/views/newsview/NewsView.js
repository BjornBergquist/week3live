import { useState, useEffect } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import spinner from "../../shared/img/spinner.gif";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const NewsView = () => {
  const [serverData, setServerData] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const debounceValue = useDebounce(search, 2000);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await PokemonAPIService.searchPokemon(search);
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = () => {
    if (loading)
      return (
        <div>
          <h2>Loading pokemon...</h2>
          <img
            className="accessories__spinner"
            src={spinner}
            alt="Spinner gif"
          />
        </div>
      );
    return (
      <div>
        <h2> Name: {serverData?.name}</h2>
        <p> Weight: {serverData?.weight}</p>
        <img
          src={serverData?.sprites?.front_default}
          alt="Image of a pokemon"
        />
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, [debounceValue]);

  return (
    <main>
      <section>
        <h1>This is the News View</h1>
        <input
          placeholder="Search for pokemon"
          onChange={(event) => setSearch(event.target.value)}
        />
        {displayData()}
      </section>
    </main>
  );
};
