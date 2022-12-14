import React from "react";

export default function SideBar() {
    const [name, setName] = React.useState('Catana')
    const userData = {
        img: "./assets/img/catanacomics.svg",
        user: "catanacomics",
      };

    function changeUserName() {
        const newUserName = prompt('Altere o nome do seu usuário')
        setName(newUserName)
    }

    return (
        <div class="sidebar">
          <User 
          name={name}
          img={userData.img}
          user={userData.user}
          handleClick={() => changeUserName()}
          />
          <Suggestions />
          <Links />
          <CopyRight />
        </div>
    )
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt=""/>
                <div class="texto">
                    <strong>{props.user}</strong>
                    <span>
                    {props.name}
                    <ion-icon name="pencil" onClick={props.handleClick}></ion-icon>
                    </span>
                </div>
        </div>
    )
}

function Suggestions() {
    const suggestions = [
        {user: "bad.vibes.memes", reason: "Segue você"},
        {user: "chibirdart", reason: "Segue você"},
        {user: "razoesparaacreditar", reason: "Novo no Instagram"},
        {user: "adorable_animals", reason: "Segue você"},
        {user: "smallcutecats", reason: "Segue você"},
    ]

    return (
        <div class="sugestoes">
            <div class="titulo"> Sugestões para você
            <div>Ver tudo</div></div>
            {suggestions.map(suggestion => <Suggestion user={suggestion.user} reason={suggestion.reason} />)}
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

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function CopyRight() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}