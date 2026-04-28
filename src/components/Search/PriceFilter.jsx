import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { LandContext } from "../../context/LandContext";

const PriceFilter = (props) => {
  const { price, setPrice } = useContext(LandContext);

  const priceRanges = [
    { value: "0 - 20000000", label: "Under 20 Million" },
    { value: "20000000 - 50000000", label: "20M - 50M" },
    { value: "50000000 - 100000000", label: "50M - 100M" },
    { value: "100000000 - 200000000", label: "100M - 200M" },
    { value: "200000000 - 500000000", label: "200M - 500M" },
    { value: "500000000 - 1000000000", label: "500M - 1B" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Select placeholder="Select Price Range" value={price} onChange={priceHandler} {...props}>
      {priceRanges.map((range, index) =>
          <option key={index} value={range.value}>{range.label}</option>
        )
      }
    </Select>
  );
};

export default PriceFilter;
