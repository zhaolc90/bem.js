'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var BEM=function(){function BEM(){_classCallCheck(this,BEM);}_createClass(BEM,null,[{key:'getBEMNode',value:function getBEMNode(block,element,modifier){var selector='.'+BEM.getBEMClassName(block,element,modifier);return document.querySelector(selector);}},{key:'getBEMNodes',value:function getBEMNodes(block,element,modifier){var selector='.'+BEM.getBEMClassName(block,element,modifier);return document.querySelectorAll(selector);}},{key:'getChildBEMNode',value:function getChildBEMNode(node,block,element,modifier){var selector='.'+BEM.getBEMClassName(block,element,modifier);return node.querySelector(selector);}},{key:'getChildBEMNodes',value:function getChildBEMNodes(node,block,element,modifier){var selector='.'+BEM.getBEMClassName(block,element,modifier);return node.querySelectorAll(selector);}},{key:'getBEMClassName',value:function getBEMClassName(block,element,modifier){var className=block;if(element){className+='__'+element;}if(modifier){className+='--'+modifier;}return className;}},{key:'addModifier',value:function addModifier(node,modifier){var classNames=node.className.split(' '),modifierClassNames='';for(var i in classNames){var className=classNames[i],modifierClassName=className+'--'+modifier;if(className.match('--')){continue;}if(node.className.match(modifierClassName)){continue;}modifierClassNames+=className+'--'+modifier+' ';}node.className=(node.className.trim()+' '+modifierClassNames).trim();}},{key:'removeModifier',value:function removeModifier(node,modifier){var regex=new RegExp('[^^\\s]+?--'+modifier+'\\s?','g');node.className=node.className.replace(regex,'').trim();}},{key:'toggleModifier',value:function toggleModifier(node,modifier){if(BEM.hasModifier(node,modifier)){BEM.removeModifier(node,modifier);return;}BEM.addModifier(node,modifier);}},{key:'hasModifier',value:function hasModifier(node,modifier){var regex=new RegExp('--'+modifier+'(?=\\s|$)','g');return node.className.match(regex);}}]);return BEM;}();exports.default=BEM;exports.BEM=BEM;
//# sourceMappingURL=bem.js.map
