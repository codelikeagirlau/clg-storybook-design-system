import React from "react";

import { Title } from "./Title";

export default {
  title: "Design System/Title",
  component: Title,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["h1", "h2"],
    },
  },
  parameters: {
    componentSubtitle:
      "Displays Title text that can be h1, h2, h3, h4 or h5",
  },
};

export const AllTitles = (args) => (
  <div>
    <Title {...args} />
    <Title {...args} className="custom-class" type="h1" />
    <Title {...args} type="h2" text="Testing text property" />
  </div>
);

export const Heading1 = (args) => <Title {...args} />;
Heading1.args = {
  type: "h1",
  text: "This is a long heading",
};

export const Heading2 = (args) => <Title {...args} />;
Heading2.args = {
  type: "h2",
  text: "This is a long h2 heading",
};