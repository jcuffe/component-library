import React from "react";
import Footer from "./Footer";
import { withKnobs, text } from "@storybook/addon-knobs";

export default { title: "Revel Footer", decorators: [withKnobs] };

export const footer = () => {
  const baseUrl = text("Revel URL for environment", "https://hellorevel.com");
  return <Footer baseUrl={baseUrl} />;
};
