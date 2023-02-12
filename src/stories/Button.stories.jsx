import React from "react";
import { Button } from "./Button";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    handleClick: {
      action: true,
    },
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
  label: "Default",
  color: "primary",
  size: "medium",
};
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  color: "primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  size: "small",
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

Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));

  await expect(args.handleClick).toHaveBeenCalled();
};
