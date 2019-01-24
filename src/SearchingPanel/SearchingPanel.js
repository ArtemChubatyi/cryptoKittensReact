import React, { Component } from 'react';
import './SearchingPanel.scss'



class SearchingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchString: '&search=',
      type: '',
      cooldown: '',
      gen: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value },
      function afterChangingState() {
        this.changeFilter('gen', this.state.value);
      });
  }

  changeFilter(key, value) {
    this.setState(() => {
      if (key === 'type') {
        return { type: '+' + key + ':' + value }
      } else if (key === 'cooldown') {
        return { cooldown: '+' + key + ':' + value }
      } else if (key === 'gen') {
        return { gen: '+' + key + ':' + value }
      }
    }, function afterChangingState() {
      this.props.updateData(this.state.searchString + this.state.type + this.state.cooldown + this.state.gen)
    })
  }
  render() {

    return (
      <div className="searching-panel">
        <div className="searching-panel__top-side">
          <input className="searching-panel__input" placeholder="Search" autoComplete="off"
            autoCorrect="off" />
        </div>
        <div className="searching-panel__toolbar">
          <div className="searching-panel__toolbar-groups">
            <div className="searching-panel__groups-title">Kitty type</div>
            <div className="searching-panel__groups-content">
              <button className="searching-panel__button" onClick={() => { this.changeFilter('type', 'normal') }}>Normal</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('type', 'fancy') }}>Fancy</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('type', 'exclusive') }}>Exclusive</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('type', 'specialeditions') }}>Special Edition</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('type', 'anomaly') }}>Anomaly</button>
            </div>
          </div>
          <div className="searching-panel__toolbar-groups">
            <div className="searching-panel__groups-title">Generation</div>
            <div className="searching-panel__groups-content">
              <input className="searching-panel__input-gen" type="number" min="0" max="27" placeholder="all" value={this.state.value} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className="searching-panel__toolbar-groups">
            <div className="searching-panel__groups-title">Cooldown</div>
            <div className="searching-panel__groups-content">
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'fast') }}>Fast</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'swift') }}>Swift</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'snappy') }}>Snappy</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'brisk') }}>Brisk</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'plodding') }}>Plodding</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'slow') }}>Slow</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'sluggish') }}>Sluggish</button>
              <button className="searching-panel__button" onClick={() => { this.changeFilter('cooldown', 'catatonic') }}>Catatonic</button>
            </div>
          </div>
        </div>


      </div>
    );
  }


}

export default SearchingPanel;
