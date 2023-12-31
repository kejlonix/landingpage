/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import Product1Image from 'src/assets/images/PRODUKT_product_1.png';
import { styled } from '@mui/material/styles';

const Produkt1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1000px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Product = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1000px`,
  height: `1000px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle6 = styled('div')({
  backgroundColor: `rgba(239, 239, 239, 1)`,
  borderRadius: `30px`,
  width: `514px`,
  height: `619px`,
  position: `absolute`,
  left: `345px`,
  top: `160px`,
});

const Product1 = styled('img')({
  height: `1000px`,
  width: `1000px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

function Produkt(props) {
  return (
    <Produkt1 className={props.className}>
      <Product>
        <Rectangle6></Rectangle6>
        <Product1 src={Product1Image} loading="lazy" alt={'product 1'} />
      </Product>
    </Produkt1>
  );
}

export default Produkt;
