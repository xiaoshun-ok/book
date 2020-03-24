var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'nav'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'bottom-nav-box']],[[2,'?:'],[[2,'==='],[[7],[3,'select']],[[7],[3,'index']]],[1,'bottom-nav-active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickNav']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'&&'],[[6],[[7],[3,'nav']],[3,'icon']],[[2,'!'],[[6],[[7],[3,'nav']],[3,'src']]]])
Z([3,'__l'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'select']],[[7],[3,'index']]],[[7],[3,'activeFontColor']],[1,'']])
Z([3,'24'])
Z([[6],[[7],[3,'nav']],[3,'icon']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'&&'],[[6],[[7],[3,'nav']],[3,'src']],[[2,'!'],[[6],[[7],[3,'nav']],[3,'icon']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bubble'])
Z([[2,'+'],[[2,'+'],[1,'float:'],[[7],[3,'isSelf']]],[1,';']])
Z([[2,'==='],[[6],[[7],[3,'row']],[3,'message_type']],[1,'text']])
Z([[2,'==='],[[6],[[7],[3,'row']],[3,'message_type']],[1,'voice']])
Z([3,'__e'])
Z([3,'voice-message'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'playAudio']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'row']]]]]]]]]]])
Z([3,'__l'])
Z([3,'22'])
Z([3,'caret-square-o-right'])
Z([3,'1'])
Z([[2,'==='],[[6],[[7],[3,'row']],[3,'message_type']],[1,'img']])
Z([[2,'==='],[[6],[[7],[3,'row']],[3,'message_type']],[1,'text1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showOper']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'navTabBox'])
Z([[2,'<='],[[6],[[7],[3,'tabTitle']],[3,'length']],[1,5]])
Z([[2,'>'],[[6],[[7],[3,'tabTitle']],[3,'length']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-swipe-action'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[1,'uni-swipe-action__container']],[[2,'?:'],[[7],[3,'isShowBtn']],[1,'uni-swipe-action--show'],[1,'']]]])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'bindClickCont']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transformX']]],[1,';']],[[2,'+'],[[2,'+'],[1,'-webkit-transform:'],[[7],[3,'transformX']]],[1,';']]])
Z([[7],[3,'isShowBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideDrawer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([3,'msg-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltoupper']],[[4],[[5],[[4],[[5],[[5],[1,'loadHistory']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollToView']])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnimation']])
Z([3,'true'])
Z([3,'50'])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'privateMassagerList']])
Z(z[11])
Z(z[12])
Z([[2,'+'],[1,'message'],[[7],[3,'index']]])
Z([[2,'==='],[[6],[[7],[3,'row']],[3,'send_id']],[[6],[[7],[3,'user_info']],[3,'id']]])
Z([3,'__l'])
Z([[7],[3,'row']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[4],[[5],[[5],[1,'input-box']],[[7],[3,'popupLayerClass']]]])
Z(z[0])
Z([3,'voice'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchVoice']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[18])
Z([3,'24'])
Z([[2,'?:'],[[7],[3,'isVoice']],[1,'tasks'],[1,'microphone']])
Z([3,'3'])
Z(z[0])
Z([3,'em'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseEmoji']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[18])
Z([3,'28'])
Z([3,'smile-o '])
Z([3,'4'])
Z([3,'list'])
Z(z[0])
Z([3,'box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[18])
Z([3,'32'])
Z([3,'picture-o'])
Z([3,'5'])
Z(z[0])
Z(z[41])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'camera']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[18])
Z([3,'36'])
Z([3,'mobile'])
Z([3,'6'])
Z(z[0])
Z(z[41])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'handRedEnvelopes']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[18])
Z(z[44])
Z([3,'send'])
Z([3,'7'])
Z(z[18])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([[7],[3,'showPopup']])
Z([3,'bottom'])
Z([3,'8'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeTab']],[[4],[[5],[[4],[[5],[1,'changeTab']]]]]]]]])
Z([3,'navTab'])
Z([[7],[3,'tabTitle']])
Z([3,'1'])
Z(z[1])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'min-height:80vh;'])
Z([3,'true'])
Z([3,'height:100%;'])
Z([[2,'!=='],[[6],[[7],[3,'requestRelationList']],[3,'length']],[1,0]])
Z(z[0])
Z([3,'flexlist-img  flex flex-jc-center flex-ai-center'])
Z([3,'green'])
Z([3,'30'])
Z([3,'user-plus'])
Z([3,'2'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'relationList']])
Z([3,'id'])
Z([[6],[[7],[3,'privateMassagerTips']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[11])
Z(z[12])
Z(z[0])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'users'])
Z([3,'3'])
Z([3,'__i1__'])
Z(z[21])
Z([[7],[3,'groupRoomList']])
Z(z[23])
Z([3,'flexlist-item'])
Z(z[0])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[31])
Z([[2,'+'],[1,'4-'],[[7],[3,'__i1__']]])
Z(z[24])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClick']],[[4],[[5],[[4],[[5],[1,'changeNav']]]]]]]]])
Z([[7],[3,'bottomNavList']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'margin-bottom:118rpx;'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'userList']])
Z([3,'id'])
Z([3,'flexlist-item'])
Z([[6],[[7],[3,'item']],[3,'isSelf']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addFriends']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'userList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z([3,'#28a745'])
Z([3,'24'])
Z([3,'user-plus '])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i0__']]])
Z(z[9])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClick']],[[4],[[5],[[4],[[5],[1,'changeNav']]]]]]]]])
Z([[7],[3,'bottomNavList']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasList']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClick']],[[4],[[5],[[4],[[5],[1,'changeNav']]]]]]]]])
Z([[7],[3,'bottomNavList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loginBg'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'#FFFFFF'])
Z([3,'18'])
Z([3,'user'])
Z([3,'1'])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'briefcase'])
Z([3,'2'])
Z(z[3])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([[7],[3,'showPopup']])
Z([3,'center'])
Z([3,'3'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClick']],[[4],[[5],[[4],[[5],[1,'changeNav']]]]]]]]])
Z([[7],[3,'bottomNavList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'figureurl']])
Z([3,'width:50vw;height:50vw;'])
Z([3,'__l'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'myUpload']]]]]]]]])
Z([3,'500rpx'])
Z(z[7])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([[7],[3,'showPopup']])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/botton-nav/botton-nav.wxml','./components/chat-message/chat-message.wxml','./components/cropper/cropper.wxml','./components/fa-icon/fa-icon.wxml','./components/nav-tab/nav-tab.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-swipe-action/uni-swipe-action.wxml','./pages/chat/chat.wxml','./pages/chat/contact.wxml','./pages/chat/group-chat.wxml','./pages/chat/match.wxml','./pages/chat/record.wxml','./pages/chat/request-relation.wxml','./pages/con_list/con_list.wxml','./pages/index/index.wxml','./pages/login/findpwd.wxml','./pages/login/index.wxml','./pages/soul/detail.wxml','./pages/soul/tags.wxml','./pages/soul/user.wxml','./pages/treehole/square.wxml','./pages/user/index.wxml','./pages/user/info.wxml','./pages/user/register.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,7,fE,oD,gg)){cI.wxVkey=1
var lK=_mz(z,'fa-icon',['bind:__l',8,'color',1,'size',2,'type',3,'vueId',4],[],fE,oD,gg)
_(cI,lK)
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,13,fE,oD,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
cI.wxXCkey=3
oJ.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=4
_2z(z,2,xC,e,s,gg,oB,'nav','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var tM=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,2,e,s,gg)){eN.wxVkey=1
}
else{eN.wxVkey=2
var bO=_v()
_(eN,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
var oP=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var xQ=_mz(z,'fa-icon',['bind:__l',7,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(oP,xQ)
_(bO,oP)
}
else{bO.wxVkey=2
var oR=_v()
_(bO,oR)
if(_oz(z,11,e,s,gg)){oR.wxVkey=1
}
else{oR.wxVkey=2
var fS=_v()
_(oR,fS)
if(_oz(z,12,e,s,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
}
oR.wxXCkey=1
}
bO.wxXCkey=1
bO.wxXCkey=3
}
eN.wxXCkey=1
eN.wxXCkey=3
_(r,tM)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hU=_v()
_(r,hU)
if(_oz(z,0,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,1,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,2,e,s,gg)){aZ.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
_(r,oX)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var e2=_v()
_(r,e2)
if(_oz(z,0,e,s,gg)){e2.wxVkey=1
var b3=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var o4=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var x5=_n('slot')
_(o4,x5)
_(b3,o4)
_(e2,b3)
}
e2.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var h9=_mz(z,'view',['bindtap',1,'bindtouchcancel',1,'bindtouchend',2,'bindtouchmove',3,'bindtouchstart',4,'class',5,'data-event-opts',6,'style',7],[],e,s,gg)
var o0=_n('slot')
_(h9,o0)
_(f7,h9)
var c8=_v()
_(f7,c8)
if(_oz(z,9,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(r,f7)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oBB=_n('view')
var lCB=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var aDB=_mz(z,'scroll-view',['bindscrolltoupper',3,'class',1,'data-event-opts',2,'scrollIntoView',3,'scrollTop',4,'scrollWithAnimation',5,'scrollY',6,'upperThreshold',7],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
var eFB=function(oHB,bGB,xIB,gg){
var fKB=_mz(z,'view',['class',15,'id',1],[],oHB,bGB,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,17,oHB,bGB,gg)){cLB.wxVkey=1
var hMB=_mz(z,'chat-message',['bind:__l',18,'row',1,'vueId',2],[],oHB,bGB,gg)
_(cLB,hMB)
}
else{cLB.wxVkey=2
var oNB=_mz(z,'chat-message',['bind:__l',21,'row',1,'vueId',2],[],oHB,bGB,gg)
_(cLB,oNB)
}
cLB.wxXCkey=1
cLB.wxXCkey=3
cLB.wxXCkey=3
_(xIB,fKB)
return xIB
}
tEB.wxXCkey=4
_2z(z,13,eFB,e,s,gg,tEB,'row','index','index')
_(lCB,aDB)
_(oBB,lCB)
var cOB=_n('view')
_rz(z,cOB,'class',24,e,s,gg)
var oPB=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],e,s,gg)
var lQB=_mz(z,'fa-icon',['bind:__l',28,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],e,s,gg)
var tSB=_mz(z,'fa-icon',['bind:__l',35,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(aRB,tSB)
_(cOB,aRB)
_(oBB,cOB)
var eTB=_n('view')
_rz(z,eTB,'class',39,e,s,gg)
var bUB=_mz(z,'view',['bindtap',40,'class',1,'data-event-opts',2],[],e,s,gg)
var oVB=_mz(z,'fa-icon',['bind:__l',43,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(bUB,oVB)
_(eTB,bUB)
var xWB=_mz(z,'view',['bindtap',47,'class',1,'data-event-opts',2],[],e,s,gg)
var oXB=_mz(z,'fa-icon',['bind:__l',50,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(xWB,oXB)
_(eTB,xWB)
var fYB=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],e,s,gg)
var cZB=_mz(z,'fa-icon',['bind:__l',57,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(fYB,cZB)
_(eTB,fYB)
_(oBB,eTB)
var h1B=_mz(z,'uni-popup',['bind:__l',61,'class',1,'data-ref',2,'show',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(oBB,h1B)
_(r,oBB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var c3B=_n('view')
var o4B=_mz(z,'nav-tab',['bind:__l',0,'bind:changeTab',1,'class',1,'data-event-opts',2,'data-ref',3,'tabTitle',4,'vueId',5],[],e,s,gg)
_(c3B,o4B)
var l5B=_mz(z,'swiper',['bindchange',7,'current',1,'data-event-opts',2,'style',3],[],e,s,gg)
var a6B=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',11,'style',1],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,13,e,s,gg)){t7B.wxVkey=1
var e8B=_mz(z,'fa-icon',['bind:__l',14,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(t7B,e8B)
}
var b9B=_v()
_(a6B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_v()
_(fCC,hEC)
if(_oz(z,24,oBC,xAC,gg)){hEC.wxVkey=1
}
hEC.wxXCkey=1
return fCC
}
b9B.wxXCkey=2
_2z(z,22,o0B,e,s,gg,b9B,'item','__i0__','id')
t7B.wxXCkey=1
t7B.wxXCkey=3
_(l5B,a6B)
var oFC=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',25,'style',1],[],e,s,gg)
var cGC=_mz(z,'fa-icon',['bind:__l',27,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oFC,cGC)
var oHC=_v()
_(oFC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_n('view')
_rz(z,oNC,'class',37,tKC,aJC,gg)
var oPC=_mz(z,'fa-icon',['bind:__l',38,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],tKC,aJC,gg)
_(oNC,oPC)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,44,tKC,aJC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=4
_2z(z,35,lIC,e,s,gg,oHC,'item','__i1__','id')
_(l5B,oFC)
_(c3B,l5B)
var fQC=_mz(z,'bottom-nav',['bind:__l',45,'bind:onClick',1,'data-event-opts',2,'list',3,'vueId',4],[],e,s,gg)
_(c3B,fQC)
_(r,c3B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oTC=_n('view')
_rz(z,oTC,'style',0,e,s,gg)
var cUC=_v()
_(oTC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_n('view')
_rz(z,b1C,'class',5,aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,6,aXC,lWC,gg)){o2C.wxVkey=1
}
else{o2C.wxVkey=2
var x3C=_mz(z,'view',['bindtap',7,'data-event-opts',1],[],aXC,lWC,gg)
var o4C=_mz(z,'fa-icon',['bind:__l',9,'color',1,'size',2,'type',3,'vueId',4],[],aXC,lWC,gg)
_(x3C,o4C)
_(o2C,x3C)
}
o2C.wxXCkey=1
o2C.wxXCkey=3
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=4
_2z(z,3,oVC,e,s,gg,cUC,'item','__i0__','id')
var f5C=_mz(z,'bottom-nav',['bind:__l',14,'bind:onClick',1,'data-event-opts',2,'list',3,'vueId',4],[],e,s,gg)
_(oTC,f5C)
_(r,oTC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o8C=_v()
_(r,o8C)
if(_oz(z,0,e,s,gg)){o8C.wxVkey=1
var c9C=_v()
_(o8C,c9C)
if(_oz(z,1,e,s,gg)){c9C.wxVkey=1
}
c9C.wxXCkey=1
}
o8C.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var aBD=_mz(z,'bottom-nav',['bind:__l',0,'bind:onClick',1,'data-event-opts',1,'list',2,'vueId',3],[],e,s,gg)
_(r,aBD)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var xGD=_mz(z,'fa-icon',['bind:__l',3,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oFD,xGD)
var oHD=_mz(z,'fa-icon',['bind:__l',8,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oFD,oHD)
_(bED,oFD)
var fID=_mz(z,'uni-popup',['bind:__l',13,'class',1,'data-ref',2,'show',3,'type',4,'vueId',5,'vueSlots',6],[],e,s,gg)
_(bED,fID)
_(r,bED)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var lOD=_mz(z,'bottom-nav',['bind:__l',0,'bind:onClick',1,'data-event-opts',1,'list',2,'vueId',3],[],e,s,gg)
_(r,lOD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var tQD=_mz(z,'form',['bindsubmit',0,'data-event-opts',1],[],e,s,gg)
var eRD=_mz(z,'cropper',['avatarSrc',2,'avatarStyle',1,'bind:__l',2,'bind:upload',3,'data-event-opts',4,'selHeight',5,'selWidth',6,'vueId',7],[],e,s,gg)
_(tQD,eRD)
_(r,tQD)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oTD=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'show',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(r,oTD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/chat/chat","pages/chat/contact","pages/chat/group-chat","pages/chat/match","pages/chat/record","pages/chat/request-relation","pages/login/findpwd","pages/login/index","pages/user/index","pages/user/info","pages/user/register","pages/treehole/square","pages/soul/tags","pages/soul/user","pages/soul/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"顺小站","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"工具","compilerVersion":"2.6.1","usingComponents":{"fa-icon":"/components/fa-icon/fa-icon","bottom-nav":"/components/botton-nav/botton-nav"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/botton-nav/botton-nav.json']={"usingComponents":{"fa-icon":"/components/fa-icon/fa-icon"},"component":true};
__wxAppCode__['components/botton-nav/botton-nav.wxml']=$gwx('./components/botton-nav/botton-nav.wxml');

__wxAppCode__['components/chat-message/chat-message.json']={"component":true,"usingComponents":{"fa-icon":"/components/fa-icon/fa-icon"}};
__wxAppCode__['components/chat-message/chat-message.wxml']=$gwx('./components/chat-message/chat-message.wxml');

__wxAppCode__['components/cropper/cropper.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/cropper/cropper.wxml']=$gwx('./components/cropper/cropper.wxml');

__wxAppCode__['components/fa-icon/fa-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/fa-icon/fa-icon.wxml']=$gwx('./components/fa-icon/fa-icon.wxml');

__wxAppCode__['components/nav-tab/nav-tab.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/nav-tab/nav-tab.wxml']=$gwx('./components/nav-tab/nav-tab.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-swipe-action/uni-swipe-action.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-swipe-action/uni-swipe-action.wxml']=$gwx('./components/uni-swipe-action/uni-swipe-action.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarTitleText":"聊天","usingComponents":{"chat-message":"/components/chat-message/chat-message","fa-icon":"/components/fa-icon/fa-icon","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/chat/contact.json']={"navigationBarTitleText":"好友","usingComponents":{"fa-icon":"/components/fa-icon/fa-icon","bottom-nav":"/components/botton-nav/botton-nav","uni-swipe-action":"/components/uni-swipe-action/uni-swipe-action","nav-tab":"/components/nav-tab/nav-tab"}};
__wxAppCode__['pages/chat/contact.wxml']=$gwx('./pages/chat/contact.wxml');

__wxAppCode__['pages/chat/group-chat.json']={"navigationBarTitleText":"总群","usingComponents":{}};
__wxAppCode__['pages/chat/group-chat.wxml']=$gwx('./pages/chat/group-chat.wxml');

__wxAppCode__['pages/chat/match.json']={"navigationBarTitleText":"大厅","enablePullDownRefresh":true,"usingComponents":{"fa-icon":"/components/fa-icon/fa-icon","bottom-nav":"/components/botton-nav/botton-nav"}};
__wxAppCode__['pages/chat/match.wxml']=$gwx('./pages/chat/match.wxml');

__wxAppCode__['pages/chat/record.json']={"navigationBarTitleText":"聊天记录","usingComponents":{}};
__wxAppCode__['pages/chat/record.wxml']=$gwx('./pages/chat/record.wxml');

__wxAppCode__['pages/chat/request-relation.json']={"navigationBarTitleText":"请求列表","usingComponents":{}};
__wxAppCode__['pages/chat/request-relation.wxml']=$gwx('./pages/chat/request-relation.wxml');

__wxAppCode__['pages/con_list/con_list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['pages/con_list/con_list.wxml']=$gwx('./pages/con_list/con_list.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{"bottom-nav":"/components/botton-nav/botton-nav","con-list":"/pages/con_list/con_list"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/findpwd.json']={"navigationBarTitleText":"找回密码","usingComponents":{}};
__wxAppCode__['pages/login/findpwd.wxml']=$gwx('./pages/login/findpwd.wxml');

__wxAppCode__['pages/login/index.json']={"navigationBarTitleText":"登录","usingComponents":{"fa-icon":"/components/fa-icon/fa-icon","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/soul/detail.json']={"usingComponents":{}};
__wxAppCode__['pages/soul/detail.wxml']=$gwx('./pages/soul/detail.wxml');

__wxAppCode__['pages/soul/tags.json']={"usingComponents":{}};
__wxAppCode__['pages/soul/tags.wxml']=$gwx('./pages/soul/tags.wxml');

__wxAppCode__['pages/soul/user.json']={"usingComponents":{}};
__wxAppCode__['pages/soul/user.wxml']=$gwx('./pages/soul/user.wxml');

__wxAppCode__['pages/treehole/square.json']={"usingComponents":{}};
__wxAppCode__['pages/treehole/square.wxml']=$gwx('./pages/treehole/square.wxml');

__wxAppCode__['pages/user/index.json']={"navigationBarTitleText":"我的","usingComponents":{"bottom-nav":"/components/botton-nav/botton-nav"}};
__wxAppCode__['pages/user/index.wxml']=$gwx('./pages/user/index.wxml');

__wxAppCode__['pages/user/info.json']={"navigationBarTitleText":"修改用户信息","usingComponents":{"cropper":"/components/cropper/cropper"}};
__wxAppCode__['pages/user/info.wxml']=$gwx('./pages/user/info.wxml');

__wxAppCode__['pages/user/register.json']={"navigationBarTitleText":"注册","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/user/register.wxml']=$gwx('./pages/user/register.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2999:function(n,t,e){"use strict";(function(n,t){e("68e3"),e("921b");var o=r(e("66fd")),u=r(e("8347")),f=r(e("f1c9")),a=r(e("f522"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){i(n,t,e[t])})}return n}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}o.default.config.productionTip=!1,u.default.mpType="app",Object.assign(n,f.default),o.default.prototype.$store=a.default;var l=function(){return e.e("components/fa-icon/fa-icon").then(e.bind(null,"5a9c"))};o.default.component("fa-icon",l);var d=function(){return e.e("components/botton-nav/botton-nav").then(e.bind(null,"0176"))};o.default.component("bottom-nav",d);var s=new o.default(c({store:a.default},u.default));t(s).$mount()}).call(this,e("6e42")["default"],e("6e42")["createApp"])},4071:function(n,t,e){"use strict";var o=e("cc6d"),u=e.n(o);u.a},8347:function(n,t,e){"use strict";e.r(t);var o=e("b1f6");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("4071");var f,a,r,c,i=e("f0c5"),l=Object(i["a"])(o["default"],f,a,!1,null,null,null,!1,r,c);t["default"]=l.exports},b1f6:function(n,t,e){"use strict";e.r(t);var o=e("ddef"),u=e.n(o);for(var f in o)"default"!==f&&function(n){e.d(t,n,function(){return o[n]})}(f);t["default"]=u.a},cc6d:function(n,t,e){},ddef:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(e("f5f6")),u=f(e("a7a1"));function f(n){return n&&n.__esModule?n:{default:n}}var a={mixins:[o.default,u.default],onLaunch:function(){},onShow:function(){var t=plus.push.getClientInfo().clientid;n("log","onShow",JSON.stringify(t)," at App.vue:13")},onHide:function(){}};t.default=a}).call(this,e("0de9")["default"])}},[["2999","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, c = n[0], p = n[1], u = n[2], s = 0, l = []; s < c.length; s++) {
      r = c[s], a[r] && l.push(a[r][0]), a[r] = 0;
    }

    for (o in p) {
      Object.prototype.hasOwnProperty.call(p, o) && (e[o] = p[o]);
    }

    f && f(n);

    while (l.length) {
      l.shift()();
    }

    return i.push.apply(i, u || []), t();
  }

  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], o = !0, r = 1; r < t.length; r++) {
        var c = t[r];
        0 !== a[c] && (o = !1);
      }

      o && (i.splice(n--, 1), e = p(p.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      i = [];

  function c(e) {
    return p.p + "" + e + ".js";
  }

  function p(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, p), t.l = !0, t.exports;
  }

  p.e = function (e) {
    var n = [],
        t = {
      "components/botton-nav/botton-nav": 1,
      "components/fa-icon/fa-icon": 1,
      "components/uni-popup/uni-popup": 1,
      "components/nav-tab/nav-tab": 1,
      "components/uni-swipe-action/uni-swipe-action": 1,
      "components/cropper/cropper": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/botton-nav/botton-nav": "components/botton-nav/botton-nav",
        "components/fa-icon/fa-icon": "components/fa-icon/fa-icon",
        "pages/con_list/con_list": "pages/con_list/con_list",
        "components/chat-message/chat-message": "components/chat-message/chat-message",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/nav-tab/nav-tab": "components/nav-tab/nav-tab",
        "components/uni-swipe-action/uni-swipe-action": "components/uni-swipe-action/uni-swipe-action",
        "components/cropper/cropper": "components/cropper/cropper"
      }[e] || e) + ".wxss", a = p.p + o, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
        var u = i[c],
            s = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (s === o || s === a)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (c = 0; c < l.length; c++) {
        u = l[c], s = u.getAttribute("data-href");
        if (s === o || s === a) return n();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var o = n && n.target && n.target.src || a,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        i.request = o, delete r[e], f.parentNode.removeChild(f), t(i);
      }, f.href = a;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var i = new Promise(function (n, t) {
        o = a[e] = [n, t];
      });
      n.push(o[2] = i);
      var u,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, p.nc && s.setAttribute("nonce", p.nc), s.src = c(e), u = function u(n) {
        s.onerror = s.onload = null, clearTimeout(l);
        var t = a[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            i.type = o, i.request = r, t[1](i);
          }

          a[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        u({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = u, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, p.m = e, p.c = o, p.d = function (e, n, t) {
    p.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, p.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, p.t = function (e, n) {
    if (1 & n && (e = p(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (p.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      p.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, p.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return p.d(n, "a", n), n;
  }, p.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, p.p = "/", p.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = u.push.bind(u);
  u.push = n, u = u.slice();

  for (var l = 0; l < u.length; l++) {
    n(u[l]);
  }

  var f = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[o]["apply"](console,e);var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[o](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"1bf7":function(t,e,n){},"1e1e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("5ce8"),i={data:function(){return{isReady:!1}},computed:{isSocketOpen:function(){return this.$store.state.chat.isSocketOpen},ischatOnline:function(){return this.$store.state.chat.isOnline},user_info:function(){return this.$store.state.chat.user_info},token:function(){return this.$store.state.chat.token}},onLoad:function(){this.isSocketOpen&&!this.ischatOnline&&this.init(),this.isSocketOpen&&this.ischatOnline&&this.pageInit&&this.pageInit(),this.isReady=!0},watch:{isSocketOpen:function(t){t&&this.isSocketOpen&&!this.ischatOnline&&this.init()},ischatOnline:function(t){t&&this.pageInit&&this.isReady&&this.pageInit()}},methods:{init:function(){var t=this;this.initUserInfo().then(function(){t.ischatOnline||t.loginChat()})},initUserInfo:function(){var e=this;return new Promise(function(n,r){e.user_info.id?n():t.getStorage({key:"chat_user_info",success:function(t){if(t.data.id&&t.data.token){var r=t.data,i=r.id,o=r.nickname,a=r.figureurl,s=r.token;e.$store.commit("setChatUserInfo",{id:i,nickname:o,figureurl:a}),e.$store.commit("setToken",s),n()}},fail:function(){t.reLaunch({url:"/pages/login/index"})}})})},loginChat:function(){var e=this;t.getStorage({key:"chat_user_info",success:function(n){var i=n.data,o=i.token,a=i.exp,s=new Date;s.getTime();var u={module:r.SocketModul,action:"onOpen",data:{user_info:e.user_info,token:o,exp:a}};t.sendSocketMessage({data:JSON.stringify(u),fail:function(){return e.$store.commit("changeSocket",!1),!1}})},fail:function(){t.reLaunch({url:"/pages/login/index"})}})},sendSocketMessage:function(e){var n=r.SocketModul,i=this;return new Promise(function(r,o){if(!e||!i.isSocketOpen)return!1;if("string"!==typeof e){var a=e,s=a.action,u=a.data,c={module:n,action:s,data:u};e=JSON.stringify(c)}t.sendSocketMessage({data:e,success:function(t){r()},fail:function(){return i.$store.commit("changeSocket",!1),!1}})})}}};e.default=i}).call(this,n("6e42")["default"])},"27a9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{},"pages/chat/chat":{navigationBarTitleText:"聊天"},"pages/chat/contact":{navigationBarTitleText:"好友"},"pages/chat/group-chat":{navigationBarTitleText:"总群"},"pages/chat/match":{navigationBarTitleText:"大厅",enablePullDownRefresh:!0},"pages/chat/record":{navigationBarTitleText:"聊天记录"},"pages/chat/request-relation":{navigationBarTitleText:"请求列表"},"pages/login/findpwd":{navigationBarTitleText:"找回密码"},"pages/login/index":{navigationBarTitleText:"登录"},"pages/user/index":{navigationBarTitleText:"我的"},"pages/user/info":{navigationBarTitleText:"修改用户信息"},"pages/user/register":{navigationBarTitleText:"注册"},"pages/treehole/square":{},"pages/soul/tags":{},"pages/soul/user":{},"pages/soul/detail":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"顺小站",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"2b88":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,i=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,o=p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),a=p("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),s=p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),c=p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),l=p("script,style");function f(t,e){var f,p,d,h=[],v=t;h.last=function(){return this[this.length-1]};while(t){if(p=!0,h.last()&&l[h.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""}),_("",h.last());else if(0==t.indexOf("\x3c!--")?(f=t.indexOf("--\x3e"),f>=0&&(e.comment&&e.comment(t.substring(4,f)),t=t.substring(f+3),p=!1)):0==t.indexOf("</")?(d=t.match(r),d&&(t=t.substring(d[0].length),d[0].replace(r,_),p=!1)):0==t.indexOf("<")&&(d=t.match(n),d&&(t=t.substring(d[0].length),d[0].replace(n,y),p=!1)),p){f=t.indexOf("<");var g=f<0?t:t.substring(0,f);t=f<0?"":t.substring(f),e.chars&&e.chars(g)}if(t==v)throw"Parse Error: "+t;v=t}function y(t,n,r,l){if(n=n.toLowerCase(),a[n])while(h.last()&&s[h.last()])_("",h.last());if(u[n]&&h.last()==n&&_("",n),l=o[n]||!!l,l||h.push(n),e.start){var f=[];r.replace(i,function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:c[e]?e:"";f.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})}),e.start&&e.start(n,f,l)}}function _(t,n){if(n){for(r=h.length-1;r>=0;r--)if(h[r]==n)break}else var r=0;if(r>=0){for(var i=h.length-1;i>=r;i--)e.end&&e.end(h[i]);h.length=r}}_()}function p(t){for(var e={},n=t.split(","),r=0;r<n.length;r++)e[n[r]]=!0;return e}function d(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function h(t){return t.reduce(function(t,e){var n=e.value,r=e.name;return t[r]?t[r]=t[r]+" "+n:t[r]=n,t},{})}function v(e){e=d(e);var n=[],r={node:"root",children:[]};return f(e,{start:function(t,e,i){var o={name:t};if(0!==e.length&&(o.attrs=h(e)),i){var a=n[0]||r;a.children||(a.children=[]),a.children.push(o)}else n.unshift(o)},end:function(e){var i=n.shift();if(i.name!==e&&t("error","invalid state: mismatch end tag"," at components\\chat-message\\html-parser.js:303"),0===n.length)r.children.push(i);else{var o=n[0];o.children||(o.children=[]),o.children.push(i)}},chars:function(t){var e={type:"text",text:t};if(0===n.length)r.children.push(e);else{var i=n[0];i.children||(i.children=[]),i.children.push(e)}},comment:function(t){var e={node:"comment",text:t},r=n[0];r.children||(r.children=[]),r.children.push(e)}}),r.children}var g=v;e.default=g}).call(this,n("0de9")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return A}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return P}),n.d(e,"mapGetters",function(){return C}),n.d(e,"mapActions",function(){return T}),n.d(e,"createNamespacedHelpers",function(){return R});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,l);var f=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){p([],this.root,t)},f.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new c(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,function(e,i){r.register(t.concat(i),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,m(this,i,[],this._modules.root),_(this,i),n.forEach(function(t){return t(e)}),d.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,o={};a(i,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:o}),d.config.silent=s,t.strict&&$(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!o&&!i){var s=j(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){d.set(s,u,r.state)})}var c=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;k(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,i=e.handler||e;O(t,r,i,c)}),r.forEachGetter(function(e,n){var r=a+n;S(t,r,e,c)}),r.forEachChild(function(r,o){m(t,e,n.concat(o),r,i)})}function b(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=x(n,r,i),a=o.payload,s=o.options,u=o.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,i){var o=x(n,r,i),a=o.payload,s=o.options,u=o.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return j(t.state,n)}}}),i}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return u(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function $(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function j(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function x(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function A(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,i=x(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=x(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},h.prototype.subscribe=function(t){return g(t,this._subscribers)},h.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=j(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),y(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var E=M(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=I(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),P=M(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=I(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),C=M(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||I(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),T=M(function(t,e){var n={};return D(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=I(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),R=function(t){return{mapState:E.bind(null,t),mapGetters:C.bind(null,t),mapMutations:P.bind(null,t),mapActions:T.bind(null,t)}};function D(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function I(t,e,n){var r=t._modulesNamespaceMap[n];return r}var N={Store:h,install:A,version:"3.0.1",mapState:E,mapMutations:P,mapGetters:C,mapActions:T,createNamespacedHelpers:R};e["default"]=N},"32ff":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("5ce8");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{showPopup:!1,popupMessage:""}},methods:{goChat:function(e){this.$store.commit("changPrivateiUser",e),t.navigateTo({url:"/pages/chat/chat?id="+e.id})},uploadFile:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"img",a=this.token,s=this.user_info.id;return new Promise(function(u,c){t.uploadFile({url:r.UploadFile+"?type="+o,filePath:e,name:"file",formData:i({token:a,chat_user_id:s},n),success:function(t){var e=t.data,r=n?i({},n):{};"string"===typeof e&&(e=JSON.parse(e)),e.url?(r.url=e.url,u(r)):c({message:"上传失败",data:t})},fail:function(t){c({message:t.errMsg})}})})},sendImage:function(t){var e=this;this.hideDrawer(),this.getImage(t).then(function(t){e.uploadFile(t.path,t).then(function(t){var n=t.url,r=t.width,i=t.height;if(n){var o={action:"sendToUid",data:{send_id:e.user_info.id,receive_id:e.receive_id,message_type:"img",url:n,width:r,height:i,time:(new Date).getTime()}};e.sendSocketMessage(o)}}).catch(function(t){e.popup(t)})}).catch(function(t){e.popup(t)})},getImage:function(e){return new Promise(function(n,r){t.chooseImage({sourceType:[e],count:1,success:function(e){var i=e.tempFiles[0];i.size>102400&&r({message:"图片不能大于100K"}),t.getImageInfo({src:i.path,success:function(t){var e=t.width,r=t.height,o=t.path;n({width:e,height:r,path:o,size:i.size})}})}})})},popup:function(t){var e=this;this.popupMessage=JSON.stringify(t),this.showPopup=!0,setTimeout(function(){return e.showPopup=!1},5e3)}}};e.default=a}).call(this,n("6e42")["default"])},"33c7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("5ce8");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return c(t)||u(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function c(t){if(Array.isArray(t))return t}var l={data:function(){return{}},computed:{no_status:function(){return this.is_mp?1:0}},methods:{_adminUserLogin:function(e){var n=this;t.request({url:r.AdminUserLogin+"?no_status="+n.no_status,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},data:e}).then(function(t){var e=a(t,2),r=e[0],i=e[1];r||!i.data||i.data.code||n.saveUserInfo(i.data)})},saveUserInfo:function(e){var n=e.id,r=e.nickname,i=e.figureurl,o=e.token;this.$store.commit("setChatUserInfo",{id:n,nickname:r,figureurl:i}),this.$store.commit("setToken",o),t.setStorage({key:"chat_user_info",data:e,complete:function(){t.reLaunch({url:"/pages/user/index"})}})},authUserRequest:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(o,a){var s=n.$store.state.chat.token,u=n.$store.state.chat.user_info.id;s&&u&&t.request({url:e,method:"POST",data:i({token:s,chat_user_id:u},r),header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){t.data&&o(t.data)},fail:function(t){a(t)}})})}}};e.default=l}).call(this,n("6e42")["default"])},"549e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.EmojiAll=e.EmojiList=void 0;var r=[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]];e.EmojiList=r;var i=[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"},{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"},{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"},{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"},{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}];e.EmojiAll=i;var o={EmojiList:r,EmojiAll:i};e.default=o},"5ce8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.GetChatRooms=e.BuildChatRoom=e.UploadFile=e.updataUserInfo=e.CheckUserName=e.AdminUserRegister=e.AdminUserLogin=e.MpWeiXinAuth=e.ModuleUrl=e.BaseUrl=e.SocketModul=e.SocketUrl=void 0;var r="ws://39.101.185.133:8202";e.SocketUrl=r;var i="ChatNewService";e.SocketModul=i;var o="http://39.101.185.133";e.BaseUrl=o;var a="/";e.ModuleUrl=a;var s=o+a+"index/chat/chatMiniProgramUser?id=2";e.MpWeiXinAuth=s;var u=o+a+"index/Chat/chatWebUser";e.AdminUserLogin=u;var c=o+a+"index/Chat/register";e.AdminUserRegister=c;var l=o+a+"index/Chat/checkUserName";e.CheckUserName=l;var f=o+a+"index/Chat/updataUserInfo";e.updataUserInfo=f;var p=o+a+"index/Chat/uploadFile";e.UploadFile=p;var d=o+a+"index/Chat/buildChatRoom";e.BuildChatRoom=d;var h=o+a+"index/Chat/getChatRooms";e.GetChatRooms=h;var v={SocketUrl:r,SocketModul:i,BaseUrl:o,ModuleUrl:a,MpWeiXinAuth:s,AdminUserLogin:u,CheckUserName:l,UploadFile:p,BuildChatRoom:d};e.default=v},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,O=w(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/\B([A-Z])/g,j=w(function(t){return t.replace($,"-$1").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var E=Function.prototype.bind?A:x;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function C(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function R(t,e,n){}var D=function(t,e,n){return!1},M=function(t){return t};function I(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return I(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return I(t[n],e[n])})}catch(c){return!1}}function N(t,e){for(var n=0;n<t.length;n++)if(I(t[n],e))return n;return-1}function L(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:R,parsePlatformTagName:M,mustUseProp:D,async:!0,_lifecycleHooks:B},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+F.source+".$_\\d]");function W(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z,J="__proto__"in{},K="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Z&&WXEnvironment.platform.toLowerCase(),Y=K&&window.navigator.userAgent.toLowerCase(),Q=Y&&/msie|trident/.test(Y),tt=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),et=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===X),nt=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ni){}var it=function(){return void 0===z&&(z=!K&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),z},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,lt=0,ft=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=lt++,this.subs=[]};function pt(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function dt(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){_(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var ht=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(ht.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new ht;return e.text=t,e.isComment=!0,e};function yt(t){return new ht(void 0,void 0,void 0,String(t))}function _t(t){var e=new ht(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var kt=Object.getOwnPropertyNames(bt),Ot=!0;function St(t){Ot=t}var $t=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?xt(t,bt,kt):jt(t,bt):xt(t,bt,kt),this.observeArray(t)):this.walk(t)};function jt(t,e){t.__proto__=e}function xt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];H(t,o,e[o])}}function At(t,e){var n;if(u(t)&&!(t instanceof ht))return b(t,"__ob__")&&t.__ob__ instanceof $t?n=t.__ob__:Ot&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new $t(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!i&&At(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!i&&At(e),o.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ct(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}$t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},$t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)At(t[e])};var Rt=q.optionMergeStrategies;function Dt(t,e){if(!e)return t;for(var n,r,i,o=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&l(r)&&l(i)&&Dt(r,i):Pt(t,n,i));return t}function Mt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Dt(r,i):i}:e?t?function(){return Dt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Lt(t,e,n,r){var i=Object.create(t||null);return e?C(i,e):i}Rt.data=function(t,e,n){return n?Mt(t,e,n):e&&"function"!==typeof e?t:Mt(t,e)},B.forEach(function(t){Rt[t]=It}),U.forEach(function(t){Rt[t+"s"]=Lt}),Rt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in C(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return C(i,t),e&&C(i,e),i},Rt.provide=Mt;var Ut=function(t,e){return void 0===e?t:e};function Bt(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=O(i),a[o]={type:null})}else if(l(n))for(var s in n)i=n[s],o=O(s),a[o]=l(i)?i:{type:i};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?C({from:o},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Vt(t,e,n){if("function"===typeof e&&(e=e.options),Bt(e,n),qt(e,n),Ft(e),!e._base&&(e.extends&&(t=Vt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Vt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)b(t,o)||s(o);function s(r){var i=Rt[r]||Ut;a[r]=i(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var o=O(n);if(b(i,o))return i[o];var a=S(o);if(b(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Gt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t],s=Kt(Boolean,i.type);if(s>-1)if(o&&!b(i,"default"))a=!1;else if(""===a||a===j(t)){var u=Kt(String,i.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Wt(r,i,t);var c=Ot;St(!0),At(a),St(c)}return a}function Wt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==zt(e.type)?r.call(t):r}}function zt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return zt(t)===zt(e)}function Kt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Jt(e[n],t))return n;return-1}function Zt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ni){Yt(ni,r,"errorCaptured hook")}}}Yt(t,e,n)}finally{dt()}}function Xt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Zt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ni){Zt(ni,r,i)}return o}function Yt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(ni){ni!==t&&Qt(ni,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!Z||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(R)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ni){Zt(ni,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function le(t){fe(t,ce),ce.clear()}function fe(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof ht)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Xt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function he(t,e,n,i,a,s){var u,c,l,f;for(u in t)c=t[u],l=e[u],f=pe(u),r(c)||(r(l)?(r(c.fns)&&(c=t[u]=de(c,s)),o(f.once)&&(c=t[u]=a(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)r(t[u])&&(f=pe(u),i(f.name,e[u],f.capture))}function ve(t,e,n,o){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(r(a))return n;var s=e.options.mpOptions.externalClasses||[],u=t.attrs,c=t.props;if(i(u)||i(c))for(var l in a){var f=j(l),p=ye(n,c,l,f,!0)||ye(n,u,l,f,!1);p&&n[l]&&-1!==s.indexOf(f)&&o[O(n[l])]&&(n[l]=o[O(n[l])])}return n}function ge(t,e,n,o){var a=e.options.props;if(r(a))return ve(t,e,{},o);var s={},u=t.attrs,c=t.props;if(i(u)||i(c))for(var l in a){var f=j(l);ye(s,c,l,f,!0)||ye(s,u,l,f,!1)}return ve(t,e,s,o)}function ye(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function be(t){return i(t)&&i(t.text)&&a(t.isComment)}function we(t,e){var n,a,u,c,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=l.length-1,c=l[u],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(l[u]=yt(c.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?be(c)?l[u]=yt(c.text+a):""!==a&&l.push(yt(a)):be(a)&&be(c)?l[u]=yt(c.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function ke(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Se(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"===typeof u?u.call(e):u}else 0}}return n}}function $e(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(je)&&delete n[c];return n}function je(t){return t.isComment&&!t.asyncFactory||" "===t.text}function xe(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var u in i={},t)t[u]&&"$"!==u[0]&&(i[u]=Ae(e,u,t[u]))}else i={};for(var c in e)c in i||(i[c]=Ee(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",a),H(i,"$key",s),H(i,"$hasNormal",o),i}function Ae(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function Pe(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r,r,r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r,r,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length,r++,r)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r,r);return i(n)||(n=[]),n._isVList=!0,n}function Ce(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=C(C({},r),n)),i=o(n,this,n._i)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Te(t){return Ht(this.$options,"filters",t,!0)||M}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function De(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Re(i,r):o?Re(o,t):r?j(r)!==e:void 0}function Me(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=j(a);if(!(u in o)&&!(c in o)&&(o[a]=n[a],i)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ie(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Le(r,"__static__"+t,!1),r)}function Ne(t,e,n){return Le(t,"__once__"+e+(n?"_"+n:""),!0),t}function Le(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(l(e)){var n=t.on=t.on?C({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function qe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?qe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Fe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Ne,t._n=v,t._s=h,t._l=Pe,t._t=Ce,t._q=I,t._i=N,t._m=Ie,t._f=Te,t._k=De,t._b=Me,t._v=yt,t._e=gt,t._u=qe,t._g=Be,t._d=Fe,t._p=Ve}function Ge(t,e,r,i,a){var s,u=this,c=a.options;b(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var l=o(c._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Se(c.inject,i),this.slots=function(){return u.$slots||xe(t.scopedSlots,u.$slots=$e(r,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(t.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=xe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var o=on(s,t,e,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return on(s,t,e,n,r,f)}}function We(t,e,r,o,a){var s=t.options,u={},c=s.props;if(i(c))for(var l in c)u[l]=Gt(l,c,e||n);else i(r.attrs)&&Je(u,r.attrs),i(r.props)&&Je(u,r.props);var f=new Ge(r,u,a,o,t),p=s.render.call(null,f._c,f);if(p instanceof ht)return ze(p,r,f.parent,s,f);if(Array.isArray(p)){for(var d=me(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=ze(d[v],r,f.parent,s,f);return h}}function ze(t,e,n,r,i){var o=_t(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Je(t,e){for(var n in e)t[O(n)]=e[n]}He(Ge.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;An(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Tn(n,"onServiceCreated"),Tn(n,"onServiceAttached"),n._isMounted=!0,Tn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Pn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Cn(e,!0):e.$destroy())}},Ze=Object.keys(Ke);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=vn(l,c),void 0===t))return hn(l,e,n,a,s);e=e||{},dr(t),i(e.model)&&en(t.options,e);var f=ge(e,t,s,n);if(o(t.options.functional))return We(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Qe(e);var h=t.options.name||s,v=new ht("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ze.length;n++){var r=Ze[n],i=e[r],o=Ke[r];i===o||i&&i._merged||(e[r]=i?tn(o,i):o)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var nn=1,rn=2;function on(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=rn),an(t,e,n,r,i)}function an(t,e,n,r,o){if(i(n)&&i(n.__ob__))return gt();if(i(n)&&i(n.is)&&(e=n.is),!e)return gt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===rn?r=me(r):o===nn&&(r=_e(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new ht(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(u=Ht(t.$options,"components",e))?new ht(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&sn(a,s),i(n)&&un(n),a):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];i(u.tag)&&(r(u.ns)||o(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=$e(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return on(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return on(t,e,n,r,i,!0)};var o=r&&r.data;Et(t,"$attrs",o&&o.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var ln,fn=null;function pn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=xe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(ni){Zt(ni,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof ht||(t=gt()),t.parent=i,t}}function dn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,i){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function vn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=fn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",function(){return _(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},p=L(function(n){t.resolved=dn(n,e),s?a.length=0:f(!0)}),h=L(function(e){i(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,h);return u(v)&&(d(v)?r(t.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),i(v.error)&&(t.errorComp=dn(v.error,e)),i(v.loading)&&(t.loadingComp=dn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),i(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||gn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&kn(t,e)}function mn(t,e){ln.$on(t,e)}function bn(t,e){ln.$off(t,e)}function wn(t,e){var n=ln;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function kn(t,e,n){ln=t,he(e,n||{},mn,bn,wn,t),ln=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Xt(n[o],e,r,e,i)}return e}}var Sn=null;function $n(t){var e=Sn;return Sn=t,function(){Sn=e}}function jn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=$n(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Tn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Tn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function An(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||u);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],h=t.$options.props;l[d]=Gt(d,h,e,t)}St(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,kn(t,r,v),c&&(t.$slots=$e(o,i.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Pn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Tn(t,"activated")}}function Cn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Tn(t,"deactivated")}}function Tn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Xt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Rn=[],Dn=[],Mn={},In=!1,Nn=!1,Ln=0;function Un(){Ln=Rn.length=Dn.length=0,Mn={},In=Nn=!1}var Bn=Date.now;if(K&&!Q){var qn=window.performance;qn&&"function"===typeof qn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return qn.now()})}function Fn(){var t,e;for(Bn(),Nn=!0,Rn.sort(function(t,e){return t.id-e.id}),Ln=0;Ln<Rn.length;Ln++)t=Rn[Ln],t.before&&t.before(),e=t.id,Mn[e]=null,t.run();var n=Dn.slice(),r=Rn.slice();Un(),Gn(n),Vn(r),ot&&q.devtools&&ot.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Tn(r,"updated")}}function Hn(t){t._inactive=!1,Dn.push(t)}function Gn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Pn(t[e],!0)}function Wn(t){var e=t.id;if(null==Mn[e]){if(Mn[e]=!0,Nn){var n=Rn.length-1;while(n>Ln&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);In||(In=!0,ue(Fn))}}var zn=0,Jn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ni){if(!this.user)throw ni;Zt(ni,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ni){Zt(ni,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:R,set:R};function Zn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ar(t,e.methods),e.data?Qn(t):At(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||St(!1);var a=function(o){i.push(o);var a=Gt(o,e,n,t);Et(r,o,a),o in t||Zn(t,"_props",o)};for(var s in e)a(s);St(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&b(r,o)||V(o)||Zn(t,"_data",o)}At(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(ni){return Zt(ni,e,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Jn(t,a||R,R,er)),i in t||rr(t,i,o)}}function rr(t,e,n){var r=!it();"function"===typeof n?(Kn.get=r?ir(e):or(n),Kn.set=R):(Kn.get=n.get?r&&!1!==n.cache?ir(e):or(n.get):R,Kn.set=n.set||R),Object.defineProperty(t,e,Kn)}function ir(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:E(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)ur(t,n,r[i]);else ur(t,n,r)}}function ur(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return ur(r,t,e,n);n=n||{},n.user=!0;var i=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Zt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var lr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=lr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Vt(dr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,jn(e),_n(e),cn(e),Tn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Xn(e),"mp-toutiao"!==e.mpHost&&ke(e),"mp-toutiao"!==e.mpHost&&Tn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function dr(t){var e=t.options;if(t.super){var n=dr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=hr(t);i&&C(t.extendOptions,i),e=t.options=Vt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function vr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Vt(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Vt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,U.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=C({},a.options),i[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Zn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function kr(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=kr(a.componentOptions);s&&!e(s)&&$r(n,o,r,i)}}}function $r(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}fr(vr),cr(vr),On(vr),xn(vr),pn(vr);var jr=[String,RegExp,Array],xr={name:"keep-alive",abstract:!0,props:{include:jr,exclude:jr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)$r(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=kr(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Or(o,r))||a&&r&&Or(a,r))return e;var s=this,u=s.cache,c=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,_(c,l),c.push(l)):(u[l]=e,c.push(l),this.max&&c.length>parseInt(this.max)&&$r(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Ar={KeepAlive:xr};function Er(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:C,mergeOptions:Vt,defineReactive:Et},t.set=Pt,t.delete=Ct,t.nextTick=ue,t.observable=function(t){return At(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Ar),gr(t),yr(t),_r(t),wr(t)}Er(vr),Object.defineProperty(vr.prototype,"$isServer",{get:it}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:Ge}),vr.version="2.6.11";var Pr="[object Array]",Cr="[object Object]";function Tr(t,e){var n={};return Rr(t,e),Dr(t,e,"",n),n}function Rr(t,e){if(t!==e){var n=Ir(t),r=Ir(e);if(n==Cr&&r==Cr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Rr(o,e[i])}}else n==Pr&&r==Pr&&t.length>=e.length&&e.forEach(function(e,n){Rr(t[n],e)})}}function Dr(t,e,n,r){if(t!==e){var i=Ir(t),o=Ir(e);if(i==Cr)if(o!=Cr||Object.keys(t).length<Object.keys(e).length)Mr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Ir(o),u=Ir(a);if(s!=Pr&&s!=Cr)o!=e[i]&&Mr(r,(""==n?"":n+".")+i,o);else if(s==Pr)u!=Pr?Mr(r,(""==n?"":n+".")+i,o):o.length<a.length?Mr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Dr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Cr)if(u!=Cr||Object.keys(o).length<Object.keys(a).length)Mr(r,(""==n?"":n+".")+i,o);else for(var c in o)Dr(o[c],a[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)a(s)}else i==Pr?o!=Pr?Mr(r,n,t):t.length<e.length?Mr(r,n,t):t.forEach(function(t,i){Dr(t,e[i],n+"["+i+"]",r)}):Mr(r,n,t)}}function Mr(t,e,n){t[e]=n}function Ir(t){return Object.prototype.toString.call(t)}function Nr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Lr(t){return Rn.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!Lr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ni){Zt(ni,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Br(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var qr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Br(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Tr(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Nr(n)})):Nr(this)}};function Fr(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Fr),t.$options.render||(t.$options.render=Fr),"mp-toutiao"!==t.mpHost&&Tn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Tn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return i(t)||i(e)?Gr(t,Wr(e)):""}function Gr(t,e){return t?e?t+" "+e:t:e||""}function Wr(t){return Array.isArray(t)?zr(t):u(t)?Jr(t):"string"===typeof t?t:""}function zr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=Wr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Zr(t){return Array.isArray(t)?T(t):"string"===typeof t?Kr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){var e=getApp();e&&e.onError?e.onError(t):console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:P(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=ke,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Xt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t,e),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Zr(t),r=e?C(e,n):n;return Object.keys(r).map(function(t){return j(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(u(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var ti=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ei(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==ti.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;ti.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=ti}vr.prototype.__patch__=qr,vr.prototype.$mount=function(t,e){return Vr(this,t,e)},ei(vr),Qr(vr),e["default"]=vr}.call(this,n("c8ba"))},"68e3":function(t,e,n){},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=he,e.createComponent=Se,e.createPage=Oe,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return d(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var h=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===h.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,O=w(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],$={},j={};function x(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?A(n):n}function A(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function P(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&(t[n]=x(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&g(e[n])&&E(t[n],e[n])})}function T(t,e){"string"===typeof t&&_(e)?P(j[t]||(j[t]={}),e):_(t)&&P($,t)}function R(t,e){"string"===typeof t?_(e)?C(j[t],e):delete j[t]:_(t)&&C($,t)}function D(t){return function(e){return t(e)||e}}function M(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function I(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(D(i));else{var o=i(e);if(M(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){I(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function L(t,e){var n=[];Array.isArray($.returnValue)&&n.push.apply(n,l($.returnValue));var r=j[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function U(t){var e=Object.create(null);Object.keys($).forEach(function(t){"returnValue"!==t&&(e[t]=$[t].slice())});var n=j[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function B(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=U(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=I(a.invoke,n);return s.then(function(t){return e.apply(void 0,[N(a,t)].concat(i))})}return e.apply(void 0,[N(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var q={returnValue:function(t){return M(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,H=/^on/;function G(t){return V.test(t)}function W(t){return F.test(t)}function z(t){return H.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(G(t)||W(t)||z(t))}function Z(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?L(t,B.apply(void 0,[t,e,n].concat(i))):L(t,J(new Promise(function(r,o){B.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Y=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Y*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Q?.5:1:t<0?-n:n}var it={promiseInterceptor:q},ot=Object.freeze({__proto__:null,upx2px:rt,interceptors:it,addInterceptor:T,removeInterceptor:R}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(pt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var o=!0===i?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:_(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=lt(t,e[a],r):i||(o[a]=e[a]);return o}return g(e)&&(e=lt(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function dt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=ft(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return W(t)?pt(t,a,i.returnValue,G(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var ht=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){ht[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function kt(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({__proto__:null,$on:mt,$off:bt,$once:wt,$emit:kt});function St(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function $t(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;St("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function jt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&$t(e),e}var xt=Object.freeze({__proto__:null,getSubNVueById:jt,requireNativePlugin:St}),At=Page,Et=Component,Pt=/:/g,Ct=w(function(t){return O(t.replace(Pt,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Ct(n)].concat(i))}}}function Rt(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),At(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Et(t)};var Dt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Mt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function It(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return It(t,e)}):void 0}function Nt(t,e,n){e.forEach(function(e){It(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Lt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ut(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Bt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Vt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Wt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Wt(t.props,!0)}))}),a}function Gt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Vt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var i=r["default"];g(i)&&(i=i()),r.type=Gt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:Vt(e)}}else{var o=Gt(e,r);n[e]={type:-1!==Ft.indexOf(o)?o:null,observer:Vt(e)}}}),n}function zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Jt(t,e)}),r}function Zt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Zt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Yt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=zt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var u=r.charAt(0)===Yt;r=u?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;if(i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent),"$emit"===r)return void i.$emit.apply(i,Xt(e.$vm,t,n[1],n[2],s,r));var a=i[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}o.push(a.apply(i,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Mt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};o.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){o[t]=a[t]}),Nt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){for(var n,r=t.$children,i=r.length-1;i>=0;i--){var o=r[i];if(o.$scope._$vueId===e)return o}for(var a=r.length-1;a>=0;a--)if(n=oe(r[a],e),n)return n}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function fe(t){return re(t,{mocks:ie,initRefs:ce})}var pe=["onUniNViewMessage"];function de(t){var e=fe(t);return Nt(e,pe),e}function he(t){return App(de(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Lt(r.default,t),s=o(a,2),u=s[0],c=s[1],l={multipleSlots:!0,addGlobalClass:!0},f={options:l,data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Wt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Bt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Ut(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function ge(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Nt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}_e.push.apply(_e,Dt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function ke(t){var e=be(t);return Nt(e.methods,we),e}function Oe(t){return Component(ke(t))}function Se(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var $e={};Object.keys(ot).forEach(function(t){$e[t]=ot[t]}),Object.keys(Ot).forEach(function(t){$e[t]=Ot[t]}),Object.keys(xt).forEach(function(t){$e[t]=Z(t,xt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&($e[t]=Z(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=$e,t.UniEmitter=Ot),wx.createApp=he,wx.createPage=Oe,wx.createComponent=Se;var je=$e,xe=je;e.default=xe}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25720200116005",_inBundle:!1,_integrity:"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz",_shasum:"08bb17aba91c84a981f33d74153aa3dd07b578ad",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a129bde60de35f7ef497f43d5a45b4556231995c",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25720200116005"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var f=e.version,p="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",h=1800,v=300,g=10,y="__DC_STAT_UUID",_="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,_)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},k=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},$=function(){return"n"===O()?plus.runtime.version:""},j=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},x=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},A="First__Visit__Time",E="Last__Visit__Time",P=function(){var e=t.getStorageSync(A),n=0;return e?n=e:(n=k(),t.setStorageSync(A,n),t.removeStorageSync(E)),n},C=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,k()),n},T="__page__residence__time",R=0,D=0,M=function(){return R=k(),"n"===O()&&t.setStorageSync(T,k()),R},I=function(){return D=k(),"n"===O()&&(R=t.getStorageSync(T)),D-R},N="Total__Visit__Count",L=function(){var e=t.getStorageSync(N),n=1;return e&&(n=e,n++),t.setStorageSync(N,n),n},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},B=0,q=0,F=function(){var t=(new Date).getTime();return B=t,q=0,t},V=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==B&&(e=q-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>h;return{residenceTime:e,overtime:r}}return{residenceTime:e}},G=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},W=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},z=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("27a9").default,Z=n("c411").default||n("c411"),X=t.getSystemInfoSync(),Y=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:S(),ak:Z.appid,usv:f,v:$(),ch:j(),cn:"",pn:"",ct:"",t:k(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=H();F();var r=W(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=G();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=k(),this.statData.sc=x(t.scene),this.statData.fvts=P(),this.statData.lvts=C(),this.statData.tvc=L(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:k(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=k(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(I()<g)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),M();var u=[],c=[],l=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?l.push(n):c.push(n)})};for(var d in s)p(d);u.push.apply(u,c.concat(l));var h={usv:f,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){r._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(U(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return u(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,M(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,z(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,z(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(n)}}]),n}(Y),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=b;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(T([])));_&&_!==r&&i.call(_,a)&&(g=_);var m=S.prototype=k.prototype=Object.create(g);O.prototype=m.constructor=S,S.constructor=O,S[u]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},$(j.prototype),j.prototype[s]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,n,r){var i=new j(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},$(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new C(r||[]);return o._invoke=x(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function O(){}function S(){}function $(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){function e(n,r,o,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function x(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=A(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function A(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9771:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={computed:{bottomNavList:function(){return this.$store.state.app.bottomNavList}},methods:{changeNav:function(e){var n=e.item,r=n.pagePath||"/pages/index/index";t.redirectTo({url:r})}}};e.default=n}).call(this,n("6e42")["default"])},a34a:function(t,e,n){t.exports=n("bbdd")},a7a1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={};e.default=r},b4ab:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{RECORDER:t.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0}},onLoad:function(t){var e=this;this.RECORDER.onStart(function(t){e.recordBegin(t)}),this.RECORDER.onStop(function(t){e.recordEnd(t)})},methods:{voiceBegin:function(t){t.touches.length>1||(this.initPoint.Y=t.touches[0].clientY,this.initPoint.identifier=t.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},voiceIng:function(e){if(this.recording){var n=e.touches[0];this.initPoint.Y-n.clientY>=t.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(t){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},voiceCancel:function(t){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},recordBegin:function(t){var e=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=1,this.recordTimer=setInterval(function(){e.recordLength>60&&(e.recording=!1,e.voiceTis="最大录音60秒"),e.recordLength++},1e3)},recordEnd:function(t){clearInterval(this.recordTimer),this.willStop?n("log","取消发送录音"," at common\\mixins\\chat\\chat_voice.js:97"):this.sendVoice(t.tempFilePath,{record_length:this.recordLength}),this.willStop=!1},sendVoice:function(t,e){var n=this;this.uploadFile(t,e,"mp3").then(function(t){var e=t.record_length,r=t.url;if(e&&r){var i={action:"sendToUid",data:{send_id:n.user_info.id,receive_id:n.receive_id,message_type:"voice",url:r,record_length:e,time:(new Date).getTime()}};n.sendSocketMessage(i)}}).catch(function(t){n.popupMessage=t.message||"末知错误",n.showPopup=!0,setTimeout(function(){return n.showPopup=!1},1e3)})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c411:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__557EE0A"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cef8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}var o={state:{isOnline:!1,isSocketOpen:!1,alreadyPulledObject:null,isAudioPlay:!1,token:null,user_info:{},userListObject:{},private_id:0,private_user_info:null,privateMassagerObject:{},privateMassagerTips:{},relationList:[],requestRelationList:[],requestRelationUserInfo:{},groupRoomList:[]},getters:{},mutations:{setChatUserInfo:function(t,e){t.user_info=e},setToken:function(t,e){t.token=e},changeSocket:function(t,e){e||(t.isOnline=!1),t.isSocketOpen=e},audioPlay:function(t,e){t.isAudioPlay=e},setAlreadyPulled:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e||(t.alreadyPulledObject={getChatRooms:!1})},changPrivateiUser:function(t,e){t.private_id=e.id,t.private_user_info=e},cancelMassagerTips:function(t,e){r.default.set(t.privateMassagerTips,e,!1)},setGroupRoomList:function(t,e){t.groupRoomList=e},setGroupRoom:function(t,e){t.groupRoomList.push(e)},receiveChatOnLine:function(t){t.isOnline=!0},receiveChatOffLine:function(t){t.isOnline=!1},receiveChatOnOpen:function(t,e){var n=e.user_info;if(n){var i=n.id;if(i){var o="_chat_new_"+i;r.default.set(t.userListObject,o,n)}}},receiveChatUserList:function(t,e){t.userListObject=e.user_list||{}},receiveChatPrivate:function(t,e){var n;if(n=e.send_id==t.user_info.id?"chat_new_"+e.receive_id:"chat_new_"+e.send_id,t.privateMassagerObject[n])t.privateMassagerObject[n].push(e);else{var i=[];i.push(e),r.default.set(t.privateMassagerObject,n,i)}e.send_id!==t.user_info.id&&r.default.set(t.privateMassagerTips,e.send_id,!0)},receiveChatPrivateList:function(t,e){var n="chat_new_"+e.receive_id;e=e.list.map(function(t){return"string"==typeof t?JSON.parse(t):t}),r.default.set(t.privateMassagerObject,n,e)},receiveRequestRelation:function(t,e){var n=e.send_id,r=e.message;n="chat_new_"+n;var i=t.requestRelationList.findIndex(function(t){return t.send_id===n});i>-1?t.requestRelationList.splice(i,1,{send_id:n,message:r}):t.requestRelationList.push({send_id:n,message:r})},receiveRequestRelationList:function(t,e){var n=[];for(var r in e.list)n.push({send_id:r,message:e.list[r]});t.requestRelationList=n},removeRequestRelationList:function(t,e){t.requestRelationList.splice(e,1)},receiveRequestRelationUserInfo:function(t,e){t.requestRelationUserInfo=e.user_list||{}},receiveManageRelation:function(t,e){if("agree"===e.handle){var n=t.user_info.id==e.send_id?e.receive_user_info:e.send_user_info;"string"===typeof n&&(n=JSON.parse(n)),t.relationList.push(n)}},receiveGetRelation:function(t,e){t.relationList=e.user_list||[]}},actions:{}};e.default=o},e50c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var i={state:{bottomNavList:[{pagePath:"/pages/index/index",text:"首页",icon:"home",name:"index"},{pagePath:"/pages/chat/match",text:"大厅",icon:"id-card-o",name:"match"},{pagePath:"/pages/chat/contact",text:"好友",icon:"eercast",name:"contact"},{pagePath:"/pages/user/index",text:"我的",icon:"user-circle",name:"user"}],bottomNavCurrent:0,chatRecord:[]},getters:{},mutations:{setBottomNavCurrent:function(t,e){t.bottomNavCurrent=e},setChatRecord:function(t,e){t.chatRecord=e}},actions:{}};e.default=i},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,u,c){var l,f="function"===typeof t?t.options:t;if(u&&(f.components=Object.assign(u,f.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},f1c9:function(t,e,n){"use strict";(function(t){!function(t,e){for(var n in e)t[n]=e[n]}(e,function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,n,r){function i(t){"object"===("undefined"==typeof plus?"undefined":s(plus))?t():n.isApp&&window.addEventListener("plusready",t,!1)}function o(e,n,r){n?n.errMsg||(n.errMsg="callback:ok"):"object"===(void 0===r?"undefined":s(r))?(r||(r={errMsg:"callback:fail"}),r.errMsg||(r.errMsg=r.message||"callback:fail")):r={errMsg:"callback:fail "+String(r)},e&&"function"==typeof e.success&&n&&e.success(n),r&&t("warn","Callback Fail:",r," at common\\plus-websocket.js:1"),e&&"function"==typeof e.fail&&r&&e.fail(r),e&&"function"==typeof e.complete&&e.complete(n||r)}function a(){return o}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(n,"__esModule",{value:!0}),n.isPlus="object"===("undefined"==typeof navigator?"undefined":s(navigator))&&!!navigator.userAgent.match(/Html5Plus/i),n.isWeb="object"===("undefined"==typeof document?"undefined":s(document))&&!n.isPlus,n.isWeex="object"===("undefined"==typeof weex?"undefined":s(weex)),n.isApp=n.isPlus||n.isWeex,n.plusReady=i,n.callback=o,n.getCallback=a},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.connectSocket=r.connectSocket,e.onSocketOpen=r.onSocketOpen,e.onSocketError=r.onSocketError,e.sendSocketMessage=r.sendSocketMessage,e.onSocketMessage=r.onSocketMessage,e.closeSocket=r.closeSocket,e.onSocketClose=r.onSocketClose},function(t,e,n){function r(t){function e(){p=null}t=t||{};var n=new f.SocketTask(t);if(n.onClose(e),n.onError(e),!p)for(var r in p=n,d)d.hasOwnProperty(r)&&n[r](d[r]);return p=p||n,n}function i(t,e){p?p[t](e):d[t]=e}function o(t){i("onOpen",t)}function a(t){i("onError",t)}function s(t){p&&p.send(t)}function u(t){i("onMessage",t)}function c(t){p&&p.close(t)}function l(t){i("onClose",t)}Object.defineProperty(e,"__esModule",{value:!0});var f=n(3),p=null,d={};e.connectSocket=r,e.onSocketOpen=o,e.onSocketError=a,e.sendSocketMessage=s,e.onSocketMessage=u,e.closeSocket=c,e.onSocketClose=l},function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=plus.webview.getWebviewById(d);if(!e){var r=n(7);e=plus.webview.create("http://www.dcloud.io",d,{kernel:"UIWebview",render:"always",plusrequire:"none"}),e.overrideUrlLoading({match:".*data.*"},function(t){var n=t.url,r=n.match(/\?(\S+)=(\S+)/);if(r){var i=r[1],o=JSON.parse(decodeURIComponent(r[2]));"event"===i?l.emit(o.type,o.data):"callback"===i&&h[o.callbackName](o.error)}else!g&&"number"!=typeof c&&n.indexOf("load")>=0?c=setInterval(function(){e.evalJS(v)},16):!g&&n.indexOf("ready")>=0&&(clearInterval(c),g=!0,y.forEach(function(t){t(e)}),y=[])}),e.loadData(r,{baseURL:"http://websocket.websocket"})}g?t(e):y.push(t)}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},s=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u,c,l=a(n(4)),f=n(0),p=s(n(5)),d="__websocket__",h={},v=n(6),g=!1,y=[],_=function(){function t(e){r(this,t),this.id=Date.now().toString(),this.eval("connect",e)}return o(t,[{key:"send",value:function(t){t.data&&"string"!=typeof t.data&&(t.data=[p.default.encode(t.data)]),this.eval("send",t)}},{key:"close",value:function(t){this.eval("close",t)}},{key:"onOpen",value:function(t){this.on("open",t)}},{key:"onClose",value:function(t){this.on("close",t)}},{key:"onError",value:function(t){this.on("error",t)}},{key:"onMessage",value:function(t){this.on("message",function(e){e=e.data,e=e&&"string"!=typeof e?p.default.decode(e[0]):e,t({data:e})})}},{key:"eval",value:function(t,e){var n="callback"+Date.now(),r=f.isWeb?window:h;r[n]=function(t){delete r[n],t?f.callback(e,{},t):f.callback(e,{})};var o="window.__webSocket&&__webSocket."+t+"("+this.id+","+JSON.stringify(e)+",'"+n+"')";f.isWeb?(u||(window.eval(v),u=!0),window.eval(o)):f.plusReady(function(){i(function(t){t.evalJS(o)})})}},{key:"on",value:function(t,e){l.on("websocket"+t+this.id,function(t){e(t.detail)})}}]),t}();e.SocketTask=_},function(t,e,n){function r(t,e){a.isWeb?window.addEventListener(t,e,!1):(s[t]=s[t]||[],s[t].push(e))}function i(t,e){if(a.isWeb)window.removeEventListener(t,e,!1);else{var n=s[t];n&&n.splice(n.indexOf(e),1)}}function o(t,e){if(a.isWeb)document.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0}));else{var n=s[t];n&&n.forEach(function(t){t({detail:e})})}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s={};e.on=r,e.off=i,e.emit=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lookup:null,encode:function(t){var e,n=this.chars,r=new Uint8Array(t),i=r.length,o="";for(e=0;e<i;e+=3)o+=n[r[e]>>2],o+=n[(3&r[e])<<4|r[e+1]>>4],o+=n[(15&r[e+1])<<2|r[e+2]>>6],o+=n[63&r[e+2]];return i%3==2?o=o.substring(0,o.length-1)+"=":i%3==1&&(o=o.substring(0,o.length-2)+"=="),o},decode:function(t){var e=this.chars,n=this.lookup;if(!n){n=this.lookup=new Uint8Array(256);for(var r=0;r<e.length;r++)n[e.charCodeAt(r)]=r}var i,o,a,s,u=.75*t.length,c=t.length,l=0;"="===t[t.length-1]&&(u--,"="===t[t.length-2]&&u--);var f=new ArrayBuffer(u),p=new Uint8Array(f);for(r=0;r<c;r+=4)i=n[t.charCodeAt(r)],o=n[t.charCodeAt(r+1)],a=n[t.charCodeAt(r+2)],s=n[t.charCodeAt(r+3)],p[l++]=i<<2|o>>4,p[l++]=(15&o)<<4|a>>2,p[l++]=(3&a)<<6|63&s;return f}};e.default=r},function(t,e){t.exports="'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n    if (window.__webSocket) {\n        return;\n    }\n    var isPlus = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && !!navigator.userAgent.match(/Html5Plus/i);\n    if (isPlus) {\n        location.href = 'http://data?ready';\n    }\n    // 自定义事件\n    var $event = {\n        emit: function emit(type, data) {\n            if (!isPlus) {\n                document.dispatchEvent(new CustomEvent(type, {\n                    detail: data,\n                    bubbles: true\n                }));\n                return;\n            }\n            location.href = 'http://data?event=' + encodeURIComponent(JSON.stringify({\n                type: type,\n                data: data\n            }));\n        }\n    };\n    var Base64 = {\n        chars: \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",\n        lookup: null,\n        encode: function encode(arraybuffer) {\n            var chars = this.chars;\n            var bytes = new Uint8Array(arraybuffer),\n                i,\n                len = bytes.length,\n                base64 = \"\";\n\n            for (i = 0; i < len; i += 3) {\n                base64 += chars[bytes[i] >> 2];\n                base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n                base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n                base64 += chars[bytes[i + 2] & 63];\n            }\n\n            if (len % 3 === 2) {\n                base64 = base64.substring(0, base64.length - 1) + \"=\";\n            } else if (len % 3 === 1) {\n                base64 = base64.substring(0, base64.length - 2) + \"==\";\n            }\n\n            return base64;\n        },\n        decode: function decode(base64) {\n            var chars = this.chars;\n            var lookup = this.lookup;\n            if (!lookup) {\n                lookup = this.lookup = new Uint8Array(256);\n                for (var i = 0; i < chars.length; i++) {\n                    lookup[chars.charCodeAt(i)] = i;\n                }\n            }\n            var bufferLength = base64.length * 0.75,\n                len = base64.length,\n                p = 0,\n                encoded1,\n                encoded2,\n                encoded3,\n                encoded4;\n\n            if (base64[base64.length - 1] === \"=\") {\n                bufferLength--;\n                if (base64[base64.length - 2] === \"=\") {\n                    bufferLength--;\n                }\n            }\n\n            var arraybuffer = new ArrayBuffer(bufferLength),\n                bytes = new Uint8Array(arraybuffer);\n\n            for (i = 0; i < len; i += 4) {\n                encoded1 = lookup[base64.charCodeAt(i)];\n                encoded2 = lookup[base64.charCodeAt(i + 1)];\n                encoded3 = lookup[base64.charCodeAt(i + 2)];\n                encoded4 = lookup[base64.charCodeAt(i + 3)];\n\n                bytes[p++] = encoded1 << 2 | encoded2 >> 4;\n                bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;\n                bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;\n            }\n\n            return arraybuffer;\n        }\n    };\n\n    window.__webSocket = {\n        webSockets: {},\n        connect: function connect(id, data, callbackName) {\n            var url = data.url;\n            var header = data.header; // 未支持\n            var method = data.method; // 未支持\n            var protocols = data.protocols || [];\n            var webSocket;\n            try {\n                webSocket = this.webSockets[id] = new WebSocket(url, protocols);\n                webSocket.binaryType = 'arraybuffer';\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n            if (webSocket) {\n                webSocket.addEventListener('open', function () {\n                    $event.emit('websocketopen' + id, {});\n                });\n                webSocket.addEventListener('message', function (_ref) {\n                    var data = _ref.data;\n\n                    $event.emit('websocketmessage' + id, {\n                        data: data && typeof data !== 'string' ? [Base64.encode(data)] : data\n                    });\n                });\n                webSocket.addEventListener('error', function () {\n                    $event.emit('websocketerror' + id, {});\n                });\n                webSocket.addEventListener('close', function () {\n                    $event.emit('websocketclose' + id, {});\n                });\n            }\n        },\n        send: function send(id) {\n            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n            var callbackName = arguments[2];\n\n            data = data.data;\n            data = data && typeof data !== 'string' ? Base64.decode(data[0]) : data;\n            try {\n                this.webSockets[id].send(data);\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n        },\n        close: function close(id) {\n            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n            var callbackName = arguments[2];\n\n            var options = [];\n            options.push(data.code || 1000);\n            if (typeof data.reason === 'string') {\n                options.push(data.reason);\n            }\n            try {\n                var _webSockets$id;\n\n                (_webSockets$id = this.webSockets[id]).close.apply(_webSockets$id, options);\n            } catch (error) {\n                this.callback(callbackName, error);\n                return;\n            }\n            this.callback(callbackName);\n        },\n        callback: function callback(callbackName, error) {\n            if (isPlus) {\n                location.href = 'http://data?callback=' + encodeURIComponent(JSON.stringify({\n                    callbackName: callbackName,\n                    error: error\n                }));\n            } else {\n                var js = 'window.' + callbackName + '&&window.' + callbackName + '(\\'' + (error || '') + '\\')';\n                window[callbackName] && window[callbackName](error | '');\n                window.eval(js);\n            }\n        }\n    };\n})();"},function(t,e){t.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <title>WebSocket</title> </head> <body> <script>location.href="http://data/load"<\/script> </body> </html>'}]))}).call(this,n("0de9")["default"])},f522:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("66fd")),i=s(n("2f62")),o=s(n("cef8")),a=s(n("e50c"));function s(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var u=new i.default.Store({state:{},mutations:{},actions:{},modules:{chat:o.default,app:a.default}});e.default=u},f5f6:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),o=n("5ce8");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=null,c={computed:{isSocketOpen:function(){return this.$store.state.chat.isSocketOpen}},watch:{},onShow:function(){var e=this;e.isSocketOpen||e.wssInit(),u=setInterval(function(){e.isSocketOpen?t.sendSocketMessage({data:"",fail:function(){e.$store.commit("changeSocket",!1),e.wssInit()}}):e.wssInit()},25e3)},onHide:function(){clearInterval(u),t.closeSocket()},methods:a({},(0,i.mapMutations)(["receiveChatOnOpen","receiveChatUserList","receiveChatPrivate","receiveChatPrivateList","receiveChatOnLine","receiveChatOffLine","receiveRequestRelation","receiveRequestRelationList","receiveRequestRelationUserInfo","receiveManageRelation","receiveGetRelation"]),{receiveLogOut:function(t){},receiveErrorMessage:function(t){},wssInit:function(){var e=this,n=(o.SocketModul,o.SocketUrl);t.connectSocket({url:n}),t.onSocketOpen(function(t){e.$store.commit("changeSocket",!0),r("log","WebSocket连接已打开！"," at common\\mixins\\app_init_chat.js:72")}),t.onSocketMessage(function(t){if("string"==typeof t.data&&"{"==t.data.substring(0,1)){var n=JSON.parse(t.data);if(r("log","聊天室收到消息《《《《",n," at common\\mixins\\app_init_chat.js:79"),n.type){var i=n.type;e[i](n)}}}),t.onSocketError(function(t){e.$store.commit("changeSocket",!1),r("log","WebSocket连接错误！"," at common\\mixins\\app_init_chat.js:89")}),t.onSocketClose(function(t){e.$store.commit("changeSocket",!1),r("log","WebSocket 已关闭！"," at common\\mixins\\app_init_chat.js:93")})}})};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/botton-nav/botton-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/botton-nav/botton-nav.js';

define('components/botton-nav/botton-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/botton-nav/botton-nav"], {
  "0176": function _(t, o, e) {
    "use strict";

    e.r(o);
    var n = e("fa47"),
        r = e("dee2");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(o, t, function () {
          return r[t];
        });
      }(a);
    }

    e("8e9f");
    var c,
        i = e("f0c5"),
        u = Object(i["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
    o["default"] = u.exports;
  },
  "28b7": function b7(t, o, e) {},
  5615: function _(t, o, e) {
    "use strict";

    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var n = {
      name: "bottom-nav",
      data: function data() {
        return {
          select: 0
        };
      },
      props: {
        current: {
          type: Number,
          default: 0
        },
        list: {
          type: Array,
          default: function _default() {
            return [{
              pagePath: "/pages/tabbar/home/home",
              text: "首页",
              icon: "home"
            }, {
              pagePath: "/pages/tabbar/my/my",
              text: "我的",
              icon: "home"
            }, {
              pagePath: "/pages/tabbar/my/my",
              text: "他的",
              icon: "home"
            }];
          }
        },
        fontColor: {
          type: String,
          default: ""
        },
        borderColor: {
          type: String,
          default: ""
        },
        backgroundColor: {
          type: String,
          default: "#619ad6"
        },
        activeFontColor: {
          type: String,
          default: "#1f1cd6"
        }
      },
      created: function created() {
        this.select = this.$store.state.app.bottomNavCurrent;
      },
      computed: {
        setColorStyle: function setColorStyle() {
          var t = {};
          return this.fontColor && (t.color = this.fontColor), this.borderColor && (t.borderTop = "1px ".concat(this.borderColor, " solid;")), this.backgroundColor && (t.background = this.backgroundColor), t;
        },
        setActiveFontColorStyle: function setActiveFontColorStyle() {
          var t = "";
          return this.activeFontColor && (t += "color:".concat(this.activeFontColor, ";")), t;
        }
      },
      methods: {
        clickNav: function clickNav(t) {
          this.select = t, this.$store.commit("setBottomNavCurrent", t), this.$emit("on-click", {
            item: this.list[t],
            select: t
          });
        }
      }
    };
    o.default = n;
  },
  "8e9f": function e9f(t, o, e) {
    "use strict";

    var n = e("28b7"),
        r = e.n(n);
    r.a;
  },
  dee2: function dee2(t, o, e) {
    "use strict";

    e.r(o);
    var n = e("5615"),
        r = e.n(n);

    for (var a in n) {
      "default" !== a && function (t) {
        e.d(o, t, function () {
          return n[t];
        });
      }(a);
    }

    o["default"] = r.a;
  },
  fa47: function fa47(t, o, e) {
    "use strict";

    var n = {
      "fa-icon": function faIcon() {
        return e.e("components/fa-icon/fa-icon").then(e.bind(null, "5a9c"));
      }
    },
        r = function r() {
      var t = this,
          o = t.$createElement,
          e = (t._self._c, t.__get_style([t.setColorStyle]));
      t.$mp.data = Object.assign({}, {
        $root: {
          s0: e
        }
      });
    },
        a = [];

    e.d(o, "b", function () {
      return r;
    }), e.d(o, "c", function () {
      return a;
    }), e.d(o, "a", function () {
      return n;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/botton-nav/botton-nav-create-component', {
  'components/botton-nav/botton-nav-create-component': function componentsBottonNavBottonNavCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0176"));
  }
}, [['components/botton-nav/botton-nav-create-component']]]);
});
require('components/botton-nav/botton-nav.js');
__wxRoute = 'components/chat-message/chat-message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chat-message/chat-message.js';

define('components/chat-message/chat-message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat-message/chat-message"], {
  "2d89": function d89(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("675b"),
        r = i.n(n);

    for (var o in n) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    e["default"] = r.a;
  },
  "675b": function b(t, e, i) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = r(i("2b88"));

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var o = {
        data: function data() {
          return {
            record_length: 1e-4,
            record: 0,
            imgUrl: "../../static/logo.png",
            imgWidth: 200,
            imgHeight: 200
          };
        },
        props: {
          row: {
            type: Object,
            default: function _default() {}
          }
        },
        created: function created() {
          "img" === this.row.message_type && this.imgInit();
        },
        computed: {
          user_info: function user_info() {
            return this.$store.state.chat.user_info;
          },
          isSelf: function isSelf() {
            return this.user_info.id == this.row.send_id ? "right" : "left";
          },
          messageText: function messageText() {
            var t = [];
            return "text" === this.row.message_type && "string" === typeof this.row.message && (t = (0, n.default)(this.row.message)), t;
          },
          percent: function percent() {
            return this.record / this.record_length * 100;
          },
          recordCeil: function recordCeil() {
            return Math.ceil(this.record);
          },
          voiceLength: function voiceLength() {
            return this.record < .1 ? this.row.record_length : this.recordCeil;
          },
          isAudioPlay: function isAudioPlay() {
            return this.$store.state.chat.isAudioPlay;
          }
        },
        methods: {
          playAudio: function playAudio(e) {
            var i = this;

            if (!this.isAudioPlay) {
              this.$store.commit("audioPlay", !0);
              var n = e.record_length,
                  r = e.url,
                  o = this;
              this.record_length = n;
              var s = t.createInnerAudioContext();
              s.autoplay = !0, s.src = r, s.onTimeUpdate(function () {
                o.record = s.currentTime, s.duration < 60 && (o.record_length = s.duration);
              }), s.onEnded(function (t) {
                s.destroy(), i.record_length = .01, i.record = .01, i.$store.commit("audioPlay", !1);
              });
            }
          },
          imgInit: function imgInit() {
            var e = this.row,
                i = e.width,
                n = e.height,
                r = e.url,
                o = this;
            r && (this.imgUrl = r, i && n ? o.setImgSize(i, n) : t.getImageInfo({
              src: r,
              success: function success(t) {
                var e = t.width,
                    i = t.height;
                o.setImgSize(e, i);
              }
            }));
          },
          setImgSize: function setImgSize() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
            t > 200 ? (this.imgWidth = 200, this.imgHeight = e / t * 200) : (this.imgWidth = t, this.imgHeight = e);
          }
        }
      };
      e.default = o;
    }).call(this, i("6e42")["default"]);
  },
  b505: function b505(t, e, i) {
    "use strict";

    var n = {
      "fa-icon": function faIcon() {
        return i.e("components/fa-icon/fa-icon").then(i.bind(null, "5a9c"));
      }
    },
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    i.d(e, "b", function () {
      return r;
    }), i.d(e, "c", function () {
      return o;
    }), i.d(e, "a", function () {
      return n;
    });
  },
  cd93: function cd93(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("b505"),
        r = i("2d89");

    for (var o in r) {
      "default" !== o && function (t) {
        i.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    var s,
        c = i("f0c5"),
        u = Object(c["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
    e["default"] = u.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chat-message/chat-message-create-component', {
  'components/chat-message/chat-message-create-component': function componentsChatMessageChatMessageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cd93"));
  }
}, [['components/chat-message/chat-message-create-component']]]);
});
require('components/chat-message/chat-message.js');
__wxRoute = 'components/cropper/cropper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/cropper/cropper.js';

define('components/cropper/cropper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cropper/cropper"], {
  "4f60": function f60(t, i, e) {
    "use strict";

    var s,
        h = function h() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(i, "b", function () {
      return h;
    }), e.d(i, "c", function () {
      return a;
    }), e.d(i, "a", function () {
      return s;
    });
  },
  "5ec7": function ec7(t, i, e) {},
  ae07: function ae07(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("b773"),
        h = e.n(s);

    for (var a in s) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return s[t];
        });
      }(a);
    }

    i["default"] = h.a;
  },
  b773: function b773(t, i, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var s = h(e("a34a"));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, i, e, s, h, a, n) {
        try {
          var o = t[a](n),
              r = o.value;
        } catch (l) {
          return void e(l);
        }

        o.done ? i(r) : Promise.resolve(r).then(s, h);
      }

      function n(t) {
        return function () {
          var i = this,
              e = arguments;
          return new Promise(function (s, h) {
            var n = t.apply(i, e);

            function o(t) {
              a(n, s, h, o, r, "next", t);
            }

            function r(t) {
              a(n, s, h, o, r, "throw", t);
            }

            o(void 0);
          });
        };
      }

      var o = 70,
          r = {
        name: "cropper",
        data: function data() {
          return {
            cvsStyleHeight: "0px",
            styleDisplay: "none",
            styleTop: "-10000px",
            prvTop: "-10000px",
            imgStyle: {},
            selStyle: {},
            showOper: !0,
            imgSrc: {
              imgSrc: ""
            },
            qlty: .9,
            postWidthFirst: {}
          };
        },
        watch: {
          avatarSrc: function avatarSrc() {
            this.imgSrc.imgSrc = this.avatarSrc;
          }
        },
        props: {
          avatarSrc: "",
          avatarStyle: "",
          selWidth: "",
          selHeight: "",
          expWidth: "",
          expHeight: "",
          minScale: "",
          maxScale: "",
          canScale: "",
          noTab: "",
          quality: "",
          index: ""
        },
        created: function created() {
          var i = this;
          this.ctxCanvas = t.createCanvasContext("avatar-canvas", this), this.ctxCanvasOper = t.createCanvasContext("oper-canvas", this), this.qlty = parseInt(this.quality) || .9, this.imgSrc.imgSrc = this.avatarSrc, this.letScale = "false" === this.canScale ? 0 : 1, this.indx = this.index || void 0, this.mnScale = this.minScale || .3, this.mxScale = this.maxScale || 4, this.noBar = "true" === this.noTab ? 1 : 0, this.noBar ? (this.moreHeight = 0, this.fWindowResize()) : t.showTabBar({
            complete: function complete(t) {
              i.moreHeight = "showTabBar:ok" === t.errMsg ? 50 : 0, i.fWindowResize();
            }
          });
        },
        methods: {
          fWindowResize: function fWindowResize() {
            var i = t.getSystemInfoSync();
            this.platform = i.platform, this.pixelRatio = i.pixelRatio, this.windowWidth = i.windowWidth, "android" === this.platform ? (this.windowHeight = i.screenHeight + i.statusBarHeight, this.cvsStyleHeight = this.windowHeight - o + "px") : (this.windowHeight = i.windowHeight + this.moreHeight, this.cvsStyleHeight = this.windowHeight - o + 6 + "px"), this.pxRatio = this.windowWidth / 750;
            var e = this.avatarStyle;
            this.imgStyle = e, this.expWidth && (this.exportWidth = this.expWidth.indexOf("rpx") >= 0 ? parseInt(this.expWidth) * this.pxRatio : parseInt(this.expWidth)), this.expHeight && (this.exportHeight = this.expHeight.indexOf("rpx") >= 0 ? parseInt(this.expHeight) * this.pxRatio : parseInt(this.expHeight)), "flex" === this.styleDisplay && this.fDrawInit(!0), this.fHideImg();
          },
          fSelect: function fSelect() {
            var i = this;
            this.fSelecting || (this.fSelecting = !0, setTimeout(function () {
              i.fSelecting = !1;
            }, 500), t.chooseImage({
              count: 1,
              sizeType: ["original", "compressed"],
              sourceType: ["camera", "album"],
              success: function success(e) {
                t.showLoading({
                  mask: !0
                });
                var s = i.imgPath = e.tempFilePaths[0];
                t.getImageInfo({
                  src: s,
                  success: function success(e) {
                    if (i.imgWidth = e.width, i.imgHeight = e.height, i.path = s, !i.hasSel) {
                      var h = i.selStyle || {};
                      if (!i.selWidth || !i.selHeight) return void t.showModal({
                        title: "裁剪框的宽或高没有设置",
                        showCancel: !1
                      });
                      var a = i.selWidth.indexOf("rpx") >= 0 ? parseInt(i.selWidth) * i.pxRatio : parseInt(i.selWidth),
                          n = i.selHeight.indexOf("rpx") >= 0 ? parseInt(i.selHeight) * i.pxRatio : parseInt(i.selHeight);
                      h.width = parseInt(a), h.height = parseInt(n), h.top = parseInt((i.windowHeight - h.height - o) / 2), h.left = parseInt((i.windowWidth - h.width) / 2), i.selStyle = h;
                    }

                    i.noBar ? i.fDrawInit(!0) : t.hideTabBar({
                      complete: function complete() {
                        i.fDrawInit(!0);
                      }
                    });
                  },
                  fail: function fail() {
                    t.showToast({
                      title: "error3",
                      duration: 2e3
                    });
                  },
                  complete: function complete() {
                    t.hideLoading();
                  }
                });
              }
            }));
          },
          fUpload: function fUpload() {
            var i = this;

            if (!this.fUploading) {
              this.fUploading = !0, setTimeout(function () {
                i.fUploading = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = parseInt(e.left),
                  h = parseInt(e.top),
                  a = parseInt(e.width),
                  n = parseInt(e.height),
                  o = this.exportWidth || a,
                  r = this.exportHeight || n;
              this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                destWidth: o,
                destHeight: r,
                canvasId: "avatar-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  t = t.tempFilePath, i.$emit("upload", {
                    avatar: i.imgSrc,
                    path: t,
                    index: i.indx
                  });
                },
                fail: function fail(i) {
                  t.showToast({
                    title: "error1",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  i.noBar || t.showTabBar();
                }
              }, this);
            }
          },
          fDrawInit: function fDrawInit() {
            var t = this,
                i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.windowWidth,
                s = this.windowHeight,
                h = this.imgWidth,
                a = this.imgHeight,
                n = h / a,
                r = e,
                l = s - o,
                c = (this.pixelRatio, parseInt(this.selStyle.width)),
                p = parseInt(this.selStyle.height);
            this.fixWidth = 0, this.fixHeight = 0, this.fixWidth ? (r = c, l = r / n) : this.fixHeight ? (l = p, r = l * n) : n < 1 ? (r = c, l = parseInt(r / n)) : (l = p, r = parseInt(l * n)), this.scaleSize = 1, this.rotateDeg = 0, this.posWidth = parseInt((e - r) / 2), this.posHeight = parseInt((s - l - o) / 2), this.useWidth = r, this.useHeight = l;
            var d = this.selStyle,
                f = parseInt(d.left),
                u = parseInt(d.top),
                g = parseInt(d.width),
                w = parseInt(d.height),
                m = (this.canvas, this.canvasOper, this.ctxCanvas),
                v = this.ctxCanvasOper;
            v.setFillStyle("rgba(0,0,0, 0.5)"), v.fillRect(0, 0, this.windowWidth, u), v.fillRect(0, u, f, w), v.fillRect(0, u + w, this.windowWidth, this.windowHeight - w - o - u), v.fillRect(f + g, u, this.windowWidth - g - f, w), v.setLineWidth(1), v.setStrokeStyle("rgba(255, 255, 255,1)"), v.strokeRect(f, u, g, w), v.setLineWidth(3), v.setStrokeStyle("rgba(255, 255, 255, 1)"), v.moveTo(f + 20, u), v.lineTo(f, u), v.lineTo(f, u + 20), v.moveTo(f + g - 20, u), v.lineTo(f + g, u), v.lineTo(f + g, u + 20), v.moveTo(f + 20, u + w), v.lineTo(f, u + w), v.lineTo(f, u + w - 20), v.moveTo(f + g - 20, u + w), v.lineTo(f + g, u + w), v.lineTo(f + g, u + w - 20), v.stroke(), this.postFirst = {
              left: f,
              top: u,
              width: g,
              height: c,
              posWidth: this.posWidth,
              posHeight: this.posHeight
            }, v.draw(!1, function () {
              i && (t.styleDisplay = "flex", t.styleTop = "0", m.setFillStyle("black"), t.fDrawImage());
            }), this.$emit("avtinit");
          },
          fDrawImage: function fDrawImage() {
            var t = Date.now();

            if (!(t - this.drawTm < 20)) {
              this.drawTm = t;
              var i = this.ctxCanvas;
              i.fillRect(0, 0, this.windowWidth, this.windowHeight - o), i.translate(this.posWidth + this.useWidth / 2, this.posHeight + this.useHeight / 2), i.scale(this.scaleSize, this.scaleSize), i.drawImage(this.imgPath, -this.useWidth / 2, -this.useHeight / 2, this.useWidth, this.useHeight), i.draw(!1);
            }
          },
          fHideImg: function fHideImg() {
            this.prvImg = "", this.prvTop = "-10000px", this.showOper = !0, this.prvImgData = null, this.target = null;
          },
          fClose: function fClose() {
            this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), this.noBar || t.showTabBar();
          },
          fStart: function fStart(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (this.touch0 = e, this.touch1 = s, s) {
              var h = s.x - e.x,
                  a = s.y - e.y;
              this.fgDistance = Math.sqrt(h * h + a * a);
            }
          },
          fMove: function fMove(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (s) {
              var h = s.x - e.x,
                  a = s.y - e.y,
                  n = Math.sqrt(h * h + a * a),
                  o = .005 * (n - this.fgDistance),
                  r = this.scaleSize + o;

              do {
                if (!this.letScale) break;
                if (r < this.mnScale) break;
                if (r > this.mxScale) break;
                this.scaleSize = r;
              } while (0);

              this.fgDistance = n, s.x !== e.x && this.letRotate && (h = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x), a = (s.y - e.y) / (s.x - e.x), this.rotateDeg += 180 * Math.atan((a - h) / (1 + h * a)) / Math.PI, this.touch0 = e, this.touch1 = s), this.fDrawImage();
            } else if (this.touch0) {
              var l = e.x - this.touch0.x,
                  c = e.y - this.touch0.y,
                  p = this.posWidth + l,
                  d = this.posHeight + c;
              Math.abs(l) < 100 && !this.lckWidth && (this.posWidth = p), Math.abs(c) < 100 && !this.lckHeight && (this.posHeight = d), this.touch0 = e, this.fDrawImage();
            }
          },
          fEnd: function () {
            var t = n(s.default.mark(function t(i) {
              var e, h, a, n, o, r, l, c, p;
              return s.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      e = this, h = i.touches, a = h && h[0], h && h[1], e.scaleSize < 1 ? (n = e.selStyle, o = e.imgWidth / e.imgHeight, o < 1 && e.scaleSize * e.useWidth < n.width ? (e.posWidth = n.left, e.scaleSize = 1, setTimeout(function () {
                        e.fDrawImage();
                      }, 100)) : e.scaleSize * e.useHeight < n.width && (e.posHeight = n.top, e.scaleSize = 1, setTimeout(function () {
                        e.fDrawImage();
                      }, 100))) : 1 == this.scaleSize && (r = this.posWidth - this.postFirst.posWidth, l = this.postFirst.left - this.postFirst.posWidth, c = this.posHeight - this.postFirst.posHeight, p = this.postFirst.top - this.postFirst.posHeight, r > 0 && this.posWidth > this.postFirst.left ? this.posWidth = this.postFirst.left : r < 0 && r < l && (this.posWidth = -this.postFirst.left + 2 * this.postFirst.posWidth), c < 0 && this.posHeight < this.postFirst.top ? this.posHeight = -this.postFirst.top + 2 * this.postFirst.posHeight + 1 : c > 0 && c > p && (this.posHeight = this.postFirst.top), setTimeout(function () {
                        e.fDrawImage();
                      }, 100)), a ? this.touch0 = a : (this.touch0 = null, this.touch1 = null);

                    case 4:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function i(i) {
              return t.apply(this, arguments);
            }

            return i;
          }(),
          btop: function btop(t) {
            return new Promise(function (i, e) {
              var s = t.split(","),
                  h = s[0].match(/:(.*?);/)[1],
                  a = atob(s[1]),
                  n = a.length,
                  o = new Uint8Array(n);

              while (n--) {
                o[n] = a.charCodeAt(n);
              }

              return i((window.URL || window.webkitURL).createObjectURL(new Blob([o], {
                type: h
              })));
            });
          }
        }
      };
      i.default = r;
    }).call(this, e("6e42")["default"]);
  },
  ee69: function ee69(t, i, e) {
    "use strict";

    var s = e("5ec7"),
        h = e.n(s);
    h.a;
  },
  efd7: function efd7(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("4f60"),
        h = e("ae07");

    for (var a in h) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return h[t];
        });
      }(a);
    }

    e("ee69");
    var n,
        o = e("f0c5"),
        r = Object(o["a"])(h["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], n);
    i["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/cropper/cropper-create-component', {
  'components/cropper/cropper-create-component': function componentsCropperCropperCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("efd7"));
  }
}, [['components/cropper/cropper-create-component']]]);
});
require('components/cropper/cropper.js');
__wxRoute = 'components/fa-icon/fa-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/fa-icon/fa-icon.js';

define('components/fa-icon/fa-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/fa-icon/fa-icon"], {
  "5a9c": function a9c(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("e05a"),
        u = e("c6a5");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("ce66");
    var r,
        o = e("f0c5"),
        i = Object(o["a"])(u["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], r);
    n["default"] = i.exports;
  },
  "5b79": function b79(t, n, e) {},
  c6a5: function c6a5(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("ccac"),
        u = e.n(c);

    for (var a in c) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  ccac: function ccac(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = {
      name: "faIcon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("on-click");
        }
      }
    };
    n.default = c;
  },
  ce66: function ce66(t, n, e) {
    "use strict";

    var c = e("5b79"),
        u = e.n(c);
    u.a;
  },
  e05a: function e05a(t, n, e) {
    "use strict";

    var c,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return c;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/fa-icon/fa-icon-create-component', {
  'components/fa-icon/fa-icon-create-component': function componentsFaIconFaIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5a9c"));
  }
}, [['components/fa-icon/fa-icon-create-component']]]);
});
require('components/fa-icon/fa-icon.js');
__wxRoute = 'components/nav-tab/nav-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/nav-tab/nav-tab.js';

define('components/nav-tab/nav-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/nav-tab/nav-tab"], {
  "789f": function f(t, i, n) {},
  9432: function _(t, i, n) {
    "use strict";

    var e = n("789f"),
        a = n.n(e);
    a.a;
  },
  "9e08": function e08(t, i, n) {
    "use strict";

    n.r(i);
    var e = n("c814"),
        a = n.n(e);

    for (var c in e) {
      "default" !== c && function (t) {
        n.d(i, t, function () {
          return e[t];
        });
      }(c);
    }

    i["default"] = a.a;
  },
  a482: function a482(t, i, n) {
    "use strict";

    var e,
        a = function a() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(i, "b", function () {
      return a;
    }), n.d(i, "c", function () {
      return c;
    }), n.d(i, "a", function () {
      return e;
    });
  },
  bad8: function bad8(t, i, n) {
    "use strict";

    n.r(i);
    var e = n("a482"),
        a = n("9e08");

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(i, t, function () {
          return a[t];
        });
      }(c);
    }

    n("9432");
    var u,
        o = n("f0c5"),
        s = Object(o["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], u);
    i["default"] = s.exports;
  },
  c814: function c814(t, i, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var n = {
        name: "navTab",
        props: {
          tabTitle: {
            type: Array,
            default: []
          }
        },
        data: function data() {
          return {
            tabClick: 0,
            isLeft: 0,
            isWidth: 0,
            toView: "",
            isLongWidth: 0
          };
        },
        created: function created() {
          var i = this;
          t.getSystemInfo({
            success: function success(t) {
              i.isWidth = t.windowWidth / i.tabTitle.length, i.isLongWidth = t.windowWidth / 5;
            }
          }), this.toView = "id0";
        },
        methods: {
          navClick: function navClick(t) {
            this.$emit("changeTab", t), this.tabClick = t, this.isLeft = t * this.isWidth;
          },
          longClick: function longClick(t) {
            var i = t - 2;
            i = i <= 0 ? 0 : i, this.toView = "id".concat(i), this.tabClick = t, this.isLeft = t * this.isLongWidth, this.$emit("changeTab", t);
          }
        }
      };
      i.default = n;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/nav-tab/nav-tab-create-component', {
  'components/nav-tab/nav-tab-create-component': function componentsNavTabNavTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bad8"));
  }
}, [['components/nav-tab/nav-tab-create-component']]]);
});
require('components/nav-tab/nav-tab.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "0bcc": function bcc(t, n, e) {},
  c4bd: function c4bd(t, n, e) {
    "use strict";

    var o = e("0bcc"),
        u = e.n(o);
    u.a;
  },
  d124: function d124(t, n, e) {
    "use strict";

    var o,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  d340: function d340(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("fe3a"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  ed41: function ed41(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("d124"),
        u = e("d340");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("c4bd");
    var c,
        a = e("f0c5"),
        s = Object(a["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], c);
    n["default"] = s.exports;
  },
  fe3a: function fe3a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ed41"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-swipe-action/uni-swipe-action';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swipe-action/uni-swipe-action.js';

define('components/uni-swipe-action/uni-swipe-action.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swipe-action/uni-swipe-action"], {
  2288: function _(t, i, n) {
    "use strict";

    var e,
        s = function s() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(i, "b", function () {
      return s;
    }), n.d(i, "c", function () {
      return o;
    }), n.d(i, "a", function () {
      return e;
    });
  },
  "2dd6": function dd6(t, i, n) {},
  "51e9": function e9(t, i, n) {
    "use strict";

    var e = n("2dd6"),
        s = n.n(e);
    s.a;
  },
  "77eb": function eb(t, i, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var n = {
        name: "uni-swipe-action",
        props: {
          clickData: {
            type: [Object, Array]
          },
          isOpened: {
            type: Boolean,
            default: !1
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          autoClose: {
            type: Boolean,
            default: !0
          },
          options: Array
        },
        watch: {
          isOpened: function isOpened(t, i) {
            this.isShowBtn = !!t, this.endMove();
          }
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            elId: t,
            isShowBtn: !1,
            transformX: "translateX(0px)"
          };
        },
        created: function created() {
          this.direction = "", this.startX = 0, this.startY = 0, this.btnGroupWidth = 0, this.isMoving = !1;
        },
        onReady: function onReady() {
          this.getSize();
        },
        methods: {
          getSize: function getSize() {
            var i = this;
            t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              i.btnGroupWidth = t[0].width;
            }), !0 === this.isOpened && (this.isShowBtn = !0, this.endMove());
          },
          bindClickBtn: function bindClickBtn(t, i) {
            this.$emit("click", {
              text: t.text,
              style: t.style,
              index: i,
              data: this.clickData
            });
          },
          bindClickCont: function bindClickCont(t) {
            this.isShowBtn && !0 === this.autoClose && (this.isShowBtn = !1, this.endMove());
          },
          touchStart: function touchStart(t) {
            this.startX = t.touches[0].pageX, this.startY = t.touches[0].pageY;
          },
          touchMove: function touchMove(t) {
            if ("Y" !== this.direction && !0 !== this.disabled) {
              var i = t.touches[0].pageY - this.startY,
                  n = t.touches[0].pageX - this.startX;
              !this.isMoving && Math.abs(i) > Math.abs(n) ? this.direction = "Y" : (this.direction = n > 0 ? "right" : "left", this.isMoving = !0);
            }
          },
          touchEnd: function touchEnd(t) {
            this.isMoving = !1, "right" === this.direction || "left" === this.direction ? ("right" == this.direction ? this.isShowBtn = !1 : this.isShowBtn = !0, this.endMove()) : this.direction = "";
          },
          endMove: function endMove() {
            "Y" !== this.direction && !0 !== this.disabled ? (this.isShowBtn ? (this.transformX = "translateX(".concat(-this.btnGroupWidth, "px)"), this.$emit("opened")) : (this.transformX = "translateX(0px)", this.$emit("closed")), this.direction = "") : this.direction = "";
          },
          close: function close() {
            this.isShowBtn = !1, this.endMove();
          }
        }
      };
      i.default = n;
    }).call(this, n("6e42")["default"]);
  },
  a00a: function a00a(t, i, n) {
    "use strict";

    n.r(i);
    var e = n("2288"),
        s = n("db08");

    for (var o in s) {
      "default" !== o && function (t) {
        n.d(i, t, function () {
          return s[t];
        });
      }(o);
    }

    n("51e9");
    var a,
        c = n("f0c5"),
        h = Object(c["a"])(s["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], a);
    i["default"] = h.exports;
  },
  db08: function db08(t, i, n) {
    "use strict";

    n.r(i);
    var e = n("77eb"),
        s = n.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        n.d(i, t, function () {
          return e[t];
        });
      }(o);
    }

    i["default"] = s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swipe-action/uni-swipe-action-create-component', {
  'components/uni-swipe-action/uni-swipe-action-create-component': function componentsUniSwipeActionUniSwipeActionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a00a"));
  }
}, [['components/uni-swipe-action/uni-swipe-action-create-component']]]);
});
require('components/uni-swipe-action/uni-swipe-action.js');
__wxRoute = 'pages/con_list/con_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/con_list/con_list.js';

