import React, { Component } from 'react';
import KittensList from './KittensList';

class Container extends Component {

    state = {
        isLoaded: false,
        dataBase: null,
        counter: 1
    }
    fetchData = () => {
        fetch("https://ma-cats-api.herokuapp.com/api/cats?page=1&per_page=" + (this.state.counter * 12))
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        dataBase: result.cats
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchData();
    }
    componentWillUpdate() {
        this.fetchData();
    }
    render() {
        return (
            <>
                <div className="container">
                    {!this.state.isLoaded || !this.state.dataBase ? (<div>Loading...</div>) : (<KittensList kittens={this.state.dataBase} />)}
                </div>
                <button className="loadMore" onClick={this.loadMoreKittens}>Load More Kittens</button>
            </>
        );
    }

    loadMoreKittens = () => this.setState({ counter: (this.state.counter + 1) })
}

export default Container;
