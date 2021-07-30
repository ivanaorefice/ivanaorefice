import { MemeCard } from './MemeCard.js'

function MemeContainer(props){
    return (
        <div className="col-sm-12" id='mainSec'>
            <h1 id='titleMain'>Welcome to the World of Miss Meme - your favourite Meme Generator</h1>
            <p id="titleMain">You are seeing <i>{props.activeFilter === ' ' || props.activeFilter === 'create' || props.activeFilter === 'login' ? 'all' : props.activeFilter}</i> Memes</p>
                { 
                    props.memes.map((meme) => 
                        <MemeCard 
                        key={meme.id}
                        meme={meme}
                        memeId={meme.id}
                        memeImg={meme.img}
                        memeTitle={meme.title}
                        memeSent1={meme.sentence1}
                        memeSent2={meme.sentence2}
                        memeSent3={meme.sentence3}
                        memeVisibility={meme.visibility}
                        memeCreator={meme.name}
                        memeCreatorId={meme.creator_id}
                        memeFont={meme.font}
                        memeColour={meme.colour}
                        deleteMeme = {props.deleteMeme}
                        setModalShow={(value) => props.setModalShow(value)}
                        handleShow={props.handleShow}
                        loggedIn = {props.loggedIn}
                    />)
                }
        </div>
    )
}

export { MemeContainer };