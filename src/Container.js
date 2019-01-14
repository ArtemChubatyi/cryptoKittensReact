import React, { Component } from 'react';
import KittensList from './KittensList';

class Container extends Component {

    state = {
        dataBase: [],
        counter: 1
    }

    fetchData = () => {
        fetch("https://ma-cats-api.herokuapp.com/api/cats?page=" + this.state.counter + "&per_page=12")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        dataBase: this.state.dataBase.concat[result.cats],
                        isLoading: true
                    });

                }
            );
    }
    loadNextKittens = () => {
        this.setState({ 
            isLoading: true,
            counter: this.state.counter++
        });
        
        this.fetchData();
    }


    loadPrewKittens = () => {
        if (this.state.counter > 1) {
           this.setState({ 
                isLoading: true,
                counter: this.state.counter--
           });

           this.fetchData();
        }
    }


    componentDidMount() {
        loadNextKittens();
    }

    render() {
        const {dataBase} = this.state;
        
        return (
            <>
                <div className="container">
                    {this.dataBase.length > 0 && <Kittens>List kittens={} />}
                    {this.state.isLoading && <div>Loading...</div>}
                </div>
                <div className="list-nav">
                    <button className="loadMore" onClick={this.loadPrewKittens}>Previous Page</button>
                    <button className="loadMore" onClick={this.loadNextKittens}>Next Page</button>
                </div>

            </>
        );
    }


}

export default Container;
