import React from 'react';
import ReactDOM from 'react-dom';
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount() {
        this.onTermSubmit('cats');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)