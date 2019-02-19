import React, {Component} from 'react'

class PlayBtn extends Component {
    
    render() {
        return (
            <span>
            <button onClick={this.props.playing ? () => this.props.pause() :  () => this.props.playSong(this.props.songId)}>
                {this.props.playing ? (<i className="fa fa-pause-circle fa-3x" aria-hidden="true"></i>) :
                     (<i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>)}
            </button>
            </span>
        )
    }
}

export default PlayBtn