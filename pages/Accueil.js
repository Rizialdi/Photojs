import React, { Component } from 'react';
import Layout from '../components/Layout';
import Tab from '../components/Tab';
import Playback from '../components/Playback'

export default () => {
        
    return (
        <Layout>
            <Playback />
            <Tab />
        </Layout>
    )
}