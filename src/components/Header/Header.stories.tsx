import React from "react";
import Header from "./Header";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default { title: "Revel Header", decorators: [withKnobs] };

export const header = () => {
  const mobile = boolean("Mobile view", false);
  const loggedIn = boolean("User logged in", true);
  const baseUrl = text("Revel URL for environment", "https://hellorevel.com");
  const userId = text("User ID", "auth0|5dfa9c9b07b0e20e92fd189a");
  const profilePic = text(
    "Profile picture URL",
    "https://cdn.filestackcontent.com/wKXKyLyQkKFZUH7CYusT"
  );
  return (
    <Header
      mobile={mobile}
      baseUrl={baseUrl}
      profilePic={profilePic}
      userId={userId}
      loggedIn={loggedIn}
    />
  );
};
