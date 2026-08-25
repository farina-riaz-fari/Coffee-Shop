import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

type RootStackParamList = {
    LoginSignUp: undefined;
    GetStarted: undefined;
    Home: undefined;
    OrderDetail: {item: any};
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const SplashScreen = () => {
    const animation = useRef<LottieView>(null);
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        const checkAuthStatus = async () => {
            const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
            if (isLoggedIn === "true") {
                navigation.replace("GetStarted");
            } else {
                navigation.replace("LoginSignUp"); 
            }
        };
        const timeout = setTimeout(() => {
            checkAuthStatus();
        }, 4000);

        return () => clearTimeout(timeout); 
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <LottieView
                ref={animation}
                source={require("../assets/loader.json")}
                style={styles.lottie}
                autoPlay
                loop
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DE996F",
    },
    lottie: {
        width: 300,
        height: 500,
    },
});

export default SplashScreen;
