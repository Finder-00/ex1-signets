import './Appli.scss';
import Header from './Header';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <>
    <Header/>
      <div className="Appli">
        <ListeSignets/>
      </div>
    </>
  );
}
