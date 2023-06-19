import React from "react";
import Ramka2Image from "src/assets/images/RAMKA_ramka.png";
import { styled } from "@mui/material/styles";

const Ramka1 = styled("div")({
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
});

const Ramka2 = styled("img")({
  height: `1080px`,
  width: `1920px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

function Ramka(props) {
  return (
    <Ramka1 className={props.className}>
      <Ramka2 src={Ramka2Image} loading="lazy" alt={"ramka"} />
    </Ramka1>
  );
}

export default Ramka;
