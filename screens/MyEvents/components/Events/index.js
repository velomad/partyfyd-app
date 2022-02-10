import React from "react";
import { COLORS, images, SIZES } from "../../../../constants";
import { View, Text, Animated, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// const rightContent = (props) => (
//   <Image
//     source={images.edit}
//     style={{ height: SIZES.width / 20, width: SIZES.width / 20 }}
//   />
// );

const Events = () => {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  const events = [
    {
      title: "Friend's Birthday",
      name: "Sagar Chavan",
      mobileNumber: 8097048449,
      deliveryAddress:
        " E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203",
      cake: "Black Forest",
      extraUtilities: "Black Forest"
    }
  ];
  return (
    <View>
      <Animated.FlatList
        pagingEnabled={true}
        legacyImplementation={false}
        snapToAlignment="center"
        scrollEventThrottle={15}
        snapToInterval={SIZES.width}
        data={events}
        keyExtractor={(item) => JSON.stringify(item.id)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Card style={{ borderRadius: SIZES.radius }}>
                <Card.Title
                  titleStyle={{ fontWeight: "bold" }}
                  title={item.title}
                  // right={rightContent}
                  rightStyle={{
                    paddingRight: "5%"
                  }}
                />
                <View
                  style={{
                    borderBottomColor: "lightgrey",
                    borderBottomWidth: 1
                  }}
                />
                <Card.Content style={{ marginTop: "5%" }}>
                  <View>
                    <Text style={styles.textContent}>Name :- {item.name}</Text>
                    <Text style={styles.textContent}>
                      Mobile number :- {item.mobileNumber}
                    </Text>
                    <Text style={styles.textContent}>
                      Delivery address :- {item.deliveryAddress}
                    </Text>
                    <Text style={styles.textContent}>Cake :- {item.cake}</Text>
                    <Text style={styles.textContent}>
                      Extra utilities :- {item.extraUtilities}
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    marginTop: "5%"
  },
  eventNameContainer: {
    padding: "3%",
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.radius
  },
  eventContainer: {
    borderRadius: SIZES.radius
  },
  textContent: {
    paddingBottom: "1.5%"
  }
});
