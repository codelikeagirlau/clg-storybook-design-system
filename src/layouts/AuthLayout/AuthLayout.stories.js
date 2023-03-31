import React from "react";
import AuthLayout from "./AuthLayout";

export default {
  title: "Layouts/Auth Layout",
  component: AuthLayout,
};

const Template = (args) => <AuthLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Sign in to the CLG Web Platform",
  logo_src: "https://via.placeholder.com/300x300",
  logo_alt: "asdfasdf",
  children: "this is where the form would go",
};
