import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.span`
width: 100vw;
margin-bottom: 0; 
padding: 25px 0;
font-size: 20px;
font-size: 13px;
display: flex;
justify-content: center;
background: var(--mainDark);
color: var(--mainWhite);
position: relative;

`;


function Footer() {
    return(
        <FooterContainer>
            <div>
            &copy;{new Date().getFullYear()} Josefines portfolio - All Rights Reserved
            </div>
        </FooterContainer>
        
    );
}

export default Footer; 

// const FooterContainer = styled.div`
//     width: 100vw;
//     margin-bottom: 0; 
//     padding: 25px 0;
//     font-size: 20px;
//     font-size: 13px;
//     display: flex;
//     flex-flow: nowrap;
//     justify-content: center;
//     background: var(--mainDark);
//     color: var(--mainWhite);
// }

// ul {
//     list-style: none; 
//     margin: 0;
//     padding: 0;
// }
// `;


// <FooterContainer className="main-footer">
//             <div className="footer-middle">
//                 <div className="container">
//                     <div className="row">
//                         {/* COLUMN 1 */}
//                         <div className="col1">
//                             <h4>Lorem ipsum</h4>
//                             <ul className="list-unstyled">
//                                 <li>Lorem ipsum</li>
//                                 <li>Lorem ipsum</li>
//                                 <li>Lorem ipsum</li>
//                             </ul>
//                         </div>  
//                     </div>
//                     {/* FOOTER BOTTOM */}
//                     <div className="footer-bottom">
//                         <p className="text-xs-center">
//                             &copy;{new Date().getFullYear()} Josefines portfolio - All Rights Reserved
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </FooterContainer>