/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Logo from '../../../../logo.svg'
import { ScrollView } from 'react-native-gesture-handler'

import Button from '@ui/components/Button'
import DataFilterActions from '@ui/components/DataFilterActions'
import SpecialistList from '@ui/components/SpeclistList'

import { Directory, GetDirectoriesByZone } from '@services/directories/GetDirectoriesByZone.service'
import { Zone } from '@services/directories/GetZones.service'

import colors from '@config/theme/colors'

function DirectorySpecialists({ zone }: { zone: Zone }) {
  const [directories, setdirectories] = useState<Directory[]>([])

  const getDirectories = async () => {
    const res = await GetDirectoriesByZone(zone)
    setdirectories(res.data)
  }

  useEffect(() => {
    getDirectories()
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo width={125} height={125} />
      <View style={{ width: '50%', marginTop: 45 }}>
        <Button elevated appearance='filled' customRadius={22} color={colors.primary}>
          {zone.zone_name}
        </Button>
      </View>
      <DataFilterActions />
      <SpecialistList data={directories} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0
  },
  filterContainer: {}
})

export default DirectorySpecialists
