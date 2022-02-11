import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const TextField = ({ mode = "outlined", label, placeholder }) => {
  return (
    <View>
      <TextInput
        mode={mode}
        label={label}
        placeholder={placeholder}
        // right={<TextInput.Affix text="/100" />}
      />
    </View>
  );
};

export default TextField;
