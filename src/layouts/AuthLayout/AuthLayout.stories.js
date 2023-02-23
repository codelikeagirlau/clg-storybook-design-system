import React from "react";

import AuthLayout from "./AuthLayout";

export default {
  title: "Layouts/Auth Layout",
  component: AuthLayout,
};

const Template = (args) => <AuthLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/300x300",
  logo_alt: "asdfasdf",
};
