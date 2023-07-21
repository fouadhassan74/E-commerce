import React from "react";
import "../Cart/cart.scss";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
const TopButton = styled.button((props) => ({
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
  color: props.type === "filled" && "white",
  backgroundColor: props.type === "filled" ? "black" : "transparent",
  border: props.type === "filled" && "none",
}));
const ProductColor = styled.div((props) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: props.$color,
}));
const SummaryItem = styled.div((props) => ({
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: props.type === "total" && "24px",
  fontWeight: props.type === "total" && "500",
}));
const SummaryItemText = styled.span({});
const SummaryItemPrice = styled.span({});
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const KEY =
    "pk_test_51NRCXrJzZm1rPy9jzoarrueVhQOoL1BZxjM0OaLEBos8lnEodFWDtHLRdyyAsD7eiMOfl1CtIr8sS8jAXfrjRwyx001UtbeNg2";
  return (
    <>
      <Navbar />
      <div className='cartContainer'>
        <h1 className='cartTitle'>Your Bag</h1>
        <div className='cartTop'>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <div className='topTexts'>
            <span className='topText'>Shopping Bag(2)</span>
            <span className='topText'>Your Wishlist (0)</span>
          </div>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </div>
        <div className='cartBottom'>
          <div className='cartInfo'>
            {cart.product.map((product) => (
              <>
                <div className='product'>
                  <div className='productDetails'>
                    <img src={product.img} alt='' />
                    <div className='details'>
                      <span>
                        <b>Product:</b> {product.title}
                      </span>
                      <span>
                        <b>ID:</b> {product._id}
                      </span>
                      <ProductColor $color='black' />
                      <span>
                        <b>Size:</b> {product.size}
                      </span>
                    </div>
                  </div>
                  <div className='priceDetails'>
                    <div className='amountContainer'>
                      <AddIcon />
                      <span className='amount'>{product.qunatity}</span>
                      <RemoveIcon />
                    </div>
                    <span className='ProductPrice'>$ {product.price}</span>
                  </div>
                </div>
                <hr />
              </>
            ))}
            {/* <div className='product'>
              <div className='productDetails'>
                <img
                  src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'
                  alt=''
                />
                <div className='details'>
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <ProductColor $color='black' />
                  <span>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className='priceDetails'>
                <div className='amountContainer'>
                  <AddIcon />
                  <span className='amount'>1</span>
                  <RemoveIcon />
                </div>
                <span className='ProductPrice'>$ 20</span>
              </div>
            </div> */}
          </div>
          <div className='cartSummary'>
            <h1 className='summaryTitle'>Summary</h1>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='fouad'
              image='https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              stripeKey={KEY}
            >
              <button>Check Out Now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Cart;
