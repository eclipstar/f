import { useState } from 'react'

import { Zone } from '@services/directories/GetZones.service'

import { DirectoryMain } from './DirectoryMain'
import DirectorySpecialists from './DirectorySpecialists'
import { DropdownDirectory } from './DropdownDirectory'

type DirectoryScreens = 'main' | 'dropdown' | 'zones'
function DirectoryScreen() {
  const [screen, setscreen] = useState<DirectoryScreens>('main')
  const [zone, setZone] = useState<Zone>({ id: 1, zone_name: 'ZONA CENTRAL' })

  const handleMainClick = () => {
    setscreen('dropdown')
  }

  const handleChangeZone = (type: Zone) => {
    setZone(type)
    setscreen('zones')
  }

  return (
    <>
      {screen === 'main' ? (
        <DirectoryMain handleClick={handleMainClick} />
      ) : screen === 'dropdown' ? (
        <DropdownDirectory changeZone={handleChangeZone} />
      ) : screen === 'zones' ? (
        <DirectorySpecialists zone={zone} />
      ) : null}
    </>
  )
}

export default DirectoryScreen
