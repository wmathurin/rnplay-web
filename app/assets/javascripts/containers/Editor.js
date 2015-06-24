'use strict';

import React from 'react';
import { connect } from 'redux/react';

import { editor as editorActions } from '../actions';
import EditorApp from '../components/EditorApp';

@connect((state) => ({
  app: state.editor.app,
  name: state.editor.newName || state.editor.app.name,
  buildId: state.editor.newBuildId || state.editor.app.buildId,
  buildUpdated: !!state.editor.newBuildId,
  currentFile: state.editor.currentFile,
  fileTree: state.editor.fileTree,
  fileBodies: state.editor.fileBodies,
  showHeader: state.editor.showHeader,
  appSaveInProgress: state.editor.appSaveInProgress,
  appSaveError: state.editor.appSaveError
}))
export default class Editor {

  render() {
    return <EditorApp {...this.props} {...editorActions} />;
  }

}