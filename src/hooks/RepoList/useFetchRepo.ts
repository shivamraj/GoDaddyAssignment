import { useState, useEffect } from "react";
import axios from "axios";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  forks: number;
  forks_count: number;
  watchers_count: number;
  open_issues: number;
  watchers: number;
}

export const useFetchRepo = (repoName: string) => {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repoName) return;

    setLoading(true);
    axios
      .get<Repo>(`https://api.github.com/repos/godaddy/${repoName}`)
      .then((response) => {
        setRepo(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching repo details");
        setLoading(false);
      });
  }, [repoName]);

  return { repo, loading, error };
};
