import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import PlayBtn from './PlayBtn'

class Song extends Component {
    
    render() {
        return (
            <div>

                <div className="songList">
                    <div className={!!this.props.currentSong && this.props.currentSong.id === this.props.id ? "row listDiv currentlyPlaying " + this.props : "row listDiv"}>
                        <div className="col-xs-1">
                            <PlayBtn songId={this.props.id} playing={this.props.playing} currentSong={this.props.currentSong}
                                playSong={(songId) => this.props.playSong(this.props.id)} pauseSong={() => this.props.pauseSong()} />
                        </div>
                        <div className="col-xs-1">
                            <img className="listImg" src={this.props.image} alt="album cover" />
                        </div>
                        <Link to={`/${this.props.id}`}>
                            <div className="col-xs-4">
                                {this.props.title}
                            </div>
                            <div className="col-xs-3">
                                {this.props.artist}
                            </div>
                            <div className="col-xs-1">
                                {this.props.year}
                            </div>
                            <div className="col-xs-2">
                                {this.props.genre}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Song;