define('pages/con_list/con_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/con_list/con_list"], {
  2012: function _(t, n, u) {
    "use strict";

    u.r(n);
    var s = u("c869"),
        e = u.n(s);

    for (var i in s) {
      "default" !== i && function (t) {
        u.d(n, t, function () {
          return s[t];
        });
      }(i);
    }

    n["default"] = e.a;
  },
  "95de": function de(t, n, u) {
    "use strict";

    u.r(n);
    var s = u("e0c9"),
        e = u("2012");

    for (var i in e) {
      "default" !== i && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(i);
    }

    var o,
        c = u("f0c5"),
        a = Object(c["a"])(e["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], o);
    n["default"] = a.exports;
  },
  c869: function c869(t, n, u) {
    "use strict";

    (function (t, s) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, u("1bf7");
      var e = {
        name: "con_list",
        data: function data() {
          return {
            popup: 1,
            screen: 1,
            sex: 0,
            itemlist: []
          };
        },
        onLoad: function onLoad() {
          this.list();
        },
        methods: {
          list: function list() {
            t.request({
              url: "http://39.101.185.133/api/useropus/opuslist",
              header: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/x-www-form-urlencoded"
              },
              success: function success(t) {
                this.itemlist = t.data.data.data, s("log", this.itemlist, " at pages\\con_list\\con_list.vue:160");
              }
            });
          },
          yongbao: function yongbao(t, n) {
            1 == t.yongbao.state ? (this.num[n]["yongbao"]["state"] = 2, this.num[n]["yongbao"]["num"] = this.num[n]["yongbao"]["num"] - 1) : (this.num[n]["yongbao"]["state"] = 1, this.num[n]["yongbao"]["num"] = this.num[n]["yongbao"]["num"] + 1);
          },
          shoucang: function shoucang(t, n) {
            1 == t.shoucang.state ? (this.num[n]["shoucang"]["state"] = 2, this.num[n]["shoucang"]["num"] = this.num[n]["shoucang"]["num"] - 1) : (this.num[n]["shoucang"]["state"] = 1, this.num[n]["shoucang"]["num"] = this.num[n]["shoucang"]["num"] + 1);
          },
          popup_click: function popup_click(t) {
            1 == this.popup ? this.popup = 2 : this.popup = 1;
          },
          screen_click: function screen_click() {
            1 == this.screen ? this.screen = 2 : this.screen = 1;
          },
          sex_click: function sex_click(t) {
            this.sex = t, 1 == this.screen ? this.screen = 2 : this.screen = 1;
          }
        }
      };
      n.default = e;
    }).call(this, u("6e42")["default"], u("0de9")["default"]);
  },
  e0c9: function e0c9(t, n, u) {
    "use strict";

    var s,
        e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    u.d(n, "b", function () {
      return e;
    }), u.d(n, "c", function () {
      return i;
    }), u.d(n, "a", function () {
      return s;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/con_list/con_list-create-component', {
  'pages/con_list/con_list-create-component': function pagesCon_listCon_listCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("95de"));
  }
}, [['pages/con_list/con_list-create-component']]]);
});
require('pages/con_list/con_list.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2a2a":function(n,t,e){"use strict";e.r(t);var i=e("c74b"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=o.a},"2fb0":function(n,t,e){"use strict";var i,o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return i})},8666:function(n,t,e){"use strict";(function(n){e("68e3"),e("921b");i(e("66fd"));var t=i(e("b7d7"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"953e":function(n,t,e){"use strict";var i=e("b9a1"),o=e.n(i);o.a},b7d7:function(n,t,e){"use strict";e.r(t);var i=e("2fb0"),o=e("2a2a");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("953e");var u,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},b9a1:function(n,t,e){},c74b:function(n,t,e){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("9771"));function a(n){return n&&n.__esModule?n:{default:n}}e("1bf7");var u,s=function(){return e.e("pages/con_list/con_list").then(e.bind(null,"95de"))},c=1,r=null,l={mixins:[o.default],components:{conList:s},data:function(){return{title:"Hello",current:0,head:[{name:"推荐"},{name:"最新"},{name:"最热"}],popup:1,screen:1,sex:0,itemlist:[],loadingText:"加载中..."}},onLoad:function(){this.initUserInfo(),u=this,this.getnewsList()},onPullDownRefresh:function(){this.getnewsList()},onReachBottom:function(){null!=r&&clearTimeout(r),r=setTimeout(function(){u.getmorenews()},1e3)},methods:{menu:function(n){this.current=n},getmorenews:function(){if(""!=u.loadingText&&"加载更多"!=u.loadingText)return!1;u.loadingText="加载中...",n.showNavigationBarLoading(),n.request({url:"https://api-h5.soulapp.cn/html/v2/post/hot?pageIndex="+c,method:"GET",success:function(t){u.loadingText="";var e=t.data.data.posts;if(i("log",e," at pages\\index\\index.vue:227"),""==e)return n.hideNavigationBarLoading(),u.loadingText="已加载全部",!1;c++,i("log",t," at pages\\index\\index.vue:234"),u.itemlist=u.itemlist.concat(e),u.loadingText="加载更多",n.hideNavigationBarLoading()}})},getnewsList:function(){c=1,n.showNavigationBarLoading(),n.request({url:"https://api-h5.soulapp.cn/html/v2/post/hot?pageIndex=1",method:"GET",success:function(t){c++;var e=t.data.data.posts;u.itemlist=e,n.hideNavigationBarLoading(),n.stopPullDownRefresh(),u.loadingText="加载更多"}})},initUserInfo:function(){try{var t=n.getStorageSync("chat_user_info");if(t.id){var e=t.id,i=t.nickname,o=t.figureurl;this.$store.commit("setChatUserInfo",{id:e,nickname:i,figureurl:o})}}catch(a){}},yongbao:function(n,t){1==n.yongbao.state?(this.num[t]["yongbao"]["state"]=2,this.num[t]["yongbao"]["num"]=this.num[t]["yongbao"]["num"]-1):(this.num[t]["yongbao"]["state"]=1,this.num[t]["yongbao"]["num"]=this.num[t]["yongbao"]["num"]+1)},shoucang:function(n,t){1==n.shoucang.state?(this.num[t]["shoucang"]["state"]=2,this.num[t]["shoucang"]["num"]=this.num[t]["shoucang"]["num"]-1):(this.num[t]["shoucang"]["state"]=1,this.num[t]["shoucang"]["num"]=this.num[t]["shoucang"]["num"]+1)},popup_click:function(n){1==this.popup?this.popup=2:this.popup=1},screen_click:function(){1==this.screen?this.screen=2:this.screen=1},sex_click:function(n){this.sex=n,1==this.screen?this.screen=2:this.screen=1},tags:function(t){n.navigateTo({url:"/pages/soul/tags?tagkey="+t})},user:function(t){n.navigateTo({url:"/pages/soul/user?userkey="+t})},detail:function(t){n.navigateTo({url:"/pages/soul/detail?detailkey="+t})}}};t.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["8666","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{"85b4":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(i("32ff")),a=c(i("1e1e")),o=c(i("b4ab")),r=i("549e");function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(i.bind(null,"cd93"))},h=function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"ed41"))},d={components:{chatMessage:u,uniPopup:h},mixins:[a.default,s.default,o.default],data:function(){return{scrollAnimation:!1,scrollTop:0,scrollToView:"",emojiList:r.EmojiList,popupLayerClass:"",hideMore:!0,hideEmoji:!0,showPopup:!1,popupMessage:"",textMsg:"",cursor:0,receive_id:0}},computed:{receive_user_info:function(){return this.$store.state.chat.private_user_info},privateMassagerList:function(){if(!this.receive_id)return[];var e="chat_new_"+this.receive_id,t=this.$store.state.chat.privateMassagerObject[e]||[];return t.map(function(e){var t=e.time;if("string"===typeof t||!e)return e;var i=new Date(t);return e.time=i.getMonth()+1+"月"+i.getDate()+"日"+i.getHours()+":"+i.getMinutes(),e})}},watch:{privateMassagerList:function(){var e=this;this.$nextTick(function(){e.scrollToView="message"+(e.privateMassagerList.length-1)})}},onUnload:function(){},onShow:function(){this.initOnShow()},onBackPress:function(){this.$store.commit("cancelMassagerTips",this.receive_id)},methods:{initOnShow:function(){0===this.receive_id&&(this.receive_id=this.$store.state.chat.private_id),this.receive_id?(this.receive_user_info.nickname&&e.setNavigationBarTitle({title:"与"+this.receive_user_info.nickname+"的对话"}),this.$store.commit("cancelMassagerTips",this.receive_id),this.getPrivateChat()):e.reLaunch({url:"/pages/chat/contact"})},openDrawer:function(){this.popupLayerClass="showLayer",this.hideMore=!0},hideDrawer:function(){var e=this;this.popupLayerClass="",setTimeout(function(){e.hideMore=!0,e.hideEmoji=!0},150)},loadHistory:function(){},switchVoice:function(){this.isVoice=!this.isVoice},showMore:function(){this.hideMore=!1,this.popupLayerClass="showLayer"},textareaBlurEvent:function(e){this.textMsg=e.detail.value,this.cursor=e.detail.cursor||0},chooseImage:function(){this.sendImage("album")},camera:function(){this.sendImage("camera")},handRedEnvelopes:function(){this.hideDrawer(),n("log","handRedEnvelopes"," at pages\\chat\\chat.vue:264")},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.popupLayerClass="showLayer"):this.hideDrawer()},addEmoji:function(e){var t,i,n=this.cursor,s=this.textMsg;0!==n?(t=s.substring(0,n),i=s.substr(n),this.textMsg=t+e.alt+i):this.textMsg=e.alt+s},sendText:function(){var e=this;if(this.hideDrawer(),""!==this.textMsg){var t=this.textMsg;setTimeout(function(){e.textMsg=""},0),t=this.replaceEmoji(t);var i={action:"sendToUid",data:{send_id:this.user_info.id,receive_id:this.receive_id,message_type:"text",message:t,time:(new Date).getTime()}};this.sendSocketMessage(i)}},replaceEmoji:function(e){var t=e.replace(/\[([^(\]|\[)]*)\]/g,function(e){for(var t=0;t<r.EmojiAll.length;t++){var i=r.EmojiAll[t];if(i.alt==e){var n="https://qq.wyx2013.cn/upload/emoji/",s='<img src="'+n+i.url+'">';return s}}});return'<div class="talk-emoji" >'+t+"</div>"},floatTouchClick:function(e){n("log",e," at pages\\chat\\chat.vue:326")},getPrivateChat:function(){var e={action:"getPrivateChat",data:{send_id:this.user_info.id,receive_id:this.receive_id}};this.sendSocketMessage(e)}}};t.default=d}).call(this,i("6e42")["default"],i("0de9")["default"])},"8f43":function(e,t,i){},"9b8e":function(e,t,i){"use strict";var n={"chat-message":()=>Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(i.bind(null,"cd93")),"fa-icon":()=>i.e("components/fa-icon/fa-icon").then(i.bind(null,"5a9c")),"uni-popup":()=>i.e("components/uni-popup/uni-popup").then(i.bind(null,"ed41"))},s=function(){var e=this,t=e.$createElement;e._self._c},a=[];i.d(t,"b",function(){return s}),i.d(t,"c",function(){return a}),i.d(t,"a",function(){return n})},a155:function(e,t,i){"use strict";i.r(t);var n=i("85b4"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},a4e9:function(e,t,i){"use strict";(function(e){i("68e3"),i("921b");n(i("66fd"));var t=n(i("b91b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},b91b:function(e,t,i){"use strict";i.r(t);var n=i("9b8e"),s=i("a155");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("cc98");var o,r=i("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=c.exports},cc98:function(e,t,i){"use strict";var n=i("8f43"),s=i.n(n);s.a}},[["a4e9","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/chat/contact';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/contact.js';

define('pages/chat/contact.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/contact"],{"51e0":function(t,e,n){"use strict";var o=n("93ab"),a=n.n(o);a.a},"68f9":function(t,e,n){"use strict";(function(t){n("68e3"),n("921b");o(n("66fd"));var e=o(n("b7b4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e77":function(t,e,n){"use strict";var o={"fa-icon":()=>n.e("components/fa-icon/fa-icon").then(n.bind(null,"5a9c"))},a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},"93ab":function(t,e,n){},"9f47":function(t,e,n){"use strict";n.r(e);var o=n("c72a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},b7b4:function(t,e,n){"use strict";n.r(e);var o=n("6e77"),a=n("9f47");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("51e0");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=r.exports},c72a:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("9771")),i=c(n("32ff")),u=c(n("1e1e")),s=c(n("33c7")),r=n("5ce8");function c(t){return t&&t.__esModule?t:{default:t}}var f=function(){return n.e("components/uni-swipe-action/uni-swipe-action").then(n.bind(null,"a00a"))},l=function(){return n.e("components/nav-tab/nav-tab").then(n.bind(null,"bad8"))},d={mixins:[a.default,u.default,i.default,s.default],components:{uniSwipeAction:f,navTab:l},data:function(){return{options:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],tabTitle:["好友","群组"],currentTab:0,toView:"",newRoomName:"测试房间"}},computed:{requestRelationList:function(){var t=[];for(var e in this.$store.state.chat.requestRelationList)t.push(this.$store.state.chat.requestRelationList[e]);return t},relationList:function(){return this.$store.state.chat.relationList},privateMassagerTips:function(){return this.$store.state.chat.privateMassagerTips},groupRoomList:function(){return this.$store.state.chat.groupRoomList}},methods:{pageInit:function(){this.getRelation(),this.getRequestRelationList(),this.getChatRooms()},goGroupRoo:function(e){t("log",e," at pages\\chat\\contact.vue:131")},getRequestRelationList:function(){var t=r.SocketModul,e="getRequestRelation",n=this.user_info.id,o={module:t,action:e,data:{send_id:n}};this.sendSocketMessage(o)},getRelation:function(){var t=r.SocketModul,e="getRelation",n=this.user_info.id,o={module:t,action:e,data:{send_id:n}};this.sendSocketMessage(o).then(function(){})},changeTab:function(t){this.currentTab=t},swiperTab:function(t){var e=t.detail.current;this.tabTitle.length<=5?this.$refs.navTab.navClick(e):this.$refs.navTab.longClick(e)},buildChatRoom:function(){var t=this,e=this.newRoomName;this.authUserRequest(r.BuildChatRoom,{title:e}).then(function(e){var n=e.id,o=e.chat_user_id;n&&o&&t.$store.commit("setGroupRoom",e)}).catch(function(t){})},generalGroup:function(){o.navigateTo({url:"/pages/chat/group-chat"})},getChatRooms:function(){var t=this;this.authUserRequest(r.GetChatRooms).then(function(e){var n=e.chat_group_room;Array.isArray(n)&&t.$store.commit("setGroupRoomList",n)}).catch()}}};e.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["68f9","common/runtime","common/vendor"]]]);
});
require('pages/chat/contact.js');
__wxRoute = 'pages/chat/group-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/group-chat.js';

