import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const FooterLine = styled.hr`
  border: 0;
  height: 0;
  margin: 0;
  //border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const FooterBlock = styled.div`
  z-index: 3;
  position: 0;
  top: fixed;
  left: 0;
  right: 0;
  background-color: ${palette.main[0]};
  color: #204030;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  .wrapper {
    padding: 0 2rem;
    position: relative;
    width: 80rem;
    height: 10rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    color: white;

    .blank-area {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    .logo-area {
      margin-bottom: 2rem;
      img {
        width: 15rem;
        opacity: 0.5;
      }
    }

    .footer-info {
      padding-left: 4rem;
      padding-right: 10rem;
      font-size: 0.75rem;
    }

    .footer-sns {
      padding-left: 7rem;
      img {
        padding-right: 7px;
        padding-bottom: 45px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FooterBlock>
        <div className="wrapper">
          <div className="logo-area">
            <img src="../images/common/logo_w.png" alt="logo" />
          </div>
          <div className="footer-info">
            <address>
              <span>서울시 강남구 역삼동 123-123 퍼펫빌딩 7층 </span>
              <span> T. 02-123-5678 </span>
              <span> F. 02-123-5678 </span>
              <br />
              <span>E. your@email.com </span>
              <span> 사업자 등록번호 : 123-123-12345 </span>
              <span> 대표 : 유강현</span>
            </address>
            <p class="copyright">
              Copyrighⓒ2020 PERPET MATCH <span> l </span> with by SW Maestro
            </p>
          </div>
          <div className="footer-sns">
            <img src="/images/common/footer_sns1.png" alt="sns-img" />
            <img src="/images/common/footer_sns2.png" alt="sns-img" />
            <img src="/images/common/footer_sns3.png" alt="sns-img" />
            <img src="/images/common/footer_sns4.png" alt="sns-img" />
            <img src="/images/common/footer_sns5.png" alt="sns-img" />
            <img src="/images/common/footer_sns6.png" alt="sns-img" />
          </div>
        </div>
        <FooterLine></FooterLine>
      </FooterBlock>
    </div>
  );
};

export default Footer;