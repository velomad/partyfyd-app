import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const TextField = () => {
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        // right={<TextInput.Affix text="/100" />}
      />
    </View>
  );
};

export default TextField;
