import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { MultiSlider } from "../../../../components";
import { FONTS, images, SIZES } from "../../../../constants";

const SelectPlan = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            SELECT PLAN
          </Text>
          <Text style={styles.subTitle}>
            Choose a plan that works best for you!
          </Text>
        </View>
        <View style={styles.planToggle}>
          <View style={styles.basicPlan}>
            <Text style={styles.planText}>
              Basic
            </Text>
          </View>
          <View style={styles.standardPlan}>
            <Text style={styles.planText}>
              Standard
            </Text>
          </View>
          <View style={styles.premiumPlan}>
            <Text style={styles.planText}>
              Premium
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardTitle}>
            <Text style={styles.planPrice}>{'\u20B9'} 1000</Text>
          </View>
          <View style={styles.multiSliderContainer}>
            <MultiSlider scrollwidth={240} textLable="events" sliderCount={10} selectedCount={3} />
            <Text style={styles.sliderInfo1}>Number of Events per year</Text>
            <Text style={styles.sliderInfo2}>Want this plan for more than 10 events?Write to us on</Text>
            <Text style={styles.sliderInfo3}>quote@partyfyd.com</Text>
          </View>
          <View style={styles.multiSliderContainer2}>
            <MultiSlider scrollwidth={240} textLable="years" sliderCount={10} selectedCount={3} />
            <Text style={styles.sliderInfo1}>Number of years</Text>
          </View>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Cakes"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.extraUtilitiesContainer}>
            <Text style={styles.extraText1}>Extra Utilities :-</Text>
            <View style={styles.utTextContainer}>
              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Baloons</Text></View>

              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Cards</Text></View>

              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Chocolate</Text></View>

            </View>
            <View style={styles.utTextContainer}>
              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Ribbions</Text></View>
              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Part hats</Text></View>
              <View style={styles.utText}><Text style={styles.crossMark}>{'\u274C'}</Text><Text style={styles.crossMarktext}>Crackers</Text></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectPlan;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: SIZES.width / 10
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: SIZES.width / 20
  },
  title: {
    fontSize: SIZES.width / 20,
    fontWeight: "bold",
    color: '#3D3D3D',
    paddingBottom: SIZES.width / 550
  },
  subTitle: {
    fontSize: SIZES.width / 30,
    fontWeight: "500",
    color: '#3D3D3D',
  },
  planToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.width / 20,
    backgroundColor: '#ADC86D',
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 10,
    height: "auto",
  },
  basicPlan: {
    flex: 1,
    backgroundColor: '#93AC57',
    padding: SIZES.width / 28,
    borderRadius: SIZES.width / 10,
    alignItems: 'center'
  },
  standardPlan: {
    flex: 1,
    paddingLeft: SIZES.width / 28,
    alignSelf: 'center'
  },
  premiumPlan: {
    flex: 1,
    alignSelf: 'center'
  },
  planText: {
    fontSize: SIZES.width / 28,
    fontWeight: "700",
    color: '#FFFFFF',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: SIZES.width / 12,
    width: SIZES.width / 1.2,
    borderRadius: SIZES.width / 13,
    paddingHorizontal: SIZES.width / 20,
    elevation: 3,
    shadowColor: '#000',
  },
  cardTitle: {
    padding: SIZES.width / 35,
    alignItems: 'center'
  },
  planPrice: {
    fontSize: SIZES.width / 12,
    color: '#3D3D3D'
  },
  multiSliderContainer: {
    flex: 1,
    paddingHorizontal: SIZES.width / 20,
    marginBottom: SIZES.width / 7
  },
  multiSliderContainer2: {
    flex: 1,
    paddingHorizontal: SIZES.width / 20,
  },
  sliderInfo1: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: SIZES.width / 30,
    color: '#777',
    fontWeight: 'bold',
    paddingBottom: SIZES.width / 70
  },
  sliderInfo2: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: SIZES.width / 40,
    color: '#888',
    fontWeight: 'bold',
  },
  sliderInfo3: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: SIZES.width / 35,
    color: '#1BA8F0',
    fontWeight: 'bold'
  },
  textAreaContainer: {
    borderColor: '#999',
    borderWidth: 2,
    padding: 5,
    marginHorizontal: SIZES.width / 50,
    borderRadius: SIZES.width / 25
  },
  textArea: {
    height: SIZES.width / 4,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },
  extraUtilitiesContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  extraText1: {
    textAlign: 'left',
    fontSize: SIZES.width / 30,
    color: '#777',
    fontWeight: 'bold',
    paddingHorizontal: SIZES.width / 35,
    paddingTop: SIZES.width / 60
  },
  utTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width / 20,
  },
  utText: {
    flexDirection: 'row',
    paddingTop: SIZES.width / 65,
    fontSize: SIZES.width / 33,
    color: '#777',
  },
  crossMark: {
    fontSize: SIZES.width / 37,
    textAlignVertical: 'center',
    paddingRight: 4
  },
  crossMarktext: {
    fontSize: SIZES.width / 33,
    color: '#777',
  }
});
