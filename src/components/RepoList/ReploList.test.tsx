import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RepoList from "./index";
import { ThemeContext } from "../Theme/ThemeProvider";
import { useFetchRepos } from "../../hooks/RepoList/useFetchRepos";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// Mock useFetchRepos hook
vi.mock("../../hooks/RepoList/useFetchRepos");

describe("RepoList Component", () => {
  const mockToggleTheme = vi.fn();

  const renderWithTheme = (mockData: any) => {
    (useFetchRepos as jest.Mock).mockReturnValue(mockData);
    return render(
      <ThemeContext.Provider value={{ toggleTheme: mockToggleTheme }}>
        <MemoryRouter>
          <RepoList />
        </MemoryRouter>
      </ThemeContext.Provider>
    );
  };

  test("shows loader while data is loading", () => {
    renderWithTheme({ repos: [], loading: true, error: null });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("displays repositories once loaded", () => {
    renderWithTheme({
      repos: [{ id: 1, name: "Test Repo" }],
      loading: false,
      error: null,
    });
    expect(screen.getByText("GoDaddy Repos")).toBeInTheDocument();
    expect(screen.getByText("Test Repo")).toBeInTheDocument();
  });

  test("shows error message if fetching fails", () => {
    renderWithTheme({ repos: [], loading: false, error: "Failed to fetch" });
    expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
  });

  test("toggles theme when button is clicked", async () => {
    renderWithTheme({ repos: [], loading: false, error: null });
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
