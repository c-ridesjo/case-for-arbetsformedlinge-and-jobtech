import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { SelectedJob } from "./components/SelectedJob";
import { SearchResults } from "./components/SearchResults";
import { SearchForm } from "./components/SearchForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/search-form",
        element: <SearchForm />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
      {
        path: "/selected-job",
        element: <SelectedJob />,
      },
    ],
  },
]);