define('pages/chat/group-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/group-chat"],{"5b19":function(n,t,e){},8039:function(n,t,e){"use strict";e.r(t);var u=e("5b19"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},acb1:function(n,t,e){"use strict";(function(n){e("68e3"),e("921b");u(e("66fd"));var t=u(e("ec06"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e6fd:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},ec06:function(n,t,e){"use strict";e.r(t);var u=e("e6fd"),c=e("8039");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);var a,f=e("f0c5"),o=Object(f["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=o.exports}},[["acb1","common/runtime","common/vendor"]]]);
});
require('pages/chat/group-chat.js');
__wxRoute = 'pages/chat/match';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/match.js';

define('pages/chat/match.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/match"],{a48d:function(t,e,n){"use strict";n.r(e);var a=n("dc91"),i=n("d2a9");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("f469");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=r.exports},ad79:function(t,e,n){},d2a9:function(t,e,n){"use strict";n.r(e);var a=n("facf"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},dc91:function(t,e,n){"use strict";var a={"fa-icon":()=>n.e("components/fa-icon/fa-icon").then(n.bind(null,"5a9c"))},i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},f469:function(t,e,n){"use strict";var a=n("ad79"),i=n.n(a);i.a},facf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("9771")),i=s(n("32ff")),u=s(n("1e1e"));function s(t){return t&&t.__esModule?t:{default:t}}var c={components:{},mixins:[a.default,u.default,i.default],data:function(){return{}},onShow:function(){},onPullDownRefresh:function(){this.getUserList(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},computed:{userList:function(){var t=this,e=Object.values(this.$store.state.chat.userListObject);return e.map(function(e){return e.isSelf=e.id===t.user_info.id,e}),Object.values(this.$store.state.chat.userListObject)},privateMassagerTips:function(){return this.$store.state.chat.privateMassagerTips}},methods:{pageInit:function(){this.getUserList()},getUserList:function(){var t={action:"getUserList",data:{}};this.sendSocketMessage(t)},addFriends:function(t){var e={action:"requestRelation",data:{send_id:this.user_info.id,receive_id:t.id,time:(new Date).getTime()}};this.sendSocketMessage(e)}}};e.default=c}).call(this,n("6e42")["default"])},fad1:function(t,e,n){"use strict";(function(t){n("68e3"),n("921b");a(n("66fd"));var e=a(n("a48d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["fad1","common/runtime","common/vendor"]]]);
});
require('pages/chat/match.js');
__wxRoute = 'pages/chat/record';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/record.js';

