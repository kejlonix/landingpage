import React from "react";
import { Helmet } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import Background from "src/components/Background/Background";
import Footer from "src/components/Footer/Footer";
import Produkt from "src/components/Produkt/Produkt";
import Menu from "src/components/Menu/Menu";
import Ramka from "src/components/Ramka/Ramka";

const Slide16911 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Background1 = styled(Background)(({ theme }) => ({
  width: `2188px`,
  height: `1239.5px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Footer1 = styled(Footer)(({ theme }) => ({
  width: `620px`,
  height: `168px`,
  position: `absolute`,
  left: `650px`,
  top: `912px`,
}));

const Produkt1 = styled(Produkt)(({ theme }) => ({
  width: `1000px`,
  height: `1000px`,
  position: `absolute`,
  left: `411px`,
  top: `103px`,
}));

const Menu1 = styled(Menu)(({ theme }) => ({
  width: `1274px`,
  height: `216px`,
  position: `absolute`,
  left: `323px`,
  top: `17px`,
}));

const Ramka1 = styled(Ramka)(({ theme }) => ({
  width: `1920px`,
  height: `1080px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

function Slide1691(props) {
  return (
    <Slide16911 className={props.className}>
      <Helmet>
        <title>Slide 16:9 - 1</title>
      </Helmet>
      <Background1 />
      <Footer1 />
      <Produkt1 />
      <Menu1 />
      <Ramka1 />
    </Slide16911>
  );
}

export default Slide1691;
