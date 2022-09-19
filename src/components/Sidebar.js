import User from "./User";
export default function Sidebar() {
    return (
        <div class="sidebar">
          <User />
          <Suggestions />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}

function Suggestions() {
    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        
        <Suggestion user="bad.vibes.memes" reason="Segue você" />
        <Suggestion user="chibirdart" reason="Segue você" />
        <Suggestion user="razoesparaacreditar" reason="Novo no Instagram" />
        <Suggestion user="adorable_animals" reason="Segue você" />
        <Suggestion user="smallcutecats" reason="Segue você" />

      </div>
    )
}

function Suggestion(props) {
    return (
        <div class="sugestao">
          <div class="usuario">
            <img src={"./assets/img/" + props.user + ".svg"} alt=""/>
            <div class="texto">
              <div class="nome">{props.user}</div>
              <div class="razao">{props.reason}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
    );
} 