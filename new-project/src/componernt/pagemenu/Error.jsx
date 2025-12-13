import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="bg-lime-50 vh-100">
        <h5>Erreur de lien veillez retourner à la page d'accueil</h5>
        <Link to={'/'}><button className="btn btn-primary">Retour à l'accueil</button></Link>
    </div>
  )
}
