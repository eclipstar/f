/* eslint-disable react-native/no-inline-styles */
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchIcon from '../../assets/icons/search.svg'
import { TextInput } from "react-native-paper";

interface IFilterInput  {
    placeholder: string,
    handleChange: any
} 
 function FilterInputText({
    placeholder,
    handleChange,
    
}: IFilterInput) {

  const [text, setText] = useState('');

  return (
    <View style={{position:'relative',width:'100%',}}>
      <TextInput
        style={{ backgroundColor: 'transparent'}}
        label="Buscar"
        value={text}
        placeholder={placeholder}
        onChangeText={(val) => {
          setText(val)
          handleChange()
        }}
        mode="flat" 
      />
      <SearchIcon style={styles.icon} />
    </View>
  );
    
}

const styles = StyleSheet.create({
  icon: {
    position:'absolute',
    right: 5,
    top: 20
} })

export default FilterInputText