define('pages/chat/record.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/record"],{"172b":function(t,n,e){"use strict";e.r(n);var u=e("bf33"),f=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=f.a},a87f:function(t,n,e){"use strict";(function(t){e("68e3"),e("921b");u(e("66fd"));var n=u(e("f5f1"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},bf33:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={};n.default=u},e4df:function(t,n,e){"use strict";var u,f=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return f}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},f5f1:function(t,n,e){"use strict";e.r(n);var u=e("e4df"),f=e("172b");for(var r in f)"default"!==r&&function(t){e.d(n,t,function(){return f[t]})}(r);var a,c=e("f0c5"),o=Object(c["a"])(f["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=o.exports}},[["a87f","common/runtime","common/vendor"]]]);
});
require('pages/chat/record.js');
__wxRoute = 'pages/chat/request-relation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/request-relation.js';

define('pages/chat/request-relation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/request-relation"],{"620c":function(e,t,n){"use strict";n.r(t);var i=n("af48"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},af48:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("5ce8"),a={data:function(){return{}},computed:{requestRelationList:function(){return this.$store.state.chat.requestRelationList},requestRelationUserInfo:function(){return this.$store.state.chat.requestRelationUserInfo},user_info:function(){return this.$store.state.chat.user_info},hasList:function(){return!this.requestRelationList.length}},onShow:function(){if(this.$store.state.chat.isOnline){if(0===this.requestRelationList.length){var t=getCurrentPages();t.length>1&&this.user_info.id?e.navigateBack():e.reLaunch({url:"/pages/index/index"})}this.getRequestRelationUserInfo()}else e.reLaunch({url:"/pages/index/index"})},methods:{handleRelation:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"agree";t=1*t.replace(/_chat_new_/,"");var s=this,o={module:i.SocketModul,action:"manageRelation",data:{send_id:this.user_info.id,receive_id:t,handle:a}};e.sendSocketMessage({data:JSON.stringify(o),success:function(){s.$store.commit("removeRequestRelationList",n)},fail:function(){s.$store.commit("changeSocket",!1)}})},getRequestRelationUserInfo:function(){var t=this.requestRelationList.map(function(e){return e.send_id}),n=this,a={module:i.SocketModul,action:"getUserList",data:{type:"receiveRequestRelationUserInfo",list:t}};e.sendSocketMessage({data:JSON.stringify(a),success:function(e){},fail:function(){n.$store.commit("changeSocket",!1)}})}}};t.default=a}).call(this,n("6e42")["default"])},c705:function(e,t,n){"use strict";n.r(t);var i=n("fc25"),a=n("620c");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);var o,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=u.exports},d62d:function(e,t,n){"use strict";(function(e){n("68e3"),n("921b");i(n("66fd"));var t=i(n("c705"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fc25:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i})}},[["d62d","common/runtime","common/vendor"]]]);
});
require('pages/chat/request-relation.js');
__wxRoute = 'pages/login/findpwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/findpwd.js';

