/* import { useCallback, useState } from "react";
import services from "../lib/axios";

export function useGetCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = useCallback((config) => {
    services
      .get("/character", { ...config })
      .then((response) => {
        setCharacters(response);
      })
      .catch((error) => {
        setCharacters(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    characters,
    loading,
    fetchCharacters,
  };
}
 */