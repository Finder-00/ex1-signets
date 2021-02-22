import './ListeSignets.scss';
import Signet from './Signet';
import tableSignets from './data/signets.json';

export default function ListeSignets(props){
    return(
        <div className="ListeSignets">
            {tableSignets.map(signet => <Signet titre={signet.titre} dateModif={signet.dateModif}/>)}
        </div>
    );
}