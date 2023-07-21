import React from "react";
import styled from "styled-components";
import "../footer/footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PaymentIcon from "@mui/icons-material/Payment";

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  "@media(max-width: 480px)": {
    flexDirection: "column",
  },
});
const Left = styled.div({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});
const Logo = styled.h1({});
const Desc = styled.p({ margin: "20px 0px" });
const SocialMediaContainer = styled.div({ display: "flex" });
const SocialMediaItem = styled.div({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "20px",
  backgroundColor: `${({ color }) => color}`,
  // color: "white",
});
const Center = styled.div({ flex: "1", padding: "20px" });
const Title = styled.h3({});
const List = styled.ul({
  listStyle: "none",
  display: "flex",
  margin: "0",
  padding: "0",
  flexWrap: "wrap",
});
const ListItem = styled.li({
  width: "50%",
  marginBottom: "10px",
});
const Right = styled.div({
  flex: "1",
  padding: "20px",
  "@media(max-width: 480px)": {
    backgroundColor: "#fff8f8",
  },
});
const ContactItem = styled.div({
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
});
const Payment = styled.img({ width: "50%" });
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Fouad</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialMediaContainer>
          <SocialMediaItem style={{ color: "#3B5999" }}>
            <FacebookIcon />
          </SocialMediaItem>
          <SocialMediaItem style={{ color: "#E4405F" }}>
            <InstagramIcon />
          </SocialMediaItem>
          <SocialMediaItem style={{ color: "#55ACEE" }}>
            <TwitterIcon />
          </SocialMediaItem>
          <SocialMediaItem style={{ color: "#E60023" }}>
            <PinterestIcon />
          </SocialMediaItem>
        </SocialMediaContainer>
      </Left>
      <Center>
        {" "}
        <Title>Useful Links</Title>
        <List>
          {" "}
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        {" "}
        <Title>Contact</Title>
        <ContactItem>
          <HomeIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
}

export default Footer;
