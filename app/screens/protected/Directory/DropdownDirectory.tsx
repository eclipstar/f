/* eslint-disable react-native/no-inline-styles */
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Logo from '../../../../logo.svg'

import DropdownMenu from '@ui/components/DropdownMenu'

import { GetZones, Zone } from '@services/directories/GetZones.service'

export function DropdownDirectory({ changeZone }: { changeZone: Function }) {
  const [zones, setzones] = useState<Zone[]>([])

  const getZones = async () => {
    const res = await GetZones()

    setzones(res.data)
  }

  useEffect(() => {
    getZones()
  }, [])
  return (
    <View style={styles.container}>
      <Logo width={125} height={125} />
      <View style={styles.poster}>
        <View style={{ width: '80%' }}>
          <DropdownMenu data={zones} handleChange={changeZone} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0
  },
  poster: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 30,
    backgroundColor: '#FFEEF4',
    height: 227,
    width: '100%'
  }
})
