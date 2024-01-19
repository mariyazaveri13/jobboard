import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const Tabbutton = ({ name, activeTab, onHandleSearchTab }) => (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchTab}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        renderItem={({ item }) => (
          <Tabbutton
            name={item}
            activeTab={activeTab}
            onHandleSearchTab={() => setActiveTab(item)}></Tabbutton>
        )}></FlatList>
    </View>
  );
};

export default Tabs;
