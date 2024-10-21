/* eslint-disable react/no-unstable-nested-components */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./ProfileScreen";
import { VideosScreen } from "./VideosScreen";
import { HomeScreen } from "./HomeScreen";
import { DirectoryScreen } from "./Directory/DirectoryScreen";
import { StyleSheet } from "react-native";
import Inicio from '../../assets/icons/home.svg';
import Directorio from '../../assets/icons/directorio.svg';
import Juegos from '../../assets/icons/juegos.svg';
import Perfil from '../../assets/icons/perfil.svg';
import Videos from '../../assets/icons/videos.svg';
import { JuegosScreen } from "./JuegosScreen";

export function TabNavigationBar() {
  const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({route}) =>({
        header: () =>(null),
        tabBarStyle: styles.tabBar,
        tabBarActiveBackgroundColor:'#cfb5d5',
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#9D47B2',
        tabBarIconStyle:{marginTop:16},
        tabBarLabelStyle: { fontWeight: 700,paddingBottom: 13},
        tabBarIcon() {
          switch (route.name) {
            case 'Home':
              return <Inicio />
              case 'Directorio':
              return <Directorio />
              case 'Videos':
                return <Videos />
                case 'Juegos':
                return <Juegos />
                case 'Perfil':
              return <Perfil />
            default:
              break;
          }
         
          return <Inicio />
        
        },
      })}
    >
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="Juegos"  component={JuegosScreen} />
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Directorio" options={{unmountOnBlur:true}} component={DirectoryScreen} />
      <Tab.Screen name="Perfil"  component={ProfileScreen} />
    </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    tabBar: {
      shadowOffset: {
          width: 0,
          height: 222,
      },
      shadowOpacity: 0.58,
      shadowRadius: 6.0,
      elevation: 44,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: '#fff',
      position: 'absolute',
      color:'red',
      bottom: 0,
      width: '100%',
      height: 104,
  },
  })
