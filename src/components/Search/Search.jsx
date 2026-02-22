import { Button, Flex, Heading } from '@chakra-ui/react'
import { useContext} from "react";
import { LandContext } from '../../context/LandContext';

import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import LandTypeFilter from "./LandTypeFilter";

const Search = () => {

  const { searchHandler } = useContext(LandContext);

  return (
    <Flex my='3' direction='column' borderRadius='md' bg='#fff' boxShadow='md' p='5'>

      <Heading py='2' size={{base: 'sm', md: 'md'}}>Find Your Perfect Plot in Mbarara</Heading>

      <Flex gap={{base: 3, md: 2}} direction={{base: 'column', md:'row'}} borderRadius='30'>
        <LocationFilter />
        <LandTypeFilter />
        <PriceFilter />
        <Button onClick={searchHandler} p={{base: 3, md: 2}} colorScheme='green' size="100%">Search Land</Button>
      </Flex>
    </Flex>
  )
}

export default Search;