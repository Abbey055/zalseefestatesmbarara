import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { LandContext } from '../../context/LandContext';

const LandTypeFilter = () => {

  const {setLandType, landTypes} = useContext(LandContext);

  const landTypeHandler = (event)=> {
    setLandType(event.target.value);
  }

  return (
    <Select placeholder='Select Land Type' onChange={landTypeHandler}>
      {
        landTypes.map((type, index)=> 
          <option key={index}>{type}</option>
        )
      }
    </Select>
  );
};

export default LandTypeFilter;