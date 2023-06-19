import React from "react";
import Vector2Image from "src/assets/images/background_Vector_2.png";
import Vector3Image from "src/assets/images/background_Vector_3.png";
import Vector4Image from "src/assets/images/background_Vector_4.png";
import Vector5Image from "src/assets/images/background_Vector_5.png";
import Vector6Image from "src/assets/images/background_Vector_6.png";
import { styled } from "@mui/material/styles";

const Background1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `1239.5px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle5 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `1920px`,
  height: `1071px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1989px`,
  height: `805.5px`,
  left: `199px`,
  top: `434px`,
});

const Vector2 = styled("img")({
  height: `636.5px`,
  width: `1752px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector3 = styled("img")({
  height: `636.5px`,
  width: `1752px`,
  position: `absolute`,
  left: `65px`,
  top: `52px`,
});

const Vector4 = styled("img")({
  height: `636.5px`,
  width: `1752px`,
  position: `absolute`,
  left: `117px`,
  top: `95px`,
});

const Vector5 = styled("img")({
  height: `636.5px`,
  width: `1752px`,
  position: `absolute`,
  left: `175px`,
  top: `139px`,
});

const Vector6 = styled("img")({
  height: `636.5px`,
  width: `1752px`,
  position: `absolute`,
  left: `237px`,
  top: `169px`,
});

function Background(props) {
  return (
    <Background1 className={props.className}>
      <Rectangle5></Rectangle5>
      <Group1>
        <Vector2 src={Vector2Image} loading="lazy" alt={"Vector 2"} />
        <Vector3 src={Vector3Image} loading="lazy" alt={"Vector 3"} />
        <Vector4 src={Vector4Image} loading="lazy" alt={"Vector 4"} />
        <Vector5 src={Vector5Image} loading="lazy" alt={"Vector 5"} />
        <Vector6 src={Vector6Image} loading="lazy" alt={"Vector 6"} />
      </Group1>
    </Background1>
  );
}

export default Background;
