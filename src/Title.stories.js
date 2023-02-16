import React from "react";

import { Title } from "./Title";

export default {
  title: "Design System/Title",
  component: Title,
  /*
   * More on Storybook argTypes at:
   * https://storybook.js.org/docs/react/api/argtypes
   */
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["tiny", "small", "medium", "large"],
    },
  },
  /*
   * More on Storybook parameters at:
   * https://storybook.js.org/docs/react/writing-stories/parameters#component-parameters
   */
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
};

export const Standard = (args) => <Title {...args} />;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const Sizes = (args) => (
  <div>
    {/* <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" /> */}
    <Title {...args} size="small" />
    <Title {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

// export const Initials = (args) => (
//   <div>
//     <Avatar username="Tom Coleman" />
//     <Avatar username="Dominic Nguyen" />
//     <Avatar username="Kyle Suss" />
//     <Avatar username="Michael Shilman" />
//   </div>
// );

export const Loading = (args) => (
  <div>
    {/* <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" /> */}
    <Title {...args} size="small" />
    <Title {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

export const Large = (args) => (
  <div>
    <Title loading size="large" />
    <Title size="large" username="Tom Coleman" />
    <Title
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);
