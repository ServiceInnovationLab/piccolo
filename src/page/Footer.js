import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import List, { Item } from '../elements/List';
import { CreativeCommons } from '../components/CreativeCommons';

const Footer = styled.section`
  padding-top: 45px;
  height: 270px;
  background: #eee;
`;


const PageFooter = () => (
  <Fragment>
    <Footer>
      <Container>
        <List stripped bordered>
          
        <Item><a href="mailto:serviceinnovationlab@dia.govt.nz">Contact Us</a></Item>
        </List>

        <CreativeCommons label="Creative Commons"/>

      </Container>
    </Footer>
  </Fragment>
);

export default PageFooter;
