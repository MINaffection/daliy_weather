import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Loading_Comment, styles } from "./WeatherOptions_KOR";

export default function Loading() {
    return (
        <View style = { styles.container }>
            <StatusBar barStyle = "dark-content" />
           <Text style = { styles.text }>{ Loading_Comment }</Text>
        </View>
    );
}

