import React from "react";

import Title from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3"],
    },
  },
  parameters: {
    componentSubtitle:
      "Displays Title component which can be h1, h2, h3. Custom classes can be added. Details TBC",
  },
};


export const AllTitles = () => (
  <div>
    <Title />
    <Title type="h2" className="custom-class" />
    <Title type="h3" text="Testing text property" />
  </div>
);

const Template = (args) => <Title {...args} />;


export const Heading1 = Template.bind({});
Heading1.args = {
  type: "h1",
  text: "This is a Heading 1",
};  

export const Heading2 = Template.bind({});
Heading2.args = {
  type: "h2",
  text: "This is a Heading 2",
};  

export const Heading3 = Template.bind({});
Heading3.args = {
  type: "h3",
  text: "This is a Heading 3",
};  