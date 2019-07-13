import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header'

const layoutStyle = {
  fontFamily: "Roboto Condensed",
  fontWeight: 400,
  lineHeight: 1.533,
  backgroundColor: "white",
  minHeight: "100% !important",
  margin: "-10px",
 }

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>Nollet Shooting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="../static/images/logo.png" />
      </Head>
      <Header />
      {props.children}
    </div>
  )
}