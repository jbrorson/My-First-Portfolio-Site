import React from 'react';
import styled from 'styled-components';


function Footer() {
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* COLUMN 1 */}
                        <div className="col1">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>  
                    </div>
                    {/* FOOTER BOTTOM */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Josefines portfolio - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer; 

const FooterContainer = styled.div`
.main-footer {
    width: 100vw;
    margin-bottom: 0; 
    padding: 25px 0;
    font-size: 20px;
    /* display: block; 
    box-sizing: border-box;  */

    /* margin: -100px; */
    
    /* display: flex; 
    text-align: center;  */
}
/* .col1 {
    font-size: 17px;
    flex-flow: nowrap;
    justify-content: center;

} */
.footer-middle {
    font-size: 13px;
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    background: var(--mainDark);
    color: var(--mainWhite);
    /* display: flex; 
    text-align: center;  */
    /* padding: 20px; 
    bottom: 0;  
    width: 100%; */
    /* position: fixed; 
    z-index: 1;  */
}
ul {
    list-style: none; 
    margin: 0;
    padding: 0;
}
`;

//SPARA!!!!!
// const Footer = styled.footer`
// .Footer {
// background: rgb(242, 243, 247);
// position: relative;
// height: -12vh;
// margin-top: -100px; 
// clear: both;
// }
// `;

// export default class Footerstyle extends Component {
// 	render() {
// 		return (
//             <Footer className="Footer">
//                 Get in touch: 
//                 Phone: 0721776272
//                 Email: josefine.brorson@gmail.com
//             </Footer>
// 		);
// 	}
// }

