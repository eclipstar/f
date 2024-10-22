import { useState } from "react";
import { DirectoryMain } from "./DirectoryMain";
import { DropdownDirectory } from "./DropdownDirectory";
import DirectorySpecialists from "./DirectorySpecialists";

type DirectoryScreens = 'main' | 'dropdown' | 'zones'
type ZoneTypes = 'ZONA ORIENTAL' | 'ZONA CENTRAL' | 'ZONA OCCIDENTAL'
function DirectoryScreen() {

  const [screen, setscreen] = useState<DirectoryScreens>('main')  
  const [zone, setZone] = useState<ZoneTypes>('ZONA CENTRAL')  
  
  const handleMainClick = () => {
    setscreen('dropdown')
  }

  const handleChangeZone = (type: ZoneTypes) => {
    setZone(type)
    setscreen('zones')
  }

    return (
      <>
        {
          screen === 'main' ? <DirectoryMain handleClick={handleMainClick} />
          : screen === 'dropdown' ? <DropdownDirectory changeZone={handleChangeZone} />
          : screen === 'zones' ? <DirectorySpecialists zone={zone} />
          : null
        }
      </>
    );
  }
  
  export default DirectoryScreen