import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";

import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from "./WeatherOptions_KOR";

export default function Weather({ temp, condition }) {
    return (
//        <View style = { styles.container }>
            <LinearGradient colors={ weatherOptions[condition].gradient }
              style = { styles.container }>
                  <StatusBar barStyle = "light-content" />
            <View style = { styles.half_container }>
            <MaterialCommunityIcons size = { 120 } name = { weatherOptions[condition].iconName } color = "white" />
                <Text style = { styles.temp_text }>  { temp }˚ </Text> 
            </View>

            <View style = { styles.half_container }>
             <View style = { styles.text_Container }>
                 <Text style = { styles.title }> { weatherOptions[condition].title } </Text>
                 <Text style = { styles.subtitle }> { weatherOptions[condition].subtitle } </Text>
             </View>
            </View>
            </LinearGradient>
//        </View>
    );
} // ℃

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([ "Thunderstorm", "Drizzle", "Rain", "Snow", 
    "Atmosphere", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", 
    "Ash", "Squall", "Tornado", "Clear", "Clouds" ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    half_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },

    temp_text: {
        color: "white",
        fontSize: 42
    },

    title: {
        color: "white",
        fontSize: 55,
        fontWeight: "300",
        marginBottom: 20
    },
    subtitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "500",
    },
    text_Container: {
        justifyContent: "center",
        alignItems: "center"
    }
});


 /*               if ( condition != "Drizzle" || "Atmosphere" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Dust" || "Ash" || "Squall" ) {
                    <MaterialCommunityIcons size = { 100 } name = { weatherOptions["Drizzle"].iconName } color = "white" />
                } else {
                    <Feather size = { 100 } name = { weatherOptions["Drizzle"].iconName } color = "white" />
                }






                            <View style = { {...styles.half_container, ...styles.text_Container} }>
                <Text style = { styles.title }> { weatherOptions[condition].title } </Text>
                <Text style = { styles.subtitle }> { weatherOptions[condition].subtitle } </Text>
            </View>
*/
