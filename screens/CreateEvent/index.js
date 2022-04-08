import React, { useState, useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import { CustomButton, FocusAwareStatusBar, TextField } from "../../components";
import RNPickerSelect from "react-native-picker-select";
import { COLORS, SIZES } from "../../constants";
import { ToggleButton } from "react-native-paper";
import DatePicker from "react-native-date-picker";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  const [show, setShow] = useState(false);
  const handleSnapPress = () => {
    sheetRef.current.snapTo(0);
  };

  const showDatepicker = () => {
    setShow(true);

  };

  const [date, setDate] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const [value, setValue] = React.useState("left");

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const RenderContent = () => (
    <View
      style={{
        zIndex: 100,
        backgroundColor: "#f1f3f4",
        padding: SIZES.width / 40,
        height: "100%"
      }}
    >
      <Text>content</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View
        style={{
          paddingHorizontal: "3%"
        }}
      >
        <View style={styles.fieldsGap}>
          <TextField label={"Event Name"} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={"Member Name"} />
        </View>

        <View style={styles.fieldsGap}>
          <RNPickerSelect
            placeholder={{ label: "Event Type" }}
            style={{
              viewContainer: {
                borderColor: COLORS.gray,
                borderWidth: 1,
                borderRadius: 5
              },
              inputIOS: {
                color: "white",
                paddingHorizontal: 10,
                borderRadius: 5
              },
              placeholder: {
                color: COLORS.gray
              },
              inputAndroid: {
                color: COLORS.gray,
                paddingHorizontal: 10,
                borderRadius: 5
              }
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Birthday", value: "birthday" },
              { label: "Aniversary", value: "aniversary" }
            ]}
          />
        </View>

        <View style={styles.fieldsGap}>
          <View style={styles.fieldsGap}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "bold",
                fontSize: SIZES.body3
              }}
            >
              Select Gender
            </Text>
          </View>

          <ToggleButton.Row
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton
              style={{ minWidth: "33.33%" }}
              icon={() => (
                <View>
                  <Text style={{ color: COLORS.gray }}>Male</Text>
                </View>
              )}
              value="male"
            />
            <ToggleButton
              style={{ minWidth: "33.33%" }}
              icon={() => (
                <View>
                  <Text style={{ color: COLORS.gray }}>Female</Text>
                </View>
              )}
              value="female"
            />
            <ToggleButton
              style={{ minWidth: "33.33%" }}
              icon={() => (
                <View>
                  <Text style={{ color: COLORS.gray }}>Other</Text>
                </View>
              )}
              value="other"
            />
          </ToggleButton.Row>
        </View>

        <View style={styles.fieldsGap}>
          <RNPickerSelect
            placeholder={{ label: "Event Duration" }}
            style={{
              viewContainer: {
                borderColor: COLORS.gray,
                borderWidth: 1,
                borderRadius: 5
              },
              inputIOS: {
                color: "white",
                paddingHorizontal: 10,
                borderRadius: 5
              },
              placeholder: {
                color: COLORS.gray
              },
              inputAndroid: {
                color: COLORS.gray,
                paddingHorizontal: 10,
                borderRadius: 5
              }
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Monthly", value: "monthly" },
              { label: "Annual", value: "annual" }
            ]}
          />
        </View>


        <View style={styles.fieldsGap}>
          <TextField label={"Name/Message on cake"} />
        </View>
        {/* <View style={styles.fieldsGap}>
          <TextField label={"Event Date"} value={date.toLocaleString()} />
        </View> */}
        <View style={styles.fieldsGap}>
          <View style={styles.eventDateField} onStartShouldSetResponder={() => showDatepicker()}>
            {/* <Button
            onPress={showDatepicker}
            title="Event Date"
            style={styles.eventDateField}
            color="#FFF"
          /> */}
            <Text style={styles.dateText}>
              {
                !!date ? date.toDateString() : "Event Date"
              }
            </Text>
          </View>
        </View>
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={!!date?date: new Date()}
              mode={'date'}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.fieldsGap}>
          <RNPickerSelect
            placeholder={{ label: "Event Time" }}
            style={{
              viewContainer: {
                borderColor: COLORS.gray,
                borderWidth: 1,
                borderRadius: 5
              },
              inputIOS: {
                color: "white",
                paddingHorizontal: 10,
                borderRadius: 5
              },
              placeholder: {
                color: COLORS.gray
              },
              inputAndroid: {
                color: COLORS.gray,
                paddingHorizontal: 10,
                borderRadius: 5
              }
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Midnight 12am", value: "midnight" },
              { label: "Midday 10am-2pm", value: "midday" },
              { label: "Early evening 4pm-6:30pm", value: "earlyEvening" },
              { label: "Late evening 6:30pm-9pm", value: "lateEvening" }
            ]}
          />
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={"Phone Number"} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={"Pin Code"} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField multiline={true} numberOfLines={4} label={"Address"} />
        </View>

        <View style={styles.fieldsGap}>
          <CustomButton
            onPress={() => {
              handleSnapPress(0);
              console.log("preqwhfi");
            }}
          >
            Select cake & utilities
          </CustomButton>
        </View>
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={["60%", "0%"]}
        initialSnap={1}
        callbackNode={fall}
        renderHeader={renderHeader}
        enabledGestureInteraction={true}
        renderContent={RenderContent}
      />
    </ScrollView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fieldsGap: {
    paddingVertical: "2%"
  },
  header: {
    backgroundColor: COLORS.primaryLight,
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginBottom: 10
  },
  eventDateField: {
    borderColor: '#828282',
    borderWidth: 1,
    paddingVertical: SIZES.width / 21,
    borderRadius: SIZES.width / 70
  },
  dateText: {
    color: '#666',
    paddingLeft: SIZES.width / 38,
    fontSize: SIZES.width / 24
  }
});
