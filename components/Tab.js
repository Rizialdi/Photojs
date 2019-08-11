import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPortrait, faLandmark, faObjectGroup, faStop, faObjectUngroup } from '@fortawesome/free-solid-svg-icons'
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import Carousel from './Carousel';
import * as customStyle from '../static/tab_themes';
import ScrollableAnchor from 'react-scrollable-anchor'

export default () => {

  const images = [
              { author: 'tiger',
              caption: 'tiger', 
              source: {
                 fullscreen: '../static/images/tiger.jpg',
                 regular: '../static/images/tiger.jpg',
                 thumbnail: '../static/images/tiger.jpg'}},
             { author: 'tiger',
                 caption: 'tiger', 
                 source: {
                    fullscreen: '../static/images/dou.jpg',
                    regular: '../static/images/dou.jpg',
                 thumbnail: '../static/images/dou.jpg'}},
             { author: 'tiger',
             caption: 'tiger', 
             source: {
                fullscreen: '../static/images/coco.jpg',
                regular: '../static/images/coco.jpg',
                thumbnail: '../static/images/coco.jpg'}},
         
             { author: 'tiger',
              caption: 'tiger', 
              source: {
                 fullscreen: '../static/images/canyon_wallpaper.jpg',
                 regular: '../static/images/canyon_wallpaper.jpg',
                 thumbnail: '../static/images/canyon_wallpaper.jpg'}},
]

    return (
      <ScrollableAnchor id={'tab_id'}>
         <Tabs customStyle={customStyle}>
        <TabList>
          <Tab> Tout </Tab>
          <Tab><FontAwesomeIcon icon={faPortrait} /> Portrait </Tab>
          <Tab><FontAwesomeIcon icon={faLandmark} /> Paysage </Tab>
          <Tab> <FontAwesomeIcon icon={faObjectUngroup} /> Objet </Tab>
        </TabList>
        <PanelList>
          <Panel><Carousel images={images}/></Panel>
          <Panel><Carousel images={images}/></Panel>
          <Panel><Carousel images={images}/></Panel>
          <Panel><Carousel images={images}/></Panel>
        </PanelList>
      </Tabs>
      </ScrollableAnchor> 
    )
}