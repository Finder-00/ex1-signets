import './Signet.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortOutlinedIcon from '@material-ui/icons/SortOutlined';

export default function Signet(props){

    return(
        <div className= "LeSignet">
            <img src={"imageSignets/"+props.id+".jpg"} alt="paysage"/>
            <SortOutlinedIcon className="liste"/>
            <div className="contenu" style={{backgroundColor: props.couleur}}>
                <div className="titre">{props.titre}</div>
                <div className="date"> {props.dateModif} </div>
                <MoreVertIcon className="point"/>
            </div>
        </div>
    );
}