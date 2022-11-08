import config from "../config.json"
import styled from "styled-components";

function HomePage(){

    const estilosDaHomePage = {backgroundColor:"red"};
    
    //console.log(config.playlists);

    return (
    
    <div style={estilosDaHomePage}>
        <Menu/>
        <Header/>
        <TimeLine playlists={config.playlists}/>

    </div>
    
    );
    
}
export default HomePage


function Menu(){
    return (
        <div>
            Menu
        </div>
    );
}

const StyledHeader = styled.div`
    	img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .user-info{
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }
`;

function Header(){
    return (
        <StyledHeader>
            {/*<img src="banner"/>*/}

            <section className=".user-info">
            
                <img src={`http://github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
                           
                
            </section>
            
        </StyledHeader>
    );
}

function TimeLine(props){
   // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return {videos.map((video) => {
                        <a href={video.url} >
                            <img src={video.thumb} />
                            <span>

                            </span>

                        </a>
                })}
            })}
        </div>
    );
}


