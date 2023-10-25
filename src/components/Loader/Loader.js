import React, {Component} from 'react';
import '../styles_components/style_loader.scss';
import logo from "../Images/logo-white-no-background.png";

class LoadingScreen extends Component {
    state = {
        loaded: false
    };

    componentDidMount () {
        setTimeout(() => {
            this.setState({loaded: true});
        }, 1000);
    }

    render () {
        const {loaded} = this.state;

        return (
            <div className={`loading-screen ${loaded ? 'loaded' : ''}`}>
                <img src={logo} alt="Logo" className="loader"/>
            </div>
        );
    }
}

export default LoadingScreen;
