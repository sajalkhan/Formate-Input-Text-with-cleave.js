import React from "react";
import "./text-field.scss";
import Cleave from 'cleave.js/react';

const TextMoneyField = (props) => {
    return (
        <div className="text-field">
            {props.title ? <span>{props.title}</span> : null}

            <Cleave
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                options={{
                    prefix: '$',
                    numeral: true,
                    numeralThousandsGroupStyle: 'thousand'
                }}
                onChange={props.onChange}
            />

        </div>
    );
};

export default TextMoneyField;
