import { useRouter } from 'next/router';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MDBContainer } from 'mdbreact';

export default function Layout(props) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Header />
      <MDBContainer>{props.children}</MDBContainer>
      <Footer />
    </React.Fragment>
  );
}