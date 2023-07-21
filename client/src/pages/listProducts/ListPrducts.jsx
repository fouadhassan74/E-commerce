import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "../../components/productList/ProductList";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const FilterContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const FilterText = styled.span({
  marginRight: "20px",
  fontWeight: "600",
  fontSize: "20px",
  "@media(max-width: 480px)": {
    marginRight: "0px",
  },
});
const Select = styled.select({
  padding: "10px",
  marginRight: "20px",
  "@media(max-width: 480px)": { margin: "10px 0px" },
});
const Option = styled.option({});
const Title = styled.h1({});
const Filter = styled.div({
  margin: "20px",
  "@media(max-width: 480px)": {
    width: "0px",
    display: "flex",
    flexDirection: "column",
  },
});
function ListPrducts() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState();
  const handelFilter = (e) => {
    const value = e.target.value;
    setFilter({ ...filters, [e.target.name]: value });
  };
  const handelSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className='productList'>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handelFilter} name='color'>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select onChange={handelFilter} name='size'>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handelSort}>
            <Option value={"Newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ListPrducts;
