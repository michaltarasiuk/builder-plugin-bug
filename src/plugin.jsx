// contents of plugin.jsx

/** @jsx jsx */
import {Builder} from '@builder.io/react';
import {jsx} from '@emotion/core';
import ReactQuill from 'react-quill';

function RichTextEditor(props) {
  return <ReactQuill value={props.value} onChange={props.onChange} />;
}

Builder.register('editor.mainTab', {
  name: 'MyText',
  component: RichTextEditor,
});
