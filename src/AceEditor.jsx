import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";


function MyComponent() {
 const [code, setCode] = useState("");

 const handleCodeChange = (value) => {
  setCode(value);
 };

 

 return (
  <AceEditor
   mode="javascript"
   theme="monokai"
   name="my-editor"
   value={code}
   onChange={handleCodeChange}
   editorProps={{ $blockScrolling: true }}
   readOnly={false}
   focus={false}
   minLines ={3}
  />
 );
}

export default MyComponent;