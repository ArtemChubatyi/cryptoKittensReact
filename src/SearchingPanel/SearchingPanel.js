import React, { Component } from 'react';
import './SearchingPanel.scss'



class SearchingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(this.state.value);
    this.setState({ value: event.target.value },
      function afterChangingState() {
        this.props.updateData('&search=gen:' + this.state.value);
      });
  }

  render() {
    return (
      <div className="searching-panel">
        <div className="searching-panel__top-side">
          <input className="searching-panel__input" placeholder="Search" autoComplete="off"
            autoCorrect="off" />
        </div>
        <button onClick={() => { this.props.updateData('&search=type:normal') }}>Normal</button>
        <button onClick={() => { this.props.updateData('&search=type:fancy') }}>Fancy</button>
        <button onClick={() => { this.props.updateData('&search=type:exclusive') }}>Exclusive</button>
        <button onClick={() => { this.props.updateData('&search=type:specialedition') }}>Special Edition</button>
        <button onClick={() => { this.props.updateData('&search=type:anomaly') }}>Anomaly</button>
        <label>Generation</label>
        <input type="number" min="0" max="27" placeholder="all" value={this.state.value} onChange={this.handleChange}></input>
      </div>
    );
  }


}

export default SearchingPanel;
