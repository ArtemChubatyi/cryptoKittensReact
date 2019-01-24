import React, { Component } from 'react';
import ContainerForKittens from './ContainerForKittens/ContainerForKittens';
import SearchingPanel from './SearchingPanel/SearchingPanel'
import './App.scss'

class App extends Component {
  state = {
    isLoading: true,
    dataBase: null,
    counter: 0,
    search: null
  }

  updateData = (value) => {
    this.setState({ isLoading: true, search: value },
      function afterChangingState() {
        this.fetchData();
      })
  }

  fetchData = async () => {
    let offset = this.state.counter;
    let search = '';
    if (this.state.search != null) {
      search = this.state.search;
    }
    let url = 'https://api.cryptokitties.co/v2/kitties?offset=' + offset + '&limit=12' + search + '&parents=false&authenticated=false&include=sale&orderBy=current_price&orderDirection=asc&total=true'
    let response = await fetch(url)
    let result = await response.json()
    this.setState({
      dataBase: result.kitties,
      isLoading: false
    })
  }
  loadNextKittens = async () => {
    this.setState({
      isLoading: true,
      counter: (this.state.counter + 1)
    }, function afterChangingState() {
      this.fetchData();
    })

  }


  loadPrevKittens = () => {
    if (this.state.counter > 0) {
      this.setState({
        isLoading: true,
        counter: (this.state.counter - 1)
      }, function afterChangingState() {
        this.fetchData();
      })
    }
  }


  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="App">
        <SearchingPanel updateData={this.updateData} />
        {this.state.isLoading ? (<div className="loader"></div>) : (<ContainerForKittens loadNextKittens={this.loadNextKittens}
          loadPrevKittens={this.loadPrevKittens} kittens={this.state.dataBase} />)}
      </div>
    );
  }
}

export default App;
