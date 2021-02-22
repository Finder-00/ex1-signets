import './Signet.scss';

export default function Signet(props){

    return(
        <div className= "LeSignet">
            <div className="titre">{props.titre}</div>
            <div className="date">{props.dateModif}</div>
            <div className="option">trois</div>
        </div>
    );
}