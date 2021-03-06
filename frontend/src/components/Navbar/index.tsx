import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function NavBar(){
     
    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1><a href='/'>DSMovie</a></h1>
                <a href="https://github.com/joao-menezes" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/Joao Menezes</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;
