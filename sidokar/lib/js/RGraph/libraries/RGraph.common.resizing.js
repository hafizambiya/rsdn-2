
RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};(function(win,doc,undefined)
{var ua=navigator.userAgent,active=null;RGraph.allowResizing=RGraph.AllowResizing=function(obj)
{obj.canvas.resizing=obj.canvas.resizing||{};obj.canvas.resizing.placeHolders=obj.canvas.resizing.placeHolders||[];if(!obj.canvas.resizing.originalw){obj.canvas.resizing.originalw=obj.canvas.width;}
if(!obj.canvas.resizing.originalh){obj.canvas.resizing.originalh=obj.canvas.height;}
var resizeHandleSize=15;if(!obj.canvas.resizing.__rgraph_original_width__||!obj.canvas.resizing.__rgraph_original_height__||!obj.canvas.resizing.__adjustX||!obj.canvas.resizing.__adjustY){obj.canvas.resizing.__rgraph_original_width__=obj.canvas.width;obj.canvas.resizing.__rgraph_original_height__=obj.canvas.height;obj.canvas.resizing.adjustX=(typeof obj.get('resizableHandleAdjust')=='object'&&typeof obj.get('resizableHandleAdjust')[0]=='number'?obj.get('resizableHandleAdjust')[0]:0);obj.canvas.resizing.adjustY=(typeof obj.get('resizableHandleAdjust')=='object'&&typeof obj.get('resizableHandleAdjust')[1]=='number'?obj.get('resizableHandleAdjust')[1]:0);obj.canvas.resizing.bgcolor=obj.get('resizableHandleBackground')||'rgba(0,0,0,0)';}
obj.path('b m % % r % % % % f %',obj.canvas.width-resizeHandleSize-resizeHandleSize+obj.canvas.resizing.adjustX,obj.canvas.height-resizeHandleSize,obj.canvas.width-resizeHandleSize-resizeHandleSize+obj.canvas.resizing.adjustX,obj.canvas.height-resizeHandleSize+obj.canvas.resizing.adjustY,2*resizeHandleSize,resizeHandleSize,obj.canvas.resizing.bgcolor);obj.path('b lw 1 m % % l % % m % % l % % s gray f transparent',Math.round(obj.canvas.width-(resizeHandleSize/2)+obj.canvas.resizing.adjustX),obj.canvas.height-resizeHandleSize+obj.canvas.resizing.adjustY,Math.round(obj.canvas.width-(resizeHandleSize/2)+obj.canvas.resizing.adjustX),obj.canvas.height+obj.canvas.resizing.adjustY,obj.canvas.width+obj.canvas.resizing.adjustX,Math.round(obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY),obj.canvas.width-resizeHandleSize+obj.canvas.resizing.adjustX,Math.round(obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY));obj.path('b m % % l % % l % % c f gray',obj.canvas.width-(resizeHandleSize/2)+obj.canvas.resizing.adjustX,obj.canvas.height-resizeHandleSize+obj.canvas.resizing.adjustY,obj.canvas.width-(resizeHandleSize/2)+3+obj.canvas.resizing.adjustX,obj.canvas.height-resizeHandleSize+3+obj.canvas.resizing.adjustY,obj.canvas.width-(resizeHandleSize/2)-3+obj.canvas.resizing.adjustX,obj.canvas.height-resizeHandleSize+3+obj.canvas.resizing.adjustY,);obj.path('b m % % l % % l % % c f gray',obj.canvas.width-(resizeHandleSize/2)+obj.canvas.resizing.adjustX,obj.canvas.height+obj.canvas.resizing.adjustY,obj.canvas.width-(resizeHandleSize/2)+3+obj.canvas.resizing.adjustX,obj.canvas.height-3+obj.canvas.resizing.adjustY,obj.canvas.width-(resizeHandleSize/2)-3+obj.canvas.resizing.adjustX,obj.canvas.height-3+obj.canvas.resizing.adjustY,);obj.path('b m % % l % % l % % c f gray',obj.canvas.width-resizeHandleSize+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY,obj.canvas.width-resizeHandleSize+3+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+3+obj.canvas.resizing.adjustY,obj.canvas.width-resizeHandleSize+3+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)-3+obj.canvas.resizing.adjustY,);obj.path('b m % % l % % l % % c f gray',obj.canvas.width+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY,obj.canvas.width-3+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+3+obj.canvas.resizing.adjustY,obj.canvas.width-3+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)-3+obj.canvas.resizing.adjustY);obj.path('b m % % r % % % % r % % % % s gray f white',obj.canvas.width+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY,obj.canvas.width-(resizeHandleSize/2)-2+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)-2+obj.canvas.resizing.adjustY,4,4,obj.canvas.width-(resizeHandleSize/2)-2+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)-2+obj.canvas.resizing.adjustY,4,4,);obj.path('b m % % l % % l % % l % % l % % s gray f gray',Math.round(obj.canvas.width-resizeHandleSize-3+obj.canvas.resizing.adjustX),obj.canvas.height-resizeHandleSize/2+obj.canvas.resizing.adjustY,Math.round(obj.canvas.width-resizeHandleSize-resizeHandleSize+obj.canvas.resizing.adjustX),obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY,obj.canvas.width-resizeHandleSize-resizeHandleSize+2+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)-2+obj.canvas.resizing.adjustY,obj.canvas.width-resizeHandleSize-resizeHandleSize+2+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+2+obj.canvas.resizing.adjustY,obj.canvas.width-resizeHandleSize-resizeHandleSize+obj.canvas.resizing.adjustX,obj.canvas.height-(resizeHandleSize/2)+obj.canvas.resizing.adjustY,);obj.path('b m % % l % % s f',Math.round(obj.canvas.width-resizeHandleSize-resizeHandleSize-1+obj.canvas.resizing.adjustX),obj.canvas.height-(resizeHandleSize/2)-3+obj.canvas.resizing.adjustY,Math.round(obj.canvas.width-resizeHandleSize-resizeHandleSize-1+obj.canvas.resizing.adjustX),obj.canvas.height-(resizeHandleSize/2)+3+obj.canvas.resizing.adjustY);if(obj.get('resizable')&&!obj.canvas.rgraphResizewrapper){obj.canvas.rgraphResizewrapper=$('<div id="rgraph_resize_container_'+obj.canvas.id+'"></div>').css({'float':obj.canvas.style.cssFloat,position:'relative'}).get(0);$(obj.canvas).wrap(obj.canvas.rgraphResizewrapper);obj.canvas.style.cssFloat='none';obj.canvas.style.top=0;obj.canvas.style.left=0;var window_onmousemove=function(e)
{var canvas=active,obj=canvas?canvas.__object__:null;if(obj.canvas){if(obj.canvas.resizing.mousedown){var newWidth=obj.canvas.width+(e.pageX-obj.canvas.resizing.originalx),newHeight=obj.canvas.height+(e.pageY-obj.canvas.resizing.originaly),minWidth=obj.get('resizableMinwidth'),minHeight=obj.get('resizableMinheight');if(newWidth>(obj.canvas.resizing.originalw/2)&&(typeof obj.get('resizableMaxwidth')==='number'?newWidth<obj.get('resizableMaxwidth'):true)&&(typeof minWidth==='number'?newWidth>minWidth:true)){obj.canvas.resizing.div.style.width=newWidth+'px';}
if(newHeight>(obj.canvas.resizing.originalh/2)&&(typeof obj.get('resizableMaxheight')==='number'?newHeight<obj.get('resizableMaxheight'):true)&&(typeof minHeight==='number'?newHeight>minHeight:true)){obj.canvas.resizing.div.style.height=newHeight+'px';}
RGraph.fireCustomEvent(obj.canvas.__object__,'onresize');}}}
if(typeof obj.canvas.rgraph_resize_window_mousemove_listener_installed!='boolean'){window.addEventListener('mousemove',window_onmousemove,false);obj.canvas.rgraph_resize_window_mousemove_listener_installed=true;}
var MouseupFunc=function(e)
{if(!obj.canvas.resizing||!obj.canvas.resizing.div||!obj.canvas.resizing.mousedown){return;}
if(obj.canvas.resizing.div){var div=obj.canvas.resizing.div;var coords=RGraph.getCanvasXY(obj.canvas);var parentNode=obj.canvas.parentNode;if(obj.canvas.style.position!='absolute'){var placeHolderDIV=document.createElement('DIV');placeHolderDIV.style.width=obj.canvas.resizing.originalw+'px';placeHolderDIV.style.height=obj.canvas.resizing.originalh+'px';placeHolderDIV.style.display='inline-block';placeHolderDIV.style.position=obj.canvas.style.position;placeHolderDIV.style.left=obj.canvas.style.left;placeHolderDIV.style.top=obj.canvas.style.top;placeHolderDIV.style.cssFloat=obj.canvas.style.cssFloat;parentNode.insertBefore(placeHolderDIV,obj.canvas);}
obj.canvas.style.backgroundColor='white';obj.canvas.style.position='absolute';obj.canvas.style.border='1px dashed gray';obj.canvas.style.boxShadow='2px 2px 5px #ddd';obj.canvas.style.left=0;obj.canvas.style.top=0;obj.canvas.width=parseInt(div.style.width);obj.canvas.height=parseInt(div.style.height);obj.canvas.getContext('2d').translate(0.5,0.5);var objects=RGraph.ObjectRegistry.getObjectsByCanvasID(obj.canvas.id);for(var i=0,len=objects.length;i<len;i+=1){RGraph.resetColorsToOriginalValues(objects[i]);if(typeof objects[i].reset==='function'){objects[i].reset();}}
RGraph.cache=[];RGraph.fireCustomEvent(obj.canvas.__object__,'onresizebeforedraw');RGraph.redrawCanvas(obj.canvas);obj.canvas.resizing.mousedown=false;div.style.display='none';document.body.removeChild(div);}
if(RGraph.Registry.get('zoomedDiv')||RGraph.Registry.get('zoomedImg')){RGraph.Registry.set('zoomedDiv',null);RGraph.Registry.set('zoomedImg',null);}
RGraph.fireCustomEvent(obj.canvas.__object__,'onresizeend');};var window_onmouseup=MouseupFunc;if(typeof obj.canvas.rgraph_resize_window_mouseup_listener_installed!='boolean'){window.addEventListener('mouseup',window_onmouseup,false);obj.canvas.rgraph_resize_window_mouseup_listener_installed=true;}
var canvas_onmousemove=function(e)
{var coords=RGraph.getMouseXY(e);var obj=e.target.__object__;var cursor=obj.canvas.style.cursor;if(!obj.canvas.resizing.original_cursor){obj.canvas.resizing.original_cursor=cursor;}
if((coords[0]>(obj.canvas.width-resizeHandleSize)&&coords[0]<obj.canvas.width&&coords[1]>(obj.canvas.height-resizeHandleSize)&&coords[1]<obj.canvas.height)){obj.canvas.style.cursor='move';}else if(coords[0]>(obj.canvas.width-resizeHandleSize-resizeHandleSize)&&coords[0]<obj.canvas.width-resizeHandleSize&&coords[1]>(obj.canvas.height-resizeHandleSize)&&coords[1]<obj.canvas.height){obj.canvas.style.cursor='pointer';}else{if(obj.canvas.resizing.original_cursor){obj.canvas.style.cursor=obj.canvas.resizing.original_cursor;obj.canvas.resizing.original_cursor=null;}else{obj.canvas.style.cursor='default';}}};if(typeof obj.canvas.rgraph_resize_mousemove_listener_installed!='boolean'){obj.canvas.addEventListener('mousemove',canvas_onmousemove,false);obj.canvas.rgraph_resize_mousemove_listener_installed=true;}
var canvas_onmouseout=function(e)
{e.target.style.cursor='default';e.target.title='';};if(typeof obj.canvas.rgraph_resize_mouseout_listener_installed!='boolean'){obj.canvas.addEventListener('mouseout',canvas_onmouseout,false);obj.canvas.rgraph_resize_mouseout_listener_installed=true;}
var canvas_onmousedown=function(e)
{var coords=RGraph.getMouseXY(e);var canvasXY=RGraph.getCanvasXY(e.target);var canvas=e.target;active=canvas;if(coords[0]>(obj.canvas.width-resizeHandleSize)&&coords[0]<obj.canvas.width&&coords[1]>(obj.canvas.height-resizeHandleSize)&&coords[1]<obj.canvas.height){RGraph.fireCustomEvent(obj,'onresizebegin');if(obj.canvas.resizing.original_css_border==null){obj.canvas.resizing.original_css_border=obj.canvas.style.border;}
if(obj.canvas.resizing.original_css_shadow==null){obj.canvas.resizing.original_css_shadow=obj.canvas.style.boxShadow;}
obj.canvas.resizing.mousedown=true;var div=document.createElement('DIV');div.style.position='absolute';div.style.left=canvasXY[0]+'px';div.style.top=canvasXY[1]+'px';div.style.width=obj.canvas.width+'px';div.style.height=obj.canvas.height+'px';div.style.border='1px dotted black';div.style.backgroundColor='gray';div.style.opacity=0.5;div.__canvas__=e.target;document.body.appendChild(div);obj.canvas.resizing.div=div;obj.canvas.resizing.placeHolders.push(div);for(var i=0;i<(obj.canvas.resizing.placeHolders.length-1);++i){obj.canvas.resizing.placeHolders[i].style.display='none';}
div.onmouseup=function(e)
{MouseupFunc(e);}
obj.canvas.resizing.div.onmouseover=function(e)
{e.stopPropagation();}
obj.canvas.resizing.originalx=e.pageX;obj.canvas.resizing.originaly=e.pageY;obj.canvas.resizing.originalCanvasX=RGraph.getCanvasXY(obj.canvas)[0];obj.canvas.resizing.originalCanvasY=RGraph.getCanvasXY(obj.canvas)[1];}
if(coords[0]>(obj.canvas.width-resizeHandleSize-resizeHandleSize)&&coords[0]<obj.canvas.width-resizeHandleSize&&coords[1]>(obj.canvas.height-resizeHandleSize)&&coords[1]<obj.canvas.height&&obj.canvas.resizing.originalw&&obj.canvas.resizing.originaly){RGraph.fireCustomEvent(obj.canvas.__object__,'onresizebegin');obj.canvas.width=obj.canvas.resizing.originalw;obj.canvas.height=obj.canvas.resizing.originalh;if(obj.canvas.__link__&&obj.canvas.__link__.style.display==='none'){obj.canvas.__link__.style.display='inline';}
if(typeof obj.canvas.parentNode.id==='string'&&obj.canvas.parentNode.id.substring(0,24)==='rgraph_resize_container_'){obj.canvas.parentNode.style.width=obj.canvas.resizing.originalw+'px';obj.canvas.parentNode.style.height=obj.canvas.resizing.originalh+'px';}
obj.canvas.style.border=obj.canvas.resizing.original_css_border;obj.canvas.style.boxShadow=obj.canvas.resizing.original_css_shadow;obj.canvas.style.left=(parseInt(obj.canvas.style.left))+'px';obj.canvas.style.top=(parseInt(obj.canvas.style.top))+'px';obj.canvas.getContext('2d').translate(0.5,0.5);RGraph.fireCustomEvent(obj.canvas.__object__,'onresizebeforedraw');var objects=RGraph.ObjectRegistry.getObjectsByCanvasID(obj.canvas.id);for(var i=0;i<objects.length;i+=1){RGraph.resetColorsToOriginalValues(objects[i]);if(objects[i].reset){objects[i].reset();}
RGraph.redrawCanvas(objects[i].canvas);}
RGraph.cache=[];if(obj.canvas.resizing.div){obj.canvas.resizing.div.style.width=obj.canvas.__original_width__+'px';obj.canvas.resizing.div.style.height=obj.canvas.__original_height__+'px';}
RGraph.fireCustomEvent(obj.canvas.__object__,'onresize');RGraph.fireCustomEvent(obj.canvas.__object__,'onresizeend');}};if(typeof obj.canvas.rgraph_resize_mousedown_listener_installed!='boolean'){obj.canvas.addEventListener('mousedown',canvas_onmousedown,false);obj.canvas.rgraph_resize_mousedown_listener_installed=true;}}};})(window,document);