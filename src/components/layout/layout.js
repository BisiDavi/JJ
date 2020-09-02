import React from 'react'
import {Header, Footer} from '../import/.';

const layout = (props) => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}

export default layout
