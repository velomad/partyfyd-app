import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FocusAwareStatusBar, TextField } from "../../components";

const CreateEvent = () => {
  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View>
        <TextField label={"Event Name"}/>
      </View>
    </ScrollView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    padding: "3%"
  }
});
