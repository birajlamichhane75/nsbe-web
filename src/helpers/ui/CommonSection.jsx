import React from 'react'

const CommonSection = ({children}) => {
    return ( 
        <section className='py-2 sm:py-4'>
            <div className='container mx-auto'>
                {children}
            </div>
        </section>
     );
}
 
export default CommonSection;