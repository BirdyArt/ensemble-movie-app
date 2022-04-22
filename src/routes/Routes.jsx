import HomePage from "../pages/HomePage";
import Search from "../pages/Search";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <HomePage />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/search",
    exact: true,
    component: <Search />,
    title: "Search",
    isHeaderElement: false,
  }
];