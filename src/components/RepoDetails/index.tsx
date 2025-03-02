import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import { useFetchRepo } from "../../hooks/RepoList/useFetchRepo";
import { Loader } from "../../components/Loader";

const RepoDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { repo, loading, error } = useFetchRepo(name ?? "");

  if (loading) return <Loader />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!repo) return <Typography>Repository not found</Typography>;

  return (
    <Box
      p={{ xs: 2, sm: 4 }}
      display="flex"
      width="100%"
      sx={{ backgroundColor: "background.default", minHeight: "100vh" }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "none",
          backgroundColor: "background.paper",
          color: "text.primary",
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
              {repo.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h4" fontWeight="bold">
              {repo.name}
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" mb={2}>
            {repo.description || "No description available"}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>🌍 Language:</strong> {repo.language || "Not specified"}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>🍴 Forks:</strong> {repo.forks_count}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>👀 Watchers:</strong> {repo.watchers_count}
          </Typography>

          <Box display="flex" gap={2} mt={3}>
            <Button
              href={repo.html_url}
              target="_blank"
              variant="contained"
              color="primary"
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              View on GitHub
            </Button>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: "20px", textTransform: "none" }}
            >
              Back to List
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RepoDetails;
