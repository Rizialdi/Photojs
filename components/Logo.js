import React, { Component } from 'react';

export default () => {
    return (
        <div id="marque_site">
            <div>
                <div id="site_detail">
                    <h1>Photo</h1>
                    <h3>Photo by Me</h3>
                </div>
            </div>
            <style jsx>{`
            #marque_site {
                flex: 0 1 auto;
                padding: 0 10px;
                float: left;
                text-align: left;
                margin-left: 50px;
            }

            #site_detail {
                display: inline-block;
                padding: 10px 0;
                text-align: left;
                vertical-align: middle;
            }

            h1 {
                font-size: 30px;
                line-height: 1.233;
                margin:0;
            }

            h3 {
                line-height: 0;
                text-transform: uppercase;
            }
            `}</style>
        </div>
    )
}