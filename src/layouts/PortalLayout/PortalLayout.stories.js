import React from "react";
import MastHead from "../../components/MastHead/MastHead";

import PortalLayout from "./PortalLayout";

export default {
  title: "Layouts/Portal Layout",
  component: PortalLayout,
};

const Template = (args) => <MastHead {...args} />;

export const Default = Template.bind({});

Default.args = {
  username_text: "Sarah Brown",
  logo_src: "https://via.placeholder.com/150x70",
  logo_alt: "asdfasdf",
  nav_items: [<a href="google.com">Google</a>],
  avatar_src: "https://via.placeholder.com/50x50",
};
