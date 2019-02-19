import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import SongsList from './components/SongsList'
import SongDetails from './components/SongDetails'
import Header from './components/Header'
import Player from './components/Player'

class App extends Component {
	constructor() {
		super()
		this.state = {
			currentSong: "",
			playing: false,
			shuffle: false
		}
	}

	componentDidMount() {
		this.refs.player.load()
		let __currentSong = localStorage.getItem('currentSong') !== null ? JSON.parse(localStorage.getItem('currentSong')) : this.props.songs[0]
		
		this.refs.player.addEventListener('ended', () => {
			this.nextPrev(this.state.currentSong.id + 1)
		})
		this.setState({
			currentSong: __currentSong
		})
		window.addEventListener('beforeunload', (event) => {
			localStorage.setItem('currentSong', JSON.stringify(this.state.currentSong))
		}, false);
	}

	componentWillUnmount() {
		this.refs.player.removeEventListener('ended', () => {
			this.nextPrev(this.state.currentSong.id + 1)
		})
	}

	toggleShuffle = () => {
		let __shuffle = (!this.state.shuffle)
		this.setState ({
			shuffle: __shuffle
		})
	}

	nextPrev = (songId) => {
		if (this.state.shuffle) {
			songId = Math.floor(Math.random() * this.props.songs.length)
		} 
	
		if (songId === this.props.songs.length) {
			songId = this.props.songs[0].id
		} else if (songId < 0) {
			songId = this.props.songs.length - 1
		}

		if (this.state.playing) {
			this.playSong(songId)
		} else {
			let __currentSong = this.props.songs[songId]
			this.setState({
				currentSong: __currentSong,
				playing: false
			})
		}
	}

	playSong = (songId) => {
		if (this.refs.player.paused) {
			this.refs.player.play()
		}
		if (isNaN(songId)) {
			songId = this.props.songs[0].id
		}

		let __currentSong = this.props.songs[songId]

		this.setState({
			currentSong: __currentSong,
			playing: true
		})
	}

	handlePause = () => {
		this.refs.player.pause()

		this.setState({
			playing: false
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" render={() => <SongsList songs={this.props.songs} playSong={(songId) => this.playSong(songId)}
					currentSong={this.state.currentSong} />} />
				<Route path='/:songId' render={(props) => <SongDetails songs={this.props.songs} playSong={(songId) => this.playSong(songId)} {...props} />} />
				<Player songs={this.props.songs} shuffle = {this.state.shuffle} playing={this.state.playing} pause={() => this.handlePause()}
					currentSong={this.state.currentSong} toggleShuffle={() => this.toggleShuffle()} playSong={(songId) => this.playSong(songId)} nextPrev={(songId) => this.nextPrev(songId)} />
				<audio ref="player" autoPlay={this.state.playing} src={this.state.currentSong.source}></audio> 
					
			</div>

		)
	}
}

export default App
