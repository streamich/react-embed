"use strict";(self.webpackChunkreact_embed=self.webpackChunkreact_embed||[]).push([[419],{"./src/blocks/imgur/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const blockStyle={width:350,overflow:"hidden",borderRadius:"6px",display:"block"},iframeStyle={width:"100%",display:"block",overflow:"hidden",borderRadius:"8px"};class Imgur extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state={height:0};mounted=!1;componentDidMount(){this.mounted=!0,window.addEventListener("message",this.onMessage)}componentWillUnmount(){this.mounted=!1,window.removeEventListener("message",this.onMessage)}onMessage=({data})=>{if(this.mounted&&"string"==typeof data)try{const json=JSON.parse(data);if("resize_imgur"!==json.message)return;if("string"!=typeof json.href)return;if(json.href!==this.src())return;if("number"!=typeof json.height)return;this.setState({height:json.height})}catch{}};src(){return`https://imgur.com/a/${this.props.id}/embed?pub=true&w=340`}render(){const{state}=this,height=state.height||0;return this.props.renderWrap((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{...blockStyle,border:height?"1px solid #E5E9F2":""},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{scrolling:"no",frameBorder:"0",src:this.src(),style:{...iframeStyle,height}})}))}}Imgur.displayName="Imgur";const __WEBPACK_DEFAULT_EXPORT__=Imgur;try{Imgur.displayName="Imgur",Imgur.__docgenInfo={description:"",displayName:"Imgur",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},renderVoid:{defaultValue:null,description:"",name:"renderVoid",required:!0,type:{name:"(error?: Error | undefined) => ReactElement<any, string | JSXElementConstructor<any>> | null"}},renderWrap:{defaultValue:null,description:"",name:"renderWrap",required:!0,type:{name:"ReactEmbedWrapRenderer"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},hostname:{defaultValue:null,description:"",name:"hostname",required:!0,type:{name:"string"}},pathname:{defaultValue:null,description:"",name:"pathname",required:!0,type:{name:"string"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},hash:{defaultValue:null,description:"",name:"hash",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/blocks/imgur/index.tsx#Imgur"]={docgenInfo:Imgur.__docgenInfo,name:"Imgur",path:"src/blocks/imgur/index.tsx#Imgur"})}catch(__react_docgen_typescript_loader_error){}}}]);