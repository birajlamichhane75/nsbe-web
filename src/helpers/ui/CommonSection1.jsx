import React from 'react'

const CommonSection1 = ({children}) => {
  return ( 
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-6">
      <div className="mx-auto w-[85%] max-w-7xl"> 
        {children}
      </div>
    </section>
  );
}

export default CommonSection1;
