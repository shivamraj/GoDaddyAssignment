import { Link } from "react-router-dom";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Repo } from "../../declaration/Repo";

type TRepoCardProps = {
  repos: Repo[];
};

export const RepoCard = ({ repos }: TRepoCardProps) => {
  return (
    <Grid container spacing={3}>
      {repos.map((repo: Repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.id}>
          <Card
            sx={{
              backgroundColor: "background.paper",
              color: "text.primary",
              "&:hover": { transform: "scale(1.03)", transition: "0.3s" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">
                  <Link
                    to={`/repo/${repo.name}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {repo.name}
                  </Link>
                </Typography>
                <IconButton href={repo.html_url} target="_blank">
                  <GitHub />
                </IconButton>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {repo.description || "No description available"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
