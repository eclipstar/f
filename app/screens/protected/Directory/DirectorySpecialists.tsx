/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import Logo from '../../../../logo.svg'
import Button from '@ui/components/Button';
import colors from '@config/theme/colors';
import DataFilterActions from '@ui/components/DataFilterActions';
import SpecialistList from '@ui/components/SpeclistList';

 function DirectorySpecialists({zone}: {zone: string}) {
    return (

      <View style={styles.container}>
        <Logo  width={125} height={125} />
          <View style={{width:'50%',marginTop:45}}>
            <Button elevated appearance='filled' customRadius={22} color={colors.primary}>
                {zone}
            </Button>
          </View>
          <DataFilterActions />
          <SpecialistList />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems:'center',
      backgroundColor: '#fff',
      paddingTop:0
    },
    filterContainer: {
    }

  })

  export default DirectorySpecialists