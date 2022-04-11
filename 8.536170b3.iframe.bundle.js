(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/decode-uri-component/index.js":function(module,exports,__webpack_require__){"use strict";var singleMatcher=new RegExp("%[a-f0-9]{2}","gi"),multiMatcher=new RegExp("(%[a-f0-9]{2})+","gi");function decodeComponents(components,split){try{return decodeURIComponent(components.join(""))}catch(err){}if(1===components.length)return components;split=split||1;var left=components.slice(0,split),right=components.slice(split);return Array.prototype.concat.call([],decodeComponents(left),decodeComponents(right))}function decode(input){try{return decodeURIComponent(input)}catch(err){for(var tokens=input.match(singleMatcher),i=1;i<tokens.length;i++)tokens=(input=decodeComponents(tokens,i).join("")).match(singleMatcher);return input}}module.exports=function(encodedURI){if("string"!=typeof encodedURI)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof encodedURI+"`");try{return encodedURI=encodedURI.replace(/\+/g," "),decodeURIComponent(encodedURI)}catch(err){return function customDecodeURIComponent(input){for(var replaceMap={"%FE%FF":"��","%FF%FE":"��"},match=multiMatcher.exec(input);match;){try{replaceMap[match[0]]=decodeURIComponent(match[0])}catch(err){var result=decode(match[0]);result!==match[0]&&(replaceMap[match[0]]=result)}match=multiMatcher.exec(input)}replaceMap["%C2"]="�";for(var entries=Object.keys(replaceMap),i=0;i<entries.length;i++){var key=entries[i];input=input.replace(new RegExp(key,"g"),replaceMap[key])}return input}(encodedURI)}}},"./node_modules/query-string/index.js":function(module,exports,__webpack_require__){"use strict";var strictUriEncode=__webpack_require__("./node_modules/strict-uri-encode/index.js"),objectAssign=__webpack_require__("./node_modules/object-assign/index.js"),decodeComponent=__webpack_require__("./node_modules/decode-uri-component/index.js");function encode(value,opts){return opts.encode?opts.strict?strictUriEncode(value):encodeURIComponent(value):value}function keysSorter(input){return Array.isArray(input)?input.sort():"object"==typeof input?keysSorter(Object.keys(input)).sort((function(a,b){return Number(a)-Number(b)})).map((function(key){return input[key]})):input}function extract(str){var queryStart=str.indexOf("?");return-1===queryStart?"":str.slice(queryStart+1)}function parse(str,opts){var formatter=function parserForArrayFormat(opts){var result;switch(opts.arrayFormat){case"index":return function(key,value,accumulator){result=/\[(\d*)\]$/.exec(key),key=key.replace(/\[\d*\]$/,""),result?(void 0===accumulator[key]&&(accumulator[key]={}),accumulator[key][result[1]]=value):accumulator[key]=value};case"bracket":return function(key,value,accumulator){result=/(\[\])$/.exec(key),key=key.replace(/\[\]$/,""),result?void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=[value]:accumulator[key]=value};default:return function(key,value,accumulator){void 0!==accumulator[key]?accumulator[key]=[].concat(accumulator[key],value):accumulator[key]=value}}}(opts=objectAssign({arrayFormat:"none"},opts)),ret=Object.create(null);return"string"!=typeof str?ret:(str=str.trim().replace(/^[?#&]/,""))?(str.split("&").forEach((function(param){var parts=param.replace(/\+/g," ").split("="),key=parts.shift(),val=parts.length>0?parts.join("="):void 0;val=void 0===val?null:decodeComponent(val),formatter(decodeComponent(key),val,ret)})),Object.keys(ret).sort().reduce((function(result,key){var val=ret[key];return Boolean(val)&&"object"==typeof val&&!Array.isArray(val)?result[key]=keysSorter(val):result[key]=val,result}),Object.create(null))):ret}exports.extract=extract,exports.parse=parse,exports.stringify=function(obj,opts){!1===(opts=objectAssign({encode:!0,strict:!0,arrayFormat:"none"},opts)).sort&&(opts.sort=function(){});var formatter=function encoderForArrayFormat(opts){switch(opts.arrayFormat){case"index":return function(key,value,index){return null===value?[encode(key,opts),"[",index,"]"].join(""):[encode(key,opts),"[",encode(index,opts),"]=",encode(value,opts)].join("")};case"bracket":return function(key,value){return null===value?encode(key,opts):[encode(key,opts),"[]=",encode(value,opts)].join("")};default:return function(key,value){return null===value?encode(key,opts):[encode(key,opts),"=",encode(value,opts)].join("")}}}(opts);return obj?Object.keys(obj).sort(opts.sort).map((function(key){var val=obj[key];if(void 0===val)return"";if(null===val)return encode(key,opts);if(Array.isArray(val)){var result=[];return val.slice().forEach((function(val2){void 0!==val2&&result.push(formatter(key,val2,result.length))})),result.join("&")}return encode(key,opts)+"="+encode(val,opts)})).filter((function(x){return x.length>0})).join("&"):""},exports.parseUrl=function(str,opts){return{url:str.split("?")[0]||"",query:parse(extract(str),opts)}}},"./node_modules/strict-uri-encode/index.js":function(module,exports,__webpack_require__){"use strict";module.exports=function(str){return encodeURIComponent(str).replace(/[!'()*]/g,(function(c){return"%"+c.charCodeAt(0).toString(16).toUpperCase()}))}},"./src/blocks/instagram/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var extendStatics,react=__webpack_require__("./node_modules/react/index.js"),query_string=__webpack_require__("./node_modules/query-string/index.js"),__extends=(extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t},es_InstagramEmbed=function(_super){function InstagramEmbed(props){var _this=_super.call(this,props)||this;return _this.request=null,_this.cancel=function(){_this.request&&_this.request.cancel()},_this.handleFetchSuccess=function(response){_this.props.onSuccess&&_this.props.onSuccess(response),_this.setState({html:response.html},(function(){window.instgrm.Embeds.process(),_this.props.onAfterRender&&_this.props.onAfterRender()}))},_this.handleFetchFailure=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];clearTimeout(_this.timer),_this.props.onFailure&&_this.props.onFailure(args)},_this.createRequestPromise=function(url){var request={};return request.promise=new Promise((function(resolve,reject){var promise=fetch(url).then((function(response){return response.json()})).then((function(json){return resolve(json)})).catch((function(err){return reject(err)}));return request.cancel=function(){return reject(new Error("Cancelled"))},promise})),request},_this.state={html:null},_this}return __extends(InstagramEmbed,_super),InstagramEmbed.prototype.componentDidMount=function(){var _this=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){_this.fetchEmbed(_this.getQueryParams(_this.props))})))},InstagramEmbed.prototype.componentDidUpdate=function(prevProps){var _a=this.props,url=_a.url,hideCaption=_a.hideCaption,maxWidth=_a.maxWidth,containerTagName=_a.containerTagName;prevProps.url===url&&prevProps.hideCaption===hideCaption&&prevProps.maxWidth===maxWidth&&prevProps.containerTagName===containerTagName||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},InstagramEmbed.prototype.componentWillUnmount=function(){this.cancel()},InstagramEmbed.prototype.render=function(){var Tag=this.props.containerTagName;return react.createElement(Tag,__assign({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},InstagramEmbed.prototype.fetchEmbed=function(queryParams){this.request=this.createRequestPromise("https://api.instagram.com/oembed/?"+queryParams),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},InstagramEmbed.prototype.omitComponentProps=function(){var _a=this.props;_a.url,_a.hideCaption,_a.maxWidth,_a.containerTagName,_a.onLoading,_a.onSuccess,_a.onAfterRender,_a.onFailure,_a.protocol,_a.injectScript;return __rest(_a,["url","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},InstagramEmbed.prototype.injectScript=function(){var protocolToUse=0===window.location.protocol.indexOf("file")?this.props.protocol:"",s=document.createElement("script");s.async=s.defer=!0,s.src=protocolToUse+"//platform.instagram.com/en_US/embeds.js",s.id="react-instagram-embed-script";var body=document.body;body&&body.appendChild(s)},InstagramEmbed.prototype.checkAPI=function(){var _this=this;return new Promise((function(resolve){!function checkAPI(self){self.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(self.timer),resolve()):checkAPI(self)}),20)}(_this)}))},InstagramEmbed.prototype.getQueryParams=function(_a){var url=_a.url,hideCaption=_a.hideCaption,maxWidth=_a.maxWidth;return query_string.stringify({url:url,hidecaption:hideCaption,maxwidth:"number"==typeof maxWidth&&maxWidth>=320?maxWidth:void 0,omitscript:!0})},InstagramEmbed.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},InstagramEmbed}(react.PureComponent),es=es_InstagramEmbed,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default=function Instagram(_ref){var url=_ref.url,renderWrap=_ref.renderWrap,C=es;return renderWrap(Object(jsx_runtime.jsx)(C,{url:url,maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function onLoading(){},onSuccess:function onSuccess(){},onAfterRender:function onAfterRender(){},onFailure:function onFailure(){}}))};try{instagram.displayName="instagram",instagram.__docgenInfo={description:"",displayName:"instagram",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},renderVoid:{defaultValue:null,description:"",name:"renderVoid",required:!0,type:{name:"(error?: Error | undefined) => ReactElement<any, string | JSXElementConstructor<any>> | null"}},renderWrap:{defaultValue:null,description:"",name:"renderWrap",required:!0,type:{name:"ReactEmbedWrapRenderer"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},hostname:{defaultValue:null,description:"",name:"hostname",required:!0,type:{name:"string"}},pathname:{defaultValue:null,description:"",name:"pathname",required:!0,type:{name:"string"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},hash:{defaultValue:null,description:"",name:"hash",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/blocks/instagram/index.tsx#instagram"]={docgenInfo:instagram.__docgenInfo,name:"instagram",path:"src/blocks/instagram/index.tsx#instagram"})}catch(__react_docgen_typescript_loader_error){}}}]);