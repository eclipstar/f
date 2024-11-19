import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileInformation: React.FC = () => {
  const name = 'Michelle Ruiz';
  const email = 'gmichelle@gmail.com';
  const photo = 'https://s3-alpha-sig.figma.com/img/f4d2/7ee5/ab010fa5906a730eb7e8999913ea2dd0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d7exC0svlh1AE60GvmuzqJz0zzYa-vYq6b6e2GH5iF9Hzh0XjQq2IIWPNlbNbWHUS4Tm-jYxHq0Hiu0QLiPz-dNwSIV9hITQAPM1306i0zy5YeIO4kQiXgdqoB6y9bPwyhrCDgDxHA7tQjTwfmwnOiGUxCMRTiRXiXVTz-cr5to9kkfC8sDMGpZNn9Ewu9dAYQKETytB7oGipmGor7OFVvI~dBaS5KIHrIg6hJgFcQbYydn0kjoRO3-rPZhvucES7WmR12U~P~iOxDiLxfJrUldNP-fyZv6dq2ee1FBzxFyMfzyxG7UDhcjBMBbropDuHrqpbxoe8snF-FAi92aPJA__';

  const handleEdit = () => console.log('Edit Profile');
  const handleLogout = () => console.log('Logout');
  const handlePersonalInfo = () => console.log('Go to Personal Info');
  const handleCalendar = () => console.log('Go to Calendar');
  const handleProtocols = () => console.log('Go to Protocols');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Mi perfil</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: photo }} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
            <Icon name="camera-alt" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {/* Main Body */}
      <View style={styles.body}>
        <TouchableOpacity style={styles.button} onPress={handlePersonalInfo}>
          <Icon name="person" size={24} color="#6A1B9A" />
          <Text style={styles.buttonText}>Información personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalendar}>
          <Icon name="calendar-today" size={24} color="#6A1B9A" />
          <Text style={styles.buttonText}>Calendario Menstrual</Text>
        </TouchableOpacity>

        {/* Footer Inside Body */}
        <View style={styles.footer}>
          <View>
          <TouchableOpacity style={styles.footerButton} onPress={handleProtocols}>
            <Icon name="security" size={20} color="#6A1B9A" />
            <Text style={styles.footerText}>Protocolos de seguridad</Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.footerButton} onPress={handleLogout}>
            <Icon name="logout" size={20} color="#6A1B9A" />
            <Text style={styles.footerText}>Cerrar Sesión</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A1B9A',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#6A1B9A',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: '#6A1B9A',
    padding: 5,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
  },
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    paddingBottom: 20, 
  },
  button: {
    backgroundColor: '#F3E5F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
    marginBottom:30
  },
  footerButton: {
    width:'50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#6A1B9A',
  },
});

export default ProfileInformation;
