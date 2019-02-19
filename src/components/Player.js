import React, {Component} from 'react'

import PlayBtn from './PlayBtn'

class Player extends Component {
    
    render() {
        return (
            <div className="footer">
                <button onClick={() => this.props.nextPrev(this.props.currentSong.id - 1)}><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>
                <PlayBtn songId={this.props.currentSong.id} playing={this.props.playing} play={() => this.props.play()} pause={() => this.props.pause()} playSong={(songId) => this.props.playSong(songId)} />
                <button onClick={() => this.props.nextPrev(this.props.currentSong.id + 1)}><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>
                {this.props.playing ? <b>Now Playing: {this.props.currentSong.title} by {this.props.currentSong.artist}</b> : null}
                <button onClick={() => this.props.toggleShuffle()} className="shuffle"><i className={this.props.shuffle ? 'fa fa-random fa-2x selected' : 'fa fa-random fa-2x'} aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default Player