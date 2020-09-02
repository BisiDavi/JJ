import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <a href="#logo">
                    <h1>JijiDemo</h1>
                </a>
            </div>
            <div className={classes.Title}>
                <h4>SELL FASTER, BUY SMARTER</h4>
            </div>
            <div className={classes.Signin_register}>
                <div className={classes.headerLink}>
                    <h4>Sign in</h4> 
                    <hr /> 
                    <h4>Registration</h4>
                </div>
                <button> SELL </button>
            </div>
        </header>
    )
}

export default Header;
