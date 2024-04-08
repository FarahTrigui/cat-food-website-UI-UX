import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Slide169One from "pages/Slide169One";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Slide169One /> },
    { path: "*", element: <NotFound /> },
  
  ]);

  return element;
};

export default ProjectRoutes;
