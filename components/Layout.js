import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header'

const layoutStyle = {
  fontFamily: "Roboto Condensed",
  fontWeight: 400,
  lineHeight: 1.533,
  backgroundColor: "white",
  minHeight: "100% !important",
  margin: 0
 }

export default function Layout(props) {
  return (
    <body style={layoutStyle}>
      <Head>
        <title>maison</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="../static/images/tiger.jpg" />
      </Head>
      <Header />
      {props.children}
    </body>
  )
}