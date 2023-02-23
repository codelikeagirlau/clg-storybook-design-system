import React from "react";
import MastHead from "./MastHead";

export default {
  title: "Components/Masthead",
  component: MastHead,
};

const Template = (args) => <MastHead {...args} />;

export const Default = Template.bind({});
Default.args = { logo_src: "https://via.placeholder.com/200x200" };
Default.storyName = "Logged Out";

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  logo_src: "https://via.placeholder.com/150x70",
  logo_alt: "internship logo placeholder",
  username_text: "Laila",
  nav_items: [
    <a href="www.asdf.com">asdfds</a>,
    <a href="www.asdf.com">asdfdfdfds</a>,
  ],
  avatar_src: "https://via.placeholder.com/50x50",
};
