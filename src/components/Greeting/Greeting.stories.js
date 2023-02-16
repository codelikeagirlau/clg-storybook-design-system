import React from "react";
import Greeting from "./Greeting";

export default {
  title: "Components/Greeting",
  component: Greeting,
};

const Template = (args) => <Greeting {...args} />;

export const Default = Template.bind({});
Default.args = {
  greeting: {
    id: "1",
    title: "Default Greeting",
  },
};

export const MinusNinetyDegrees = Template.bind({});
MinusNinetyDegrees.args = {
  greeting: {
    ...Default.args.task,
  },
};
