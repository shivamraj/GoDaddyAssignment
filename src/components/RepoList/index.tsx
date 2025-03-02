import { Typography, IconButton, Box } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import { Loader } from "../Loader";
import { useFetchRepos } from "../../hooks/RepoList/useFetchRepos";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";
import { RepoCard } from "../RepoCard/RepoCard";

const RepoList: React.FC = () => {
  const { repos, loading, error } = useFetchRepos();
  const { toggleTheme } = useContext(ThemeContext);

  if (loading) return <Loader />;

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      p={4}
      sx={{ backgroundColor: "background.default", minHeight: "100vh" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" color="primary">
          GoDaddy Repos
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>

      <RepoCard repos={repos} />
    </Box>
  );
};

export default RepoList;
