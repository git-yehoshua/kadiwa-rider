import React from "react";
import { useLocation } from "react-router-dom";
import common from "../../config/common";

const PageTitle = () => {
  const location = useLocation();
  const path = location.pathname;

  // Extract the title from the configuration or use a default title
  const title = common.pageTitles[path] || "Default Title";

  return <h1 className="text-xl text-gray-600 font-semibold">{title}</h1>;
};

export default PageTitle;
