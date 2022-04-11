/*! For license information please see 7.adeb0372.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./node_modules/load-script/index.js":function(module,exports){function stdOnEnd(script,cb){script.onload=function(){this.onerror=this.onload=null,cb(null,script)},script.onerror=function(){this.onerror=this.onload=null,cb(new Error("Failed to load "+this.src),script)}}function ieOnEnd(script,cb){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,cb(null,script))}}module.exports=function load(src,opts,cb){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof opts&&(cb=opts,opts={}),opts=opts||{},cb=cb||function(){},script.type=opts.type||"text/javascript",script.charset=opts.charset||"utf8",script.async=!("async"in opts)||!!opts.async,script.src=src,opts.attrs&&function setAttributes(script,attrs){for(var attr in attrs)script.setAttribute(attr,attrs[attr])}(script,opts.attrs),opts.text&&(script.text=""+opts.text),("onload"in script?stdOnEnd:ieOnEnd)(script,cb),script.onload||stdOnEnd(script,cb),head.appendChild(script)}},"./node_modules/react-youtube/dist/index.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-youtube/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/fast-deep-equal/index.js"),fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__),youtube_player__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/youtube-player/dist/index.js"),youtube_player__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_3__);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function filterResetOptions(opts){return _objectSpread(_objectSpread({},opts),{},{height:0,width:0,playerVars:_objectSpread(_objectSpread({},opts.playerVars),{},{autoplay:0,start:0,end:0})})}var YouTube=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(YouTube,_React$Component);var _super=_createSuper(YouTube);function YouTube(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,YouTube),_defineProperty(_assertThisInitialized(_this=_super.call(this,props)),"onPlayerReady",(function(event){return _this.props.onReady(event)})),_defineProperty(_assertThisInitialized(_this),"onPlayerError",(function(event){return _this.props.onError(event)})),_defineProperty(_assertThisInitialized(_this),"onPlayerStateChange",(function(event){switch(_this.props.onStateChange(event),event.data){case YouTube.PlayerState.ENDED:_this.props.onEnd(event);break;case YouTube.PlayerState.PLAYING:_this.props.onPlay(event);break;case YouTube.PlayerState.PAUSED:_this.props.onPause(event)}})),_defineProperty(_assertThisInitialized(_this),"onPlayerPlaybackRateChange",(function(event){return _this.props.onPlaybackRateChange(event)})),_defineProperty(_assertThisInitialized(_this),"onPlayerPlaybackQualityChange",(function(event){return _this.props.onPlaybackQualityChange(event)})),_defineProperty(_assertThisInitialized(_this),"createPlayer",(function(){if("undefined"!=typeof document){var playerOpts=_objectSpread(_objectSpread({},_this.props.opts),{},{videoId:_this.props.videoId});_this.internalPlayer=youtube_player__WEBPACK_IMPORTED_MODULE_3___default()(_this.container,playerOpts),_this.internalPlayer.on("ready",_this.onPlayerReady),_this.internalPlayer.on("error",_this.onPlayerError),_this.internalPlayer.on("stateChange",_this.onPlayerStateChange),_this.internalPlayer.on("playbackRateChange",_this.onPlayerPlaybackRateChange),_this.internalPlayer.on("playbackQualityChange",_this.onPlayerPlaybackQualityChange)}})),_defineProperty(_assertThisInitialized(_this),"resetPlayer",(function(){return _this.internalPlayer.destroy().then(_this.createPlayer)})),_defineProperty(_assertThisInitialized(_this),"updatePlayer",(function(){_this.internalPlayer.getIframe().then((function(iframe){_this.props.id?iframe.setAttribute("id",_this.props.id):iframe.removeAttribute("id"),_this.props.className?iframe.setAttribute("class",_this.props.className):iframe.removeAttribute("class"),_this.props.opts&&_this.props.opts.width?iframe.setAttribute("width",_this.props.opts.width):iframe.removeAttribute("width"),_this.props.opts&&_this.props.opts.height?iframe.setAttribute("height",_this.props.opts.height):iframe.removeAttribute("height"),"string"==typeof _this.props.title?iframe.setAttribute("title",_this.props.title):iframe.setAttribute("title","YouTube video player")}))})),_defineProperty(_assertThisInitialized(_this),"getInternalPlayer",(function(){return _this.internalPlayer})),_defineProperty(_assertThisInitialized(_this),"updateVideo",(function(){if(void 0!==_this.props.videoId&&null!==_this.props.videoId){var autoplay=!1,opts={videoId:_this.props.videoId};"playerVars"in _this.props.opts&&(autoplay=1===_this.props.opts.playerVars.autoplay,"start"in _this.props.opts.playerVars&&(opts.startSeconds=_this.props.opts.playerVars.start),"end"in _this.props.opts.playerVars&&(opts.endSeconds=_this.props.opts.playerVars.end)),autoplay?_this.internalPlayer.loadVideoById(opts):_this.internalPlayer.cueVideoById(opts)}else _this.internalPlayer.stopVideo()})),_defineProperty(_assertThisInitialized(_this),"refContainer",(function(container){_this.container=container})),_this.container=null,_this.internalPlayer=null,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(YouTube,[{key:"componentDidMount",value:function componentDidMount(){this.createPlayer()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){(function shouldUpdatePlayer(prevProps,props){return prevProps.id!==props.id||prevProps.className!==props.className||prevProps.opts.width!==props.opts.width||prevProps.opts.height!==props.opts.height||prevProps.title!==props.title})(prevProps,this.props)&&this.updatePlayer(),function shouldResetPlayer(prevProps,props){return prevProps.videoId!==props.videoId||!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(filterResetOptions(prevProps.opts),filterResetOptions(props.opts))}(prevProps,this.props)&&this.resetPlayer(),function shouldUpdateVideo(prevProps,props){if(prevProps.videoId!==props.videoId)return!0;var prevVars=prevProps.opts.playerVars||{},vars=props.opts.playerVars||{};return prevVars.start!==vars.start||prevVars.end!==vars.end}(prevProps,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.internalPlayer.destroy()}},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:this.props.containerClassName},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer,loading:this.props.loading}))}}]),YouTube}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);_defineProperty(YouTube,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),YouTube.propTypes={videoId:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,title:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,loading:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["lazy","eager","auto"]),opts:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),onReady:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onEnd:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onStateChange:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onPlaybackRateChange:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,onPlaybackQualityChange:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func},YouTube.defaultProps={videoId:null,id:null,className:null,loading:null,opts:{},containerClassName:"",onReady:function onReady(){},onError:function onError(){},onPlay:function onPlay(){},onPause:function onPause(){},onEnd:function onEnd(){},onStateChange:function onStateChange(){},onPlaybackRateChange:function onPlaybackRateChange(){},onPlaybackQualityChange:function onPlaybackQualityChange(){},title:null},__webpack_exports__.a=YouTube},"./node_modules/react-youtube/node_modules/prop-types/factoryWithThrowingShims.js":function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/react-youtube/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/react-youtube/node_modules/prop-types/index.js":function(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react-youtube/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/react-youtube/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(module,exports,__webpack_require__){"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/sister/src/sister.js":function(module,exports,__webpack_require__){"use strict";var Sister;Sister=function(){var sister={},events={};return sister.on=function(name,handler){var listener={name:name,handler:handler};return events[name]=events[name]||[],events[name].unshift(listener),listener},sister.off=function(listener){var index=events[listener.name].indexOf(listener);-1!==index&&events[listener.name].splice(index,1)},sister.trigger=function(name,data){var i,listeners=events[name];if(listeners)for(i=listeners.length;i--;)listeners[i].handler(data)},sister},module.exports=Sister},"./node_modules/youtube-player/dist/FunctionStateMap.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _PlayerStates2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/youtube-player/dist/constants/PlayerStates.js"));exports.default={pauseVideo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[_PlayerStates2.default.ENDED,_PlayerStates2.default.PLAYING,_PlayerStates2.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},module.exports=exports.default},"./node_modules/youtube-player/dist/YouTubePlayer.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _debug2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/node_modules/debug/src/browser.js")),_functionNames2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/dist/functionNames.js")),_eventNames2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/dist/eventNames.js")),_FunctionStateMap2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/dist/FunctionStateMap.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var debug=(0,_debug2.default)("youtube-player"),YouTubePlayer={proxyEvents:function(emitter){var events={},_loop=function _loop(eventName){var onEventName="on"+eventName.slice(0,1).toUpperCase()+eventName.slice(1);events[onEventName]=function(event){debug('event "%s"',onEventName,event),emitter.trigger(eventName,event)}},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=_eventNames2.default[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){_loop(_step.value)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return events},promisifyPlayer:function(playerAPIReady){var strictState=arguments.length>1&&void 0!==arguments[1]&&arguments[1],functions={},_loop2=function _loop2(functionName){strictState&&_FunctionStateMap2.default[functionName]?functions[functionName]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return playerAPIReady.then((function(player){var stateInfo=_FunctionStateMap2.default[functionName],playerState=player.getPlayerState(),value=player[functionName].apply(player,args);return stateInfo.stateChangeRequired||Array.isArray(stateInfo.acceptableStates)&&-1===stateInfo.acceptableStates.indexOf(playerState)?new Promise((function(resolve){player.addEventListener("onStateChange",(function onPlayerStateChange(){var playerStateAfterChange=player.getPlayerState(),timeout=void 0;"number"==typeof stateInfo.timeout&&(timeout=setTimeout((function(){player.removeEventListener("onStateChange",onPlayerStateChange),resolve()}),stateInfo.timeout)),Array.isArray(stateInfo.acceptableStates)&&-1!==stateInfo.acceptableStates.indexOf(playerStateAfterChange)&&(player.removeEventListener("onStateChange",onPlayerStateChange),clearTimeout(timeout),resolve())}))})).then((function(){return value})):value}))}:functions[functionName]=function(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return playerAPIReady.then((function(player){return player[functionName].apply(player,args)}))}},_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_iterator2=_functionNames2.default[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var functionName=_step2.value;_loop2(functionName)}}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2.return&&_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}return functions}};exports.default=YouTubePlayer,module.exports=exports.default},"./node_modules/youtube-player/dist/constants/PlayerStates.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},module.exports=exports.default},"./node_modules/youtube-player/dist/eventNames.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],module.exports=exports.default},"./node_modules/youtube-player/dist/functionNames.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],module.exports=exports.default},"./node_modules/youtube-player/dist/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_sister2=_interopRequireDefault(__webpack_require__("./node_modules/sister/src/sister.js")),_loadYouTubeIframeApi2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/dist/loadYouTubeIframeApi.js")),_YouTubePlayer2=_interopRequireDefault(__webpack_require__("./node_modules/youtube-player/dist/YouTubePlayer.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var youtubeIframeAPI=void 0;exports.default=function(maybeElementId){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},strictState=arguments.length>2&&void 0!==arguments[2]&&arguments[2],emitter=(0,_sister2.default)();if(youtubeIframeAPI||(youtubeIframeAPI=(0,_loadYouTubeIframeApi2.default)(emitter)),options.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof maybeElementId&&!document.getElementById(maybeElementId))throw new Error('Element "'+maybeElementId+'" does not exist.');options.events=_YouTubePlayer2.default.proxyEvents(emitter);var playerAPIReady=new Promise((function(resolve){"object"===(void 0===maybeElementId?"undefined":_typeof(maybeElementId))&&maybeElementId.playVideo instanceof Function?resolve(maybeElementId):youtubeIframeAPI.then((function(YT){var player=new YT.Player(maybeElementId,options);return emitter.on("ready",(function(){resolve(player)})),null}))})),playerApi=_YouTubePlayer2.default.promisifyPlayer(playerAPIReady,strictState);return playerApi.on=emitter.on,playerApi.off=emitter.off,playerApi},module.exports=exports.default},"./node_modules/youtube-player/dist/loadYouTubeIframeApi.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _loadScript2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/load-script/index.js"));exports.default=function(emitter){return new Promise((function(resolve){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)resolve(window.YT);else{var protocol="http:"===window.location.protocol?"http:":"https:";(0,_loadScript2.default)(protocol+"//www.youtube.com/iframe_api",(function(error){error&&emitter.trigger("error",error)}));var previous=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){previous&&previous(),resolve(window.YT)}}}))},module.exports=exports.default},"./node_modules/youtube-player/node_modules/debug/src/browser.js":function(module,exports,__webpack_require__){(function(process){function load(){var r;try{r=exports.storage.debug}catch(e){}return!r&&void 0!==process&&"env"in process&&(r=process.env.DEBUG),r}(exports=module.exports=__webpack_require__("./node_modules/youtube-player/node_modules/debug/src/debug.js")).log=function log(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},exports.formatArgs=function formatArgs(args){var useColors=this.useColors;if(args[0]=(useColors?"%c":"")+this.namespace+(useColors?" %c":" ")+args[0]+(useColors?"%c ":" ")+"+"+exports.humanize(this.diff),!useColors)return;var c="color: "+this.color;args.splice(1,0,c,"color: inherit");var index=0,lastC=0;args[0].replace(/%[a-zA-Z%]/g,(function(match){"%%"!==match&&(index++,"%c"===match&&(lastC=index))})),args.splice(lastC,0,c)},exports.save=function save(namespaces){try{null==namespaces?exports.storage.removeItem("debug"):exports.storage.debug=namespaces}catch(e){}},exports.load=load,exports.useColors=function useColors(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},exports.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function localstorage(){try{return window.localStorage}catch(e){}}(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(v){try{return JSON.stringify(v)}catch(err){return"[UnexpectedJSONParseError]: "+err.message}},exports.enable(load())}).call(this,__webpack_require__("./node_modules/process/browser.js"))},"./node_modules/youtube-player/node_modules/debug/src/debug.js":function(module,exports,__webpack_require__){var prevTime;function createDebug(namespace){function debug(){if(debug.enabled){var self=debug,curr=+new Date,ms=curr-(prevTime||curr);self.diff=ms,self.prev=prevTime,self.curr=curr,prevTime=curr;for(var args=new Array(arguments.length),i=0;i<args.length;i++)args[i]=arguments[i];args[0]=exports.coerce(args[0]),"string"!=typeof args[0]&&args.unshift("%O");var index=0;args[0]=args[0].replace(/%([a-zA-Z%])/g,(function(match,format){if("%%"===match)return match;index++;var formatter=exports.formatters[format];if("function"==typeof formatter){var val=args[index];match=formatter.call(self,val),args.splice(index,1),index--}return match})),exports.formatArgs.call(self,args);var logFn=debug.log||exports.log||console.log.bind(console);logFn.apply(self,args)}}return debug.namespace=namespace,debug.enabled=exports.enabled(namespace),debug.useColors=exports.useColors(),debug.color=function selectColor(namespace){var i,hash=0;for(i in namespace)hash=(hash<<5)-hash+namespace.charCodeAt(i),hash|=0;return exports.colors[Math.abs(hash)%exports.colors.length]}(namespace),"function"==typeof exports.init&&exports.init(debug),debug}(exports=module.exports=createDebug.debug=createDebug.default=createDebug).coerce=function coerce(val){return val instanceof Error?val.stack||val.message:val},exports.disable=function disable(){exports.enable("")},exports.enable=function enable(namespaces){exports.save(namespaces),exports.names=[],exports.skips=[];for(var split=("string"==typeof namespaces?namespaces:"").split(/[\s,]+/),len=split.length,i=0;i<len;i++)split[i]&&("-"===(namespaces=split[i].replace(/\*/g,".*?"))[0]?exports.skips.push(new RegExp("^"+namespaces.substr(1)+"$")):exports.names.push(new RegExp("^"+namespaces+"$")))},exports.enabled=function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++)if(exports.skips[i].test(name))return!1;for(i=0,len=exports.names.length;i<len;i++)if(exports.names[i].test(name))return!0;return!1},exports.humanize=__webpack_require__("./node_modules/youtube-player/node_modules/ms/index.js"),exports.names=[],exports.skips=[],exports.formatters={}},"./node_modules/youtube-player/node_modules/ms/index.js":function(module,exports){var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;function plural(ms,n,name){if(!(ms<n))return ms<1.5*n?Math.floor(ms/n)+" "+name:Math.ceil(ms/n)+" "+name+"s"}module.exports=function(val,options){options=options||{};var type=typeof val;if("string"===type&&val.length>0)return function parse(str){if((str=String(str)).length>100)return;var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);switch((match[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*y;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*m;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(val);if("number"===type&&!1===isNaN(val))return options.long?function fmtLong(ms){return plural(ms,d,"day")||plural(ms,h,"hour")||plural(ms,m,"minute")||plural(ms,s,"second")||ms+" ms"}(val):function fmtShort(ms){if(ms>=d)return Math.round(ms/d)+"d";if(ms>=h)return Math.round(ms/h)+"h";if(ms>=m)return Math.round(ms/m)+"m";if(ms>=s)return Math.round(ms/s)+"s";return ms+"ms"}(val);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(val))}}}]);
//# sourceMappingURL=7.adeb0372.iframe.bundle.js.map