import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { FONTS, images, SIZES } from "../../../../constants";

const OtpVerification = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../../assets/images/Verfication-Code.jpg')}>
        <View style={styles.container}>
          <View style={styles.align}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter your OTP number"
              keyboardType="numeric"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    justifyContent: 'flex-end',
    height: SIZES.width / 8,
    margin: 12,
    paddingLeft: 12,
    fontSize: SIZES.width / 24,
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 40,
    borderWidth: 1,
    borderColor: '#828282',
    borderWidth: 2
  },
  align: {
    paddingTop: SIZES.width / 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});