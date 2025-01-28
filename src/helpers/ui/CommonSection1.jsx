import React from 'react'

const CommonSection1 = ({children}) => {
    return ( 
        <section className='py-8 sm:py-13'>
            <div className='container1 mx-auto'>
                {children}
            </div>
        </section>
     );
}
 
export default CommonSection1;