define('pages/login/findpwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/findpwd"],{"11a8":function(t,e,a){"use strict";(function(t){a("68e3"),a("921b");n(a("66fd"));var e=n(a("6ddc"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"11fe":function(t,e,a){"use strict";a.r(e);var n=a("8849"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},"6ddc":function(t,e,a){"use strict";a.r(e);var n=a("d496"),u=a("11fe");for(var o in u)"default"!==o&&function(t){a.d(e,t,function(){return u[t]})}(o);var r,i=a("f0c5"),s=Object(i["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=s.exports},8849:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=59,n=!0,u={data:function(){return{pageLoad:!1,pageData:{},yzm:"",telephone:"",yzmClass:"",yzmStatus:"获取验证码"}},methods:{downTimer:function(){var t=this,e=setInterval(function(){n=!1,t.yzmStatus="倒计时"+a+"秒",t.yzmClass="yzmDisable",a--,0==a&&(a=59,n=!0,t.yzmClass="",t.yzmStatus="获取验证码",clearInterval(e))},1e3)},getYzm:function(){if(!n)return!1;var e=this;t.request({url:e.app.apiHost+"?m=login&a=SendSms&ajax=1",data:{telephone:this.telephone,fromapp:e.app.fromapp()},success:function(a){t.showToast({title:a.data.message}),a.data.error||e.downTimer()}})},formSubmit:function(e){var a=this;t.request({url:a.app.apiHost+"?m=login&a=findpwdSave&ajax=1",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:e.detail.value,success:function(e){e.data;t.showToast({title:e.data.message}),e.data.error||setTimeout(function(){t.navigateBack()},1e3)}})}}};e.default=u}).call(this,a("6e42")["default"])},d496:function(t,e,a){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return u}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})}},[["11a8","common/runtime","common/vendor"]]]);
});
require('pages/login/findpwd.js');
__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{2746:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("5ce8"),u=o(t("33c7"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"ed41"))},c={components:{uniPopup:r},mixins:[u.default],data:function(){return{showPopup:!1,popupMessage:"",retryCount:0}},onShow:function(){},methods:{goHome:function(){e.redirectTo({url:"/pages/index/index"})},wxLogin:function(e){var n=this;if(!e.detail.userInfo||!e.detail.encryptedData)return this.showPopup=!0,this.popupMessage="末授权登录",void setTimeout(function(){return n.showPopup=!1},2e3);this.retryCount=0,this.jwtWeixin(e.detail)},jwtWeixin:function(n){var t=this;e.login({provider:"weixin"}).then(function(e){return new Promise(function(n,t){!e[0]&&e[1].code&&n(e[1].code)})}).then(function(t){return new Promise(function(i,u){n?i({code:t,detail:n}):e.getUserInfo({provider:"weixin",success:function(e){return i({code:t,detail:e})}})})}).then(function(n){return new Promise(function(u,o){e.request({url:i.MpWeiXinAuth,method:"POST",data:{code:n.code,iv:n.detail.iv,encrypted_data:n.detail.encryptedData},success:function(e){e.data.id?t.saveUserInfo(e.data):o()}})})}).catch(function(){t.retryCount++,t.retryCount<3?setTimeout(function(){return t.jwtWeixin()},1e3):(t.popupMessage="网络连接错误，请重试",setTimeout(function(){return t.showPopup=!1},1e3),t.showPopup=!0)})},formSubmit:function(e){var n=e.detail.value;this._adminUserLogin(n)},test:function(){e.setStorage({key:"chat_user_info",data:{nickname:"dfsd",figureurl:"https://qq.wyx2013.cn/static/index/img/headdefault.png",code:0,id:"18",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Njg1MTM3MjQsIm5iZiI6MTU2ODUxMzcyNCwiZXhwIjoxNTY5MTE4NTI0LCJkYXRhIjp7ImFkbWluX3VzZXJfaWQiOiIxMSJ9fQ.vOhjEoR7OvKm34ywGszOgxUNa08lye75AVUhOh63jdM",exp:1569118524},success:function(){e.redirectTo({url:"/pages/index/index"})}})}}};n.default=c}).call(this,t("6e42")["default"])},4243:function(e,n,t){"use strict";(function(e){t("68e3"),t("921b");i(t("66fd"));var n=i(t("f256"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"916c":function(e,n,t){"use strict";t.r(n);var i=t("2746"),u=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=u.a},bd4a:function(e,n,t){"use strict";var i={"fa-icon":()=>t.e("components/fa-icon/fa-icon").then(t.bind(null,"5a9c")),"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"ed41"))},u=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return i})},f256:function(e,n,t){"use strict";t.r(n);var i=t("bd4a"),u=t("916c");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);var r,c=t("f0c5"),a=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=a.exports}},[["4243","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/user/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/index.js';

define('pages/user/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"278e":function(t,n,e){"use strict";e.r(n);var i=e("dbeb"),o=e("9149");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("a556");var r,a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=c.exports},4113:function(t,n,e){},"5e64":function(t,n,e){"use strict";(function(t){e("68e3"),e("921b");i(e("66fd"));var n=i(e("278e"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},9149:function(t,n,e){"use strict";e.r(n);var i=e("a4a5"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},a4a5:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("9771")),o=e("5ce8");function u(t){return t&&t.__esModule?t:{default:t}}var r={components:{},mixins:[i.default],data:function(){return{}},computed:{user_info:function(){return this.$store.state.chat.user_info}},onReady:function(){t.setNavigationBarTitle({title:"个人中心"})},onLoad:function(){this.initUserInfo()},onShow:function(){},onHide:function(){},methods:{initUserInfo:function(){try{var n=t.getStorageSync("chat_user_info");if(n.id){var e=n.id,i=n.nickname,o=n.figureurl;return void this.$store.commit("setChatUserInfo",{id:e,nickname:i,figureurl:o})}}catch(u){}t.reLaunch({url:"/pages/login/index"})},loginOut:function(){this.$store.commit("setChatUserInfo",{}),t.removeStorage({key:"chat_user_info"});var n={module:o.SocketModul,action:"loginOut",data:{user_info:this.user_info}},e=this;t.sendSocketMessage({data:JSON.stringify(n),fail:function(){e.$store.commit("changeSocket",!1)},complete:function(){t.reLaunch({url:"/pages/login/index"})}})}}};n.default=r}).call(this,e("6e42")["default"])},a556:function(t,n,e){"use strict";var i=e("4113"),o=e.n(i);o.a},dbeb:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})}},[["5e64","common/runtime","common/vendor"]]]);
});
require('pages/user/index.js');
__wxRoute = 'pages/user/info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/info.js';

define('pages/user/info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/info"],{"438d":function(e,t,n){"use strict";n.r(t);var r=n("49c6"),u=n("f1c7");for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);var o,a=n("f0c5"),c=Object(a["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},"49c6":function(e,t,n){"use strict";var r={cropper:()=>Promise.all([n.e("common/vendor"),n.e("components/cropper/cropper")]).then(n.bind(null,"efd7"))},u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r})},6083:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("32ff")),i=a(n("1e1e")),o=n("5ce8");function a(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/cropper/cropper")]).then(n.bind(null,"efd7"))},s={components:{cropper:l},mixins:[i.default,u.default],data:function(){return{figureurl:"",isChange:!1}},watch:{"user_info.id":function(e){this.figureurl=this.user_info.figureurl}},created:function(){this.figureurl=this.user_info.figureurl},methods:{getPage:function(){},myUpload:function(t){e("log",t," at pages\\user\\info.vue:48"),this.isChange=!0,this.figureurl=t.path},submit:function(e){var t=this;if(this.isChange){var n=this,u=this.token,i=this.user_info.id;this.uploadFile(this.figureurl,{ext:1}).then(function(a){t.figureurl=a.url,t.isChange=!1,r.request({url:o.updataUserInfo,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:c({},e.detail.value,{token:u,chat_user_id:i,figureurl:t.figureurl}),success:function(e){var t=e.data,u=t.id,i=t.figureurl,o=t.nickname;n.$store.commit("setChatUserInfo",{id:u,figureurl:i,nickname:o}),r.getStorage({key:"chat_user_info",success:function(e){Object.assign(e.data,{figureurl:i,nickname:o}),r.setStorage({key:"chat_user_info",data:e.data})}})}})})}}}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},e7e1:function(e,t,n){"use strict";(function(e){n("68e3"),n("921b");r(n("66fd"));var t=r(n("438d"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f1c7:function(e,t,n){"use strict";n.r(t);var r=n("6083"),u=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=u.a}},[["e7e1","common/runtime","common/vendor"]]]);
});
require('pages/user/info.js');
__wxRoute = 'pages/user/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/register.js';

