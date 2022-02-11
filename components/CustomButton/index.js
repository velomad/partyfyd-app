import * as React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ onPress, mode = "contained", icon, children, btnRadius ,btnbgcolor}) => (
  <Button icon={icon} mode={mode} onPress={onPress} style={{borderRadius: btnRadius, backgroundColor:btnbgcolor }}>
    {children}
  </Button>
);

export default CustomButton;
