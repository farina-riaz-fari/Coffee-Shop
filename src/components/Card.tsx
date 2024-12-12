import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardsData } from "../Data";

interface CardProps {
  activeTab?: any;
  categories?: any;
  searchQuery?: any;
}
const Card: React.FC<CardProps> = ({activeTab, categories, searchQuery}) => {
    const navigation = useNavigation();
    const cardData = CardsData;

    const filteredData = cardData.filter((item) => {
      const matchesTab = activeTab === 0 || item.name.includes(categories[activeTab]);
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  

    const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DetailScreen", { item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.priceBtnView}>
      <Text style={styles.price}>${(item.price).toFixed(2)}</Text>
        <TouchableOpacity>
          <Text style={styles.addBtn}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#E3E3E3",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    priceBtnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 10,
        alignItems: "center",
    },
    price: {
        fontSize: 16,
        color: "#783D06",
        fontWeight: "600",
    },
    addBtn: {
        fontSize: 16,
        color: "white",
        fontWeight: "600",
        backgroundColor: "#C67C4E",
        borderRadius: 6,
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginBottom: 10,
    }
})
export default Card;