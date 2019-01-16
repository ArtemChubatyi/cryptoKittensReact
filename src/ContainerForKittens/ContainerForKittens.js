import React, { Component } from 'react';
import KittensList from '../KittensList/KittensList';
import './ContainerForKittens.scss';



class Container extends Component {

    state = {
        isLoading: true,
        dataBase: null,
        counter: 1
    }


    fetchData = () => {
        fetch("https://ma-cats-api.herokuapp.com/api/cats?page=" + this.state.counter + "&per_page=12")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        dataBase: result.cats
                    });

                }
            )
            .then(() => {
                setTimeout(() => {
                    this.setState({
                        isLoading: false
                    });
                }, 1000);
            })
    }
    loadNextKittens = () => {
        this.setState({ isLoading: true }, function afterChangeState() {
            this.setState({ counter: (this.state.counter + 1) },
                function afterCounterChange() {
                    this.fetchData();
                });
        })

    }


    loadPrewKittens = () => {
        if (this.state.counter > 1) {
            this.setState({ counter: (this.state.counter - 1) },
                function afterCounterChange() {
                    this.fetchData();
                });
        }
    }


    async componentDidMount() {
        let res = await fetch("https://ma-cats-api.herokuapp.com/api/cats?page=" + this.state.counter + "&per_page=12");
        let data = await res.json();
        this.setState({
            dataBase: data.cats,
            isLoading: false
        })
    }



    render() {
        return (
            <>
                <div className="container">
                    {this.state.isLoading ? (<div>Loading...</div>) : (<KittensList kittens={this.state.dataBase} />)}
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
