/* eslint-disable react-native/no-inline-styles */
import { FlatList, ScrollView, StyleSheet } from "react-native";
import Logo from '../../../logo.svg'
import { SliderCard } from "@ui/components/SliderCard";
import Carousel from "@ui/components/Carousel";


export function HomeScreen() {
  const renderItem = () => (
    <SliderCard />
  );

  const data = [
    { id: '1',  },
    { id: '2',  text: 'STOP VIOLENCE' },
    { id: '3',  },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo */}
      <Logo  width={125} height={125} />

   

      {/* Lista scrolleable horizontal */}
      <FlatList
        style={{marginBottom: 30}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      
      <Carousel />
      <FlatList
        style={{marginTop:30, marginBottom: 150}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
     
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor: '#fff',
  },
  logo: {
    resizeMode: 'contain',
    marginTop: 20,
  },

  listContainer: {
    marginTop:20,
    paddingHorizontal: 10,
    flexDirection:'row',
    height:155,
    gap:30,
  },
 
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  stopText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#AA5EC9',
  },
  violenceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#AA5EC9',
  },
});