import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../rtk/slices/cartSlice";
const Wrapper = styled.div({
  display: "flex",
  padding: "50px",
});
const InfoContainer = styled.div({
  flex: "1",
  padding: "0px 50px",
});
const ImageContainer = styled.div({
  flex: "1",
});
const Image = styled.img({
  width: "100%",
  height: "90vh",
  objectFit: "cover",
});
const Title = styled.h1({ fontWeight: "200" });
const Desc = styled.p({ margin: "20px 0px" });
const Price = styled.span({
  fontWeight: "100",
  fontSize: "40px",
});
const FilterContainer = styled.div({
  Width: "50%",
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
});
const Filter = styled.div({
  display: "flex",
  alignItems: "center",
});
const FilterTitle = styled.div({
  fontSize: "20px",
  fontWeight: "200",
});
const FilterColor = styled.div((props) => ({
  backgroundColor: props.$color,
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  margin: "0 5px",
  cursor: "pointer",
}));
const FilterSize = styled.select({ padding: "5px", marginLeft: "10px" });
const FilterSizeOption = styled.option({});
const AmountContainer = styled.div({
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
});
const AddContauner = styled.div({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Amount = styled.span((props) => ({
  height: "30px",
  width: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  margin: "0 5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Button = styled.button({
  fontWeight: 500,
  border: "2px solid teal",
  padding: "20px",
  backgroundColor: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f8f4f4",
  },
});

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const handelAmount = (type) => {
    if (type === "des") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`http://localhost:9900/api/product/${id}`);
      const data = res.data;
      setProduct(data);
    };
    getProduct();
  }, [id]);
  console.log(product);
  const handelClick = () => {
    dispatch(addProduct({ ...product, quantity, size, color }));
  };
  return (
    <div>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor
                  $color={c}
                  key={c}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              ))}
              {/* <FilterColor $color='black' />
              <FilterColor $color='darkblue' />
              <FilterColor $color='gray' /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((s) => (
                  <FilterSizeOption
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {s}
                  </FilterSizeOption>
                ))}
                {/* <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption> */}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContauner>
            <AmountContainer>
              <AddIcon
                onClick={() => {
                  handelAmount("s");
                }}
              />
              <Amount>{quantity}</Amount>
              <RemoveIcon
                onClick={() => {
                  handelAmount("des");
                }}
              />
            </AmountContainer>
            <Button onClick={handelClick}>AddtoCart</Button>
          </AddContauner>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductPage;
