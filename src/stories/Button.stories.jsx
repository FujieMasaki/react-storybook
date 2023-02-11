import React from "react";
import { Button } from "./Button";
import { linkTo } from "@storybook/addon-links";

import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
    },
    handleClick: { action: true },
  },
};

const Template = (args) => (
  <Button {...args} handleClick={linkTo("Example/Button", "Secondary")} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};
