import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

const DropdownMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = ['ZONA ORIENTAL', 'ZONA CENTRAL', 'ZONA OCCIDENTAL'];

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>
          DIRECTORIO POR ZONAS
        </Text>
      </TouchableOpacity>
      
      {isMenuVisible && (
        <View style={styles.menu}>
          <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.menuItem} onPress={() => handleItemPress(item)}>
                <Text style={styles.menuItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  menuButton: {
    backgroundColor: '#B045CB',
    padding: 20,
    borderRadius: 25,
    width:'100%',
    elevation:8
  },
  menuButtonText: {
    color: 'white',
    textAlign:'center',
    fontWeight: '700',
    fontSize:14,
    letterSpacing:2
  },
  menu: {
    position:'absolute',
    top:65,
    backgroundColor: '#fff',
    borderRadius: 5,
    right: 0,
    left:0,
    elevation: 3,
    zIndex:100
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  menuItemText: {
    fontSize: 16,
    color:'#4B376C',
    padding:17,
    fontWeight: '300',
    textAlign:'center',
    backgroundColor:'#BBA9FF36'
  },
});

export default DropdownMenu;
