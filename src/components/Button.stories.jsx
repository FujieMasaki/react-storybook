import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
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
