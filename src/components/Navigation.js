import styled from 'styled-components'
import PrimaryButton from './PrimaryButton'
import Logo from '../assets/logo-new.png'

const StyledNav = styled.header`
background-color: transparent;
color: var(--neutral-light);
padding: 2rem 10rem;
box-shadow: 0 1.3 4 rgba(0,0,0,0.25);
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledLogo = styled.img`
width: 32px;
height: 32px;
object-fit: contain;
position: relative;
z-index: 2;
`
const LogoContainer = styled.div`
width: 40px;
height: 40px;
background: linear-gradient(270deg, #01000e 0%, #170a40 100%);
padding: 5px; 
display: flex; 
flex-direction:column; 
align-items: center;
justify-content: space-evenly; 
border-radius: 8%; 
box-shadow: 1.8px 1.4px 4px rgba(0,0,0,11%);
`

const NavLinks = styled.span`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
max-width: 100%;
`;

const NavLink = styled.a`
margin: 0px 15px;
color: var(--neutral-light);
text-decoration: none;
`;


const Navigation = () => {
    return (
        <StyledNav>
            {/* Logo */}
            <LogoContainer>
                <StyledLogo src={Logo} alt="logo" />
            </LogoContainer>

            {/* Menu Items */}
            <NavLinks>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
            </NavLinks>

            {/* Login Button */}
            <div className="flex items-center space-x-2">
                <PrimaryButton name="Login" />
            </div>
        </StyledNav>
    );
};

export default Navigation;