define('pages/user/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/register"],{"25b7":function(e,n,t){"use strict";var a=t("dad0"),c=t.n(a);c.a},"25fc":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("5ce8"),c=u(t("33c7"));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"ed41"))},i={components:{uniPopup:s},mixins:[c.default],data:function(){return{check_username:!0,check_nickname:!0,check_password:!0,check_email:!0,showPopup:!1,popupMessage:""}},computed:{check:function(){return this.check_username||this.check_password||this.check_email||this.check_nickname}},onLoad:function(e){},methods:{checkUserName:function(n){var t=n.detail.value.replace(/(^\s*)|(\s*$)/g,""),c=this;c.check_username=!0,/^[a-zA-Z0-9_-]{4,20}$/.test(t)?e.request({url:a.CheckUserName,data:{username:t},success:function(e){e.data.username?c.check_username=!1:c.info("用户名已被占用")},fail:function(e){c.info("网络错误")}}):c.info("请输入4-20位由字母、数字组成的用户名")},checkNickName:function(e){var n=e.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_nickname=!0,/^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,20}$/.test(n)?this.check_nickname=!1:this.info("昵称不能太长")},checkPassWord:function(e){var n=e.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_password=!0,/^[A-Za-z0-9_\-\!\@\#\$\%\^\&\*\(\)\:\"\|\'\<\>\?\;\'\,\.\\\/]{5,16}$/.test(n)?this.check_password=!1:this.info("密码由5-16位组成")},checkEmail:function(e){var n=e.detail.value.replace(/(^\s*)|(\s*$)/g,"");this.check_email=!0,/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(n)?this.check_email=!1:this.info("邮箱格式不正确")},formSubmit:function(n){var t=this,c=n.detail.value,u=c.username,s=c.password,i=c.email,o=c.nickname;u=u.replace(/(^\s*)|(\s*$)/g,""),s=s.replace(/(^\s*)|(\s*$)/g,""),i=i.replace(/(^\s*)|(\s*$)/g,""),o=o.replace(/(^\s*)|(\s*$)/g,""),e.request({url:a.AdminUserRegister,method:"POST",header:{"content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},data:{username:u,password:s,email:i,nickname:o},success:function(e){e.data;0==e.data.code&&e.data.user_info.id&&t._adminUserLogin({username:u,password:s})}})},info:function(e){var n=this;this.popupMessage=e,this.showPopup=!0,setTimeout(function(){return n.showPopup=!1},1e3)}}};n.default=i}).call(this,t("6e42")["default"])},"6fb3":function(e,n,t){"use strict";(function(e){t("68e3"),t("921b");a(t("66fd"));var n=a(t("aeff"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"72b7":function(e,n,t){"use strict";t.r(n);var a=t("25fc"),c=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);n["default"]=c.a},aeff:function(e,n,t){"use strict";t.r(n);var a=t("bb4a"),c=t("72b7");for(var u in c)"default"!==u&&function(e){t.d(n,e,function(){return c[e]})}(u);t("25b7");var s,i=t("f0c5"),o=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);n["default"]=o.exports},bb4a:function(e,n,t){"use strict";var a={"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"ed41"))},c=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return c}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return a})},dad0:function(e,n,t){}},[["6fb3","common/runtime","common/vendor"]]]);
});
require('pages/user/register.js');
__wxRoute = 'pages/treehole/square';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/treehole/square.js';

