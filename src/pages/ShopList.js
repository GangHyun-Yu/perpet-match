import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';

const getDummy = (n = 30) => {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(i);
  }
  return l.map((i) => <h1 key={i}>{i}</h1>);
};

const HomeBody = styled.div`
  margin-top: 5rem;
`;

const ShopList = () => {
  return (
    <>
      <HeaderContainer />
      <HomeBody>
        <h1>ShopList</h1>
        {getDummy()}
      </HomeBody>
    </>
  );
};

export default ShopList;
