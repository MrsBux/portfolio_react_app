import { Link } from "react-router-dom";
import "../../style/css/error.css";

function BlocError() {
  return (
    <main>
      <section className="BE">
        <div className="error">
          <p className="error__code"> 404 </p>
          <p className="error__txt">
            {" "}
            Oups! La page que vous demandez n'existe pas.{" "}
          </p>
          <Link to="/" className="error__link">
            {" "}
            Retourner sur la page d'accueil{" "}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BlocError;
