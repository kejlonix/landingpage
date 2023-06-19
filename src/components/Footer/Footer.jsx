import React from "react";
import Vector2Image from "src/assets/images/FOOTER_Vector_2.png";
import { styled } from "@mui/material/styles";

const Footer1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `168px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `620px`,
  height: `168px`,
  left: `0px`,
  top: `0px`,
});

const Group3 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `620px`,
  height: `168px`,
  left: `0px`,
  top: `0px`,
});

const Vector2 = styled("img")({
  height: `168px`,
  width: `620px`,
  position: `absolute`,
  left: `1240px`,
  top: `336px`,
});

function Footer(props) {
  return (
    <Footer1 className={props.className}>
      <Frame1>
        <Group3>
          <Vector2 src={Vector2Image} loading="lazy" alt={"Vector 2"} />
        </Group3>
      </Frame1>
    </Footer1>
  );
}

export default Footer;
