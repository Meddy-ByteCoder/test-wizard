import React, { useState,useEffect } from 'react';
import { render } from "react-dom";

import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
import 'brace/mode/javascript';
import "ace-builds/src-noconflict/theme-monokai";
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/theme-tomorrow";
import './CodeEditor.css'

export default function CodeEditor({ editorValue, readOnly, onChange,theme}) {

  return (
    <div className='child-ditor-container '>
      <AceEditor
        mode="javascript"
        name="my-editor"
        value={editorValue}
        onChange={onChange}
        editorProps={{ $blockScrolling: true }}
        readOnly={readOnly}
        fontSize={16}
        scrollPastEnd
      />
    </div>
  )
}
