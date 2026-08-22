import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../components/BottomTabs';
import {CardsData} from '../Data';

const Products = () => {
  const navigation = useNavigation();
  const [toggleView, setToggleView] = useState(true);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={toggleView ? styles.gridCard : styles.listCard}
      onPress={() => (navigation as any).navigate('DetailScreen', {item})}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>

      <Text style={styles.price}>
        ${item.price.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>

          <Text style={styles.header}>Products</Text>

          <TouchableOpacity
            onPress={() => setToggleView(!toggleView)}>
            <Image
              source={
                toggleView
                  ? require('../assets/listView.png')
                  : require('../assets/gridView.png')
              }
              style={styles.grid}
            />
          </TouchableOpacity>
        </View>

        {/* Products */}
        <FlatList
          key={toggleView ? 'grid' : 'list'}
          data={CardsData}
          renderItem={renderItem}
          numColumns={toggleView ? 2 : 1}
          keyExtractor={(item, index) =>
            index.toString()
          }
          contentContainerStyle={styles.listContainer}
        />

      </View>

      <BottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  back: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  grid: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  gridCard: {
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 5,
    flex: 1,
    maxWidth: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  listCard: {
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  price: {
    fontSize: 16,
    color: '#783D06',
    fontWeight: '600',
  },

  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    paddingBottom: 20,
  },
});

export default Products;