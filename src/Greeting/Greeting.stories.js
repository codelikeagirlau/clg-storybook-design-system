import React from "react";
import Greeting from "./Greeting";

export default {
  title: "Design System/Greeting",
  component: Greeting,
};

const Template = (args) => <Greeting {...args} />;

export const Default = Template.bind({});
Default.args = {
  greeting: {
    id: "1",
    title: "Default Greeting",
    state: "GREETING_STANDARD",
  },
};

export const MinusNinetyDegrees = Template.bind({});
MinusNinetyDegrees.args = {
  greeting: {
    ...Default.args.task,
    state: "GREETING_MINUSNINETY",
  },
};
