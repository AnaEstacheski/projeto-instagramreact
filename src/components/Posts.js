import React from "react"
export default function Posts() {
    const posts = [
        {
            user:"meowed",
            img:"gato-telefone",
            likesUser:"respondeai",
            likesTotal:"101.523"  
        },
        {
            user:"barked",
            img:"dog",
            likesUser:"adorable_animals",
            likesTotal:"99.159"  
        },
        {
            user:"barked",
            img:"dog",
            likesUser:"adorable_animals",
            likesTotal:"99.159"  
        },
    ]

    return (
        <div class="posts">
        {posts.map(post => <Post post={post} />)}
    </div>
    )
}

function Post(props) {
    const [likeCounter, setLikeCounter] = React.useState(props.likesTotal)
    const [liked, setLiked] = React.useState(false)

    function like() {
        if (liked === false) {
          setLikeCounter(likeCounter + 1);
          setLiked(true)
        } else {
          setLikeCounter(likeCounter - 1);
          setLiked(false)
        }
      }

    const [marcked, setMarcked] = React.useState(false)
    function savePost() {
        let isMarked = (marcked ? false : true)
        setMarcked(isMarked)
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={"./assets/img/" + props.post.user + ".svg"} alt=""/>
                    {props.post.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={"./assets/img/" + props.post.img + ".svg"} alt=""/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={props.liked ? "heart" : "heart-outline"} class={(props.liked) && ('hearted')} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={marcked ? "bookmark" : "bookmark-outline"} onClick={savePost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={"./assets/img/" + props.post.likesUser + ".svg"} alt=""/>
                    <div class="texto">
                        Curtido por <strong>{props.post.likesUser}</strong> e <strong>outras {props.post.likesTotal} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}