import './Header.scss'

export default function Header() {

    var prenom = prompt("Quel est votre prénom : ")
    return(
        <header>
            <div>signet (Beta)</div>
            <div>{prenom}</div>
        </header>
    );
}