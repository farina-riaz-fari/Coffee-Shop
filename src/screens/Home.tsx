import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Banner from '../components/Banner';
import ScrollTabs from '../components/scrollTabs';
import Card from '../components/Card';
import BottomTab from '../components/BottomTabs';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
    'All Coffee',
    'Cappuccino',
    'Latte',
    'Americano',
    'Caffe',
    'Flat White',
  ];

  return (
    <View style={styles.container}>
      <Banner
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <ScrollTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        categories={categories}
      />

      <View style={styles.viewAllContainer}>
        <Text style={styles.heading}>Popular Coffee</Text>

        <TouchableOpacity onPress={() => (navigation as any).navigate('Products')}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <Card
        activeTab={activeTab}
        categories={categories}
        searchQuery={searchQuery}
      />
      <BottomTab />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  viewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  viewAll: {
    fontSize: 15,
    fontWeight: '600',
    color: '#783D06',
  },
});
