import { createContext, useState, useEffect } from 'react';
import { landsData } from '../data';

export const LandContext = createContext('');

const LandProvider = ({children}) =>{

    const [lands, setLands] = useState(landsData);
    const [district, setDistrict] = useState('Select District');
    const [districts, setDistricts] = useState([]);
    const [price, setPrice] = useState('Select Price');
    const [landType, setLandType] = useState('Select Type');
    const [landTypes, setLandTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const allDistricts = lands.map(land=>{
            return land.district;
        })
        const uniqueDistricts = [...new Set(allDistricts)];
        setDistricts(uniqueDistricts);
    }, []);

    useEffect(() => {
        const allLandTypes = lands.map(land=>{
            return land.landUse;
        })
        const uniqueLandTypes = [...new Set(allLandTypes)];
        setLandTypes(uniqueLandTypes);
    }, []);

    const searchHandler=()=>{
        setIsLoading(true);
       
        // checking selection 
        const isDefault = (str)=> {
            return str?.split(' ').includes('Select');
        }
        
        let minPrice = 0;
        let maxPrice = Infinity;
        
        if (price && !isDefault(price)) {
            const priceParts = price.split(' - ');
            minPrice = parseInt(priceParts[0]);
            maxPrice = parseInt(priceParts[1]);
        }

        const filteredLands = landsData.filter(land=> {
            const landPrice = parseInt(land.price);
            
            // no selection 
            if(isDefault(district) && isDefault(price) && isDefault(landType) ){
                return land;
            }

            // district is selected
            if(!isDefault(district) && isDefault(price) && isDefault(landType)){
                return land.district === district;
            }
            
            // price is selected
            if(isDefault(district) && !isDefault(price) && isDefault(landType)){
                return (landPrice >= minPrice) && (landPrice <= maxPrice);
            }
            
            // land type is selected
            if(isDefault(district) && isDefault(price) && !isDefault(landType)){
                return land.landUse === landType;
            }
            
            // district & price is selected
            if(!isDefault(district) && !isDefault(price) && isDefault(landType)){
                return land.district === district && (landPrice >= minPrice) && (landPrice <= maxPrice);
            }
            
            // district & land type is selected
            if(!isDefault(district) && isDefault(price) && !isDefault(landType)){
                return land.district === district && land.landUse === landType;
            }
            
            // price & land type is selected
            if(isDefault(district) && !isDefault(price) && !isDefault(landType)){
                return (landPrice >= minPrice) && (landPrice <= maxPrice) && land.landUse === landType;
            }

            // all are selected 
            if(land.district === district && landPrice >= minPrice && landPrice <= maxPrice && land.landUse === landType){
                return land;
            }
        })

        setTimeout(() => {
            filteredLands.length > 0 ? setLands(filteredLands) : setLands([]);
            setIsLoading(false);
        }, 1000);
    }
    
    return(
        <LandContext.Provider value={{
            lands,
            district,
            setDistrict,
            districts,
            price,
            setPrice,
            landType,
            setLandType,
            landTypes,
            searchHandler,
            isLoading
        }}>
            {children}
        </LandContext.Provider>
    )
}

export default LandProvider;