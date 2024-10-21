import { LayoutUtils } from "@utils/layout";
import { StyleSheet, Text, View } from "react-native";

export function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={{color:'red'}}>ProfileScreen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centra verticalmente
      alignItems: 'center', // Centra horizontalmente
      backgroundColor: '#fff',
      padding: LayoutUtils.moderateScale(20),
    },
  })