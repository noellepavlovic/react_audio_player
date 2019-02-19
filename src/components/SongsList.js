import React, {Component} from 'react'

import Song from '../components/Song'

class SongsList extends Component {
    
    render() {
        return (
            <div className = "container listContainer">
                {this.props.songs.map((item, i) => <Song src={item.source} image={item.image} artist={item.artist} 
                title={item.title} year={item.year} genre={item.genre} description={item.description} id={item.id} 
                key={item.id} playSong ={(songId) => this.props.playSong(songId)} currentSong={this.props.currentSong} />)}
            </div>
        )
    }
}

export default SongsList