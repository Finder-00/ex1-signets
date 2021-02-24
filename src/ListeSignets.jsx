import './ListeSignets.scss';
import Signet from './Signet';
import tableSignets from './data/signets.json';

export default function ListeSignets(props){
    return(
        <div className="ListeSignets">
            {tableSignets.map(signet => <Signet key={signet.id} id={signet.id} titre={signet.titre} couleur={signet.couleur} dateModif={signet.dateModif}/>)}
        </div>
    );
}