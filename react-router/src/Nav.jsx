import {Link} from 'react-router-dom';

function Nav(){
    return(
        <>
            <nav>
                <Link to="./One">One</Link>
                <Link to="./Two">Two</Link>
                <Link to="./Three"></Link>
            </nav>
        </>
    )
}

export default Nav;