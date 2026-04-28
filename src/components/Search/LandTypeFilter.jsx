import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { LandContext } from '../../context/LandContext';

const LandTypeFilter = (props) => {
  const { landType, setLandType, landTypes } = useContext(LandContext);

  const landTypeHandler = (event)=> {
    setLandType(event.target.value);
  }

  return (
    <Select placeholder='Select Land Type' value={landType} onChange={landTypeHandler} {...props}>
      {
        landTypes.map((type, index)=> 
          <option key={index} value={type}>{type}</option>
        )
      }
    </Select>
  );
};

export default LandTypeFilter;
