import React, { Component } from 'react';

class Counter extends React.Component {
  /*
    state is a special property that contains any data that this
    Component needs
  */
  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? 'Zero' : value;
  }

  determineBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   let retVal;
  //   if (this.props.counter.tags.length === 0) {
  //     retVal = null;
  //   } else {
  //     retVal = <ul>{ this.props.counter.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
  //   }
  //   return retVal;
  // }

  render() {
    return (
      <React.Fragment>
        {/* any valid JS can go in b/w the curly braces */}
        <div>
          <span className={this.determineBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="m-2 btn btn-sm btn-danger">Delete</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
