import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { LandContext } from '../../context/LandContext';

const LocationFilter = (props) => {
  const { district, setDistrict, districts } = useContext(LandContext);

  const locationHandler = (event)=> {
    setDistrict(event.target.value);
  }

  return (
    <Select placeholder='Select District' value={district} onChange={locationHandler} {...props}>
      {
        districts.map((district, index)=> 
          <option key={index} value={district}>{district}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;
