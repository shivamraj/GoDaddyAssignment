import { useState, useEffect } from "react";
import axios from "axios";
import { Repo } from "../../declaration/Repo";

export const useFetchRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Repo[]>("https://api.github.com/orgs/godaddy/repos")
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching repositories");
        setLoading(false);
      });
  }, []);

  return { repos, loading, error };
};
