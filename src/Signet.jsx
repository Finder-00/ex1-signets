import './Signet.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Signet(props){

    return(
        <div className= "LeSignet">
            <img src={"imageSignets/"+props.id+".jpg"} alt="allo"/>
            {/* <img src="imageSignets/001.jpg" alt=""/> */}
            <div className="contenu" style={{backgroundColor: props.couleur}}>
                <div className="titre">{props.titre}</div>
                <div className="date"> {props.dateModif} </div>
                <MoreVertIcon className="point"/>
            </div>
        </div>
    );
}