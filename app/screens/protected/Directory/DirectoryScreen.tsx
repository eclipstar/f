import { useState } from "react";
import { DirectoryMain } from "./DirectoryMain";
import { DropdownDirectory } from "./DropdownDirectory";

type DirectoryScreens = 'main' | 'dropdown' | 'zones'
export function DirectoryScreen() {

  const [screen, setscreen] = useState<DirectoryScreens>('main')  
  
  const handleMainClick = () => {
    setscreen('dropdown')
  }

  const handleChangeZone = () => {

  }

    return (
      <>
        {
          screen === 'main' ? <DirectoryMain handleClick={handleMainClick} />
          : screen === 'dropdown' ? <DropdownDirectory changeZone={handleChangeZone} />
          : screen === 'zones' ? <></> 
          : null
        }
        
      </>
    );
  }
  