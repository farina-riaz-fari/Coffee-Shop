import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Banner from "../components/Banner";
import ScrollTabs from "../components/scrollTabs";
import Card from "../components/Card";
import BottomTab from "../components/BottomTabs";

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const categories = ["All Coffee", "Cappuccino", "Latte", "Americano", "Caffe", "Flat White"];

    return(
        <View style={styles.container}>
            <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ScrollTabs activeTab={activeTab} setActiveTab={setActiveTab} categories={categories}/>
            <Card activeTab={activeTab} categories={categories} searchQuery={searchQuery}/>
            <BottomTab/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
})
export default Home