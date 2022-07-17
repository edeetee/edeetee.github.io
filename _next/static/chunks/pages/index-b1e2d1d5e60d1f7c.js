(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{138:function(e,n){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,e),this.x=n,this.y=t}var n,o,a;return n=e,a=[{key:"fromObject",value:function(n){return new e(n.x,n.y)}},{key:"fromArray",value:function(n){var i,r,o=(r=2,function(e){if(Array.isArray(e))return e}(i=n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(l){r=!0,o=l}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return t}}(i,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(i,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return new e(o[0],o[1])}},{key:"lerp",value:function(n,t,i){var r;return i=(r=i)<0?0:r>1?1:r,new e(n.x+(t.x-n.x)*i,n.y+(t.y-n.y)*i)}},{key:"distance",value:function(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}},{key:"add",value:function(n,t,i){return"number"==typeof t?new e(n.x+t,n.y+(i||0)):new e(n.x+t.x,n.y+t.y)}},{key:"sub",value:function(n,t,i){return"number"==typeof t?new e(n.x-t,n.y-(i||0)):new e(n.x-t.x,n.y-t.y)}},{key:"mul",value:function(n,t,i){return new e(n.x*t,n.y*(i||t))}},{key:"div",value:function(n,t,i){return new e(n.x/t,n.y/(i||t))}},{key:"dot",value:function(e,n){return e.x*n.x+e.y*n.y}},{key:"cross",value:function(e,n){return e.x*n.y-e.y*n.x}},{key:"angle",value:function(e){return Math.atan2(e.y,e.x)}},{key:"angleBetween",value:function(e,n){return Math.atan2(n.y-e.y,n.x-e.x)}},{key:"limit",value:function(e,n){var t=e.magnitudeSquare();return t>n*n?e.div(Math.sqrt(t)).mul(n):e.clone()}},{key:"reflect",value:function(n,t){var i=-2*e.dot(t,n);return new e(i*t.x+n.x,i*t.y+n.y)}},{key:"equals",value:function(n,t){var i=n.x-t.x,r=n.y-t.y;return i*i+r*r<e.epsilon*e.epsilon}},{key:"magnitude",value:function(n){return Math.sqrt(e.magnitudeSquare(n))}},{key:"magnitudeSquare",value:function(e){return e.x*e.x+e.y*e.y}},{key:"normalize",value:function(n){var t=e.magnitude(n);return t>e.epsilon?new e(n.x/t,n.y/t):new e(0,0)}},{key:"intersection",value:function(n,t,i,r){var o=(n.x*t.y-n.y*t.x)*(i.x-r.x)-(n.x-t.x)*(i.x*r.y-i.y*r.x),a=(n.x*t.y-n.y*t.x)*(i.y-r.y)-(n.y-t.y)*(i.x*r.y-i.y*r.x),s=(n.x-t.x)*(i.y-r.y)-(n.y-t.y)*(i.x-r.x);return 0===s?null:new e(o/s,a/s)}},{key:"zero",get:function(){return new e(0,0)}},{key:"up",get:function(){return new e(0,-1)}},{key:"down",get:function(){return new e(0,1)}},{key:"left",get:function(){return new e(-1,0)}},{key:"right",get:function(){return new e(1,0)}}],(o=[{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"lerp",value:function(n,t){return e.lerp(this,n,t)}},{key:"distance",value:function(n){return e.distance(this,n)}},{key:"add",value:function(n,t){return"number"==typeof n?e.add(this,n,t):e.add(this,n)}},{key:"sub",value:function(n,t){return"number"==typeof n?e.sub(this,n,t):e.sub(this,n)}},{key:"mul",value:function(n,t){return e.mul(this,n,t)}},{key:"div",value:function(n,t){return e.div(this,n,t)}},{key:"dot",value:function(n){return e.dot(this,n)}},{key:"cross",value:function(n){return e.cross(this,n)}},{key:"limit",value:function(n){return e.limit(this,n)}},{key:"equals",value:function(n){return e.equals(this,n)}},{key:"magnitude",value:function(){return e.magnitude(this)}},{key:"magnitudeSquare",value:function(){return e.magnitudeSquare(this)}},{key:"normalize",value:function(){return e.normalize(this)}},{key:"angle",value:function(){return e.angle(this)}},{key:"angleBetween",value:function(n){return e.angleBetween(this,n)}},{key:"toObject",value:function(){return{x:this.x,y:this.y}}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}])&&r(n.prototype,o),a&&r(n,a),e}();n.Z=o,o.epsilon=1e-5},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7128)}])},7128:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return $}});var i=t(5893),r=t(7294),o=t(1550),a=t.n(o),s=t(138),l=[-2,0,0,-2,2,2],c=function(e,n,t){return Math.min(t,Math.max(e,n))},u=function(){var e=r.createRef();return(0,r.useEffect)((function(){var n=function(){i&&r&&(i.width=.5*window.innerWidth,i.height=.5*window.innerHeight,r.viewport(0,0,i.width,i.height))},t=function(e,n){var t=c((e-window.scrollX)/window.innerWidth,0,1),i=c(1-(n-window.scrollY)/window.innerHeight,0,1);u.onMove(t,i)};if(void 0!==window){var i=e.current,r=(null===i||void 0===i?void 0:i.getContext("webgl"))||void 0;window.addEventListener("resize",n),n();var o=a()({pixelRatio:1,gl:r,extensions:["OES_texture_float","WEBGL_color_buffer_float","OES_texture_float_linear"],optionalExtensions:["EXT_color_buffer_float"],onDone:function(e){null!=e&&console.log(e)}}),u=function(e){var n=new s.Z(-1,-1),t=n,i=!0,r=0,o=new s.Z(0,0),a=1,c=e.texture({type:"float",min:"linear",mag:"linear"}),u=e({attributes:{position:l},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main () {\n    uv = position;\n    gl_Position = vec4(2.0 * position - 1.0, 0, 1);\n}",count:3}),d=e.framebuffer({colorType:"float",depthStencil:!1}),h=e({frag:"precision highp float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nmat2 rotation2d(float angle) {\n\tfloat s = sin(angle);\n\tfloat c = cos(angle);\n\n\treturn mat2(\n\t\tc, -s,\n\t\ts, c\n\t);\n}\n\nmat4 rotation3d(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(\n\t\toc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n\t\t0.0,                                0.0,                                0.0,                                1.0\n\t);\n}\n\nvec2 rotate(vec2 v, float angle) {\n\treturn rotation2d(angle) * v;\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\treturn (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;\n}\n\nuniform sampler2D texture;\nuniform vec2 mouse;\nuniform float t;\nuniform vec2 aspect;\nvarying vec2 uv;\n\n#define PI 3.1415926538\n\nvec2 snoise32(vec3 pos){\n    return vec2(snoise(pos), snoise(pos+vec3(99.40139)));\n}\n\nvoid main () {\n    \n    vec2 mouseDist = (uv-mouse)*aspect;\n    float mouseLength = length(mouseDist);\n    float mouseStrength = pow(max(1.0-mouseLength*1.5, 0.0), 5.0);\n\n    vec2 aspectUv = uv*aspect;\n\n    // vec2 rotatedMouseDist = rotate(mouseDist, PI*(t));\n    vec2 mouseUvOffset = normalize(-mouseDist)*mouseStrength;\n\n    vec2 textureUV = uv;\n    textureUV += mouseUvOffset*0.02;\n    textureUV += snoise32(vec3(aspectUv, t*0.2))*0.001;\n\n    vec4 textureColor;\n    if((textureUV.x < 0.0 || 1.0 < textureUV.x) && (textureUV.y < 0.0 || 1.0 < textureUV.y))\n        textureColor = vec4(textureUV, 0, 1);\n    else\n        textureColor = texture2D(texture, textureUV);\n        \n\n    // if(textureColor.a == 0.0)\n    //     textureColor = mix(vec4(uv, 0,1);\n\n    vec2 feedbackUv = textureColor.xy;\n\n    vec2 newUv = feedbackUv;\n    newUv += snoise32(vec3(aspectUv, t*0.1))*0.002;\n\n    //only use uv for first frame\n    newUv = mix(uv, feedbackUv, 0.99*textureColor.a);\n\n    gl_FragColor = vec4(newUv, 0, 1);\n}",uniforms:{texture:c,aspect:function(){return[a,1]},mouse:function(){return t.toArray()},t:function(e){return e.time}},framebuffer:d}),p=e({frag:"precision highp float;\n#define GLSLIFY 1\n\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nuniform sampler2D texture;\nvarying vec2 uv;\n\nvoid main () {\n    vec4 textureColor = texture2D(texture, uv);\n\n    vec2 feedbackDiff = textureColor.rg-uv;\n    float feedbackLength = length(feedbackDiff);\n\n    vec3 hsv = vec3(pow(feedbackLength, 0.7)*0.7-0.4, 0.1+pow(feedbackLength, 2.0)*0.4, 1);\n\n    gl_FragColor = vec4(hsv2rgb(hsv), 1);\n    // gl_FragColor = vec4(textureColor.xy, 0, 1);\n    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);\n}",uniforms:{texture:d}});return{onMove:function(e,r){n=new s.Z(e,r),i&&(t=n,i=!1)},onFrame:function(e){var i=e.viewportHeight,l=e.viewportWidth,x=e.time,v=x-r;r=x;var m=s.Z.div(n.sub(t).limit(v),a,1);t=t.add(m),(o.x<l||o.y<i)&&(c.resize(l,i),d.resize(l,i),o=new s.Z(l,i),a=l/i),u((function(){h(),d.use((function(){c({copy:!0})})),p()}))}}}(o);document.body.addEventListener("touchmove",(function(e){return t(e.touches[0].pageX,e.touches[0].pageY)})),document.body.addEventListener("mousemove",(function(e){return t(e.pageX,e.pageY)})),o.frame((function(e){u.onFrame(e)}))}})),(0,i.jsx)("canvas",{ref:e,style:{position:"fixed",width:"100%",height:"100%",left:0,top:0}})},d=t(9008),h=t(4051),p=t.n(h),x=t(3437),v=t.n(x),m=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:v().my_name,children:"Edward Taylor"}),(0,i.jsx)("h2",{children:"Technology Designer / Developer"}),(0,i.jsx)("h2",{children:"Bachelor of Design Innovation"}),(0,i.jsx)("h2",{children:"New Zealand"})]}),(0,i.jsx)("p",{children:"I am a creative individual who uses technology to create beauty, add to experiences and solve problems."})]})},f=function(){return(0,i.jsx)("div",{style:{width:"100%",height:1,backgroundColor:"#AAA",margin:"32px 0"}})},y=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"I am available for a wide range of work related to digital technology and art. Taking a browse through my portfolio will give you an idea of where my interests lie and what I can create with passion."}),(0,i.jsx)(f,{}),(0,i.jsx)("h2",{children:"Skills"}),(0,i.jsx)("h3",{children:"Rendering & Interaction"}),"As shown in my visual work, I love leveraging the potential of hardware to create art.",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"3D Materials & Modelling"}),(0,i.jsx)("li",{children:"Game & Interactive logic"}),(0,i.jsx)("li",{children:"2D image processing"}),(0,i.jsx)("li",{children:"3D Maths (Matrix, Vector etc)"}),(0,i.jsx)("li",{children:"Data visualization & experimentation"})]}),(0,i.jsx)("h3",{children:"Linux"}),"I have general linux systems knowledge from my use of raspberry pi and feel most at home on a linux system",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Web servers"}),(0,i.jsx)("li",{children:"Maintainance"}),(0,i.jsx)("li",{children:"Raspberry pi"}),(0,i.jsx)("li",{children:"systemd"})]}),(0,i.jsx)("h3",{children:"Misc"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"App development (Android, kotlin)"}),(0,i.jsx)("li",{children:"Web development (React, nextjs, javascript, WebGL)"}),(0,i.jsx)("li",{children:"Google apps script (Automating google forms, sheets, docs)"}),(0,i.jsx)("li",{children:"AWS & web servers"}),(0,i.jsx)("li",{children:"Arduino & embedded computing"})]})]})},g=t(5317),w=[{title:"edeetee@gmail.com",url:"mailto:edeetee@gmail.com",mdiPath:g.bn2},{title:"Optiphonic",url:"https://instagram.com/optiphonic",mdiPath:g.N_z},{title:"Github",url:"https://github.com/edeetee",mdiPath:g.LcO},{title:"Source code",url:"https://github.com/edeetee/edeetee.github.io",mdiPath:g.Nnu}],b=function(){return(0,i.jsx)("div",{children:w.map((function(e,n){return(0,i.jsxs)("a",{href:e.url,style:{display:"flex",flexDirection:"row",alignItems:"center",margin:"6px 0"},children:[(0,i.jsx)("svg",{style:{width:"18px",height:"18px",margin:"auto 0"},viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:e.mdiPath})}),(0,i.jsx)("h4",{style:{margin:"auto 0",paddingLeft:"4px"},children:e.title})]},n)}))})},j=function(e){var n=e.options,t=e.selected;return(0,i.jsx)("div",{children:n.map((function(e,n){var r=t==e;return(0,i.jsx)("a",{href:r?"/#":e.url,className:r?"selected":"",children:(0,i.jsx)("h2",{style:{fontWeight:r?"bold":"inherit",borderLeft:"solid",borderWidth:1,paddingLeft:8},children:e.label})},n)}))})},k=t(4314),C=t(5055),I=t(5507),A=t(8343),D=t(1110),S=t(2964);function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){z(e,n,t[n])}))}return e}var P=function(e){var n=e.style,t=e.src;return(0,i.jsx)("div",{style:_({},n),children:(0,i.jsx)("a",{href:t,children:(0,i.jsx)("img",{src:t,style:{width:"100%",height:"100%",objectFit:"cover"}})})})};function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){M(e,n,t[n])}))}return e}var T,U=function(e){var n=e.embedId,t=e.style;return(0,i.jsx)("div",{style:O({position:"relative",aspectRatio:"16/9"},t),children:(0,i.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/".concat(n),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})};!function(e){e[e.Creative=0]="Creative",e[e.Assistive=1]="Assistive",e[e.Visuals=2]="Visuals"}(T||(T={}));var L=[{title:'Spaceship "DiscoVery" Airbnb (2022)',url:"https://linktr.ee/discoveryship",tag:T.Creative,content:(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Got to collaborate with other skilled artists ",(0,i.jsx)("a",{href:"https://linktr.ee/discoveryship",children:"(links here)"})," to add interactive elements to a spaceship themed airbnb made from the shell of an airplane."]}),(0,i.jsx)(U,{embedId:"q3hAaLLpg0A"}),(0,i.jsxs)("p",{children:["My initial work focused on:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"An interactive touchscreen exterior view to be the main menu for home automation"}),(0,i.jsx)("li",{children:"A game viewed in the cockpit, controlled via the joysticks"})]}),"It was a hit at Armageddon Auckland and there are plans to do more development before it is open for booking."]})]})},{title:"Cultured (2022)",tag:T.Visuals,content:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Performed at a mostly psy event near Peel Forest to send off a family farm."}),(0,i.jsx)(U,{embedId:"qiAt0ZFS1eQ"}),(0,i.jsx)("p",{children:"Had a hand in designing the stage to match projections to wrap around the dance floor. This performance is an example of my live rendered 3D content where I experiment with infinite geometries."}),(0,i.jsxs)("p",{children:["Producer/DJ: ",(0,i.jsx)("a",{href:"https://soundcloud.com/keithunsheathed",children:"Keith"})]})]})},{title:"Unleashed Society (2022)",tag:T.Visuals,content:(0,i.jsxs)("div",{children:[(0,i.jsx)(U,{embedId:"dXHccbCmphk"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,i.jsx)(P,{style:{width:"100%"},src:S}),(0,i.jsx)("div",{style:{flexBasis:8}}),(0,i.jsx)(P,{style:{width:"100%"},src:D})]}),(0,i.jsx)("p",{children:"For this gig, I collaborated with stage designers to map out this custom built taniwha. I was really happy with the result - ghostly taniwha watching over the audience with my reactive shapes adding depth. I especially valued having enough time in this project to prototype different visual styles beforehand and get the mapping pixel perfect."})]})},{title:"This website (2022)",tag:T.Creative,content:(0,i.jsx)("p",{children:"I wanted to update my website to make it easier to update content and showcase my generative art. I want to speak through examples."})},{title:"TASKA Prosthetics (2020)",tag:T.Assistive,content:(0,i.jsx)("p",{children:"Worked for TASKA Prosthetics to update and maintain their phone app. I went into the job desiring to work with patients and design software that aligned with research into how to best assist users. I learnt a lot about project management including continuous integration, deployment and spreading work across a team. The role was not giving me the support and variety I desired so I moved on after a year."})},{title:"Blind Foundation Alexa Scholarship (2018/19)",tag:T.Assistive,content:(0,i.jsxs)("p",{children:["As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontend to ",(0,i.jsx)("a",{href:"http://www.eventfinda.co.nz",children:"eventfinda"})," instead of assistance with transport or blind foundation communications."]})},{title:"Pictocraft (2019)",tag:T.Assistive,url:"https://github.com/edeetee/pictocraft",content:(0,i.jsxs)("div",{children:[(0,i.jsx)(P,{src:A}),(0,i.jsxs)("p",{children:["For my final project at Victoria University, I carried out independent research where I created a modification of the game ",(0,i.jsx)("a",{href:"http://www.minecraft.net",children:"Minecraft"})," in order to give communication abilities to people with language difficulties. I integrated an existing English to Picograph system into the game to translate received text into images and made a web interface to allow communicating back by pressing buttons on a tablet. It's not 100% accurate, but the ability to communicate ideas like \u201cI want to build a brick house on a hill\u201d can give users a lot more depth than they had otherwise."]})]})},{title:"Scutter - Asymmetric VR (2019)",tag:T.Creative,url:"https://github.com/edeetee/scutter",content:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(P,{src:k}),(0,i.jsx)(P,{src:C})]}),(0,i.jsx)("p",{children:"For a university game design course, I designed a multiplayer game best described as blind mans bluff in VR. Up to two players hold a controller each and one player dons the headset. As the controller players move around, a corresponding object in virtual space follows their movements. The VR player's goal is find the objects that represent the controllers moving around and take the controller from the other players, pressing a button to verify. While this happens, the controller players are getting vibrations that guide them to goals in space, with the aim to gain as many points as possible."})]})},{title:"Misc Experiments (2017/18)",tag:T.Creative,content:(0,i.jsxs)("div",{children:["Here's a collection of small experiments that I want to keep around",(0,i.jsx)("a",{href:"https://bl.ocks.org/edeetee",children:(0,i.jsx)("h4",{children:"All Uni CC Projects"})}),(0,i.jsx)("a",{href:"http://bl.ocks.org/edeetee/7324d937d2230ebd5e62d9db425732ac/3136f1ec2b489d1791881a2fee1b0a15e8be4a1d",children:(0,i.jsx)("h4",{children:"Infinite Clock"})}),(0,i.jsx)("a",{href:"http://bl.ocks.org/edeetee/6ff4a260e77466f45231d15c53c66160/08fd98cc603e279051dbdd5694013757dc772d21",children:(0,i.jsx)("h4",{children:"Particles"})}),(0,i.jsx)("a",{href:"https://medium.com/@edeetee/live-style-transfer-modulated-by-audio-frequency-analysis-for-edm-events-4a76acabd029",children:(0,i.jsx)("h4",{children:"Audio modulated style transfer"})})]})},{title:"Create and Capture for Garry's Mod (2015)",tag:T.Creative,url:"https://steamcommunity.com/sharedfiles/filedetails/?id=389065555",content:(0,i.jsxs)("div",{children:[(0,i.jsx)(P,{src:I}),(0,i.jsx)("p",{children:"With my friend Tom Lewis (now a practicing game designer), we build a multiplayer gamemode for the popular game platform Garry's Mod. We did a lot of user testing with our friends and learnt a lot about collaborative and design driven development. The game ended up being a lot of fun and had several thousand downloads."})]})}],E=function(e){return(0,i.jsx)("div",{style:{marginBottom:"10vh"},children:e.map((function(e,n){return(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{}),null!=e.url?(0,i.jsx)("a",{href:e.url,children:(0,i.jsx)("h3",{children:e.title})}):(0,i.jsx)("h3",{children:e.title}),e.content]},n)}))})},F=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"When I'm bored, it fills my cup to create beautiful and fun things. Here is a selection of this output."}),E(L.filter((function(e){return e.tag==T.Creative})))]})},V=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"More than giving people joy through creativity, I want my work to help with reality. I've been expanding my creative work and am looking for new opportunities to apply my skills to assist the environment and underprivileged people, specifically people with disabilities."}),E(L.filter((function(e){return e.tag==T.Assistive})))]})},q=t(1891),N=t.n(q),W=function(){return new Promise((function(e){return requestAnimationFrame(e)}))},B={margin:"0 auto",border:"none",width:"50%",aspectRatio:"1/1"},R=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{width:"100%",display:"flex"},children:[(0,i.jsx)("iframe",{style:B,src:"https://mega.nz/embed/bYYUiTqA#3ZUu6S5wuDsjtp76TwF-P8t_0-rutFbiomdxRzVPJt8",allowFullScreen:!0}),(0,i.jsx)("iframe",{style:B,src:"https://mega.nz/embed/2BZ1BDYL#DN8Pvo7veq1T83Lq01W27uFAayesabDffIYFSy6zq-k",allowFullScreen:!0})]}),(0,i.jsxs)("p",{children:["I have been performing visual art at festivals and music events under the name Optiphonic. Many years ago I was inspired by music visualizers in winamp and iTunes, since then I have created my own and started performing them for different events. Check out some of my renders and performances ",(0,i.jsx)("a",{href:"https://instagram.com/optiphonic",children:"on instagram"}),"."]}),(0,i.jsxs)("p",{children:["With this work, I'm currently developing tools that allow me to bring the surfaces of the real world into my generative worlds. I'm lucky to collaborate with some other awesome artists in this work and I hope to develop even larger collaborative things in the future! ",(0,i.jsx)("a",{href:"mailto:edeetee@gmail.com",children:"Email me"})," if you want to collab :)"]})]}),E(L.filter((function(e){return e.tag==T.Visuals})))]})},G=function(e){var n=e.title,t=e.company,r=e.date,o=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{marginTop:16,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("h4",{style:{marginTop:0},children:n})]}),(0,i.jsx)("h4",{children:r})]}),o]})},Z=t(4327),H=function(){return(0,i.jsxs)(i.Fragment,{children:["Here is some information of my past employment and education. This information would typically be in a CV.",(0,i.jsx)(f,{}),(0,i.jsx)("h2",{children:"Employment"}),"I prefer to work contract/independently as it allows me to personally manage my time and mental space. However, for the right position and sufficient support and flexibility, I would consider otherwise.",(0,i.jsx)(G,{company:"Taska Prosthetics",title:"Mobile Developer",date:"November 2019 \u2014 November 2020",children:"Developed a new app for hand configuration with shared iOS/Android code. Learnt a lot about project management including continuous integration, deployment, spreading work across a team."}),(0,i.jsx)(G,{company:"Victoria University",title:"Media Design Tutor",date:"July 2019 \u2014 September 2019",children:"Tutor for Creative Coding (DSDN142) and Wearable Technology (MDDN351). Gave me joy to use my technical skills and communication to guide students towards solving problems and gaining knowledge."}),(0,i.jsxs)(G,{company:"Victoria University",title:"Alexa Summer Scholarship",date:"December 2018 \u2014 March 2019",children:["Worked with researcher Gillian McCarthy to design, develop and publish an Alexa skill (app) for the NZ blind community.",(0,i.jsx)("p",{children:"Used user interviews, user testing, research and experimentation to survey the problem space and come up with a technological solution."}),(0,i.jsx)("p",{children:'End product allows users to ask questions like "What jazz gigs are on in wellington next weekend?" and get a logical and interactive response, with tutorialisation and information sourced from eventfinda.'})]}),(0,i.jsx)(G,{company:"Savesign",title:"Linux/Raspberry Pi Developer",date:"November 2017 \u2014 December 2019",children:"Developed kiosk software to run on Raspberry Pi. The work covered installation, system customization, wifi management via local hotspot, remote support."}),(0,i.jsx)(G,{company:"Sunny Side Up",title:"Web Developer",date:"2017"}),(0,i.jsx)(G,{company:"GeneralApps ",title:"App Developer",date:"March 2016 \u2014 January 2017",children:"Creating an MVP android app for audio looping, effects and online collaboration Learnt how to work with clients, android/Java mobile development, planning tools."}),(0,i.jsx)(G,{company:"Jade Software Corporation",title:"Intern",date:"December 2015 \u2014 February 2016",children:"Final of 3 internships with Jade."}),(0,i.jsx)(f,{}),(0,i.jsx)("h2",{children:"Education"}),(0,i.jsx)("h3",{children:"Computer Science (dropped out)"}),(0,i.jsx)("h4",{children:"2014-2016"}),"Initially started a Computer Science degree at Canterbury University with a minor in Philosophy, then transferred to Victoria University. I did this as I was no longer interested in pure computer science as opposed to using it as a tool.",(0,i.jsx)("h3",{children:"BDI Media Design"}),(0,i.jsx)("h4",{children:"Victoria University of Wellington"}),(0,i.jsx)("h4",{children:"2017"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Deans Award"}),(0,i.jsx)("li",{children:"Design as Inquiry: A"}),(0,i.jsx)("li",{children:"Creative Coding II: A+"}),(0,i.jsx)("li",{children:"Mobile Media: A"}),(0,i.jsx)("li",{children:"Wearable Technology: A-"}),(0,i.jsx)("li",{children:"Creative Coding III: A-"})]}),(0,i.jsx)("h4",{children:"2018"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Advanced Comp Game Design: B+"}),(0,i.jsx)("li",{children:"Interaction Design: B+"}),(0,i.jsx)("li",{children:"Creative Artificial Intelligence: A-"})]}),(0,i.jsx)("h4",{children:"2019"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:"Independent Study: A"})}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["You can view my ",(0,i.jsx)("a",{href:Z,children:"my old CV here."})]})]})};function Y(e,n,t,i,r,o,a){try{var s=e[o](a),l=s.value}catch(c){return void t(c)}s.done?n(l):Promise.resolve(l).then(i,r)}function J(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){Y(o,i,r,a,s,"next",e)}function s(e){Y(o,i,r,a,s,"throw",e)}a(void 0)}))}}function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X=[{page:(0,i.jsx)(R,{}),label:"Music Visuals",name:"visuals"},{page:(0,i.jsx)(F,{}),label:"Creative",name:"creative"},{page:(0,i.jsx)(V,{}),label:"Assistive",name:"assistive"},{page:(0,i.jsx)(y,{}),label:"Skills",name:"skills"},{page:(0,i.jsx)(H,{}),label:"History",name:"history"}].map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){K(e,n,t[n])}))}return e}({url:"/#".concat(e.name)},e)})),Q=function(){var e=(0,r.useState)(void 0),n=e[0],t=e[1],o=(0,r.useRef)(null),a=(0,r.useRef)(null);function s(){return l.apply(this,arguments)}function l(){return(l=J(p().mark((function e(){var i,r,s,l,c,u,d;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==window.history.state||window.history.state.as==(null===n||void 0===n?void 0:n.url)){e.next=9;break}return c=X.find((function(e){return e.url==window.history.state.as})),t(c),e.next=6,W();case 6:u=null===(r=null===(i=a.current)||void 0===i?void 0:i.getBoundingClientRect())||void 0===r?void 0:r.top,d=null===(l=null===(s=o.current)||void 0===s?void 0:s.getBoundingClientRect())||void 0===l?void 0:l.top,void 0!==u&&void 0!=d&&scrollTo({top:u-d,behavior:"smooth"});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,r.useEffect)((function(){window.addEventListener("hashchange",s),s()})),(0,i.jsxs)("div",{className:N().responsiveDoubleCol,children:[(0,i.jsxs)("div",{ref:o,className:N().responsiveStickyMenu,children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{options:X,selected:n}),(0,i.jsx)(b,{})]}),(0,i.jsx)("div",{style:{display:n?"initial":"none"},className:N().separator}),(0,i.jsxs)("div",{ref:a,className:N().content,children:[(0,i.jsx)("h1",{children:null===n||void 0===n?void 0:n.label}),null===n||void 0===n?void 0:n.page,(0,i.jsx)("div",{style:{height:64}})]}),(0,i.jsx)("div",{style:{margin:"0 auto"}})]})},$=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.default,{children:[(0,i.jsx)("title",{children:"Edward Taylor"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon/16.png"}),(0,i.jsx)("link",{rel:"icon",sizes:"32x32",type:"image/png",href:"/favicon/32.png"}),(0,i.jsx)("link",{rel:"icon",sizes:"64x64",type:"image/png",href:"/favicon/64.png"})]}),(0,i.jsx)(u,{}),(0,i.jsx)(Q,{})]})}},3437:function(e){e.exports={my_name:"about_my_name__OiARO"}},1891:function(e){e.exports={responsiveDoubleCol:"main_responsiveDoubleCol__eVszz",responsiveStickyMenu:"main_responsiveStickyMenu__3Jw3B",content:"main_content__Oet66",separator:"main_separator__J7GZ1"}},9008:function(e,n,t){e.exports=t(3121)},4327:function(e,n,t){"use strict";e.exports=t.p+"static/media/cv.7e799a7c.pdf"},5507:function(e,n,t){"use strict";e.exports=t.p+"static/media/createAndCapture.8aa8d632.webp"},8343:function(e,n,t){"use strict";e.exports=t.p+"static/media/pictocraft.ed499368.webp"},4314:function(e,n,t){"use strict";e.exports=t.p+"static/media/scutter1.c723360f.webp"},5055:function(e,n,t){"use strict";e.exports=t.p+"static/media/scutter2.cc7da490.webp"},1110:function(e,n,t){"use strict";e.exports=t.p+"static/media/unleashedSocietyDejaVuduu.4ee39432.webp"},2964:function(e,n,t){"use strict";e.exports=t.p+"static/media/unleashedSocietyInProgress.48e18663.webp"}},function(e){e.O(0,[511,702,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);