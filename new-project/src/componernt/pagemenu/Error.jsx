import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div>
        <h5>Erreur de lien veillez retourner à la page d'accueil</h5>
        <Link to={'/'}><button>Retour à l'accueil</button></Link>
    </div>
  )
}
