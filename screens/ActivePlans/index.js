import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { FocusAwareStatusBar } from "../../components";
import { images, SIZES } from "../../constants";

const ActivePlans = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: "3%"
      }}
    >
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View>
        <Card style={{ borderRadius: SIZES.radius }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  paddingRight: "4%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: SIZES.h2
                }}
              >
                P754756
              </Text>
              <Image
                source={images.edit}
                style={{ height: SIZES.width / 20, width: SIZES.width / 20 }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: "4%"
              }}
            >
              <Text style={{ fontSize: SIZES.body2, marginRight: "1%" }}>
                {"\u20B9"}
              </Text>
              <Text style={{ fontSize: SIZES.body2 }}>5000</Text>
            </View>

            <View>
              <Text style={styles.textStyles}>
                Plan validity till : 6th Sept 2026
              </Text>
              <Text style={styles.textStyles}>Number of Years : 5 years</Text>
              <Text style={[styles.textStyles]}>
                Number of People : 10 years
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default ActivePlans;

const styles = StyleSheet.create({
  textStyles: {
    paddingVertical: "1%",
    textAlign: "center"
  }
});
