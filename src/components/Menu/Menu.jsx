import React from 'react';
import Vector1Image from 'src/assets/images/MENU_Vector_1.png';
import Logo1Image from 'src/assets/images/MENU_logo_1.png';
import { styled } from '@mui/material/styles';

const Menu1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `216px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Logo = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `620px`,
  height: `216px`,
  left: `327px`,
  top: `0px`,
});

const Group2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `620px`,
  height: `216px`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled('img')({
  height: `216px`,
  width: `620px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Logo1 = styled('img')({
  height: `137px`,
  width: `496px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `62px`,
  top: `40px`,
});

const AboutUs = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `900`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `104px`,
});

const Product = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `900`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1113px`,
  top: `104px`,
});

function Menu(props) {
  return (
    <Menu1 className={props.className}>
      <Logo>
        <Group2>
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector 1'} />
          <Logo1 src={Logo1Image} loading="lazy" alt={'logo 1'} />
        </Group2>
      </Logo>
      <AboutUs>{`ABOUT US`}</AboutUs>
      <Product>{`PRODUCT`}</Product>
    </Menu1>
  );
}

export default Menu;
