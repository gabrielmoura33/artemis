export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Instituto Sammy Aram
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Sobre
              </a>
            </li>
            <li>
              <a href="#doacao" className="page-scroll">
                Doações
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Animais disponíveis
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Prestação de contas
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000"
                className="btn btn-custom btn-lg page-scroll"
              >
                LOGIN
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
