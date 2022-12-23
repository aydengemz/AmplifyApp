import APlayer from "./APlayer"

function AllPlayer(props) {
    return (
        <>
            <h1>ALL Players</h1>
            <ul>
                {props.players.map((player) => <APlayer playerInfo={player} />)}
            </ul>
        </>
    );

}

export default AllPlayer;
