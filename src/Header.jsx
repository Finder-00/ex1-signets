import './Header.scss';

export default function Header() {

    return(
        <header>
            <div>Signet (Beta)</div>
            <div className="user">
                <div>Francis desjardin</div>
                <img src="imageSignets/001.jpg" alt="paysage"/>
            </div>
        </header>
    );
}