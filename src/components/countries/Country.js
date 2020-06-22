import React from 'react'
import css from "./coutries.module.css";

export default function Country (props) {
    const {country} = props;
    const {name, flag} = country;
    return (
        <div className={`${css.border} ${css.country}`}>
                <img className={css.flag} src={flag} alt="{name}"/>
                <span className={css.countryName}>{name}</span>               
        </div>
    );
}
