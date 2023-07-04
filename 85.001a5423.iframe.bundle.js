"use strict";(self.webpackChunkreact_embed=self.webpackChunkreact_embed||[]).push([[85],{"./src/blocks/gist/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let idCnt=0;class Gist extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{iframeNode=null;id="react-embed-gist-"+idCnt++;componentDidMount(){this._updateIframeContent()}componentDidUpdate(prevProps,prevState){this._updateIframeContent()}_defineUrl(){const{id,file}=this.props;return`https://gist.github.com/${id}.js${file?`?file=${file}`:""}`}_updateIframeContent(){const iframe=this.iframeNode;let doc=iframe.document;iframe.contentDocument?doc=iframe.contentDocument:iframe.contentWindow&&(doc=iframe.contentWindow.document);const gistScript=`<script type="text/javascript" src="${this._defineUrl()}"><\/script>`,iframeHtml=`<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body style="margin:0" ${`onload="parent.document.getElementById('${this.id}').style.height=document.body.scrollHeight + 'px'"`}>${gistScript}</body></html>`;doc.open(),doc.writeln(iframeHtml),doc.close()}render(){const{renderWrap}=this.props;return renderWrap((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{id:this.id,ref:n=>{this.iframeNode=n},width:"100%",frameBorder:0,style:{margin:"0 0 -12px"}}))}}Gist.displayName="Gist";const __WEBPACK_DEFAULT_EXPORT__=Gist;try{Gist.displayName="Gist",Gist.__docgenInfo={description:"",displayName:"Gist",props:{file:{defaultValue:null,description:"",name:"file",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},renderVoid:{defaultValue:null,description:"",name:"renderVoid",required:!0,type:{name:"(error?: Error | undefined) => ReactElement<any, string | JSXElementConstructor<any>> | null"}},renderWrap:{defaultValue:null,description:"",name:"renderWrap",required:!0,type:{name:"ReactEmbedWrapRenderer"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},hostname:{defaultValue:null,description:"",name:"hostname",required:!0,type:{name:"string"}},pathname:{defaultValue:null,description:"",name:"pathname",required:!0,type:{name:"string"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},hash:{defaultValue:null,description:"",name:"hash",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/blocks/gist/index.tsx#Gist"]={docgenInfo:Gist.__docgenInfo,name:"Gist",path:"src/blocks/gist/index.tsx#Gist"})}catch(__react_docgen_typescript_loader_error){}}}]);