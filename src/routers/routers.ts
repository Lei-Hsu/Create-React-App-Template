import Home from "../pages/Home";
import NotFound from "../pages/404";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

export const routers = [
  {
    path: "*",
    component: NotFound,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/page1",
    component: Page1,
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/page3",
    component: Page3,
  },
];
