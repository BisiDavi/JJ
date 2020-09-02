import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
    const aboutLinks = ["About Jiji","We are Hiring!",
    "Terms and Condition","Privacy and Policy",
    "Billing Policy", "Jijiness"];
    const supportLinks = ["Support@jiji.ng", "Safety Tips",
     "Contact Us", "FAQ"];
    const appsLinks = ["appicon", "google play icon"];
    const ourResourcesLinks = ["Our Blog", "Jiji on FB", 
    "Our Instagram","Our Youtube", "Our Twitter"];
    const hotLinks = ["Brand", "Jiji Sellers", "Regions"];    


    const FooterLinks = (currentFooterLink) => {        
        return (
        <ul>
            {
                currentFooterLink.map(link => (
                    <li key={link}>
                        <a href={link}>{link}</a>   
                    </li>
                ))
            }
        </ul>
        )                   
    }

    return (
        <footer className={classes.Footer}>
        {FooterLinks(aboutLinks)}
        {FooterLinks(supportLinks)}
        {FooterLinks(appsLinks)}
        {FooterLinks(ourResourcesLinks)}
        {FooterLinks(hotLinks)}                     
        </footer>
    )
}

export default Footer
