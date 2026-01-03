System.register("chunks:///_virtual/action.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,i,o,a,r,u,c,s,l,p,h;return{setters:[function(n){t=n.applyDecoratedDescriptor,e=n.inheritsLoose,i=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){a=n.cclegacy,r=n._decorator,u=n.Label,c=n.AudioSource,s=n.SkeletalAnimation,l=n.input,p=n.Input,h=n.Component}],execute:function(){var f,y,m,d,g;a._RF.push({},"72fa1a9fEpBroN/JiZ/Q/1q","action",void 0);var v=r.ccclass,_=r.property;n("action",(f=v("action"),y=_(u),f((g=t((d=function(n){function t(){for(var t,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))||this).anim=null,t.sound=null,i(t,"label",g,o(t)),t.count=0,t}e(t,n);var a=t.prototype;return a.start=function(){var n=this;this.sound=this.node.getComponent(c),this.anim=this.node.getComponent(s),this.anim.play("Punch_Enter"),l.on(p.EventType.TOUCH_END,(function(t){n.anim.getState("Punch_Cross").isPlaying||(n.anim.play("Punch_Cross"),n.sound.play(),n.anim.getState("Punch_Cross").repeatCount=1,n.anim.on(s.EventType.FINISHED,(function(){n.anim.stop(),n.anim.play("Punch_Enter")}),n),n.count++,n.label.string="Punches: "+n.count)}),this)},a.update=function(n){},t}(h)).prototype,"label",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=d))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./action.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});