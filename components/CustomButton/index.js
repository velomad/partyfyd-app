import * as React from "react";
import { Button } from "react-native-paper";
import { COLORS, SIZES } from "../../constants";

const CustomButton = ({
  onPress,
  mode = "contained",
  icon,
  children,
  btnRadius = SIZES.radius,
  btnbgcolor = COLORS.primary
}) => (
  <Button
    icon={icon}
    mode={mode}
    onPress={onPress}
    style={{ borderRadius: btnRadius, backgroundColor: btnbgcolor }}
  >
    {children}
  </Button>
);

export default CustomButton;
