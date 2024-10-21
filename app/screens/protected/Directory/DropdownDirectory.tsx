/* eslint-disable react-native/no-inline-styles */
import { LayoutUtils } from "@utils/layout";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Logo from '../../../../logo.svg'
import Button from "@ui/components/Button";
import DropdownMenu from "@ui/components/DropdownMenu";

export function DropdownDirectory({changeZone}: {changeZone: Function}) {
    return (

      <View style={styles.container}>
        <Logo  width={125} height={125} />
        <View style={styles.poster}>
          <View style={{width:'80%'}}>
            <DropdownMenu />
          </View>
           
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor: '#fff',
      paddingTop:0
    },
    poster: {
      justifyContent:'flex-end',
      alignItems:'center',
      marginTop:40,
      paddingBottom:30,
      backgroundColor:'#FFEEF4',
      height:227,
      width:'100%'
    }
  })