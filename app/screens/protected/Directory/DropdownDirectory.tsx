import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../../../../logo.svg';
import { GetZones, Zone } from '@services/directories/GetZones.service';

export function DropdownDirectory({ changeZone }: { changeZone: Function }) {
  const [zones, setZones] = useState<Zone[]>([]);

  const getZones = async () => {
    const res = await GetZones();
    setZones(res.data);
  };

  useEffect(() => {
    getZones();
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={140} height={140} />

      <View style={styles.textContainer}>
        <Text style={styles.description}>
        Explora, conecta y conoce los servicios institucionales de tu localidad a través de INCLUD.
        </Text>
        <Text style={styles.description}>
        Elige la zona que deseas consultar y accede a toda la información que necesitas de forma fácil y rápida.
        </Text>
        <Text style={styles.description}>
        Optimiza tu experiencia conectándote con las instituciones locales.
        </Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.buttonText}>DIRECTORIO POR ZONAS</Text>
        </TouchableOpacity>

        <View style={styles.zonesList}>
          {zones.map((zone, index) => (
            <TouchableOpacity
              key={index}
              style={styles.zoneItem}
              onPress={() => changeZone(zone)}
            >
              <Text style={styles.zoneText}>{zone.zone_name.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  textContainer: {
    marginTop: 20,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A1B9A',
    // textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#6A1B9A',
    textAlign: 'justify',
    marginBottom: 5,
    marginTop:10
  },
  content: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#B15AB7',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  zonesList: {
    width: '85%',
    marginTop: 15,
  },
  zoneItem: {
    backgroundColor: '#F3E5F5',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  zoneText: {
    fontSize: 14,
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
});
