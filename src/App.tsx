import { useQuery } from "@tanstack/react-query";
import { pokeApiClient } from "./api/pokeApiClient";

function App() {
  const { data, isLoading } = useQuery(["pokemon-list"], async () => {
    const response = await pokeApiClient.get("/pokemon?limit=10&offset=0");

    return response.data;
  });

  console.log(data, isLoading);

  return (
    <div className="App">
      <h1 className="text-2xl">Emma es gay</h1>
    </div>
  );
}

export default App;