define('pages/treehole/square.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/treehole/square"],{"2e8b":function(t,n,u){},"4cdf":function(t,n,u){"use strict";u.r(n);var e=u("af2f"),s=u("b07d");for(var o in s)"default"!==o&&function(t){u.d(n,t,function(){return s[t]})}(o);u("dadd");var a,i=u("f0c5"),c=Object(i["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=c.exports},"583b":function(t,n,u){"use strict";(function(t){u("68e3"),u("921b");e(u("66fd"));var n=e(u("4cdf"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,u("6e42")["createPage"])},af2f:function(t,n,u){"use strict";var e,s=function(){var t=this,n=t.$createElement;t._self._c},o=[];u.d(n,"b",function(){return s}),u.d(n,"c",function(){return o}),u.d(n,"a",function(){return e})},b07d:function(t,n,u){"use strict";u.r(n);var e=u("d8f8"),s=u.n(e);for(var o in e)"default"!==o&&function(t){u.d(n,t,function(){return e[t]})}(o);n["default"]=s.a},d8f8:function(t,n,u){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,u("1bf7");var s={name:"con_list",data:function(){return{opuslist:[],popup:1,screen:1,sex:0,num:[{id:1,yongbao:{state:1,num:34},huifu:{state:2,num:22},shoucang:{state:2,num:22}},{id:2,yongbao:{state:1,num:34},huifu:{state:2,num:22},shoucang:{state:2,num:22}}]}},onLoad:function(){this.opuslistFunc()},methods:{opuslistFunc:function(){var n=this;t.request({url:"http://39.101.185.133/api/UserOpus/opuslist",datatype:"json",header:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},success:function(t){n.opuslist=t.data,e("log",n.opuslist," at pages\\treehole\\square.vue:197")}})},yongbao:function(t,n){1==t.yongbao.state?(this.num[n]["yongbao"]["state"]=2,this.num[n]["yongbao"]["num"]=this.num[n]["yongbao"]["num"]-1):(this.num[n]["yongbao"]["state"]=1,this.num[n]["yongbao"]["num"]=this.num[n]["yongbao"]["num"]+1)},shoucang:function(t,n){1==t.shoucang.state?(this.num[n]["shoucang"]["state"]=2,this.num[n]["shoucang"]["num"]=this.num[n]["shoucang"]["num"]-1):(this.num[n]["shoucang"]["state"]=1,this.num[n]["shoucang"]["num"]=this.num[n]["shoucang"]["num"]+1)},popup_click:function(t){1==this.popup?this.popup=2:this.popup=1},screen_click:function(){1==this.screen?this.screen=2:this.screen=1},sex_click:function(t){this.sex=t,1==this.screen?this.screen=2:this.screen=1}}};n.default=s}).call(this,u("6e42")["default"],u("0de9")["default"])},dadd:function(t,n,u){"use strict";var e=u("2e8b"),s=u.n(e);s.a}},[["583b","common/runtime","common/vendor"]]]);
});
require('pages/treehole/square.js');
__wxRoute = 'pages/soul/tags';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/soul/tags.js';

