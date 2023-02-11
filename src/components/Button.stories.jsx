import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { expect } from "@storybook/jest";

export default {
  title: "Common/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "white", value: "#fff" },
        { name: "ibory", value: "#fffff0" },
      ],
    },
    docs: {
      description: {
        component: "説明用のボタンコンポーネント",
      },
    },
  },
  argTypes: {
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
  },
};

const something = action("something");

const Template = (args) => {
  return <Button {...args} handleClick={linkTo("Common/Button", "Danger")} />;
};

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  color: "danger",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  ...Primary.args,
  children: "PrimarySmall",
  size: "sm",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  ...Primary.args,
  children: "PrimaryLarge",
  size: "lg",
};

// interaction関数
PrimaryLarge.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};
