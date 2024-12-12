import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomTab from "../components/BottomTabs";

const Notifications = () => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Notifications Screen</Text>
        </View>
            <BottomTab/>
            </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Notifications;
