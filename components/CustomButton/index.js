import * as React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ onPress, mode = "contained", icon, children }) => (
  <Button icon={icon} mode={mode} onPress={onPress}>
    {children}
  </Button>
);

export default CustomButton;
