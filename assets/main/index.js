System.register("chunks:///_virtual/action.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,a,i,o,u,r,c,s,l,p,h,m;return{setters:[function(n){t=n.applyDecoratedDescriptor,e=n.inheritsLoose,a=n.initializerDefineProperty,i=n.assertThisInitialized},function(n){o=n.cclegacy,u=n._decorator,r=n.Label,c=n.AudioSource,s=n.SkeletalAnimation,l=n.input,p=n.Input,h=n.EventMouse,m=n.Component}],execute:function(){var y,g,P,_,f;o._RF.push({},"72fa1a9fEpBroN/JiZ/Q/1q","action",void 0);var E=u.ccclass,d=u.property;n("action",(y=E("action"),g=d(r),y((f=t((_=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),u=0;u<e;u++)o[u]=arguments[u];return(t=n.call.apply(n,[this].concat(o))||this).anim=null,t.sound=null,a(t,"label",f,i(t)),t.count=0,t}e(t,n);var o=t.prototype;return o.start=function(){var n=this;this.sound=this.node.getComponent(c),this.anim=this.node.getComponent(s),this.anim.play("Punch_Enter"),l.on(p.EventType.MOUSE_DOWN,(function(t){t.getButton()===h.BUTTON_LEFT&&(n.anim.getState("Punch_Cross").isPlaying||(n.anim.play("Punch_Cross"),n.sound.play(),n.anim.getState("Punch_Cross").repeatCount=1,n.anim.on(s.EventType.FINISHED,(function(){n.anim.stop(),n.anim.play("Punch_Enter")}),n),n.count++,n.label.string="Punches: "+n.count)),t.getButton()===h.BUTTON_RIGHT&&(n.anim.getState("Punch_Jab").isPlaying||(n.anim.play("Punch_Jab"),n.sound.play(),n.anim.getState("Punch_Jab").repeatCount=1,n.anim.on(s.EventType.FINISHED,(function(){n.anim.stop(),n.anim.play("Punch_Enter")}),n),n.count++,n.label.string="Punches: "+n.count))}),this),l.on(p.EventType.TOUCH_END,(function(t){n.anim.getState("Punch_Cross").isPlaying||(n.anim.play("Punch_Cross"),n.sound.play(),n.anim.getState("Punch_Cross").repeatCount=1,n.anim.on(s.EventType.FINISHED,(function(){n.anim.stop(),n.anim.play("Punch_Enter")}),n),n.count++,n.label.string="Punches: "+n.count)}),this)},o.update=function(n){},t}(m)).prototype,"label",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=_))||P));o._RF.pop()}}}));

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