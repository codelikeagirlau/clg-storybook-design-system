import React from "react";

import Username from "./Username";

export default {
  title: "Components/Username",
  component: Username,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

const Template = (args) => <Username {...args} />;

export const Default = Template.bind({});
Default.args = {
  username_text: "anonymous badger",
};

export const AnotherStory = Template.bind({});
Default.args = {
  username_text: "Sarah Brown",
};
