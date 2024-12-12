import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface BannerProps {
    searchQuery: string;
    setSearchQuery: (text: string) => void;
}
const Banner: React.FC<BannerProps> = ({ searchQuery, setSearchQuery }) => {
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image source={require("../assets/coffeeLogo.png")} style={styles.logoImage}/>
            <Text style={styles.name}>Coffee Shop</Text>
            </View>
            <View style={styles.view}>
            <View style={styles.inputStyle}>
            <Image source={require('../assets/search.png')} style={{width: 30, height: 30, alignItems: 'center', alignSelf: 'center'}}/>
            <TextInput
            placeholder="Search Coffee"
            value={searchQuery} 
            onChangeText={(text) => setSearchQuery(text)} 
            style={{ flex: 1 }}
          />
            </View>
            <TouchableOpacity style={styles.btnStyle}>
                <Image source={require('../assets/slider.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
            </View>
            <View style={styles.promoView}>
            <Image source={require('../assets/banner.jpg')} style={styles.imageView}/>
            <View style={styles.promo}>
                <Text style={styles.promoText}>Promo</Text>
            </View>
            <View style={styles.promoHigh}>
            <Text style={styles.promoHighlight}>Buy one get one FREE</Text>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 300,
        width: "100%",
    },
    logo: {
        top: "10%",
        left: "5%",
        flexDirection: "row",
        gap: 20,
    },
    logoImage: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        borderRadius: 100,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#C67C4E",
        fontStyle: "italic",
    },
    view: {
        flexDirection: "row",
        margin: 20,
        gap: 10,
        marginTop: 55,
    },
    inputStyle: {
        paddingHorizontal: 10,
        padding: 6,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "row",
        width: "85%",
    },
    textInput: {
        padding: 14,
    },
    btnStyle: {
        backgroundColor: "#C67C4E",
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderRadius: 10,
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnStyleText: {
        color: "white",
    },
    promoView: {
        marginHorizontal: 20,
        alignSelf: "center",
        position: "relative",
    },
    imageView: {
        borderRadius: 10,
        padding: 10,
        height: "80%",
    },
    promo: {
        backgroundColor: "#783D06", 
        borderRadius: 10,
        position: "absolute",
        left: "3%",
        top: "3%"
    },
    promoText: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 14,
        alignSelf: "center",
    },
    promoHigh: {
        backgroundColor: "#C67C4E",
        opacity: 0.9,
        position: "absolute",
        top: "30%",
        left: "4%",
        width: "50%",
        borderRadius: 10,
        padding: 10,
    },
    promoHighlight: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
})
export default Banner;