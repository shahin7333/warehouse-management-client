import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear()
    return (
        <div>
            <footer>
                <p className='text-center my-5'><small>Copyright &#169; {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;