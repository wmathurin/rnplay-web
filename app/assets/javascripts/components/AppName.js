'use strict';

import React, { Component } from 'react';

export default class AppName extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      appName,
      creator,
      isDisabled,
      onUpdateName
    } = this.props;

    // Don't render input if in view mode
    if (isDisabled) {
      return (
        <div className="editor-header__name--text">
          {appName} <span className="editor-header__name--creator">by {creator}</span>
        </div>
      );
    }

    return (
      <input 
        type="text"
        disabled={isDisabled}
        placeholder="Give this app a title"
        defaultValue={appName}
        onChange={onUpdateName}
        className="editor-header__name--input" />
    );
  }
}