
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
const unityContext = new UnityContext({
  loaderUrl: "./select/Build/select.loader.js",
  dataUrl: "./select/build/select.data",
  frameworkUrl: "./select/build/select.framework.js",
  codeUrl: "./select/build/select.wasm",
});
function App() {
  return (
    <div className="App">
     <h1 
 style={{
   marginLeft:"500px",

 }}> Hello ines welcome to virtuel odc </h1>
<Unity unityContext={unityContext} 


 style={{
  marginLeft:"400px",
   width:"800px",
  height:'600px',
  border:"2px solid black"

 }}
 />
    </div>
  );
}

export default App;

