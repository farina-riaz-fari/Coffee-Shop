import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTab from "../components/BottomTabs";
import { useFavourites } from "../Context/FavouritesContext";
import { useNavigation } from "@react-navigation/native";

const Favourites = () => {
  const navigation = useNavigation();
  const { favourites } = useFavourites();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetailScreen", { item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.head}>
        <TouchableOpacity>
            <Image source={require("../assets/back.png")} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.header}>Favourites</Text>
        </View>
        {favourites.length > 0 ? (
          <FlatList
            data={favourites}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
            contentContainerStyle={styles.listWrapper}
          />
        ) : (
          <View style={styles.noDataWrapper}>
            <Text style={styles.noDataText}>No favourites yet!</Text>
          </View>
        )}
      </View>
      <BottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    width: "60%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    right: -15,
  },
  back: {
    width: 35,
    height: 35,
  },
  listWrapper: {
    paddingBottom: 20, 
  },
  noDataWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#888",
  },
  card: {
    backgroundColor: "#E3E3E3",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: "#783D06",
  },
});

export default Favourites;
