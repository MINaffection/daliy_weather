import React from "react";
// import { StyleSheet, Text, View } from 'react-native';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "9a81d4c6ee735c4f8ff8e032802b5cde";
const Clear = "Clear";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
//      console.log(data);
//      console.log(weather);
//      console.log(weather.main);
      this.setState({ isLoading: false, condition: weather[0].main, temp });
//      console.log(weather[0].main);
//      if (this.condition == "Clear") {
//        console.log(weather[0].main);
//        console.trace(condition);
//          console.log(weather[0].main);
//      }
  };
  
  getLocation = async() => {
    try {
//      throw Error();
//      const response = await Location.requestPermissionsAsync();
      await Location.requestPermissionsAsync();
//      console.log(response);
//      const location = await Location.getCurrentPositionAsync();
//      console.log(location);
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // Send to API and get weather!
//      console.log(coords.latitude, coords.longitude);
      this.getWeather(latitude, longitude)
//      this.setState({ isLoading: false });
      
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  };
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (<Loading />) : (<Weather temp = { Math.round(temp) } condition = { condition } />);
  };
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
