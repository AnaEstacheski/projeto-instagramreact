export default function Posts() {
    return (
        <div class="posts">
            <Post user="meowed"
             post="./assets/img/gato-telefone.svg"
             likesUser="respondeai"
             likesTotal="101.523" />

            <Post user="barked"
            post="./assets/img/dog.svg"
            likesUser="adorable_animals"
            likesTotal="99.159" />

            <Post user="barked"
            post="./assets/img/dog.svg"
            likesUser="adorable_animals"
            likesTotal="99.159" />
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={"./assets/img/" + props.user + ".svg"} alt=""/>
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
                <img src={props.post} alt=""/>
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={"./assets/img/" + props.likesUser + ".svg"} alt=""/>
                <div class="texto">
                    Curtido por <strong>{props.likesUser}</strong> e <strong>outras {props.likesTotal} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}