import React, { Component } from 'react';
import KittensList from '../KittensList/KittensList';
import './ContainerForKittens.scss';



class ContainerForKittens extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <KittensList kittens={this.props.kittens} />
                </div>
                <div className="list-nav">
                    <button className="loadMore" onClick={this.props.loadPrevKittens}>Previous Page</button>
                    <button className="loadMore" onClick={this.props.loadNextKittens}>Next Page</button>
                </div>

            </>
        );
    }


}

export default ContainerForKittens;
