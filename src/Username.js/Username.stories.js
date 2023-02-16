import React from "react";
import Username from "./Username";

export default {
  title: "Design System/Username",
  component: Username,
};

const Template = (args) => <Username {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: {
    id: "1",
    title: "Anonymous Username",
    state: "USERNAME_ANONYMOUS",
  },
};
