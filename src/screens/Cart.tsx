import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "../components/BottomTabs";

const Cart = () => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Cart Screen</Text>
        </View>
        <BottomTab/>
        </>
    )
}
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

export default Cart;