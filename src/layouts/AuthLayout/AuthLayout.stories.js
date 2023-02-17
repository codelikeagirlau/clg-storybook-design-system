import React from "react";

import AuthLayout from "./AuthLayout";

export default {
  title: "Layouts/Auth Layout",
  component: AuthLayout,
};

const Template = (args) => <AuthLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  custom_text: "hello world",
};
