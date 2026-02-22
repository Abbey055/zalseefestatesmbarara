import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { LandContext } from '../../context/LandContext';

const LocationFilter = () => {

  const {setDistrict, districts} = useContext(LandContext);

  const locationHandler = (event)=> {
    setDistrict(event.target.value);
  }

  return (
    <Select placeholder='Select District' onChange={locationHandler}>
      {
        districts.map((district, index)=> 
          <option key={index}>{district}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;