define('pages/soul/tags.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/soul/tags"],{"0038":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("1bf7");var u={data:function(){return{itemlist:[]}},onLoad:function(e){t("log",e.tagkey," at pages\\soul\\tags.vue:64"),this.list(e.tagkey)},methods:{list:function(e){var n=this;a.request({url:"https://api-h5.soulapp.cn/html/v2/tag/post?tagIdEcpt="+e,header:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},success:function(e){t("log",e.data.data.posts," at pages\\soul\\tags.vue:79"),n.itemlist=e.data.data.posts}})},tags:function(t){a.navigateTo({url:"/pages/soul/tags?tagkey="+t})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},1762:function(t,e,n){"use strict";(function(t){n("68e3"),n("921b");a(n("66fd"));var e=a(n("6313"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3097:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},4780:function(t,e,n){"use strict";n.r(e);var a=n("0038"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},6313:function(t,e,n){"use strict";n.r(e);var a=n("3097"),u=n("4780");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var s,i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports}},[["1762","common/runtime","common/vendor"]]]);
});
require('pages/soul/tags.js');
__wxRoute = 'pages/soul/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/soul/user.js';

define('pages/soul/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/soul/user"],{6073:function(t,e,n){"use strict";n.r(e);var u=n("ac57"),a=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=a.a},"844b":function(t,e,n){"use strict";(function(t){n("68e3"),n("921b");u(n("66fd"));var e=u(n("f77e"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9acc":function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u})},ac57:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{itemlist:[]}},onLoad:function(t){this.list(t.userkey)},methods:{list:function(e){var u=this;t.request({url:"https://api-h5.soulapp.cn/html/v2/user/info?userIdEcpt="+e,header:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},success:function(t){n("log",t.data.data," at pages\\soul\\user.vue:33"),u.itemlist=t.data.data}})},tags:function(e){t.navigateTo({url:"/pages/soul/tags?tagkey="+e})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},f77e:function(t,e,n){"use strict";n.r(e);var u=n("9acc"),a=n("6073");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);var o,r=n("f0c5"),i=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);e["default"]=i.exports}},[["844b","common/runtime","common/vendor"]]]);
});
require('pages/soul/user.js');
__wxRoute = 'pages/soul/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/soul/detail.js';

define('pages/soul/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/soul/detail"],{"0385":function(t,e,n){"use strict";n.r(e);var a=n("efab"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},7537:function(t,e,n){"use strict";(function(t){n("68e3"),n("921b");a(n("66fd"));var e=a(n("f18f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b16a:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},efab:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("1bf7");var u={data:function(){return{itemlist:[]}},onLoad:function(t){this.list(t.detailkey)},methods:{list:function(e){var n=this;t.request({url:"https://api-h5.soulapp.cn/html/v3/post/detail?postIdEcpt="+e,header:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded"},success:function(t){a("log",t.data.data," at pages\\soul\\detail.vue:79"),n.itemlist=t.data.data}})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},f18f:function(t,e,n){"use strict";n.r(e);var a=n("b16a"),u=n("0385");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var o,l=n("f0c5"),c=Object(l["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports}},[["7537","common/runtime","common/vendor"]]]);
});
require('pages/soul/detail.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

