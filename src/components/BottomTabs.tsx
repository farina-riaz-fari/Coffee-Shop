import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BottomTabsData } from "../Data";

const BottomTab = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const activeIndex = BottomTabsData.findIndex(tab => tab.route === route.name);
        setActiveTab(activeIndex);
    }, [route.name]);

    return (
        <View style={styles.container}>
            {BottomTabsData.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate(item.route);
                        setActiveTab(index);
                    }}
                >
                    <Image
                        source={activeTab === index ? item.filledIcon : item.icon}
                        style={styles.image}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: '#F2F2F2',
        borderStartStartRadius: 30,
        borderEndStartRadius: 30,
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderColor: "#919191",
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default BottomTab;
