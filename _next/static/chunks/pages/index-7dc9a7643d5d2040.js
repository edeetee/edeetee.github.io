(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{138:function(e,n){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,e),this.x=n,this.y=t}var n,o,a;return n=e,a=[{key:"fromObject",value:function(n){return new e(n.x,n.y)}},{key:"fromArray",value:function(n){var i,r,o=(r=2,function(e){if(Array.isArray(e))return e}(i=n)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(c){r=!0,o=c}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return t}}(i,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(i,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return new e(o[0],o[1])}},{key:"lerp",value:function(n,t,i){var r;return i=(r=i)<0?0:r>1?1:r,new e(n.x+(t.x-n.x)*i,n.y+(t.y-n.y)*i)}},{key:"distance",value:function(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}},{key:"add",value:function(n,t,i){return"number"==typeof t?new e(n.x+t,n.y+(i||0)):new e(n.x+t.x,n.y+t.y)}},{key:"sub",value:function(n,t,i){return"number"==typeof t?new e(n.x-t,n.y-(i||0)):new e(n.x-t.x,n.y-t.y)}},{key:"mul",value:function(n,t,i){return new e(n.x*t,n.y*(i||t))}},{key:"div",value:function(n,t,i){return new e(n.x/t,n.y/(i||t))}},{key:"dot",value:function(e,n){return e.x*n.x+e.y*n.y}},{key:"cross",value:function(e,n){return e.x*n.y-e.y*n.x}},{key:"angle",value:function(e){return Math.atan2(e.y,e.x)}},{key:"angleBetween",value:function(e,n){return Math.atan2(n.y-e.y,n.x-e.x)}},{key:"limit",value:function(e,n){var t=e.magnitudeSquare();return t>n*n?e.div(Math.sqrt(t)).mul(n):e.clone()}},{key:"reflect",value:function(n,t){var i=-2*e.dot(t,n);return new e(i*t.x+n.x,i*t.y+n.y)}},{key:"equals",value:function(n,t){var i=n.x-t.x,r=n.y-t.y;return i*i+r*r<e.epsilon*e.epsilon}},{key:"magnitude",value:function(n){return Math.sqrt(e.magnitudeSquare(n))}},{key:"magnitudeSquare",value:function(e){return e.x*e.x+e.y*e.y}},{key:"normalize",value:function(n){var t=e.magnitude(n);return t>e.epsilon?new e(n.x/t,n.y/t):new e(0,0)}},{key:"intersection",value:function(n,t,i,r){var o=(n.x*t.y-n.y*t.x)*(i.x-r.x)-(n.x-t.x)*(i.x*r.y-i.y*r.x),a=(n.x*t.y-n.y*t.x)*(i.y-r.y)-(n.y-t.y)*(i.x*r.y-i.y*r.x),s=(n.x-t.x)*(i.y-r.y)-(n.y-t.y)*(i.x-r.x);return 0===s?null:new e(o/s,a/s)}},{key:"zero",get:function(){return new e(0,0)}},{key:"up",get:function(){return new e(0,-1)}},{key:"down",get:function(){return new e(0,1)}},{key:"left",get:function(){return new e(-1,0)}},{key:"right",get:function(){return new e(1,0)}}],(o=[{key:"clone",value:function(){return new e(this.x,this.y)}},{key:"lerp",value:function(n,t){return e.lerp(this,n,t)}},{key:"distance",value:function(n){return e.distance(this,n)}},{key:"add",value:function(n,t){return"number"==typeof n?e.add(this,n,t):e.add(this,n)}},{key:"sub",value:function(n,t){return"number"==typeof n?e.sub(this,n,t):e.sub(this,n)}},{key:"mul",value:function(n,t){return e.mul(this,n,t)}},{key:"div",value:function(n,t){return e.div(this,n,t)}},{key:"dot",value:function(n){return e.dot(this,n)}},{key:"cross",value:function(n){return e.cross(this,n)}},{key:"limit",value:function(n){return e.limit(this,n)}},{key:"equals",value:function(n){return e.equals(this,n)}},{key:"magnitude",value:function(){return e.magnitude(this)}},{key:"magnitudeSquare",value:function(){return e.magnitudeSquare(this)}},{key:"normalize",value:function(){return e.normalize(this)}},{key:"angle",value:function(){return e.angle(this)}},{key:"angleBetween",value:function(n){return e.angleBetween(this,n)}},{key:"toObject",value:function(){return{x:this.x,y:this.y}}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}}])&&r(n.prototype,o),a&&r(n,a),e}();n.Z=o,o.epsilon=1e-5},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5120)}])},5120:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var i=t(5893),r=t(7294),o=t(1550),a=t.n(o),s=t(138),c=[-2,0,0,-2,2,2],l=function(e,n,t){return Math.min(t,Math.max(e,n))},u=function(){var e=r.createRef();return(0,r.useEffect)((function(){var n=function(){i&&r&&(i.width=.5*window.innerWidth,i.height=.5*window.innerHeight,r.viewport(0,0,i.width,i.height))},t=function(e,n){var t=l((e-window.scrollX)/window.innerWidth,0,1),i=l(1-(n-window.scrollY)/window.innerHeight,0,1);u.onMove(t,i)};if(void 0!==window){var i=e.current,r=(null===i||void 0===i?void 0:i.getContext("webgl"))||void 0;window.addEventListener("resize",n),n();var o=a()({pixelRatio:1,gl:r,extensions:["OES_texture_float","WEBGL_color_buffer_float","OES_texture_float_linear"],optionalExtensions:["EXT_color_buffer_float"],onDone:function(e){null!=e&&console.log(e)}}),u=function(e){var n=new s.Z(0,0),t=new s.Z(0,0),i=0,r=new s.Z(0,0),o=1,a=e.texture({type:"float",min:"linear",mag:"linear"}),l=e.framebuffer({colorType:"float",depthStencil:!1}),u=e({attributes:{position:c},vert:"\nprecision highp float;\nattribute vec2 position;\nvarying vec2 uv;\nvoid main () {\n    uv = position;\n    gl_Position = vec4(2.0 * position - 1.0, 0, 1);\n}",count:3}),d=e({frag:"precision highp float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nmat2 rotation2d(float angle) {\n\tfloat s = sin(angle);\n\tfloat c = cos(angle);\n\n\treturn mat2(\n\t\tc, -s,\n\t\ts, c\n\t);\n}\n\nmat4 rotation3d(vec3 axis, float angle) {\n  axis = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float oc = 1.0 - c;\n\n  return mat4(\n\t\toc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n\t\t0.0,                                0.0,                                0.0,                                1.0\n\t);\n}\n\nvec2 rotate(vec2 v, float angle) {\n\treturn rotation2d(angle) * v;\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\treturn (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;\n}\n\nuniform sampler2D texture;\nuniform vec2 mouse;\nuniform float t;\nuniform vec2 aspect;\nvarying vec2 uv;\n\n#define PI 3.1415926538\n\nvec2 snoise32(vec3 pos){\n    return vec2(snoise(pos), snoise(pos+vec3(99.40139)));\n}\n\nvoid main () {\n    \n    vec2 mouseDist = (uv-mouse)*aspect;\n    float mouseLength = length(mouseDist);\n    float mouseStrength = pow(max(1.0-mouseLength*1.5, 0.0), 5.0);\n\n    vec2 aspectUv = uv*aspect;\n\n    // vec2 rotatedMouseDist = rotate(mouseDist, PI*(t));\n    vec2 mouseUvOffset = normalize(-mouseDist)*mouseStrength;\n\n    vec2 textureUV = uv;\n    textureUV += mouseUvOffset*0.02;\n    textureUV += snoise32(vec3(aspectUv, t*0.2))*0.001;\n\n    vec4 textureColor;\n    if((textureUV.x < 0.0 || 1.0 < textureUV.x) && (textureUV.y < 0.0 || 1.0 < textureUV.y))\n        textureColor = vec4(textureUV, 0, 1);\n    else\n        textureColor = texture2D(texture, textureUV);\n        \n\n    // if(textureColor.a == 0.0)\n    //     textureColor = mix(vec4(uv, 0,1);\n\n    vec2 feedbackUv = textureColor.xy;\n\n    vec2 newUv = feedbackUv;\n    newUv += snoise32(vec3(aspectUv, t*0.1))*0.002;\n\n    //only use uv for first frame\n    newUv = mix(uv, feedbackUv, 0.99*textureColor.a);\n\n    gl_FragColor = vec4(newUv, 0, 1);\n}",uniforms:{texture:a,aspect:function(){return[o,1]},mouse:function(){return t.toArray()},t:function(e){return.01*e.tick}},framebuffer:l}),h=e({frag:"precision highp float;\n#define GLSLIFY 1\n\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nuniform sampler2D texture;\nvarying vec2 uv;\n\nvoid main () {\n    vec4 textureColor = texture2D(texture, uv);\n\n    vec2 feedbackDiff = textureColor.rg-uv;\n    float feedbackLength = length(feedbackDiff);\n\n    vec3 hsv = vec3(pow(feedbackLength, 0.7)*0.7-0.4, 0.1+pow(feedbackLength, 2.0)*0.4, 1);\n\n    gl_FragColor = vec4(hsv2rgb(hsv), 1);\n    // gl_FragColor = vec4(textureColor.xy, 0, 1);\n    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);\n}",uniforms:{texture:l}});return{onMove:function(e,t){n.x=e,n.y=t},onFrame:function(e){var c=e.viewportHeight,x=e.viewportWidth,v=e.time,f=v-i;i=v;var m=s.Z.div(n.sub(t).limit(f),o,1);t=t.add(m),(r.x<x||r.y<c)&&(a.resize(x,c),l.resize(x,c),r=new s.Z(x,c),o=x/c),u((function(){d(),l.use((function(){a({copy:!0})})),h()}))}}}(o);document.body.addEventListener("touchmove",(function(e){return t(e.touches[0].pageX,e.touches[0].pageY)})),document.body.addEventListener("mousemove",(function(e){return t(e.pageX,e.pageY)})),o.frame((function(e){u.onFrame(e)}))}})),(0,i.jsx)("canvas",{ref:e,style:{position:"fixed",width:"100%",height:"100%",left:0,top:0}})},d=t(9008),h=t(4051),x=t.n(h),v=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Edward Taylor"}),(0,i.jsx)("h2",{children:"Technology Designer / Developer"}),(0,i.jsx)("h2",{children:"Bachelor of Design Innovation"}),(0,i.jsx)("h2",{children:"New Zealand"})]}),(0,i.jsx)("p",{children:"I am a creative individual who uses technology to create beauty, add to experiences and solve problems."})]})},f=t(4327),m=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"I am available for a wide range of work related to digital technology and art. Taking a browse through my portfolio will give you an idea of where my interests lie and what work I can create with passion."}),(0,i.jsx)("p",{children:"Here are some of my skills:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Linux (systemd, web servers, maintenance)"}),(0,i.jsx)("li",{children:"Raspberry pi (remote management, media servers)"}),(0,i.jsx)("li",{children:"App development (Android, kotlin)"}),(0,i.jsx)("li",{children:"Web development (React, nextjs, javascript, WebGL)"}),(0,i.jsx)("li",{children:"Google apps script (Automating google forms, sheets, docs)"}),(0,i.jsx)("li",{children:"AWS & web servers"}),(0,i.jsx)("li",{children:"Arduino & embedded computing"}),(0,i.jsx)("li",{children:"Live data visualization"})]}),(0,i.jsxs)("p",{children:["I'm still in the process of bringing my previous employments into this site, so in the meantime you can see ",(0,i.jsx)("a",{href:f,children:"my old CV here."})]})]})},p=t(5317),y=[{title:"Email",url:"mailto:edeetee@gmail.com",mdiPath:p.bn2},{title:"Optiphonic",url:"https://instagram.com/optiphonic",mdiPath:p.N_z},{title:"Github",url:"https://github.com/edeetee",mdiPath:p.LcO},{title:"Source code",url:"https://github.com/edeetee/edeetee.github.io",mdiPath:p.Nnu}],g=function(){return(0,i.jsx)("div",{children:y.map((function(e,n){return(0,i.jsxs)("a",{href:e.url,style:{display:"flex",flexDirection:"row",alignItems:"center",margin:"6px 0"},children:[(0,i.jsx)("svg",{style:{width:"18px",height:"18px",margin:"auto 0"},viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:e.mdiPath})}),(0,i.jsx)("h4",{style:{margin:"auto 0",paddingLeft:"4px"},children:e.title})]},n)}))})},w=function(e){var n=e.options,t=e.selected,r=e.onSelected;return(0,i.jsx)("div",{children:n.map((function(e,n){var o=t==e;return(0,i.jsx)("a",{onClick:function(){return r(e)},className:o?"selected":"",children:(0,i.jsx)("h2",{style:{fontWeight:o?"bold":"inherit",borderLeft:"solid",borderWidth:1,paddingLeft:8},children:e.label})},n)}))})},b=t(4314),j=t(5055),k=t(5507),z=t(8343);function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){C(e,n,t[n])}))}return e}var S=function(e){return(0,i.jsx)("img",_({},e,{style:_({width:"100%",height:"100%",objectFit:"contain"},e.style)}))},I=[{title:"This website (2022)",content:(0,i.jsx)("p",{children:"I wanted to update my website to make it easier to update content and showcase my generative art. I want to speak through my art and my words."})},{title:"Optiphonic (2020+)",url:"http://instagram.com/optiphonic",content:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{width:"100%",display:"flex"},children:(0,i.jsx)("iframe",{style:{margin:"0 auto",border:"none"},width:"320px",height:"320px",src:"https://mega.nz/embed/bYYUiTqA#3ZUu6S5wuDsjtp76TwF-P8t_0-rutFbiomdxRzVPJt8",allowFullScreen:!0})}),(0,i.jsxs)("p",{children:["I have been performing visual art at festivals and music events under the name Optiphonic. Many years ago I was inspired by music visualizers in winamp and iTunes, since then I have created my own and started performing them for different events. Check out some of my renders and performances ",(0,i.jsx)("a",{href:"https://instagram.com/optiphonic",children:"on instagram"}),"."]}),(0,i.jsxs)("p",{children:["With this work, I'm currently developing tools that allow me to bring the surfaces of the real world into my generative worlds. I'm lucky to collaborate with some other awesome artists in this work and I hope to develop even larger collaborative things in the future! ",(0,i.jsx)("a",{href:"mailto:edeetee@gmail.com",children:"Email me"})," if you want to collab :)"]})]})},{title:"TASKA Prosthetics (2020)",content:(0,i.jsx)("p",{children:"Worked for TASKA Prosthetics to update and maintain their phone app. I went into the job desiring to work with patients and design software that aligned with research into how to best assist users. The role ended up being more software engineering that I desired so I moved on after a year."})},{title:"Blind Foundation Alexa Scholarship (2018/19)",content:(0,i.jsxs)("p",{children:["As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontend to ",(0,i.jsx)("a",{href:"http://www.eventfinda.co.nz",children:"eventfinda"})," instead of assistance with transport or blind foundation communications."]})},{title:"Pictocraft (2019)",url:"https://github.com/edeetee/pictocraft",content:(0,i.jsxs)("div",{children:[(0,i.jsx)(S,{src:z}),(0,i.jsxs)("p",{children:["For my final project at Victoria University, I carried out independent research where I created a modification of the game ",(0,i.jsx)("a",{href:"http://www.minecraft.net",children:"Minecraft"})," in order to give communication abilities to people with language difficulties. I integrated an existing English to Picograph system into the game to translate received text into images and made a web interface to allow communicating back by pressing buttons on a tablet. It's not 100% accurate, but the ability to communicate ideas like \u201cI want to build a brick house on a hill\u201d can give users a lot more depth than they had otherwise."]})]})},{title:"Scutter - Asymmetric VR (2019)",url:"https://github.com/edeetee/scutter",content:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(S,{style:{width:"50%",height:"50%"},src:b}),(0,i.jsx)(S,{style:{width:"50%",height:"50%"},src:j})]}),(0,i.jsx)("p",{children:"For a university game design course, I designed a multiplayer game best described as blind mans bluff in VR. Up to two players hold a controller each and one player dons the headset. As the controller players move around, a corresponding object in virtual space follows their movements. The VR player's goal is find the objects that represent the controllers moving around and take the controller from the other players, pressing a button to verify. While this happens, the controller players are getting vibrations that guide them to goals in space, with the aim to gain as many points as possible."})]})},{title:"Misc Experiments (2017/18)",content:(0,i.jsxs)("div",{children:["Here's a collection of small experiments that I want to keep around",(0,i.jsx)("a",{href:"https://bl.ocks.org/edeetee",children:(0,i.jsx)("h4",{children:"All Uni CC Projects"})}),(0,i.jsx)("a",{href:"http://bl.ocks.org/edeetee/7324d937d2230ebd5e62d9db425732ac/3136f1ec2b489d1791881a2fee1b0a15e8be4a1d",children:(0,i.jsx)("h4",{children:"Infinite Clock"})}),(0,i.jsx)("a",{href:"http://bl.ocks.org/edeetee/6ff4a260e77466f45231d15c53c66160/08fd98cc603e279051dbdd5694013757dc772d21",children:(0,i.jsx)("h4",{children:"Particles"})}),(0,i.jsx)("a",{href:"https://medium.com/@edeetee/live-style-transfer-modulated-by-audio-frequency-analysis-for-edm-events-4a76acabd029",children:(0,i.jsx)("h4",{children:"Audio modulated style transfer"})})]})},{title:"Create and Capture for Garry's Mod (2015)",url:"https://steamcommunity.com/sharedfiles/filedetails/?id=389065555",content:(0,i.jsxs)("div",{children:[(0,i.jsx)(S,{src:k}),(0,i.jsx)("p",{children:"With my friend Tom Lewis (now a practicing game designer), we build a multiplayer gamemode for the popular game platform Garry's Mod. We did a lot of user testing with our friends and learnt a lot about collaborative and design driven development. The game ended up being a lot of fun and had several thousand downloads."})]})}],A=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"I am passionate about using technology intentionally and consciously. Here is a collection of my favorite projects."}),(e=I,(0,i.jsx)(i.Fragment,{children:e.map((function(e,n){return(0,i.jsxs)("div",{children:[null!=e.url?(0,i.jsx)("a",{href:e.url,children:(0,i.jsx)("h3",{children:e.title})}):(0,i.jsx)("h3",{children:e.title}),e.content]},n)}))}))]});var e},D=t(1891),P=t.n(D);function U(e,n,t,i,r,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(i,r)}var L=[{page:(0,i.jsx)(A,{}),label:"Portfolio"},{page:(0,i.jsx)(m,{}),label:"Work"}],T=function(){var e=(0,r.useState)(void 0),n=e[0],t=e[1],o=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,i.jsxs)("div",{className:P().responsiveDoubleCol,children:[(0,i.jsxs)("div",{ref:o,className:P().responsiveStickyMenu,children:[(0,i.jsx)(v,{}),(0,i.jsx)(w,{options:L,selected:n,onSelected:function(){var e,i=(e=x().mark((function e(i){var r,s,c,l,u,d;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((c=i!=n)?i:void 0),e.next=5,new Promise((function(e){return requestAnimationFrame(e)}));case 5:c&&(null===(r=o.current)||void 0===r?void 0:r.offsetTop)!=(null===(s=a.current)||void 0===s?void 0:s.offsetTop)&&(d=null===(u=null===(l=a.current)||void 0===l?void 0:l.getBoundingClientRect())||void 0===u?void 0:u.top,scrollTo({top:d,behavior:"smooth"}));case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){U(o,i,r,a,s,"next",e)}function s(e){U(o,i,r,a,s,"throw",e)}a(void 0)}))});return function(e){return i.apply(this,arguments)}}()}),(0,i.jsx)(g,{})]}),(0,i.jsx)("div",{style:{display:n?"initial":"none"},className:P().separator}),(0,i.jsxs)("div",{ref:a,style:{maxWidth:600,justifySelf:"center"},children:[(0,i.jsx)("h1",{children:null===n||void 0===n?void 0:n.label}),null===n||void 0===n?void 0:n.page]}),(0,i.jsx)("div",{style:{margin:"0 auto"}})]})},E=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.default,{children:[(0,i.jsx)("title",{children:"Edward Taylor"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,i.jsx)(u,{}),(0,i.jsx)(T,{})]})}},1891:function(e){e.exports={responsiveDoubleCol:"main_responsiveDoubleCol__eVszz",responsiveStickyMenu:"main_responsiveStickyMenu__3Jw3B",separator:"main_separator__J7GZ1"}},9008:function(e,n,t){e.exports=t(3121)},4327:function(e,n,t){"use strict";e.exports=t.p+"static/media/cv.7e799a7c.pdf"},5507:function(e,n,t){"use strict";e.exports=t.p+"static/media/createAndCapture.8aa8d632.webp"},8343:function(e,n,t){"use strict";e.exports=t.p+"static/media/pictocraft.ed499368.webp"},4314:function(e,n,t){"use strict";e.exports=t.p+"static/media/scutter1.c723360f.webp"},5055:function(e,n,t){"use strict";e.exports=t.p+"static/media/scutter2.cc7da490.webp"}},function(e){e.O(0,[511,702,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);