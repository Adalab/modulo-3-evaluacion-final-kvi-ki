import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Rick and Morty logo in English" className="header__logo" />
        </header>
    )
}

export default Header;