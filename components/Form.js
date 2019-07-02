import React, { Component } from 'react';

const items= ["Seance Photo", "Anniversaire", "Diplomation"]
const itm_exp = items.map(item => <option className='domino'>{item}</option>)

export default () => {
    return (
        <form method="POST" action="/send" className="wrap-contact100">
            <Input appel="name" tag="Nom" />
            <Input appel="surname" tag="Prénom" />
            <DropDownItemSelection appel="event" tag="Évènement" items={items} />
            <TextArea tag="Message" />
            <Submit_button />
            <style jsx>{`
                .wrap-contact100 {
                    display: block;
                    width: 1000px;
                    background: #fff;
                    border-radius: 10px;
                    padding: 82px 180px 33px 180px;
                    position: relative;
                    margin: 0 auto;
                }
        `}</style>
        </form>
    )
}

const Input = (props) => {
    return (
        <div className="wrap-input" data-validate="Nom requis">
            <span className="label-input100">{props.tag}</span>
            <input type="text" className="input100" type="text" name={props.appel} placeholder={`Entrez votre ${props.tag}`} />
            <span className="focus-input100"></span>

            <style jsx>{`
        .wrap-input {
            width: calc((100% - 60px) / 2);
            position: relative;
            display: inline-block;
            border-bottom: 2px solid #d9d9d9;
            padding-bottom: 13px;
            margin-bottom: 65px;
            margin-right: 20px;
        }
        .label-input100 {
            font-family: Manjari;
            font-size: 16px;
            color: #999999;
            line-height: 1.5;
            padding-left: 5px;
        }
        .input100 {
            height: 40px;
            display: block;
            width: 100%;
            background: transparent;
            font-family: Manjari;
            font-size: 20px;
            color: #555555;
            line-height: 1.2;
            padding: 0 5px;
            outline: none;
            border: none;
            overflow: hidden;
            text-transform: capitalize;
        }
        .focus-input100 {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        .focus-input100::before {
            content: " ";
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            transition: all 0.6s ease-in-out;
            background: #fd513b;
        }
        .input100:focus + .focus-input100::before {
            width: 100%;
            }
        `}</style>
        </div>
    )
}

const TextArea = (props) => {
    return (
        <div className="wrap-input100" data-validate="Nom requis">
            <span className="label-input100">{props.tag}</span>
            <textarea className="input100" type="text" name="message" placeholder={`Votre ${props.tag}`} />
            <span className="focus-input100"></span>

            <style jsx>{`
        .wrap-input100 {
            width: 100%;
            position: relative;
            display: block;
            border-bottom: 2px solid #d9d9d9;
            padding-bottom: 13px;
            margin-bottom: 65px;
            margin-right: 20px;
        }
        .label-input100 {
            font-family: Manjari;
            font-size: 16px;
            color: #999999;
            line-height: 1.5;
            padding-left: 5px;
        }
        .input100 {
            min-height: 110px;
            display: block;
            width: 100%;
            background: transparent;
            font-family: Manjari;
            font-size: 20px;
            color: #555555;
            line-height: 1.2;
            padding: 0 5px;
            outline: none;
            border: none;
            overflow: hidden;
            text-transform: capitalize;
        }
        .focus-input100 {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        .focus-input100::before {
            content: " ";
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            transition: all 0.6s ease-in-out;
            background: #fd513b;
        }
        .input100:focus + .focus-input100::before {
            width: 100%;
            }
        `}</style>
        </div>
    )
}

const Submit_button = (props) => {
    return (
        <div className="container-contact100-form-btn">
            <button type="submit" className="contact100-form-btn">
                <span>
                    Envoi 
                </span>
            </button>

            <style jsx>{`
            .container-contact100-form-btn {
                width: 100%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                flex-wrap: wrap;
                margin-top: -25px;
            }
            .contact100-form-btn {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
                min-width: 130px;
                height: 50px;
                background-color: #fd513b;
                border-radius: 5px;
                border: 2px solid transparent;
                font-family: Manjari;
                font-size: 18px;
                color: #d9d9d9;
                line-height: 1.2;
                -webkit-transition: all 0.4s;
                -o-transition: all 0.4s;
                -moz-transition: all 0.4s;
                transition: all 1s ease-in-out;
                box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
                -moz-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
                -webkit-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
                -o-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
                -ms-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
            }
            .contact100-form-btn:hover {
                background-color: #333333;
                box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
                -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
                -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
                -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
                -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
                }
        `}</style>
        </div>
    )
}

const DropDownItemSelection = (props) => {
    return (
        <div className="wrap-input100 input100-select">
            <span className="label-input100">{props.tag}</span>
            <div>
                <select className="selection-2" name={props.appel}>
                    {itm_exp}
                </select>
            </div>
           <span className="focus-input100"></span>
            <style jsx>{`
            .wrap-input100 {
                width: 100%;
                position: relative;
                padding-bottom: 13px;
                margin-bottom: 27px;
                }
            .label-input100 {
                font-family: Manjari;
                font-size: 18px;
                color: #666666;
                line-height: 1.5;
                padding-left: 5px;
                }
            .focus-input100 {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                }

            .focus-input100::before {
                content: "";
                display: block;
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 2px;

                -webkit-transition: all 0.4s;
                -o-transition: all 0.4s;
                -moz-transition: all 0.4s;
                transition: all 0.4s;

                background: #7f7f7f;
            }
            option {
                display: none
            }
            .domino {
                display: none
            }
        `}</style>
        </div>
    )
}
