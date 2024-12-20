import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ScrollTabProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
  categories: string[];
}
const ScrollTabs: React.FC<ScrollTabProps> = ({
  activeTab,
  setActiveTab,
  categories,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => setActiveTab(index)}>
            <Text
              style={activeTab === index ? styles.activeTabBg : styles.tabText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '28%',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    backgroundColor: '#999DA0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: 'white',
    fontWeight: '500',
  },
  activeTabBg: {
    fontSize: 16,
    backgroundColor: '#C67C4E',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: 'white',
    fontWeight: '500',
  },
});

export default ScrollTabs;
