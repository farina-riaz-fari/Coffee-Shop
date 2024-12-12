import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GetStarted = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image source={require("../assets/getStarted.jpeg")} style={styles.image} resizeMode="cover"/>
            <View style={styles.textView}>
            <Text style={styles.text}>Fall in Love with Coffee in Blissful Delight!</Text>
            </View>
            <TouchableOpacity style={styles.btnView} onPress={()=> navigation.navigate("Home")}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        opacity: 0.9,
    },
    text: {
        color: "white", 
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
    },
    textView: {
        position: "absolute",
        bottom: "18%",
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    btnText: {
        color: "white", 
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    btnView: {
        position: "absolute",
        bottom: "10%",
        width: "90%",
        backgroundColor: "#C67C4E",
        padding: 12,
        borderRadius: 10,
        alignSelf: "center",
    }
});

export default GetStarted