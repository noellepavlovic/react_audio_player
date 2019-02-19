import React, {Component} from 'react'

import PlayBtn from './PlayBtn'

class SongDetails extends Component {
    
    render() {
        let index = this.props.match.params.songId
        return (
            <div className="container">
                <div className="row titleDiv">
                    <div className="col-xs-12">
                        <div className="songTitle"> {this.props.songs[index].title}</div>
                        <PlayBtn songId={this.props.match.params.songId} playing={this.props.playing}
                            currentSong={this.props.currentSong} playSong={(songId) => this.props.playSong(songId)}
                            pauseSong={() => this.props.pauseSong()} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <img className="detailsImg" src={this.props.songs[index].image} alt="album cover" />
                    </div>
                    <div className="col-xs-8">
                        <div className="row">
                            <div className="col-xs-2 descHeading">
                                Title:
                        </div>
                            <div className="col-xs-10">
                                {this.props.songs[index].title}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 descHeading">
                                Artist:
                        </div>
                            <div className="col-xs-10">
                                {this.props.songs[index].artist}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 descHeading">
                                Year:
                        </div>
                            <div className="col-xs-10">
                                {this.props.songs[index].year}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 descHeading">
                                Genre:
                        </div>
                            <div className="col-xs-10">
                                {this.props.songs[index].genre}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 descHeading">
                                Description:
                        </div>
                            <div className="col-xs-10">
                                {this.props.songs[index].description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SongDetails