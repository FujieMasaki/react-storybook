import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
};
export const HelloButton = () => <Button>Default</Button>;
export const ClickButton = () => <Button color="primary">Primary!</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
export const PrimarySmall = () => (
  <Button color="primary" size="sm">
    PrimarySmall
  </Button>
);
export const PrimaryLarge = () => (
  <Button color="primary" size="lg">
    PrimaryLarge
  </Button>
);
