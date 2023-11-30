import React from 'react'
import { ReactComponent as Garden } from '../../lib/icons/garden.svg'
import { ReactComponent as Internet } from '../../lib/icons/internet.svg'
import { ReactComponent as Jacuzzi } from '../../lib/icons/jacuzzi.svg'
import { ReactComponent as Camera } from '../../lib/icons/camera.svg'
import { ReactComponent as Laundry } from '../../lib/icons/laundry.svg'
import { ReactComponent as Pool } from '../../lib/icons/pool.svg'
import { ReactComponent as Garage } from '../../lib/icons/garage.svg'
import { ReactComponent as Elevator } from '../../lib/icons/elevator.svg'
import { ReactComponent as DishWasher } from '../../lib/icons/DishWasher.svg'
import { ReactComponent as WashingMachine } from '../../lib/icons/WashingMachine.svg'
import { ReactComponent as HairDryer } from '../../lib/icons/HairDryer.svg'
import { ReactComponent as VacuumCleaner } from '../../lib/icons/VacuumCleaner.svg'
import { ReactComponent as Chimney } from '../../lib/icons/Chimney.svg'
import { ReactComponent as SmokingArea } from '../../lib/icons/SmokingArea.svg'
import { ReactComponent as Refrigerator } from '../../lib/icons/Refrigerator.svg'
import { ReactComponent as SmokeDetector } from '../../lib/icons/SmokeDetector.svg'
import { ReactComponent as Doctor } from '../../lib/icons/Doctor.svg'
import { ReactComponent as FireExtinguisher } from '../../lib/icons/FireExtinguisher.svg'
import { ReactComponent as Iron } from '../../lib/icons/Iron.svg'
import { ReactComponent as Basement } from '../../lib/icons/Basement.svg'
import { ReactComponent as Kitchen } from '../../lib/icons/Kitchen.svg'
import { ReactComponent as PrivateEntrance } from '../../lib/icons/PrivateEntrance.svg'
import { ReactComponent as LakeAccess } from '../../lib/icons/LakeAccess.svg'
import { ReactComponent as PetFriendly } from '../../lib/icons/PetFriendly.svg'
import { ReactComponent as Grill } from '../../lib/icons/Grill.svg'
import { ReactComponent as Courtyard } from '../../lib/icons/Courtyard.svg'
import { ReactComponent as SoundSystem } from '../../lib/icons/SoundSystem.svg'
import { ReactComponent as CeilingFan } from '../../lib/icons/CeilingFan.svg'
import { ReactComponent as SportsFields } from '../../lib/icons/SportsFields.svg'
import { ReactComponent as Spa } from '../../lib/icons/Spa.svg'
import { ReactComponent as Accessebility } from '../../lib/icons/Accessebility.svg'
import { ReactComponent as Furnished } from '../../lib/icons/Furnished.svg'
import { ReactComponent as Parking } from '../../lib/icons/Parking.svg'
import { ReactComponent as Microwave } from '../../lib/icons/Microwave.svg'
import { ReactComponent as Heater } from '../../lib/icons/Heater.svg'
import { ReactComponent as SecurityCameras } from '../../lib/icons/SecurityCameras.svg'
import { AmenityStyles } from './PropertiesStyles'

export const Amenity = ({ text }: any) => {
  return (
    <AmenityStyles>
      {text === 'Garden' && <Garden />}
      {text === 'Internet' && <Internet />}
      {text === 'Jacuzzi' && <Jacuzzi />}
      {text === 'Security Cameras' && <Camera />}
      {text === 'Laundry' && <Laundry />}
      {text === 'Pool' && <Pool />}
      {text === 'Garage' && <Garage />}
      {text === 'Elevator' && <Elevator />}
      {text === 'Dish Washer' && <DishWasher />}
      {text === 'Washing Machine' && <WashingMachine />}
      {text === 'Hair Dryer' && <HairDryer />}
      {text === 'Vacuum Cleaner' && <VacuumCleaner />}
      {text === 'Chimney' && <Chimney />}
      {text === 'Smoking Area' && <SmokingArea />}
      {text === 'Doctor' && <Doctor />}
      {text === 'Refrigerator' && <Refrigerator />}
      {text === 'Smoke Detector' && <SmokeDetector />}
      {text === 'Fire Extinguisher' && <FireExtinguisher />}
      {text === 'Iron' && <Iron />}
      {text === 'Basement' && <Basement />}
      {text === 'Kitchen' && <Kitchen />}
      {text === 'Private Entrance' && <PrivateEntrance />}
      {text === 'Lake Access' && <LakeAccess />}
      {text === 'Pet Friendly' && <PetFriendly />}
      {text === 'Grill' && <Grill />}
      {text === 'Courtyard' && <Courtyard />}
      {text === 'Sound System' && <SoundSystem />}
      {text === 'Ceiling Fan' && <CeilingFan />}
      {text === 'Sports Fields' && <SportsFields />}
      {text === 'Spa' && <Spa />}
      {text === 'Accessebility' && <Accessebility />}
      {text === 'Furnished' && <Furnished />}
      {text === 'Parking' && <Parking />}
      {text === 'Microwave' && <Microwave />}
      {text === 'Heater' && <Heater />}
      {text === 'Security cameras' && <SecurityCameras />}
      <span>{text}</span>
    </AmenityStyles>
  )
}
