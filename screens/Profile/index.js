import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { CustomButton, FocusAwareStatusBar } from "../../components";
import TextField from "../../components/TextField";
import { images, SIZES } from "../../constants";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: "3%"
      }}
    >
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={{ alignItems: "center", paddingVertical: "8%" }}>
        <Image
          source={images.profileImage}
          style={{
            height: SIZES.width / 4,
            width: SIZES.width / 4
          }}
        />

        <View style={{ flexDirection: "row", marginVertical: "4%" }}>
          <Text style={{ marginRight: "1%" }}>Edit Photo</Text>
          <Image
            source={images.edit}
            style={{ height: SIZES.width / 22, width: SIZES.width / 22 }}
          />
        </View>
      </View>

      <View>
        <TextField />
        <TextField />
        <TextField />

        <CustomButton>submit</CustomButton>
      </View>
    </View>
  );
};

export default Profile;
