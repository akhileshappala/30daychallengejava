/* global webData: true */
/*'use strict'; xxxx*/
/* jshint ignore:start */
/*
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.3.4
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(k,s){if(!k)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.3.4";var h=window,m=h.Visitor;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._c="Visitor";a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;var t=h.document,j=h.O;j||(j=null);var i=h.P;i||(i=!0);var p=h.N;p||(p=!1);a.C=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.m=function(a){var c="0123456789",b="",e="",f,g=8,h=10,i=10;if(1==a){c+="ABCDEF";for(a=
0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*h),b+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10),f=Math.floor(Math.random()*i),e+=c.substring(f,f+1),0==a&&9==f?i=3:(1==a||2==a)&&10!=i&&2>f?i=10:2<a&&(i=10);return b+e};a.I=function(){var a;!a&&h.location&&(a=h.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=
c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,nd,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+t.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=b.getYear(),
b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(t.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.e=j;a.w=function(a,c){try{"function"==typeof a?a.apply(h,c):a[1].apply(a[0],c)}catch(b){}};a.L=function(d,c){c&&(a.e==j&&(a.e={}),void 0==a.e[d]&&(a.e[d]=[]),a.e[d].push(c))};a.l=function(d,c){if(a.e!=j){var b=a.e[d];if(b)for(;0<b.length;)a.w(b.shift(),c)}};a.j=
j;a.J=function(d,c,b){var e=0,f=0,g;if(c&&t){for(g=0;!e&&2>g;){try{e=(e=t.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{t.body&&(e=t.body)}catch(i){e=0}if(e)for(g=0;!f&&2>g;){try{f=t.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),b&&(a.j==j&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};a.H=function(d){a.j!=
j&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.D=p;a.F=p;a.isAllowed=function(){if(!a.D&&(a.D=i,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.F=i;return a.F};a.a=j;a.c=j;var w=a.V;w||(w="MC");var n=a.Y;n||(n="MCMID");var x=a.X;x||(x="MCCIDH");var y=a.W;y||(y="MCAS");var u=a.T;u||(u="A");var l=a.Q;l||(l="MCAID");var v=a.U;v||(v="AAM");var r=a.S;r||(r="MCAAMLH");var o=a.R;o||(o="MCAAMB");var q=a.Z;q||(q="NONE");a.t=0;a.B=function(){if(!a.t){var d=a.version;a.audienceManagerServer&&
(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);if(a.audienceManagerCustomerIDDPIDs)for(var c in a.audienceManagerCustomerIDDPIDs)!Object.prototype[c]&&a.audienceManagerCustomerIDDPIDs[c]&&(d+=c+"="+a.audienceManagerCustomerIDDPIDs[c]);a.t=a.C(d)}return a.t};a.G=p;a.h=function(){if(!a.G){a.G=i;var d=a.B(),c=p,b=a.cookieRead(a.cookieName),e,f,g,h=new Date;a.a==j&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0])!=
d&&(c=i),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)e=b[d].split("-"),f=e[0],g=b[d+1],e=1<e.length?parseInt(e[1]):0,c&&(f==x&&(g=""),0<e&&(e=h.getTime()/1E3-60)),f&&g&&(a.d(f,g,1),0<e&&(a.a["expire"+f]=e,h.getTime()>=1E3*e&&(a.c||(a.c={}),a.c[f]=i)))}if(!a.b(l)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.d(l,g))}};a.M=function(){var d=a.B(),c,b;for(c in a.a)!Object.prototype[c]&&
a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=j&&(c||!a.c||!a.c[d])?a.a[d]:j};a.d=function(d,c,b){a.a==j&&(a.a={});a.a[d]=c;b||a.M()};a.p=function(d,c){var b=new Date;b.setTime(b.getTime()+1E3*c);a.a==j&&(a.a={});a.a["expire"+d]=Math.floor(b.getTime()/1E3);0>c?(a.c||(a.c={}),a.c[d]=i):a.c&&(a.c[d]=p)};a.A=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?
a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=q)),!a||a!=q&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.H(d);a.g!=j&&(a.g[d]=p);if(d==w){var b=a.b(n);if(!b){b="object"==typeof c&&c.mid?c.mid:a.A(c);if(!b){if(a.r){a.getAnalyticsVisitorID(null,!1,!0);return}b=a.m()}a.d(n,b)}if(!b||b==q)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(v,c),a.r&&c.mid&&a.i(u,{id:c.id}));a.l(n,[b])}if(d==v&&"object"==typeof c){b=604800;
void 0!=c.id_sync_ttl&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl));var e=a.b(r);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.p(r,b),a.d(r,e)));e||(e="");a.l(r,[e]);e=a.b(o);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.p(o,b),a.d(o,e);e||(e="");a.l(o,[e]);!c.error_msg&&a.o&&a.d(x,a.o)}if(d==u){b=a.b(l);b||((b=a.A(c))?a.p(o,-1):b=q,a.d(l,b));if(!b||b==q)b="";a.l(l,[b])}};a.g=j;a.n=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.h(),f=a.b(d),!f&&(d==n?g=w:d==r||d==o?g=v:d==l&&(g=u),g))){if(c&&(a.g==
j||!a.g[g]))a.g==j&&(a.g={}),a.g[g]=i,a.J(g,c,function(){if(!a.b(d)){var b="";d==n&&(b=a.m());a.i(g,b)}});a.L(d,b);c||a.i(g,{id:q});return""}if((d==n||d==l)&&f==q)f="",e=i;b&&e&&a.w(b,[f]);return f};a._setMarketingCloudFields=function(d){a.h();a.i(w,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.r=p;a.getMarketingCloudVisitorID=function(d,c){return a.isAllowed()?(a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.r=i),a.n(n,a.s("_setMarketingCloudFields"),
d,c)):""};a.K=function(){a.getAudienceManagerBlob()};a.f={};a.z=p;a.o="";a.setCustomerIDs=function(d){a.f=d;if(a.isAllowed()){a.h();var d=a.b(x),c="",b,e;d||(d=0);for(b in a.f)e=a.f[b],!Object.prototype[b]&&e&&(c+=(c?"|":"")+b+"|"+e);a.o=a.C(c);a.o!=d&&(a.z=i,a.K())}};a.getCustomerIDs=function(){return a.f};a._setAnalyticsFields=function(d){a.h();a.i(u,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,
i)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:""));return a.n(b?n:l,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.h();a.i(v,d)};a.s=function(d){var c=
a.audienceManagerServer,b="",e=a.b(n),f=a.b(o,i),g=a.b(l),g=g&&g!=q?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"",h="",j,k;a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){if(a.f)for(j in a.f)if(!Object.prototype[j]&&(b=a.f[j]))g+="&d_cid_ic="+encodeURIComponent(j)+"%01"+encodeURIComponent(b),a.audienceManagerCustomerIDDPIDs&&(k=a.audienceManagerCustomerIDDPIDs[j])&&(h+="&d_cid="+k+"%01"+encodeURIComponent(b));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?
"s":"")+"://"+c+"/id?d_rtbd=json&d_ver=2"+(!e&&a.r?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&d_mid="+e:"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+h+"&d_cb=s_c_il%5B"+a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,i)})){var b=a.b(l);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,i)}));if(b)return a.n(r,a.s(),d,c)}return""};
a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,i)})){var b=a.b(l);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,i)}));if(b)return b=a.s(),a.z&&a.p(o,-1),a.n(o,b,d,c)}return""};m.AUTH_STATE_UNAUTHENTICATED=0;m.AUTH_STATE_AUTHENTICATED=1;m.AUTH_STATE_ASSUMED_AUTHENTICATED=2;m.AUTH_STATE_LOGGEDOUT=3;a.setAuthState=function(d){a.isAllowed()&&(a.h(),a.d(y,d))};a.getAuthState=function(){return a.isAllowed()?
(a.h(),a.b(y)):0};a.k="";a.q={};a.u="";a.v={};a.getSupplementalDataID=function(d,c){!a.k&&!c&&(a.k=a.m(1));var b=a.k;a.u&&!a.v[d]?(b=a.u,a.v[d]=i):b&&(a.q[d]&&(a.u=a.k,a.v=a.q,a.k=b=!c?a.m(1):"",a.q={}),b&&(a.q[d]=i));return b};0>k.indexOf("@")&&(k+="@AdobeOrg");a.marketingCloudOrgID=k;a.namespace=s;a.cookieName="AMCV_"+k;a.cookieDomain=a.I();a.cookieDomain==h.location.hostname&&(a.cookieDomain="");if(s){var m="AMCV_"+s,A=a.cookieRead(a.cookieName),z=a.cookieRead(m);!A&&z&&(a.cookieWrite(a.cookieName,
z,1),a.cookieWrite(m,"",-60))}a.loadSSL=0<=h.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net"}Visitor.getInstance=function(k,s){var a,h=window.s_c_il,m;0>k.indexOf("@")&&(k+="@AdobeOrg");if(h)for(m=0;m<h.length;m++)if((a=h[m])&&"Visitor"==a._c&&(a.marketingCloudOrgID==k||s&&a.namespace==s))return a;return new Visitor(k,s)};


/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.4.2
Copyright 1996-2013 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com
*/
function AppMeasurement(){var a=this;a.version="1.4.2";var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a._c="s_c";var q=m.qb;q||(q=null);var r=m,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.fb=function(a){try{console.log(a)}catch(b){}};a.ua=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||0>a.indexOf(b)?
a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Wa=function(){var c=m.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Wa(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=
b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.D=[];a.C=function(c,b,d){if(a.na)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);
if(g&&"prerender"==g){if(!a.Y)for(a.Y=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.Y=0,a.delayReady())});f=1;e=0}else d||a.q("_d")&&(f=1);f&&(a.D.push({m:c,a:b,t:e}),a.Y||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.q("_d")&&(b=1);0<a.D.length;){d=a.D.shift();if(b&&!d.t&&d.t>c){a.D.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.na=
1;a[d.m].apply(a,d.a);a.na=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.C("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.I,(k=a.lightTrackVars)&&(k=","+k+","+a.ca.join(",")+",");else{d=a.c;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&
(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].pb,f=a[e].ob));k&&(k=","+k+","+a.A.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.K=function(c,b,d,f,e){var g="",k,p,m,w,n=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){m=!1;if(n)for(p=0;p<n.length;p++)k.substring(0,
n[p].length)==n[p]&&(m=!0);if(!m&&(""==g&&(g+="&"+c+"."),p=b[k],e&&(k=k.substring(e.length)),0<k.length))if(m=k.indexOf("."),0<m)p=k.substring(0,m),m=(e?e:"")+p+".",n||(n=[]),n.push(m),g+=a.K(p,b,d,f,m);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(m=k.substring(0,4),w=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.ua(w)&&("prop"==m?k="c"+w:"eVar"==m?k="v"+
w:"list"==m?k="l"+w:"hier"==m&&(k="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.Ya=function(){var c="",b,d,f,e,g,k,p,m,n="",q="",r=d="";if(a.lightProfileID)b=a.I,(n=a.lightTrackVars)&&(n=","+n+","+a.ca.join(",")+",");else{b=a.c;if(a.pe||a.linkType)n=a.linkTrackVars,q=a.linkTrackEvents,a.pe&&(d=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[d]&&(n=a[d].pb,q=a[d].ob));n&&(n=","+n+","+a.A.join(",")+",");q&&(q=","+q+",",n&&(n+=",events,"));a.events2&&
(r+=(""!=r?",":"")+a.events2)}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.K("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);!g&&"events"==e&&r&&(g=r,r="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e=
"aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&
(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";
break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":r&&(g+=(""!=g?",":"")+r);if(q)for(k=g.split(","),g="",f=0;f<k.length;f++)p=k[f],m=p.indexOf("="),0<=m&&(p=p.substring(0,m)),m=p.indexOf(":"),0<=m&&(p=p.substring(0,m)),0<=q.indexOf(","+p+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.K("c",a[e],n,e);g="";break;case "lightProfileID":e=
"mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.K("mts",a[e],n,e));g="";break;default:a.ua(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&
(c+=a.e)}return c};a.u=function(a){var b=a.tagName;if("undefined"!=""+a.tb||"undefined"!=""+a.jb&&"HTML"!=(""+a.jb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.pa=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:
"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.F=function(c){var b=a.u(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),
g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.pa(c),e)?{id:e.substring(0,100),type:g}:0};a.rb=function(c){for(var b=a.u(c),d=a.F(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.u(c),d=a.F(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.ib=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.da=1;d||(a.da=0,d=a.clickObject);if(d){c=a.u(d);for(b=a.F(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:
d.parentNode)c=a.u(d),b=a.F(d);b&&"BODY"!=c||(d=0);if(d){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.da=1;!e&&d&&(e=a.pa(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,q=0,r;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),k=p.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(r=
g[k])&&p.substring(p.length-(r.length+1))=="."+r&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.ta(p)&&(a.linkInternalFilters||(a.linkInternalFilters=m.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)r=g[k],0<=p.indexOf(r)&&(q=1);q?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e=
"",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),m.s_objectID&&(b.id=m.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Za=function(){var c=a.da,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats){var b=
{},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,p,m,e=0;if(g)for(k=0;k<g.length;k++)p=g[k].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(m=b[p].join(","),m==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),g=0;g<b[p].length;g++)m=b[p][g],m==f[k]&&(e&&(a.e+="&u="+a.escape(m)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(g,1),d=1);c||(d=1);if(d){e="";
k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(p in b)!Object.prototype[p]&&0<k&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),k--);a.cookieWrite("s_sq",e)}}}return c};a.$a=function(){if(!a.nb){var c=new Date,b=r.location,d,f,e=f=d="",g="",k="",m="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(m="1.3",(0).toPrecision&&(m="1.5",c=[],c.forEach))){m="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(m="1.7",c.reduce&&(m="1.8",m.trim&&(m=
"1.8.1",Date.parse&&(m="1.8.2",Object.create&&(m="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.sb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=f;
a.javascriptVersion=m;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=k;a.connectionType=s;a.homepage=q;a.nb=1}};a.J={};a.loadModule=function(c,b){var d=a.J[c];if(!d){d=m["AppMeasurement_Module_"+c]?new m["AppMeasurement_Module_"+c](a):{};a.J[c]=a[c]=d;d.Ga=function(){return d.Ka};d.La=function(b){if(d.Ka=b)a[c+"_onLoad"]=b,a.C(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Ga,set:d.La}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=
b,a.C(c+"_onLoad",[a,d],1)||b(a,d))};a.q=function(c){var b,d;for(b in a.J)if(!Object.prototype[b]&&(d=a.J[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.L=function(c,b){var d,f,
e,g,k,m;for(d=0;2>d;d++)for(f=0<d?a.ja:a.c,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(m in a[g])k[m]||(k[m]=a[g][m]);a[g]=k}};a.Ba=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.ja:a.c,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.Va=function(a){var b,d,f,e,g,k=0,m,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(m=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?
f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&m)))){if((a=m.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?m=n+"&"+q:q=""}d=253-(m.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+m}return a};a.V=!1;a.P=!1;
a.Ja=function(c){a.marketingCloudVisitorID=c;a.P=!0;a.k()};a.S=!1;a.M=!1;a.Da=function(c){a.analyticsVisitorID=c;a.M=!0;a.k()};a.U=!1;a.O=!1;a.Fa=function(c){a.audienceManagerLocationHint=c;a.O=!0;a.k()};a.T=!1;a.N=!1;a.Ea=function(c){a.audienceManagerBlob=c;a.N=!0;a.k()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;b&&b.isAllowed()&&(a.V||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.V=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Ja]),a.marketingCloudVisitorID&&
(a.P=!0)),a.S||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.S=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Da]),a.analyticsVisitorID&&(a.M=!0)),a.U||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.U=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Fa]),a.audienceManagerLocationHint&&(a.O=!0)),a.T||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.T=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ea]),a.audienceManagerBlob&&(a.N=!0)),
a.V&&!a.P&&!a.marketingCloudVisitorID||a.S&&!a.M&&!a.analyticsVisitorID||a.U&&!a.O&&!a.audienceManagerLocationHint||a.T&&!a.N&&!a.audienceManagerBlob)&&(c=!1);return c};a.j=q;a.l=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Pa=c;f.Oa=b;f.Ma=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.l&&(a.l=setInterval(a.k,100))};a.k=function(){var c;if(a.isReadyToTrack()&&(a.l&&(clearInterval(a.l),a.l=0),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Oa.apply(c.Pa,c.Ma)};a.Ha=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=
[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ba(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.Xa=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f,e=new Date,g="s"+Math.floor(e.getTime()/
108E5)%10+Math.floor(1E13*Math.random()),k=e.getYear(),k="t="+a.escape(e.getDate()+"/"+e.getMonth()+"/"+(1900>k?k+1900:k)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.q("_s");a.C("track",arguments)||(d=a.Ha(c),
d||(b&&a.L(b),c&&(f={},a.Ba(f,0),a.L(c)),a.cb()&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.Xa()),a.ib(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(e.getTime()/1E3)),e=m.location,a.pageURL||(a.pageURL=e.href?e.href:e),a.referrer||a.Ca||(a.referrer=r.document.referrer,a.Ca=1),a.referrer=a.Va(a.referrer),a.q("_g")),a.Za()&&!a.abort&&(a.$a(),k+=a.Ya(),a.hb(g,k),a.q("_t"),a.referrer=""))),c&&a.L(f,1)),a.abort=a.supplementalDataID=
a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=m.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=0)};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.i=c,a.p=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.c.length;c++)if(b=a.c[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,
4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.hb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():
"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.mb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.Ta(d);a.Z()};a.Ta=function(c){a.g||a.ab();a.g.push(c);a.ba=a.r();a.Aa()};a.ab=function(){a.g=
a.eb();a.g||(a.g=[])};a.eb=function(){var c,b;if(a.ga()){try{(b=m.localStorage.getItem(a.ea()))&&(c=m.JSON.parse(b))}catch(d){}return c}};a.ga=function(){var c=!0;a.trackOffline&&a.offlineFilename&&m.localStorage&&m.JSON||(c=!1);return c};a.qa=function(){var c=0;a.g&&(c=a.g.length);a.v&&c++;return c};a.Z=function(){if(!a.v)if(a.ra=q,a.fa)a.ba>a.H&&a.ya(a.g),a.ia(500);else{var c=a.Na();if(0<c)a.ia(c);else if(c=a.oa())a.v=1,a.gb(c),a.kb(c)}};a.ia=function(c){a.ra||(c||(c=0),a.ra=setTimeout(a.Z,c))};
a.Na=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.r()-a.xa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.oa=function(){if(0<a.g.length)return a.g.shift()};a.gb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.fb(b)}};a.Ia=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.R=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.R=
!0,a.Q=function(a){return JSON.parse(a)}):m.$&&m.$.parseJSON?(a.Q=function(a){return m.$.parseJSON(a)},a.R=!0):a.Q=function(){return null};a.kb=function(c){var b,d,f;a.Ia()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.R?b.ka=!0:b=0));!b&&a.bb&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&
(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="");b.ma=function(){try{a.ha&&(clearTimeout(a.ha),a.ha=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.lb=function(){b.ma();a.Sa();a.W();a.v=0;a.Z();if(b.ka){b.ka=!1;try{var c=a.Q(b.responseText);AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.Ua=function(){b.ma();
(a.trackOffline||a.fa)&&a.v&&a.g.unshift(a.Ra);a.v=0;a.ba>a.H&&a.ya(a.g);a.W();a.ia(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.lb():b.Ua())};a.xa=a.r();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.va)try{f.removeChild(a.va)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.va=
a.Qa}b.abort&&(a.ha=setTimeout(b.abort,5E3));a.Ra=c;a.Qa=m["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.B||a.p)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.X=setTimeout(a.W,a.forcedLinkTrackingTimeout)};a.Sa=function(){if(a.ga()&&!(a.wa>a.H))try{m.localStorage.removeItem(a.ea()),a.wa=a.r()}catch(c){}};a.ya=function(c){if(a.ga()){a.Aa();try{m.localStorage.setItem(a.ea(),m.JSON.stringify(c)),a.H=a.r()}catch(b){}}};a.Aa=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.oa()}};a.forceOffline=function(){a.fa=!0};a.forceOnline=function(){a.fa=!1};a.ea=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.r=function(){return(new Date).getTime()};a.ta=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.mb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.L(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:m.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.A="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
a.c=a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ca="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.I=a.ca.slice(0);a.ja="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.c.push("prop"+n),a.I.push("prop"+n)),a.c.push("eVar"+n),a.I.push("eVar"+n),6>n&&a.c.push("hier"+n),4>n&&a.c.push("list"+n);n="latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");a.c=a.c.concat(n);a.A=a.A.concat(n);a.ssl=0<=m.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";
a.xa=0;a.ba=0;a.H=0;a.wa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=m;a.d=m.document;try{a.bb="Microsoft Internet Explorer"==navigator.appName}catch(y){}a.W=function(){a.X&&(m.clearTimeout(a.X),a.X=q);a.i&&a.B&&a.i.dispatchEvent(a.B);a.p&&("function"==typeof a.p?a.p():a.i&&a.i.href&&(a.d.location=a.i.href));a.i=a.B=a.p=0};a.za=function(){a.b=a.d.body;a.b?(a.o=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.la)if(a.useForcedLinkTracking)a.b.removeEventListener("click",
a.o,!1);else{a.b.removeEventListener("click",a.o,!0);a.la=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.G&&a.G==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var k=a.G=a.clickObject;a.aa&&(clearTimeout(a.aa),a.aa=0);a.aa=setTimeout(function(){a.G==k&&(a.G=0)},1E4);f=a.qa();a.track();if(f<a.qa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&
e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.ta(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||m.name&&d==m.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new m.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=
1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.i=c.target,a.B=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.o):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&m.MouseEvent)&&(a.la=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.o,!0)),a.b.addEventListener("click",a.o,!1))):setTimeout(a.za,30)};a.za()}
function s_gi(a){var m,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){m=q[r];if("s_c"==m._c&&(m.account||m.oun))if(m.account&&m.account==a)x=1;else for(n=m.account?m.account:m.oun,n=m.allAccounts?m.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(m=new AppMeasurement);m.setAccount?m.setAccount(a):m.sa&&m.sa(a);return m}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,m=a.s_giq,q,r,n;if(m)for(q=0;q<m.length;q++)r=m[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();


function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}


function AppMeasurement_Module_Media(I){var d=this;d.s=I;var D=window;D.s_c_in||(D.s_c_il=[],D.s_c_in=0);d._il=D.s_c_il;d._in=D.s_c_in;d._il[d._in]=d;D.s_c_in++;d._c="s_m";d.list=[];d.open=function(f,h,e,m){var c={},a=new Date,b="",l;h||(h=-1);if(f&&e){d.list||(d.list={});d.list[f]&&d.close(f);m&&m.id&&(b=m.id);if(b)for(l in d.list)!Object.prototype[l]&&d.list[l]&&d.list[l].Nf==b&&d.close(d.list[l].name);c.name=f;c.length=h;c.offset=0;c.U=0;c.playerName=d.playerName?d.playerName:e;c.Nf=b;c.Ec=0;c.S=
0;c.timestamp=Math.floor(a.getTime()/1E3);c.va=0;c.wc=c.timestamp;c.T=-1;c.bb="";c.fa=-1;c.Hc=0;c.Pd={};c.Lc=0;c.Ga=0;c.V="";c.Mb=0;c.Xd=0;c.Bc=0;c.Jc=0;c.ua=!1;c.Hb="";c.xc="";c.yc=0;c.qc=!1;c.la="";c.complete=0;c.wf=0;c.Fb=0;c.Gb=0;d.list[f]=c;c.Td=!1}};d.openAd=function(f,h,e,m,c,a,b,l){var g={};d.open(f,h,e,l);if(g=d.list[f])g.ua=!0,g.Hb=m,g.xc=c,g.yc=a,g.la=b};d.Le=function(f){var h=d.list[f];d.list[f]=0;h&&h.monitor&&clearTimeout(h.monitor.interval)};d.close=function(f){d.ha(f,0,-1)};d.play=
function(f,h,e,m){var c=d.ha(f,1,h,e,m);c&&!c.monitor&&(c.monitor={},c.monitor.update=function(){1==c.va&&d.ha(c.name,3,-1);c.monitor.interval=setTimeout(c.monitor.update,1E3)},c.monitor.update())};d.click=function(f,h){d.ha(f,7,h)};d.complete=function(f,h){d.ha(f,5,h)};d.stop=function(f,h){d.ha(f,2,h)};d.track=function(f){d.ha(f,4,-1)};d.vf=function(f,h){var e="a.media.",m=f.linkTrackVars,c=f.linkTrackEvents,a="m_i",b,l=f.contextData,g;h.ua&&(e+="ad.",h.Hb&&(l["a.media.name"]=h.Hb,l[e+"pod"]=h.xc,
l[e+"podPosition"]=h.yc),h.Lc||(l[e+"CPM"]=h.la));h.qc&&(l[e+"clicked"]=!0,h.qc=!1);l["a.contentType"]="video"+(h.ua?"Ad":"");l["a.media.channel"]=d.channel;l[e+"name"]=h.name;l[e+"playerName"]=h.playerName;0<h.length&&(l[e+"length"]=h.length);l[e+"timePlayed"]=Math.floor(h.S);0<Math.floor(h.S)&&(l[e+"timePlayed"]=Math.floor(h.S));h.Lc||(l[e+"view"]=!0,a="m_s",d.Heartbeat&&d.Heartbeat.enabled&&(a=h.ua?d.__primetime?"mspa_s":"msa_s":d.__primetime?"msp_s":"ms_s"),h.Lc=1);h.V&&(l[e+"segmentNum"]=h.Ga,
l[e+"segment"]=h.V,0<h.Mb&&(l[e+"segmentLength"]=h.Mb),h.Bc&&0<h.S&&(l[e+"segmentView"]=!0));!h.wf&&h.complete&&(l[e+"complete"]=!0,h.$f=1);0<h.Fb&&(l[e+"milestone"]=h.Fb);0<h.Gb&&(l[e+"offsetMilestone"]=h.Gb);if(m)for(g in l)Object.prototype[g]||(m+=",contextData."+g);b=l["a.contentType"];f.pe=a;f.pev3=b;var w,E;if(d.contextDataMapping)for(g in f.events2||(f.events2=""),m&&(m+=",events"),d.contextDataMapping)if(!Object.prototype[g]){a=g.length>e.length&&g.substring(0,e.length)==e?g.substring(e.length):
"";b=d.contextDataMapping[g];if("string"==typeof b)for(w=b.split(","),E=0;E<w.length;E++)b=w[E],"a.contentType"==g?(m&&(m+=","+b),f[b]=l[g]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(c&&(c+=","+b),"timePlayed"==a||"CPM"==a?l[g]&&(f.events2+=(f.events2?",":"")+b+"="+l[g]):l[g]&&(f.events2+=(f.events2?",":"")+b)):"segment"==a&&l[g+"Num"]?(m&&(m+=","+b),f[b]=l[g+"Num"]+":"+l[g]):(m&&(m+=","+b),f[b]=l[g]);else if("milestones"==a||"offsetMilestones"==a)g=g.substring(0,
g.length-1),l[g]&&d.contextDataMapping[g+"s"][l[g]]&&(c&&(c+=","+d.contextDataMapping[g+"s"][l[g]]),f.events2+=(f.events2?",":"")+d.contextDataMapping[g+"s"][l[g]]);l[g]&&(l[g]=0);"segment"==a&&l[g+"Num"]&&(l[g+"Num"]=0)}f.linkTrackVars=m;f.linkTrackEvents=c};d.ha=function(f,h,e,m,c){var a={},b=(new Date).getTime()/1E3,l,g,w=d.trackVars,E=d.trackEvents,G=d.trackSeconds,q=d.trackMilestones,A=d.trackOffsetMilestones,B=d.segmentByMilestones,v=d.segmentByOffsetMilestones,r,s,y=1,n={},H;d.channel||(d.channel=
d.s.w.location.hostname);if(a=f&&d.list&&d.list[f]?d.list[f]:0)if(a.ua&&(G=d.adTrackSeconds,q=d.adTrackMilestones,A=d.adTrackOffsetMilestones,B=d.adSegmentByMilestones,v=d.adSegmentByOffsetMilestones),0>e&&(e=1==a.va&&0<a.wc?b-a.wc+a.T:a.T),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.U=a.offset/a.length*100,a.U=100<a.U?100:a.U),0>a.T&&(a.T=e),H=a.Hc,n.name=f,n.ad=a.ua,n.length=a.length,n.openTime=new Date,n.openTime.setTime(1E3*a.timestamp),n.offset=a.offset,n.percent=
a.U,n.playerName=a.playerName,n.mediaEvent=0>a.fa?"OPEN":1==h?"PLAY":2==h?"STOP":3==h?"MONITOR":4==h?"TRACK":5==h?"COMPLETE":7==h?"CLICK":"CLOSE",2<h||h!=a.va&&(2!=h||1==a.va)){c||(m=a.Ga,c=a.V);if(h){1==h&&(a.T=e);if((3>=h||5<=h)&&0<=a.fa&&(y=!1,w=E="None",a.fa!=e)){g=a.fa;g>e&&(g=a.T,g>e&&(g=e));r=q?q.split(","):0;if(0<a.length&&r&&e>=g)for(s=0;s<r.length;s++)(l=r[s]?parseFloat(""+r[s]):0)&&g/a.length*100<l&&a.U>=l&&(y=!0,s=r.length,n.mediaEvent="MILESTONE",a.Fb=n.milestone=l);if((r=A?A.split(","):
0)&&e>=g)for(s=0;s<r.length;s++)(l=r[s]?parseFloat(""+r[s]):0)&&g<l&&e>=l&&(y=!0,s=r.length,n.mediaEvent="OFFSET_MILESTONE",a.Gb=n.offsetMilestone=l)}if(a.Xd||!c){if(B&&q&&0<a.length){if(r=q.split(","))for(r.push("100"),s=g=0;s<r.length;s++)if(l=r[s]?parseFloat(""+r[s]):0)a.U<l&&(m=s+1,c="M:"+g+"-"+l,s=r.length),g=l}else if(v&&A&&(r=A.split(",")))for(r.push(""+(0<a.length?a.length:"E")),s=g=0;s<r.length;s++)if((l=r[s]?parseFloat(""+r[s]):0)||"E"==r[s]){if(e<l||"E"==r[s])m=s+1,c="O:"+g+"-"+l,s=r.length;
g=l}c&&(a.Xd=!0)}(c||a.V)&&c!=a.V&&(a.Jc=!0,a.V||(a.Ga=m,a.V=c),0<=a.fa&&(y=!0));(2<=h||100<=a.U)&&a.T<e&&(a.Ec+=e-a.T,a.S+=e-a.T);if(2>=h||3==h&&!a.va)a.bb+=(1==h||3==h?"S":"E")+Math.floor(e),a.va=3==h?1:h;!y&&0<=a.fa&&3>=h&&(G=G?G:0)&&a.S>=G&&(y=!0,n.mediaEvent="SECONDS");a.wc=b;a.T=e}if(!h||3>=h&&100<=a.U)2!=a.va&&(a.bb+="E"+Math.floor(e)),h=0,w=E="None",n.mediaEvent="CLOSE";7==h&&(y=n.clicked=a.qc=!0);if(5==h||d.completeByCloseOffset&&(!h||100<=a.U)&&0<a.length&&e>=a.length-d.completeCloseOffsetThreshold)y=
n.complete=a.complete=!0;b=n.mediaEvent;"MILESTONE"==b?b+="_"+n.milestone:"OFFSET_MILESTONE"==b&&(b+="_"+n.offsetMilestone);a.Pd[b]?n.eventFirstTime=!1:(n.eventFirstTime=!0,a.Pd[b]=1);n.event=n.mediaEvent;n.timePlayed=a.Ec;n.segmentNum=a.Ga;n.segment=a.V;n.segmentLength=a.Mb;d.monitor&&4!=h&&d.monitor(d.s,n);d.Heartbeat&&d.Heartbeat.enabled&&(n=[],n.push(a.name),a.Td||(a.Td=!0,n.push(a.length),n.push(a.playerName),a.ua?(n.push(a.Hb),n.push(a.xc),n.push(a.yc),n.push(a.la),d.Heartbeat.callMethodWhenReady("openAd",
n)):d.Heartbeat.callMethodWhenReady("open",n),n=[],n.push(a.name)),0==h?d.Heartbeat.callMethodWhenReady("close",n):(n.push(e),1==h?(n.push(a.Ga),n.push(a.V),n.push(a.Mb),d.Heartbeat.callMethodWhenReady("play",n)):2==h?d.Heartbeat.callMethodWhenReady("stop",n):3==h?d.Heartbeat.callMethodWhenReady("monitor",n):5==h?d.Heartbeat.callMethodWhenReady("complete",n):7==h&&d.Heartbeat.callMethodWhenReady("click",n)),0<=a.fa&&(y=!1));0==h&&d.Le(f);y&&a.Hc==H&&(f={contextData:{}},f.linkTrackVars=w,f.linkTrackEvents=
E,f.linkTrackVars||(f.linkTrackVars=""),f.linkTrackEvents||(f.linkTrackEvents=""),d.vf(f,a),f.linkTrackVars||(f["!linkTrackVars"]=1),f.linkTrackEvents||(f["!linkTrackEvents"]=1),d.s.track(f),a.Jc?(a.Ga=m,a.V=c,a.Bc=!0,a.Jc=!1):0<a.S&&(a.Bc=!1),a.bb="",a.Fb=a.Gb=0,a.S-=Math.floor(a.S),a.fa=e,a.Hc++)}return a};d.sf=function(f,h,e,m,c){var a=0;if(f&&(!d.autoTrackMediaLengthRequired||h&&0<h)){if(d.list&&d.list[f])a=1;else if(1==e||3==e)d.open(f,h,"HTML5 Video",c),a=1;a&&d.ha(f,e,m,-1,0)}};d.attach=function(f){var h,
e,m;f&&f.tagName&&"VIDEO"==f.tagName.toUpperCase()&&(d.fb||(d.fb=function(c,a,b){var l,g;d.autoTrack&&(l=c.currentSrc,(g=c.duration)||(g=-1),0>b&&(b=c.currentTime),d.sf(l,g,a,b,c))}),h=function(){d.fb(f,1,-1)},e=function(){d.fb(f,1,-1)},d.pa(f,"play",h),d.pa(f,"pause",e),d.pa(f,"seeking",e),d.pa(f,"seeked",h),d.pa(f,"ended",function(){d.fb(f,0,-1)}),d.pa(f,"timeupdate",h),m=function(){f.paused||f.ended||f.seeking||d.fb(f,3,-1);setTimeout(m,1E3)},m())};d.pa=function(d,h,e){d.attachEvent?d.attachEvent("on"+
h,e):d.addEventListener&&d.addEventListener(h,e,!1)};void 0==d.completeByCloseOffset&&(d.completeByCloseOffset=1);void 0==d.completeCloseOffsetThreshold&&(d.completeCloseOffsetThreshold=1);var F=new function(d){this.Ge=function(h){this.s=h;this.enabled=!1;this.A=new this.Ha.Kf.le(h)};this.open=function(h,e,d){this.A.open(h,e,d)};this.openAd=function(h,e,d,c,a,b,l){this.A.openAd(h,e,d,c,a,b,l)};this.close=function(h){this.A.close(h)};this.play=function(h,e,d,c,a){this.A.play(h,e,d,c,a)};this.monitor=
function(h,d){this.A.monitor(h,d)};this.stop=function(h,d){this.A.stop(h,d)};this.click=function(h,d){this.A.click(h,d)};this.complete=function(h,d){this.A.complete(h,d)};this.setup=function(h){this.A.Sf(h)};this.bufferStart=function(){this.A.uf()};this.bitrateChange=function(h){this.A.tf(h)};this.updateQoSInfo=function(h,d,f){this.A.Yf(h,d,f)};this.adBreakStart=function(d){this.A.pf(d)};this.adBreakEnd=function(){this.A.of()};this.trackError=function(d,e,f){this.A.Wf(d,e,f)};this.sessionComplete=
function(){this.A.Qf()};this.__setPsdkVersion=function(d){this.A.He(d)};(function(d){if("undefined"===typeof e)var e={};if("undefined"===typeof f)var f={};f.event||(f.event={});f.a||(f.a={});f.H||(f.H={});f.Za||(f.Za={});f.N||(f.N={});(function(c){c.extend=function(a,b){function c(){this.constructor=a}for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g]);c.prototype=b.prototype;a.prototype=new c;a.u=b.prototype;return a}})(e);(function(c){c.Q=function(a,b){var c=[],g;for(g in b)b.hasOwnProperty(g)&&"function"===
typeof b[g]&&c.push(g);for(g=0;g<c.length;g++){var w=c[g];a.prototype[w]=b[w]}}})(e);(function(c){c.Ld={Od:function(){this.ca&&this.ca.apply(this,arguments);this.ca=null}}})(e);(function(c){c.La=!1;c.P={O:function(a){this.Ra=!0;this.yb=a},bg:function(){this.Ra=!1},log:function(a){c.La&&this.Ra&&window.console&&window.console.log&&window.console.log(this.yb+a)},info:function(a){c.La&&this.Ra&&window.console&&window.console.info&&window.console.info(this.yb+a)},warn:function(a){c.La&&this.Ra&&window.console&&
window.console.warn&&window.console.warn(this.yb+a)},error:function(a){if(c.La&&this.Ra&&window.console&&window.console.error)throw a=this.yb+a,window.console.error(a),Error(a);}}})(e);(function(c){function a(a,c){this.type=a;this.data=c}a.ub="success";a.ERROR="error";c.Event=a})(e);(function(c){function a(){this.n={}}a.prototype.addEventListener=function(a,c,g){a&&c&&(g=g||window,this.n[a]=this.n[a]||[],this.n[a].push({Id:c,tc:g}))};a.prototype.removeEventListener=function(a,c,g){if(a&&c){g=g||window;
var w,d=!1;for(w in this.n)if(a===w){d=!0;break}if(d){for(a=this.n[w].length-1;0<=a;a--)d=this.n[w][a],c===d.Id&&g===d.tc&&this.n[w].splice(a,1);this.n[w].length||delete this.n[w]}}};a.prototype.dispatchEvent=function(a){if(a.type)for(var c in this.n)if(this.n.hasOwnProperty(c)&&a.type===c){var g=this.n[c];for(c=0;c<g.length;c++)g[c].Id.call(g[c].tc,a);break}};a.prototype.ab=function(a){if(a){var c,g;for(g in this.n)if(this.n.hasOwnProperty(g)){for(c=this.n[g].length-1;0<=c;c--)this.n[g][c].tc===
a&&this.n[g].splice(c,1);this.n[g].length||delete this.n[g]}}else this.n={}};c.jd=a})(e);(function(c){function a(){a.prototype.Qa||(a.prototype.Qa=new b);return a.prototype.Qa}var b=c.jd;c.NotificationCenter=a})(e);(function(c){function a(){}function b(){b.u.constructor.call(this)}var l=c.Event,g=c.jd;a.kd="GET";c.extend(b,g);b.prototype.yf=function(a){a.J=new window.XMLHttpRequest;if(!("withCredentials"in a.J)&&(a.J="undefined"!==typeof window.XDomainRequest?new window.XDomainRequest:null,a.J)){var g=
this;a.J.onreadystatechange=function(){if(4===a.J.readyState){var d={};d[b.od]=a.J.status;200<=a.J.status&&400>a.J.status?(d[b.nd]=a.J.responseText,d[b.ob]=g,g.dispatchEvent(new c.Event(l.ub,d))):g.dispatchEvent(new c.Event(l.ERROR,d))}}}};b.Cb=null;b.prototype.If=function(a){b.Cb||(b.Cb=new Image,b.Cb.alt="");b.Cb.src=a.url;a={};a[b.od]=200;a[b.nd]="";a[b.ob]=this;this.dispatchEvent(new c.Event(l.ub,a))};b.prototype.close=function(){this.ab()};b.prototype.load=function(a){a&&a.method&&a.url&&(this.yf(a),
a.J?(a.J.open(a.method,a.url,!0),a.J.send()):this.If(a))};b.od="status";b.nd="response";b.ob="instance";c.Fe=a;c.Ee=function(a,b){this.url=a||null;this.method=b;this.J=null};c.De=b})(e);(function(c,a){function b(){}b.Ba="report";b.oa="what";b.Ca="reset";b.Qb="account";b.$b="sc_tracking_server";b.vb="tracking_server";b.jb="check_status_server";b.pb="job_id";b.Ma="publisher";b.bc="stream_type";b.Xb="ovp";b.ac="sdk";b.$c="channel";b.lb="debug_tracking";b.wb="track_local";b.Da="visitor_id";b.wa="analytics_visitor_id";
b.za="marketing_cloud_visitor_id";b.i="name";b.ya="length";b.Aa="player_name";b.X="timer_interval";b.qd="tracking_interval";b.bd="check_status_interval";b.cc="track_external_errors";b.Yb="parent_name";b.md="parent_pod";b.Zb="parent_pod_position";b.sb="parent_pod_offset";b.la="parent_pod_cpm";b.D="offset";b.tb="source";b.Vb="error_id";b.ib="bitrate";b.Wb="fps";b.Tb="dropped_frames";a.event.aa=b})(e,f);(function(c,a){function b(a,g){b.u.constructor.call(this,a,g)}c.extend(b,c.Event);b.Ia="api_destroy";
b.Rb="api_config";b.Tc="api_open_main";b.Sc="api_open_ad";b.Pc="api_close";b.Uc="api_play";b.Rc="api_monitor";b.Xc="api_stop";b.Oc="api_click";b.Qc="api_complete";b.Yc="api_track_error";b.Vc="api_qos_info";b.Mc="api_bitrate_change";b.Nc="api_buffer_start";b.Sb="api_pod_offset";b.Wc="api_session_complete";a.event.Ja=b})(e,f);(function(c,a){function b(a,g){b.u.constructor.call(this,a,g)}c.extend(b,c.Event);b.xa="context_data_available";a.event.cd=b})(e,f);(function(c,a){function b(a,g){b.u.constructor.call(this,
a,g)}c.extend(b,c.Event);b.ma="data_request";b.kb="data_response";b.keys={Na:"tracking_timer_interval",ld:"main_video_publisher"};a.event.Ub=b})(e,f);(function(c,a){function b(a,g){b.u.constructor.call(this,a,g)}c.extend(b,c.Event);b.qb="network_check_status_complete";a.event.rb=b})(e,f);(function(c,a){function b(a,g){b.u.constructor.call(this,a,g)}c.extend(b,c.Event);b.CLOCK_TRACKING_TICK="CLOCK_TRACKING_TICK";b.CLOCK_TRACKING_ENABLE="CLOCK_TRACKING_ENABLE";b.CLOCK_TRACKING_DISABLE="CLOCK_TRACKING_DISABLE";
b.CLOCK_CHECK_STATUS_TICK="CLOCK_CHECK_STATUS_TICK";b.CLOCK_CHECK_STATUS_ENABLE="CLOCK_CHECK_STATUS_ENABLE";b.CLOCK_CHECK_STATUS_DISABLE="CLOCK_CHECK_STATUS_DISABLE";a.event.Ka=b})(e,f);(function(c,a){function b(a,b){this.value=a;this.hint=b}function d(a){this.Ac=a;this.data={}}b.na="short";d.prototype.c=function(a,b,c){var d=this;return function(){arguments.length&&(d[a]=arguments[0],d.Nb(b,arguments[0],c));return d[a]}};d.prototype.Nb=function(a,c,d){this.data[a]=new b(c,d)};a.a.R=d;a.a.dd=b})(e,
f);(function(c,a){function b(a,c){b.u.constructor.call(this,a);this.Zf=this.c("_year","year",d.na);this.Mf=this.c("_month","month",d.na);this.zf=this.c("_day","day",d.na);this.Gf=this.c("_hour","hour",d.na);this.Lf=this.c("_minute","minute",d.na);this.Of=this.c("_second","second",d.na);this.Zf(c.getUTCFullYear());this.Mf(c.getUTCMonth()+1);this.zf(c.getUTCDate());this.Gf(c.getUTCHours());this.Lf(c.getUTCMinutes());this.Of(c.getUTCSeconds())}var d=a.a.dd;c.extend(b,a.a.R);a.a.fe=b})(e,f);(function(c,
a){function b(){b.u.constructor.call(this,"asset");this.Db=this.c("_cpm","cpm",null);this.M=this.c("_adId","ad_id",null);this.Lb=this.c("_resolver","resolver",null);this.Ib=this.c("_podId","pod_id",null);this.Jb=this.c("_podPosition","pod_position",null);this.Kb=this.c("_podSecond","pod_second",null);this.length=this.c("_length","length",null);this.Db("");this.M("");this.Lb("");this.Ib("");this.Jb("");this.Kb(0);this.length(0);if(arguments.length&&arguments[0]instanceof b){var a=arguments[0];this.Db(a.Db());
this.M(a.M());this.Lb(a.Lb());this.Ib(a.Ib());this.Jb(a.Jb());this.Kb(a.Kb());this.length(a.length())}}c.extend(b,a.a.R);a.a.Zc=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"asset");this.type=this.c("_type","type",null);this.k=this.c("_videoId","video_id",null);this.L=this.c("_publisher","publisher",null);this.r=this.c("_adData","ad_data",null);this.duration=this.c("_duration","duration",null);this.type("");this.k("");this.L("");this.r(null);this.duration(0);if(arguments.length&&
arguments[0]instanceof b){var a=arguments[0];this.type(a.type());this.k(a.k());this.L(a.L());this.duration(a.duration());(a=a.r())&&this.r(new d(a))}}var d=a.a.Zc;c.extend(b,a.a.R);b.rd="vod";b.ze="live";b.ye="linear";b.Oa="ad";a.a.hb=b})(e,f);(function(c,a){function b(a){b.u.constructor.call(this,"event");this.mf=a;this.type=this.c("_type","type",null);this.count=this.c("_count","count",null);this.Fc=this.c("_totalCount","total_count",null);this.duration=this.c("_duration","duration",null);this.Gc=
this.c("_totalDuration","total_duration",null);this.ia=this.c("_playhead","playhead",null);this.id=this.c("_id","id",null);this.source=this.c("_source","source",null);this.zc=this.c("_prevTs","prev_ts",null);this.nf=function(){var a=1E3*this.mf;this.mc=new Date(Math.floor(this.lc/a)*a);a=new d(this.Ac,this.mc);this.Nb("ts_as_date",a,null)};this.Pb=function(){arguments.length&&(this.lc=arguments[0],this.Nb("ts",this.lc,null),this.nf());return this.lc};this.Xf=function(){if(arguments.length){this.mc=
arguments[0];var a=new d(this.Ac,this.mc);this.Nb("ts_as_date",a,null)}};this.type("");this.count(0);this.Fc(0);this.duration(0);this.Gc(0);this.ia(0);this.id("");this.source("");this.zc(-1);this.Pb((new Date).getTime())}var d=a.a.fe;c.extend(b,a.a.R);b.je="load";b.ke="unload";b.mb="start";b.hd="play";b.gd="pause";b.he="buffer";b.ge="bitrate_change";b.ie="error";b.ed="active";b.fd="complete";a.a.nb=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"stream");this.nc=this.c("_bitrate",
"bitrate",null);this.Qd=this.c("_fps","fps",null);this.Nd=this.c("_droppedFrames","dropped_frames",null);this.nc(0);this.Qd(0);this.Nd(0)}c.extend(b,a.a.R);a.a.ne=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"sc");this.Wd=this.c("_reportSuiteId","rsid",null);this.trackingServer=this.c("_trackingServer","tracking_server",null);this.Wd("");this.trackingServer("")}c.extend(b,a.a.R);a.a.xe=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"sp");this.ga=this.c("_ovp","ovp",
null);this.ja=this.c("_sdk","sdk",null);this.channel=this.c("_channel","channel",null);this.playerName=this.c("_playerName","player_name",null);this.ga("unknown");this.ja("unknown");this.channel("unknown");this.playerName("")}c.extend(b,a.a.R);a.a.ue=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"event");this.Cc=this.c("_sessionId","sid",null);this.Cc("")}c.extend(b,a.a.R);a.a.ve=b})(e,f);(function(c,a){function b(){b.u.constructor.call(this,"stream");this.oc=this.c("_cdn","cdn",
null);this.name=this.c("_name","name",null);this.oc("");this.name("");if(arguments.length&&arguments[0]instanceof b){var a=arguments[0];this.oc(a.oc());this.name(a.name())}}c.extend(b,a.a.R);a.a.pd=b})(e,f);(function(c,a){function b(a){b.u.constructor.call(this,"user");this.uc=this.c("_device","device",null);this.rc=this.c("_country","country",null);this.pc=this.c("_city","city",null);this.latitude=this.c("_latitude","latitude",null);this.longitude=this.c("_longitude","longitude",null);this.gb=this.c("_visitorId",
"id",null);this.Xa=this.c("_analyticsVisitorId","aid",null);this.Ya=this.c("_marketingCloudVisitorId","mid",null);this.uc("");this.rc("");this.pc("");this.latitude("");this.longitude("");this.gb("");this.Xa("");this.Ya("");if(arguments.length&&arguments[0]instanceof b){var c=arguments[0];this.uc(c.uc());this.rc(c.rc());this.pc(c.pc());this.latitude(c.latitude());this.longitude(c.longitude());this.gb(c.gb());this.Xa(c.Xa());this.Ya(c.Ya())}}c.extend(b,a.a.R);a.a.ud=b})(e,f);(function(c,a){a.a.re=function(a,
c,g,d,f){this.ea=a;this.g=c;this.Kc=g;this.Dc=d;this.$a=f}})(e,f);(function(c,a){var b=a.a.nb;a.a.qe=function(a,c,d){this.Tf=a;this.Pf=c;this.Rf=d;this.I=[];this.Wa=function(a){this.I.push(a)};this.Cf=function(){if(this.I.length)for(var a=this.I.length-1;0<=a;a--)this.I[a].ea.type()===b.gd&&this.I.splice(a,1)}}})(e,f);(function(c,a){function b(){}b.prototype.Zd=function(){};b.prototype.$d=function(){};b.prototype.W=function(){};b.prototype.Yd=function(){};b.prototype.ae=function(){};a.a.te=b})(e,
f);(function(c,a){function b(){this.O("[media-fork::QuerystringSerializer] > ");this.ba=function(a){return a?a+"&":""};this.Fd=function(a){a&&0<a.length&&(a=a.substring(0,a.length-1));return a};this.jf=function(a){var b=[],c;for(c in a.data)if(a.data.hasOwnProperty(c)){var g=a.data[c],d=g.value,g=g.hint,r=null,h=a.Ac;null!==d&&"undefined"!==typeof d&&("number"===typeof d?r=this.Yd(c,d,h,g):"string"===typeof d?r=this.ae(c,d,h,g):d instanceof f?r=this.W(d):this.warn("#_processDao() > Unable to serialize DAO. Field: "+
c+". Value: "+d+"."),r&&b.push(r))}return b}}var d=c.Q,g=c.P,f=a.a.R,h=a.a.dd;c.extend(b,a.a.te);d(b,g);b.prototype.Zd=function(a){for(var b=[],c=a.I,g=0;g<c.length;g++){var d=this.$d(c[g])+"&",d=d+this.ba(this.W(a.Tf)),d=d+this.ba(this.W(a.Pf)),d=d+this.ba(this.W(a.Rf)),d=this.Fd(d);b.push(d)}return b};b.prototype.$d=function(a){var b=this.ba(this.W(a.ea)),b=b+this.ba(this.W(a.g)),b=b+this.ba(this.W(a.Kc)),b=b+this.ba(this.W(a.Dc)),b=b+this.ba(this.W(a.$a));return b=this.Fd(b)};b.prototype.W=function(a){a=
this.jf(a);for(var b="",c=0;c<a.length;c++)b=c==a.length-1?b+a[c]:b+(a[c]+"&");return b};b.prototype.Yd=function(a,b,c,g){var d="l";return null==b||void 0===b||isNaN(b)?null:(g&&"string"===typeof g&&g===h.na&&(d="h"),d+":"+c+":"+a+"="+b)};b.prototype.ae=function(a,b,c){return b?"s:"+c+":"+a+"="+window.encodeURIComponent(b):null};a.a.oe=b})(e,f);(function(c,a){function b(a){this.Ob=0;this.interval=a;this.Eb=!1}function d(){if(d.prototype.Qa)return d.prototype.Qa;var a=this;this.O("[media-fork::TimerManager] > ");
this.zd=0;this.da={};this.ra=function(){this.log("#_onApiDestroy()");clearInterval(this.xd);q().ab(this)};this.ff=function(){this.log("#_onTick() > ------------------- ("+this.zd+")");this.zd++;for(var a in this.da)if(this.da.hasOwnProperty(a)){var b=this.da[a];if(b.Eb&&(b.Ob++,0===b.Ob%b.interval)){var c={};c[e.X]=b.interval;q().dispatchEvent(new h(h[a],c))}}};q().addEventListener(f.Ia,this.ra,this);this.xd=setInterval(function(){a.ff()},1E3);this.Hf=function(a){return(a=this.da[a])&&a.Eb};this.Kd=
function(a,c){this.da[a]=new b(c)};this.Af=function(a){delete this.da[a]};this.Uf=function(a,b){this.log("#startTimer(name="+a+", reset="+b+")");var c=this.da[a];c&&(c.Eb=!0,b&&(this.log("Resseting timer: "+a),c.Ob=0))};this.Vf=function(a,b){this.log("#startTimer(name="+a+", reset="+b+")");var c=this.da[a];c&&(c.Eb=!1,b&&(this.log("Resseting timer: "+a),c.Ob=0))};d.prototype.Qa=this}var g=c.Q,f=a.event.Ja,h=a.event.Ka,e=a.event.aa,q=c.NotificationCenter;g(d,c.P);new d;a.N.Be=d})(e,f);(function(c,
a){function b(a,b,c,d){this.O("[media-fork::Timer] > ");this.interval=d;this.ka=a;this.Df=b;this.Bf=c;h().Kd(this.ka,this.interval);this.ra=function(){this.Md()};this.hf=function(a){a=a.data;var b=!1;a&&a.hasOwnProperty(e.Ca)&&(b=a[e.Ca]);this.start(b)};this.gf=function(a){a=a.data;var b=!1;a&&a.hasOwnProperty(e.Ca)&&(b=a[e.Ca]);this.stop(b)};g().addEventListener(f.Ia,this.ra,this);g().addEventListener(this.Df,this.hf,this);g().addEventListener(this.Bf,this.gf,this)}var d=c.Q,g=c.NotificationCenter,
f=a.event.Ja,h=a.N.Be,e=a.event.aa;d(b,c.P);b.prototype.start=function(a){this.log("#start("+this.ka+")");h().Uf(this.ka,a)};b.prototype.stop=function(a){this.log("#stop("+this.ka+")");h().Vf(this.ka,a)};b.prototype.Md=function(){g().ab(this);h().Af(this.ka)};b.prototype.setInterval=function(a){var b=h().Hf(this.ka);this.stop(!0);this.interval=a;h().Kd(this.ka,this.interval);b&&this.start(!0)};a.N.td=b})(e,f);(function(c,a){function b(){this.O("[media-fork::TrackingTimer] > ");b.u.constructor.call(this,
q.CLOCK_TRACKING_TICK,q.CLOCK_TRACKING_ENABLE,q.CLOCK_TRACKING_DISABLE,10);this.hc=function(a){a=a.data[m.qd];this.log("#_onCheckStatusComplete(interval="+a+")");a?a===this.interval?this.log("#_onCheckStatusComplete() > Interval value not changed."):(this.log("#_onCheckStatusComplete() > Interval changed to: "+a),this.setInterval(a)):(this.warn("#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(10))};this.ic=function(a){a=a.data[m.oa];this.log("#_onDataRequest(what="+a+")");switch(a){case h.keys.Na:a=
{},a[m.X]=this.interval,f().dispatchEvent(new h(h.kb,a))}};f().addEventListener(e.qb,this.hc,this);f().addEventListener(h.ma,this.ic,this)}var d=c.Q,g=c.P,f=c.NotificationCenter,h=a.event.Ub,e=a.event.rb,q=a.event.Ka,m=a.event.aa;c.extend(b,a.N.td);d(b,g);a.N.Ce=b})(e,f);(function(c,a){function b(){this.O("[media-fork::CheckStatusTimer] > ");b.u.constructor.call(this,q.CLOCK_CHECK_STATUS_TICK,q.CLOCK_CHECK_STATUS_ENABLE,q.CLOCK_CHECK_STATUS_DISABLE,60);var a=this;setTimeout(function(){a.Ne()},200);
this.Ne=function(){this.log("#_initialCheck()");var a={};a[e.X]=this.interval;f().dispatchEvent(new q(q.CLOCK_CHECK_STATUS_TICK,a))};this.hc=function(a){a=a.data[e.bd];this.log("#_onCheckStatusComplete(interval="+a+")");a?a===this.interval?this.log("#_onCheckStatusComplete() > Interval value not changed."):600<a?(this.warn("#_onCheckStatusComplete() > Interval value too large: "+a),this.setInterval(600)):(this.log("#_onCheckStatusComplete() > Interval changed to: "+a),this.setInterval(a)):(this.warn("#_onCheckStatusComplete() > Invalid interval value."),
this.setInterval(60))};f().addEventListener(h.qb,this.hc,this)}var d=c.Q,g=c.P,f=c.NotificationCenter,h=a.event.rb,e=a.event.aa,q=a.event.Ka;c.extend(b,a.N.td);d(b,g);a.N.be=b})(e,f);(function(c,a){var b=a.N.be,d=a.N.Ce;a.N.ce=function(){new b;new d}})(e,f);(function(c,a){function b(a){this.O("[media-fork::SettingsParser] > ");this.Ad=a;this.log("#SettingsParser(data="+a+")")}var d=c.Q,g=c.NotificationCenter,f=a.event.aa,h=a.event.rb;d(b,c.P);b.prototype.parse=function(){var a,b,c,d;if(this.Ad){window.DOMParser?
d=(new window.DOMParser).parseFromString(this.Ad,"text/xml"):(d=new window.ActiveXObject("Microsoft.XMLDOM"),d.async=!1,d.loadXML(this.data));var e;(e=parseInt(d.getElementsByTagName("trackingInterval")[0].childNodes[0].nodeValue,10))&&(a=e);(e=parseInt(d.getElementsByTagName("setupCheckInterval")[0].childNodes[0].nodeValue,10))&&(b=e);(e=parseInt(d.getElementsByTagName("trackExternalErrors")[0].childNodes[0].nodeValue,10))&&(c=1===e);d={};d[f.qd]=a;d[f.bd]=b;d[f.cc]=c;this.log("#parse() > Obtained configuration settings: "+
JSON.stringify(d));g().dispatchEvent(new h(h.qb,d))}else this.warn("#SettingsParser() > No data available for parsing.")};a.Za.we=b})(e,f);(function(c,a){function b(a){this.O("[media-fork::Network] > ");this.qa=this.Gd=this.Bd=!1;this.lf=a;this.Dd=this.wd=this.Hd=null;this.gc=function(a){a=a.data;this.log("#_onApiConfig(sb_server="+a[v.vb]+", check_status_server="+a[v.jb]+", job_id="+a[v.pb]+", debug_tracking="+a[v.lb]+", track_local="+a[v.wb]+")");this.Hd=a[v.vb];this.wd=a[v.jb];this.Dd=a[v.pb];
this.Bd=a[v.lb];this.Gd=a[v.wb];this.qa=!0};this.ra=function(){this.log("#_onApiDestroy()");h().ab(this)};this.df=function(a){if(this.qa){if(a=this.lf.Zd(a.data[v.Ba]),!this.Gd)for(var b=0;b<a.length;b++){var c=new m(this.Hd+"/?__job_id="+this.Dd+"&"+a[b],q.kd);this.Bd&&window.console&&window.console.info&&window.console.info(c.method+" : "+c.url);(function(a,b){a.addEventListener(f.ub,function(){a.close()},this);a.addEventListener(f.ERROR,function(c){b.warn("#_onContextDataAvailable() > Failed to send heartbeat report: "+
JSON.stringify(c));a.close()},this);a.load(c)})(new B,this)}}else this.warn("#_onContextDataAvailable() > Unable to send request: not configured.")};this.bf=function(){function a(b){b.data&&(new n(b.data.response)).parse();b.data[B.ob].close()}function b(a){c.warn("_onClockCheckStatusTick() > Failed to obtain the config. settings: "+JSON.stringify(a));a.data[B.ob].close()}if(this.qa){var c=this;this.ca=function(c){if(c=c[v.Ma]){c=c.replace(/[^a-zA-Z0-9]+/,"-").toLocaleLowerCase();c=this.wd+c+".xml?r="+
(new Date).getTime();var d=new m(c,q.kd),g=new B;g.addEventListener(f.ub,a,this);g.addEventListener(f.ERROR,b,this);this.log("#_onClockCheckStatusTick() > Get new settings from: "+c);g.load(d)}else this.warn("#_onClockCheckStatusTick() > Publisher is NULL.")};var d={};d[v.oa]=r.keys.ld;h().dispatchEvent(new r(r.ma,d))}else this.warn("#_onClockCheckStatusTick() > Unable to send request: not configured.")};this.jc=function(a){this.Od(a.data)};h().addEventListener(r.kb,this.jc,this);h().addEventListener(e.Rb,
this.gc,this);h().addEventListener(e.Ia,this.ra,this);h().addEventListener(y.xa,this.df,this);h().addEventListener(s.CLOCK_CHECK_STATUS_TICK,this.bf,this)}var d=c.Q,g=c.P,f=c.Event,h=c.NotificationCenter,e=a.event.Ja,q=c.Fe,m=c.Ee,B=c.De,v=a.event.aa,r=a.event.Ub,s=a.event.Ka,y=a.event.cd,n=a.Za.we;d(b,c.Ld);d(b,g);a.Za.me=b})(e,f);(function(c,a){function b(){this.O("[media-fork::Counters] > ");this.Fa={};this.ta={};this.Rd=function(a,b,c){a=b+"."+c+"."+a;this.Fa[a]||(this.Fa[a]=0);this.log("#getTotalCount(key="+
a+")");return this.Fa[a]};this.Vd=function(a,b,c){a=b+"."+c+"."+a;this.Fa[a]||(this.Fa[a]=0);this.log("#incrementTotalCount(key="+a+")");this.Fa[a]++};this.Sd=function(a,b,c){a=b+"."+c+"."+a;this.ta[a]||(this.ta[a]=0);this.log("#getTotalDuration(key="+a+")");return this.ta[a]};this.Ud=function(a,b,c,d){a=b+"."+c+"."+a;this.ta[a]||(this.ta[a]=0);this.log("#increaseTotalDuration(key="+a+", amount="+d+")");this.ta[a]+=d}}var d=c.Q;d(b,c.P);a.H.ee=b})(e,f);(function(c,a){function b(){this.O("[media-fork::History] > ");
this.Cd={};this.yd=function(a){var b=a.g;return(b.r()?b.r().M():b.k())+"."+b.type()+"."+a.$};this.eb=function(a){var b=this.yd(a);this.log("#updateWith(key="+b+")");this.Cd[b]=a};this.K=function(a){a=this.yd(a);this.log("#getPreviousItemOfSameTypeWith(key="+a+")");return this.Cd[a]}}var d=c.Q;d(b,c.P);a.H.History=b})(e,f);(function(c,a){var b=a.a.nb,d=a.a.hb,g=a.a.ud,f=a.a.pd;a.H.sd=function(a,c,h,e,B,v){this.timestamp=new Date;this.g=new d(a);this.Kc=new g(c);this.Dc=new f(h);this.$=B;this.$a=e;
this.ia=v;this.C=void 0;this.Ef=function(){return this.$===b.ed?this.g.k():this.g.type()===d.Oa?this.g.r().M():this.g.k()}}})(e,f);(function(c,a){a.H.Ae=function(){this.Z=[];this.Ff=function(){return this.Z.slice()};this.qf=function(a){for(var c=-1,d=this.Z.length-1;0<=d&&!(a.timestamp>=this.Z[d].timestamp);d--)c=d;0<c?this.Z.splice(d,0,a):this.Z.push(a)}}})(e,f);(function(c,a){function b(a){this.O("[media-fork::ReporterHelper] > ");this.j=a;this.Ed=null;this.Ke=function(a,b,c){c*=1E3;a=0===a.getTime()?
b.getTime()-c/2:a.getTime()/2+b.getTime()/2;a=Math.floor(a/c)*c;this.Ed==a&&(a+=c);this.Ed=a;return new Date(a)};this.Pa=function(a,b,c){var d=this.j.fc,g=a.$,h=a.Ef(),l=a.g.type(),m=g===f.mb?0:a.ia;d.Vd(g,h,l);d.Ud(g,h,l,b);c=new f(c);c.type(g);c.count(1);c.duration(b);c.Fc(d.Rd(g,h,l));c.Gc(d.Sd(g,h,l));c.ia(m);c.Pb(a.timestamp.getTime());c.zc(a.C?a.C.timestamp.getTime():-1);return new e(c,a.g,a.Kc,a.Dc,a.$a)};this.vd=function(a,b,c){if(a.I.length){var d=new h(this.j.e);d.type(this.j.zb);d.r(null);
d=new m(d,this.j.o,this.j.F,this.j.v,f.ed,this.j.q[this.j.e.k()]);d.C=this.j.p.K(d);this.j.p.eb(d);a.Wa(this.Pa(d,1E3*b,b));if(null!=c)for(b=0;b<a.I.length;b++)a.I[b].ea.Xf(c)}};this.Ua=function(a,b){return b.getTime()-a.getTime()};this.sc=function(a,b,c){var d=new g(this.j.Bb,this.j.Ea,this.j.Ta);d.Wa(this.Pa(a,0,b));c&&this.vd(d,b,null);return d};this.Jd=function(a,b,c){var d,e,l=new g(this.j.Bb,this.j.Ea,this.j.Ta),m=this.j.Z.Ff(),q=[];e=null;for(var p=0,p=d=0;p<m.length;p++)d=m[p],d.timestamp>
a&&d.timestamp<=b&&q.push(d),d.timestamp<=a&&(e=d);this.log("#createReportForQuantum() > -------------TRACK REPORT----------------");this.log("#createReportForQuantum() > Interval: ["+a.getTime()+" , "+b.getTime()+"]. Tracking interval: "+c);this.log("#createReportForQuantum() > -----------------------------------------");for(p=0;p<m.length;p++)this.log("#createReportForQuantum() > ["+m[p].timestamp.getTime()+"] :"+m[p].$+" | "+m[p].g.type());this.log("#createReportForQuantum() > -----------------------------------------");
for(p=0;p<q.length;p++)this.log("#createReportForQuantum() > ["+q[p].timestamp.getTime()+"] :"+q[p].$+" | "+q[p].g.type());this.log("#createReportForQuantum() > -----------------------------------------");e&&(e.C&&(e.C.timestamp=e.timestamp),e.timestamp=new Date(a.getTime()+1),d=e.g.r()?e.g.r().M():e.g.k(),e.ia=this.j.q[d]);if(q.length)for(m=0,e&&(m=e.$===f.mb&&e.g.type()!==h.Oa?this.Ua(e.timestamp,q[0].timestamp):this.Ua(a,q[0].timestamp),l.Wa(this.Pa(e,m,c))),p=0;p<q.length;p++){var x=q[p],m=p==
q.length-1?this.Ua(x.timestamp,b):this.Ua(x.timestamp,q[p+1].timestamp),u=!1,t=l.I;for(d=0;d<t.length;d++)if(e=t[d],x.g.type()===e.g.type()&&x.$===e.ea.type()&&(u=x.g.type()===h.Oa?e.g.r().M()===x.g.r().M():e.g.k()===x.g.k()),u){var t=e.ea,z=e.g.type();d=e.g.r()?e.g.r().M():e.g.k();var k=this.j.fc;k.Vd(t.type(),d,z);k.Ud(t.type(),d,z,m);e.$a=x.$a;t.ia(this.j.q[d]);t.duration(t.duration()+m);t.Fc(k.Rd(t.type(),d,z));t.Gc(k.Sd(t.type(),d,z));t.Pb(x.timestamp.getTime());break}u||(this.log("#createReportForQuantum() > Adding event to report: "+
x.$),d=x.g.r()?x.g.r().M():x.g.k(),x.ia=this.j.q[d],l.Wa(this.Pa(x,m,c)))}else e&&l.Wa(this.Pa(e,this.Ua(a,b),c));l.Cf();p=this.Ke(a,b,c);this.vd(l,c,p);this.log("#createReportForQuantum() > Final report ----- START -----");for(p=0;p<l.I.length;p++)e=l.I[p],c=e.ea,d=e.g.r()?e.g.r().M():e.g.k(),this.log("#createReportForQuantum() > Final report ["+c.Pb()+"/"+c.zc()+"] :"+c.type()+" | type="+e.g.type()+", name="+d+", duration="+c.duration()+", playhead="+c.ia());this.log("#createReportForQuantum() > Final report ----- END -----");
return l}}var d=c.Q,g=a.a.qe,f=a.a.nb,h=a.a.hb,e=a.a.re,m=a.H.sd;d(b,c.P);a.H.se=b})(e,f);(function(c,a){function b(){this.O("[media-fork::Context] > ");this.xb=this.B=!1;this.zb=null;this.ec=!1;this.l=this.Ab=null;this.f={cb:null,L:null};this.Va=this.ca=null;this.q={};this.Sa=new h(this);this.Z=new f;this.p=new A;this.Ta=new B;this.Bb=new v;this.Ea=new s;this.e=new r;this.o=new y;this.F=new n;this.v=new H;this.fc=new D;this.gc=function(a){a=a.data;this.log("#_onApiConfig(account="+a[k.Qb]+", sc_server="+
a[k.$b]+", sb_server="+a[k.vb]+", check_status_server="+a[k.jb]+", job_id="+a[k.pb]+", publisher="+a[k.Ma]+", ovp="+a[k.Xb]+", sdk="+a[k.ac]+", debug_tracking="+a[k.lb]+", track_local="+a[k.wb]+")");this.Bb.Wd(a[k.Qb]);this.Bb.trackingServer(a[k.$b]);this.f.L=a[k.Ma];this.Ea.ga(a[k.Xb]);this.Ea.ja(a[k.ac]);this.Ea.channel(a[k.$c]);e().dispatchEvent(new p(p.CLOCK_CHECK_STATUS_ENABLE))};this.ra=function(){this.log("#_onApiDestroy()");e().ab(this)};this.Ve=function(a){a=a.data;this.log("#_onApiOpenMain(name="+
a[k.i]+", length="+a[k.ya]+", type="+a[k.bc]+", player_name="+a[k.Aa]+", vid="+a[k.Da]+", aid="+a[k.wa]+", mid="+a[k.za]+")");this.kf();this.l=a[k.i];this.q[this.l]=0;this.Ea.playerName(a[k.Aa]);this.o.gb(a[k.Da]);this.o.Xa(a[k.wa]);this.o.Ya(a[k.za]);this.e.k(this.l);this.e.duration(a[k.ya]);this.e.type(a[k.bc]);this.zb=this.e.type();this.F.name(this.l);this.Me();a={};a[k.Ca]=!0;e().dispatchEvent(new p(p.CLOCK_TRACKING_ENABLE,a));this.ca=function(a){a=a[k.X];var b=new m(this.e,this.o,this.F,this.v,
C.je,0);b.C=this.p.K(b);this.p.eb(b);a=this.Sa.sc(b,a,!0);b={};b[k.Ba]=a;e().dispatchEvent(new z(z.xa,b))};a={};a[k.oa]=u.keys.Na;e().dispatchEvent(new u(u.ma,a));a=new m(this.e,this.o,this.F,this.v,C.mb,0);a.C=this.p.K(a);this.Y(a);this.B=!0};this.Ue=function(a){if(this.B){this.info("Call detected: onApiOpenAd().");a=a.data;this.log(this,"#_onApiOpenAd(name="+a[k.i]+", length="+a[k.ya]+", player_name="+a[k.Aa]+", parent_name="+a[k.Yb]+", pod_pos="+a[k.Zb]+", pod_offset="+a[k.sb]+", cpm="+a[k.la]+
")");this.e.k()||this.e.k(a[k.Yb]);this.l=a[k.i];this.q[this.l]=0;var b=new F;b.M(this.l);b.length(a[k.ya]);b.Lb(a[k.Aa]);b.Db(a[k.la]);b.Ib(a[k.md]);b.Kb(this.Ab);b.Jb(a[k.Zb]+"");this.e.r(b);this.e.type(r.Oa);a=new m(this.e,this.o,this.F,this.v,C.mb,0);a.C=this.p.K(a);this.Y(a);a=new m(this.e,this.o,this.F,this.v,C.hd,this.q[this.l]);a.C=this.p.K(a);this.Y(a)}else this.warn("#_onApiOpenAd() > No active viewing session.")};this.Re=function(a){this.B?(a=a.data[k.i],this.log("#_onApiClose(name="+a+
")"),a===this.e.k()?this.Je():this.Ie()):this.warn("#_onApiClose() > No active viewing session.")};this.We=function(a){this.B?(a=a.data,this.log("#_onApiPlay(name="+a[k.i]+", offset="+a[k.D]+", vid="+a[k.Da]+", aid="+a[k.wa]+", mid="+a[k.za]+")"),a[k.i]==this.e.k&&this.xb||(this.o.gb(a[k.Da]),this.o.Xa(a[k.wa]),this.o.Ya(a[k.za]),this.l=a[k.i],this.q[this.l]=Math.floor(a[k.D]),e().dispatchEvent(new p(p.CLOCK_TRACKING_ENABLE)),a=new m(this.e,this.o,this.F,this.v,C.hd,this.q[this.l]),a.C=this.p.K(a),
this.Y(a))):this.warn("#_onApiPlay() > No active viewing session.")};this.$e=function(a){this.B?(a=a.data,this.log("#_onApiStop(name="+a[k.i]+", offset="+a[k.D]+")"),this.l=a[k.i],this.q[this.l]=Math.floor(a[k.D]),a=new m(this.e,this.o,this.F,this.v,C.gd,this.q[this.l]),a.C=this.p.K(a),this.Y(a),e().dispatchEvent(new p(p.CLOCK_TRACKING_DISABLE))):this.warn("#_onApiStop() > No active viewing session.")};this.Qe=function(a){this.B?(a=a.data,this.log("#_onApiClick(name="+a[k.i]+", offset="+a[k.D]+")")):
this.warn("#_onApiClick() > No active viewing session.")};this.Se=function(a){this.B?(a=a.data,this.log("#_onApiComplete(name="+a[k.i]+", offset="+a[k.D]+")")):this.warn("#_onApiComplete() > No active viewing session.")};this.Ye=function(a){this.B?(a=a.data,this.log("#_onApiQoSInfo(bitrate="+a[k.i]+", fps="+a[k.Wb]+", dropped_frames="+a[k.Tb]+")"),this.v.nc(a[k.ib]),this.v.Qd(a[k.Wb]),this.v.Nd(a[k.Tb])):this.warn("#_onApiQoSInfo() > No active viewing session.")};this.Oe=function(a){if(this.B){a=
a.data;this.log("#_onApiBitrateChange(bitrate="+a[k.i]+")");this.v.nc(a[k.ib]);var b=new m(this.e,this.o,this.F,this.v,C.ge,this.q[this.l]);b.C=this.p.K(b);this.p.eb(b);this.ca=function(a){a=this.Sa.sc(b,a[k.X],!1);var c={};c[k.Ba]=a;e().dispatchEvent(new z(z.xa,c))};a={};a[k.oa]=u.keys.Na;e().dispatchEvent(new u(u.ma,a))}else this.warn("#_onApiBitrateChange() > No active viewing session.")};this.Pe=function(){if(this.B){this.log("#_onApiBufferStart()");var a=new m(this.e,this.o,this.F,this.v,C.he,
this.q[this.l]);a.C=this.p.K(a);this.Y(a)}else this.warn("#_onApiBufferStart() > No active viewing session.")};this.af=function(a){if(this.B){var b=a.data;this.log("#_onApiTrackError(source="+b[k.tb]+", err_id="+b[k.Vb]+", offset="+b[k.D]+")");if(!this.ec||"player"===b[k.tb]){var c=new m(this.e,this.o,this.F,this.v,C.ie,Math.floor(b[k.D]));c.C=this.p.K(c);this.p.eb(c);this.ca=function(a){a=this.Sa.sc(c,a[k.X],!1);var d=a.I[0];d.ea.id(b[k.Vb]);d.ea.source(b[k.tb]);d={};d[k.Ba]=a;e().dispatchEvent(new z(z.xa,
d))};a={};a[k.oa]=u.keys.Na;e().dispatchEvent(new u(u.ma,a))}}else this.warn("#_onApiTrackError() > No active viewing session.")};this.Xe=function(a){this.B?(this.Ab=Math.floor(a.data[k.sb]),this.log("#_onApiPodOffset(podOffset="+this.Ab+")")):this.warn("#_onApiPodOffset() > No active viewing session.")};this.Ze=function(){if(this.B){this.log("#_onApiSessionComplete()");var a=new m(this.e,this.o,this.F,this.v,C.ke,0);a.C=this.p.K(a);this.Y(a);this.ca=function(a){var b=new Date;a=this.Sa.Jd(this.Va||
new Date(0),b,a[k.X]);var c={};c[k.Ba]=a;e().dispatchEvent(new z(z.xa,c));this.Va=b};a={};a[k.oa]=u.keys.Na;e().dispatchEvent(new u(u.ma,a));a={};a[k.Ca]=!0;e().dispatchEvent(new p(p.CLOCK_TRACKING_DISABLE,a));this.B=!1}else this.warn("#_onApiSessionComplete() > No active viewing session.")};this.Te=function(a){if(this.B){var b=a.data;this.log("#_onApiMonitor(name="+b[k.i]+", offset="+b[k.D]+")");this.l=b[k.i];this.q[this.l]=Math.floor(a.data[k.D])}else this.warn("#_onApiMonitor() > No active viewing session.")};
this.cf=function(a){if(this.B){this.log("#_onClockTrackingTick(interval="+a.data[k.X]+")");var b=new Date;a=this.Sa.Jd(this.Va||new Date(0),b,a.data[k.X]);var c={};c[k.Ba]=a;e().dispatchEvent(new z(z.xa,c));this.Va=b}else this.warn("#_onClockTrackingTick() > No active viewing session.")};this.ef=function(a){this.log("#_onNetworkCheckStatusComplete(track_ext_err="+a.data[k.cc]+")");a=a.data[k.cc];null!==a&&(this.ec=a)};this.ic=function(a){a=a.data[k.oa];this.log("#_onDataRequest(what="+a+")");switch(a){case u.keys.ld:a=
{},a[k.Ma]=this.f.L,e().dispatchEvent(new u(u.kb,a))}};this.jc=function(a){this.log("#_onDataResponse()");this.Od(a.data)};this.kf=function(){this.log("#_resetInternalState()");this.xb=this.B=!1;this.zb=null;this.ec=!1;this.q={};this.Va=this.Ab=null;this.fc=new D;this.p=new A;this.Z=new f;this.o=new y;this.F=new n;this.v=new H;this.Ta=new B;this.e=new r;this.e.L(this.f.L);this.e.type(this.f.cb)};this.Me=function(){this.Ta.Cc(""+(new Date).getTime()+Math.floor(1E9*Math.random()));this.log("#_generateSessionId() > New session id: "+
this.Ta.Cc)};this.Y=function(a){this.log("#_placeItemOnTimeline(type="+a.$+")");this.Z.qf(a);this.p.eb(a)};this.Je=function(){if(this.xb)this.warn("#_closeMainVideo() > The main video content was already closed.");else{-1==this.q[this.e.k()]&&(this.q[this.e.k()]=this.e.duration());var a=new m(this.e,this.o,this.F,this.v,C.fd,this.q[this.e.k()]);a.C=this.p.K(a);this.Y(a);this.xb=!0}};this.Ie=function(){var a=new m(this.e,this.o,this.F,this.v,C.fd,this.q[this.l]);a.C=this.p.K(a);this.Y(a);this.e.type(this.zb);
this.l=this.e.k();this.e.r(null)};e().addEventListener(t.Rb,this.gc,this);e().addEventListener(t.Ia,this.ra,this);e().addEventListener(t.Tc,this.Ve,this);e().addEventListener(t.Sc,this.Ue,this);e().addEventListener(t.Pc,this.Re,this);e().addEventListener(t.Uc,this.We,this);e().addEventListener(t.Xc,this.$e,this);e().addEventListener(t.Oc,this.Qe,this);e().addEventListener(t.Qc,this.Se,this);e().addEventListener(t.Vc,this.Ye,this);e().addEventListener(t.Mc,this.Oe,this);e().addEventListener(t.Nc,this.Pe,
this);e().addEventListener(t.Yc,this.af,this);e().addEventListener(t.Sb,this.Xe,this);e().addEventListener(t.Wc,this.Ze,this);e().addEventListener(t.Rc,this.Te,this);e().addEventListener(p.CLOCK_TRACKING_TICK,this.cf,this);e().addEventListener(x.qb,this.ef,this);e().addEventListener(u.ma,this.ic,this);e().addEventListener(u.kb,this.jc,this)}var d=c.Q,g=c.P,e=c.NotificationCenter,h=a.H.se,f=a.H.Ae,m=a.H.sd,A=a.H.History,B=a.a.ve,v=a.a.xe,r=a.a.hb,s=a.a.ue,y=a.a.ud,n=a.a.pd,H=a.a.ne,D=a.H.ee,p=a.event.Ka,
x=a.event.rb,u=a.event.Ub,t=a.event.Ja,z=a.event.cd,k=a.event.aa,C=a.a.nb,F=a.a.Zc;d(b,c.Ld);d(b,g);a.H.de=b})(e,f);(function(c){function a(a){this.O("[media-fork::HeartbeatMediaFork] > ");this.m=a;this.G=function(){var a=this.qa&&(this.m.analyticsVisitorID||this.m.marketingCloudVisitorID||this.m.visitorID);a||this.warn("Unable to track! Is configured: "+this.qa+" analyticsVisitorID: "+this.m.analyticsVisitorID+" marketingCloudVisitorID: "+this.m.marketingCloudVisitorID+" visitorID: "+this.m.visitorID);
return a};this.qa=!1;this.j=new q;new m(new B);this.xd=new h;this.kc=null;this.f={trackingServer:null,vc:null,L:null,cb:null,ga:null,ja:null,channel:null,debugTracking:!1,Ic:!1}}var b=e.Q,d=e.NotificationCenter,g=c.event.aa,f=c.event.Ja,h=c.N.ce,m=c.Za.me,q=c.H.de,A=c.a.hb,B=c.a.oe;b(a,e.P);a.prototype.Sf=function(a){a&&a.hasOwnProperty("debugLogging")&&(e.La=a.debugLogging);this.log("#setup(configData={trackingServer: "+a.trackingServer+", jobId: "+a.vc+", streamType: "+a.cb+", publisher: "+a.L+
", ovp: "+a.ga+", sdk: "+a.ja+", debugLogging: "+a.ag+"})");this.f.debugTracking=this.m.debugTracking;this.f.Ic=this.m.trackLocal;this.f.channel=this.m.Media.channel;a&&(a.hasOwnProperty("trackingServer")&&(this.f.trackingServer=a.trackingServer),a.hasOwnProperty("jobId")&&(this.f.vc=a.jobId),a.hasOwnProperty("publisher")&&(this.f.L=a.publisher),a.hasOwnProperty("ovp")&&(this.f.ga=a.ovp),a.hasOwnProperty("sdk")&&(this.f.ja=a.sdk),a.hasOwnProperty("streamType")&&(this.f.cb=a.streamType===A.rd||a.streamType===
A.ze||a.streamType===A.ye||a.streamType===A.Oa?a.streamType:A.rd),this.m.Media.__primetime&&(this.f.ga="primetime"),null!=this.kc&&(this.f.ja=this.kc),this.log("#setup() > Applying configuration: {account: "+this.m.account+", scTrackingServer: "+this.m.trackingServer+", sbTrackingServer: "+this.f.trackingServer+", jobId: "+this.f.trackingServer+", publisher: "+this.f.L+", ovp: "+this.f.ga+", sdk: "+this.f.ja+", channel: "+this.f.channel+", debugTracking: "+this.f.debugTracking+", trackLocal: "+this.f.Ic+
"}"),a={},a[g.Qb]=this.m.account,a[g.$b]=this.m.trackingServer,a[g.vb]=this.f.trackingServer,a[g.jb]=this.f.trackingServer+"/settings/",a[g.pb]=this.f.vc,a[g.Ma]=this.f.L,a[g.Xb]=this.f.ga,a[g.ac]=this.f.ja,a[g.$c]=this.f.channel,a[g.lb]=this.f.debugTracking,a[g.wb]=this.f.Ic,d().dispatchEvent(new f(f.Rb,a)),this.qa=!0)};a.prototype.open=function(a,b,c){this.log("#open(name="+a+", length="+b+", playerName="+c+")");if(this.G()){var e={};e[g.Da]=this.m.visitorID;e[g.wa]=this.m.analyticsVisitorID;e[g.za]=
this.m.Jf;e[g.i]=a;e[g.ya]=b;e[g.bc]=this.f.cb;e[g.Aa]=c;d().dispatchEvent(new f(f.Tc,e))}};a.prototype.openAd=function(a,b,c,e,h,m,q){this.log("#openAd(name="+a+", length="+b+", playerName="+c+", parentName="+e+", parentPod="+h+", parentPodPosition="+m+", cpm="+q+", )");if(this.G()){var p={};p[g.i]=a;p[g.ya]=b;p[g.Aa]=c;p[g.Yb]=e;p[g.md]=h;p[g.Zb]=m;p[g.la]=q;d().dispatchEvent(new f(f.Sc,p))}};a.prototype.close=function(a){this.log("#close(name="+a+")");if(this.G()){var b={};b[g.i]=a;d().dispatchEvent(new f(f.Pc,
b))}};a.prototype.play=function(a,b,c,e,h){this.log("#play(name="+a+", offset="+b+", segmentNum="+c+", segment="+e+", segmentLength="+h+")");this.G()&&(c={},c[g.Da]=this.m.visitorID,c[g.wa]=this.m.analyticsVisitorID,c[g.za]=this.m.Jf,c[g.i]=a,c[g.D]=b,d().dispatchEvent(new f(f.Uc,c)))};a.prototype.monitor=function(a,b){this.log("#monitor(name="+a+", offset="+b+")");var c={};c[g.i]=a;c[g.D]=b;d().dispatchEvent(new f(f.Rc,c))};a.prototype.stop=function(a,b){this.log("#stop(name="+a+", offset="+b+")");
if(this.G()){var c={};c[g.i]=a;c[g.D]=b;d().dispatchEvent(new f(f.Xc,c))}};a.prototype.click=function(a,b){this.log("#click(name="+a+", offset="+b+")");if(this.G()){var c={};c[g.i]=a;c[g.D]=b;d().dispatchEvent(new f(f.Oc,c))}};a.prototype.complete=function(a,b){this.log("#complete(name="+a+", offset="+b+")");if(this.G()){var c={};c[g.i]=a;c[g.D]=b;d().dispatchEvent(new f(f.Qc,c))}};a.prototype.Md=function(){Logger.debug(this,"#destroy()");d().dispatchEvent(new f(f.Ia))};a.prototype.Wf=function(a,
b,c){this.log("#trackError(source="+a+", errorId="+b+", offset="+c+")");if(this.G()){var e={};e[g.tb]=a;e[g.Vb]=b;e[g.D]=c;d().dispatchEvent(new f(f.Yc,e))}};a.prototype.Yf=function(a,b,c){this.log("#updateQoSInfo(bitrate="+a+", fps="+b+", droppedFrames="+c+")");if(this.G()){var e={};e[g.ib]=a;e[g.Wb]=b;e[g.Tb]=c;d().dispatchEvent(new f(f.Vc,e))}};a.prototype.tf=function(a){this.log("#bitrateChange(bitrate="+a+")");if(this.G()){var b={};b[g.ib]=a;d().dispatchEvent(new f(f.Mc,b))}};a.prototype.uf=
function(){this.log("#bufferStart()");this.G()&&d().dispatchEvent(new f(f.Nc))};a.prototype.pf=function(a){this.log("#adBreakStart(offset="+a+")");if(this.G()){var b={};b[g.sb]=a;d().dispatchEvent(new f(f.Sb,b))}};a.prototype.of=function(){this.log("#adBreakEnd()");if(this.G()){var a={};a[g.sb]=null;d().dispatchEvent(new f(f.Sb,a))}};a.prototype.Qf=function(){this.log("#sessionComplete()");this.G()&&d().dispatchEvent(new f(f.Wc))};a.prototype.He=function(a){this.log("#__setPsdkVersion(version="+a+
")");this.kc=a};c.le=a})(f);d.Ha||(d.Ha={});d.Ha.xf||(d.Ha.xf=e);d.Ha.Kf=f})(this);this.Ge(d)}(d.s);F.callMethodWhenReady=function(d,h){null!=I.visitor&&(I.isReadyToTrack()?F[d].apply(this,h):I.callbackWhenReadyToTrack(F,F[d],h))};d.Heartbeat=F;d.rf=function(){var f,h;if(d.autoTrack&&(f=d.s.d.getElementsByTagName("VIDEO")))for(h=0;h<f.length;h++)d.attach(f[h])};d.pa(D,"load",d.rf)}


function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!=typeof DIL&&(DIL=function(a,b){var d=[],c,e;a!==Object(a)&&(a={});var g,h,n,v,x,q,r,F,k,K,L,G;g=a.partner;h=a.containerNSID;n=a.iframeAttachmentDelay;v=!!a.disableDestinationPublishingIframe;x=a.iframeAkamaiHTTPS;q=a.mappings;r=a.uuidCookie;F=!0===a.enableErrorReporting;k=a.visitorService;K=a.declaredId;L=!0===a.removeFinishedScriptsAndCallbacks;G=!0===a.delayAllUntilWindowLoad;var M,N,O,H,D,P,Q;M=!0===a.disableScriptAttachment;N=!0===a.disableCORSFiring;O=!0===a.disableDefaultRequest;
H=a.afterResultForDefaultRequest;D=a.dpIframeSrc;P=!0===a.testCORS;Q=!0===a.useJSONPOnly;F&&DIL.errorModule.activate();var R=!0===window._dil_unit_tests;(c=b)&&d.push(c+"");if(!g||"string"!=typeof g)return c="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:c,filename:"dil.js"}),Error(c);c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(h||"number"==typeof h)h=parseInt(h,10),!isNaN(h)&&0<=h&&(c="");c&&
(h=0,d.push(c),c="");e=DIL.getDil(g,h);if(e instanceof DIL&&e.api.getPartner()==g&&e.api.getContainerNSID()==h)return e;if(this instanceof DIL)DIL.registerDil(this,g,h);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+g+" and containerNSID = "+h);var z={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},I={stuffed:{}},l={},p={firingQueue:[],
fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:h+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,
d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",admsProcessingStarted:!1,process:function(f){try{if(!this.admsProcessingStarted){var t=this,a,y,c,b,d;if("function"==typeof f&&"function"==typeof f.getInstance){if(k===Object(k)&&(a=k.namespace)&&"string"==typeof a)y=f.getInstance(a);else{this.releaseType="no namespace";this.releaseRequests();return}if(y===Object(y)&&"function"==
typeof y.isAllowed&&"function"==typeof y.getMarketingCloudVisitorID){if(!y.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=y;this.admsProcessingStarted=!0;c=function(f){"VisitorAPI"!=t.releaseType&&(t.mid=f,t.releaseType="VisitorAPI",t.releaseRequests())};R&&(b=k.server)&&"string"==typeof b&&(y.server=b);d=y.getMarketingCloudVisitorID(c);if("string"==typeof d&&d.length){c(d);return}setTimeout(function(){"VisitorAPI"!=t.releaseType&&(t.releaseType=
"timeout",t.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(g){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var f=s.isPopulatedString,t=this.getMarketingCloudVisitorID();f(this.mid)&&this.mid==t||(this.mid=
t);return f(this.mid)?"d_mid="+this.mid+"&":""}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(f,t){var a=s.isPopulatedString,y=encodeURIComponent;if(f===Object(f)&&a(t)){var c=f.dpid,b=f.dpuuid,d=null;if(a(c)&&a(b)){d=y(c)+"$"+y(b);if(!0===this.declaredIdCombos[d])return"setDeclaredId: combo exists for type '"+t+"'";this.declaredIdCombos[d]=!0;this.declaredId[t]={dpid:c,dpuuid:b};return"setDeclaredId: succeeded for type '"+t+"'"}}return"setDeclaredId: failed for type '"+
t+"'"},getDeclaredIdQueryString:function(){var f=this.declaredId.request,t=this.declaredId.init,a="";null!==f?a="&d_dpid="+f.dpid+"&d_dpuuid="+f.dpuuid:null!==t&&(a="&d_dpid="+t.dpid+"&d_dpuuid="+t.dpuuid);return a}},registerRequest:function(f){var a=this.firingQueue;f===Object(f)&&a.push(f);this.firing||!a.length||G&&!DIL.windowLoaded||(this.adms.calledBack?(f=a.shift(),f.src=f.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),s.isPopulatedString(f.corsPostData)&&
(f.corsPostData=f.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),B.fireRequest(f),this.firstRequestHasFired||"script"!==f.tag&&"cors"!==f.tag||(this.firstRequestHasFired=!0)):this.processVisitorAPI())},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(f){if(!L)return"removeFinishedScriptsAndCallbacks is not boolean true";var a=this.toRemove,c,b;f===Object(f)&&(c=f.script,b=f.callbackName,(c===Object(c)&&"SCRIPT"==c.nodeName||"no script created"==
c)&&"string"==typeof b&&b.length&&a.push(f));if(this.readyToRemove&&a.length){b=a.shift();c=b.script;b=b.callbackName;"no script created"!=c?(f=c.src,c.parentNode.removeChild(c)):f=c;window[b]=null;try{delete window[b]}catch(d){}this.removed.push({scriptSrc:f,callbackName:b});DIL.variables.scriptsRemoved.push(f);DIL.variables.callbacksRemoved.push(b);return this.requestRemoval()}return"requestRemoval() processed"}};e=function(){var f="http://fast.",a="?d_nsid="+h+"#"+encodeURIComponent(document.location.href);
if("string"===typeof D&&D.length)return D+a;z.IS_HTTPS&&(f=!0===x?"https://fast.":"https://");return f+g+".demdex.net/dest4.html"+a};var A={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+g+"_"+h,url:e(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:z.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var f=this,a=document.createElement("iframe");a.id=this.id;a.style.cssText="display: none; width: 0; height: 0;";
a.src=this.url;m.addListener(a,"load",function(){f.iframeHasLoaded=!0;f.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(f,a){var c=this;f&&!s.isEmptyObject(f)&&this.process(f,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){c.messageSendingInterval=z.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(f,
a){var c=encodeURIComponent,b,d,g,e,h,k;a===Object(a)&&(k=m.encodeAndBuildRequest(["",a.dpid||"",a.dpuuid||""],","));if((b=f.dests)&&b instanceof Array&&(d=b.length))for(g=0;g<d;g++)e=b[g],e=[c("dests"),c(e.id||""),c(e.y||""),c(e.c||"")],this.addMessage(e.join("|"));if((b=f.ibs)&&b instanceof Array&&(d=b.length))for(g=0;g<d;g++)e=b[g],e=[c("ibs"),c(e.id||""),c(e.tag||""),m.encodeAndBuildRequest(e.url||[],","),c(e.ttl||""),"",k],this.addMessage(e.join("|"));if((b=f.dpcalls)&&b instanceof Array&&(d=
b.length))for(g=0;g<d;g++)e=b[g],h=e.callback||{},h=[h.obj||"",h.fn||"",h.key||"",h.tag||"",h.url||""],e=[c("dpm"),c(e.id||""),c(e.tag||""),m.encodeAndBuildRequest(e.url||[],","),c(e.ttl||""),m.encodeAndBuildRequest(h,","),k],this.addMessage(e.join("|"));this.jsonProcessed.push(f)},addMessage:function(f){var a=encodeURIComponent,a=F?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+f)},sendMessages:function(){var f=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,
this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){f.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},J={traits:function(f){s.isValidPdata(f)&&(l.sids instanceof Array||(l.sids=[]),m.extendArray(l.sids,f));return this},pixels:function(f){s.isValidPdata(f)&&(l.pdata instanceof Array||(l.pdata=[]),m.extendArray(l.pdata,f));return this},logs:function(f){s.isValidLogdata(f)&&(l.logdata!==Object(l.logdata)&&(l.logdata={}),m.extendObject(l.logdata,
f));return this},customQueryParams:function(f){s.isEmptyObject(f)||m.extendObject(l,f,p.reservedKeys);return this},signals:function(f,a){var c,b=f;if(!s.isEmptyObject(b)){if(a&&"string"==typeof a)for(c in b={},f)f.hasOwnProperty(c)&&(b[a+c]=f[c]);m.extendObject(l,b,p.reservedKeys)}return this},declaredId:function(f){p.declaredId.setDeclaredId(f,"request");return this},result:function(f){"function"==typeof f&&(l.callback=f);return this},afterResult:function(f){"function"==typeof f&&(l.postCallbackFn=
f);return this},useImageRequest:function(){l.useImageRequest=!0;return this},clearData:function(){l={};return this},submit:function(){B.submitRequest(l);l={};return this},getPartner:function(){return g},getContainerNSID:function(){return h},getEventLog:function(){return d},getState:function(){var f={},a={};m.extendObject(f,p,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});m.extendObject(a,A,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:l,otherRequestInfo:f,
destinationPublishingInfo:a}},idSync:function(f){if(f!==Object(f)||"string"!=typeof f.dpid||!f.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof f.url||!f.url.length)return"Error: config.url is empty";var a=f.url,c=f.minutesToLive,b=encodeURIComponent,d,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)return"Error: config.minutesToLive needs to be a positive number";d=m.encodeAndBuildRequest(["",f.dpid,
f.dpuuid||""],",");f=["ibs",b(f.dpid),"img",b(a),c,"",d];A.addMessage(f.join("|"));p.firstRequestHasFired&&A.requestToProcess();return"Successfully queued"},aamIdSync:function(f){if(f!==Object(f)||"string"!=typeof f.dpuuid||!f.dpuuid.length)return"Error: config or config.dpuuid is empty";f.url="//dpm.demdex.net/ibs:dpid="+f.dpid+"&dpuuid="+f.dpuuid;return this.idSync(f)},passData:function(f){if(s.isEmptyObject(f))return"Error: json is empty or not an object";B.defaultCallback(f);return"json submitted for processing"},
getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var f=p,a=f.modStatsParams,c=f.platformParams,b;if(!a){a={};for(b in c)c.hasOwnProperty(b)&&!f.nonModStatsParams[b]&&(a[b.replace(/^d_/,"")]=c[b]);f.modStatsParams=a}return a}},B={corsMetadata:function(){var f="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?f="XMLHttpRequest":Function("/*@cc_on return /^10/.test(@_jscript_version) @*/")()?
f="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:f,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(f){p.registerRequest(B.createQueuedRequest(f));return!0},createQueuedRequest:function(f){var a=p,c,b=f.callback,d="img",g;if(!s.isEmptyObject(q)){var e,
k,r;for(e in q)q.hasOwnProperty(e)&&(k=q[e],null!=k&&""!==k&&e in f&&!(k in f||k in p.reservedKeys)&&(r=f[e],null!=r&&""!==r&&(f[k]=r)))}s.isValidPdata(f.sids)||(f.sids=[]);s.isValidPdata(f.pdata)||(f.pdata=[]);s.isValidLogdata(f.logdata)||(f.logdata={});f.logdataArray=m.convertObjectToKeyValuePairs(f.logdata,"=",!0);f.logdataArray.push("_ts="+(new Date).getTime());"function"!=typeof b&&(b=this.defaultCallback);if(a.useJSONP=!0!==f.useImageRequest)d="script",c=a.callbackPrefix+"_"+h+"_"+(new Date).getTime();
a=this.makeRequestSrcData(f,c);!Q&&(g=this.getCORSInstance())&&a.truncated&&(this.corsMetadata.corsCookiesEnabled||a.isDeclaredIdCall)&&(d="cors");return{tag:d,src:a.src,corsSrc:a.corsSrc,internalCallbackName:c,callbackFn:b,postCallbackFn:f.postCallbackFn,useImageRequest:!!f.useImageRequest,requestData:f,corsInstance:g,corsPostData:a.corsPostData,hasCORSError:!1}},defaultCallback:function(f,a){var c,b,d,e,g,h,k,q,w;if((c=f.stuff)&&c instanceof Array&&(b=c.length))for(d=0;d<b;d++)if((e=c[d])&&e===
Object(e)){g=e.cn;h=e.cv;k=e.ttl;if("undefined"==typeof k||""===k)k=Math.floor(m.getMaxCookieExpiresInMinutes()/60/24);q=e.dmn||"."+document.domain.replace(/^www\./,"");w=e.type;g&&(h||"number"==typeof h)&&("var"!=w&&(k=parseInt(k,10))&&!isNaN(k)&&m.setCookie(g,h,1440*k,"/",q,!1),I.stuffed[g]=h)}c=f.uuid;s.isPopulatedString(c)&&!s.isEmptyObject(r)&&(b=r.path,"string"==typeof b&&b.length||(b="/"),d=parseInt(r.days,10),isNaN(d)&&(d=100),m.setCookie(r.name||"aam_did",c,1440*d,b,r.domain||"."+document.domain.replace(/^www\./,
""),!0===r.secure));v||p.abortRequests||A.requestToProcess(f,a)},makeRequestSrcData:function(f,a){f.sids=s.removeEmptyArrayValues(f.sids||[]);f.pdata=s.removeEmptyArrayValues(f.pdata||[]);var c=p,b=c.platformParams,d=m.encodeAndBuildRequest(f.sids,","),e=m.encodeAndBuildRequest(f.pdata,","),k=(f.logdataArray||[]).join("&");delete f.logdataArray;var q=z.IS_HTTPS?"https://":"http://",r=c.declaredId.getDeclaredIdQueryString(),l;l=[];var w,n,E,x;for(w in f)if(!(w in c.reservedKeys)&&f.hasOwnProperty(w))if(n=
f[w],w=encodeURIComponent(w),n instanceof Array)for(E=0,x=n.length;E<x;E++)l.push(w+"="+encodeURIComponent(n[E]));else l.push(w+"="+encodeURIComponent(n));l=l.length?"&"+l.join("&"):"";w=!1;d="d_nsid="+b.d_nsid+r+(d.length?"&d_sid="+d:"")+(e.length?"&d_px="+e:"")+(k.length?"&d_ld="+encodeURIComponent(k):"");b="&d_rtbd="+b.d_rtbd+"&d_jsonv="+b.d_jsonv+"&d_dst="+b.d_dst;q=q+g+".demdex.net/event";e=c=q+"?"+d+(c.useJSONP?b+"&d_cb="+(a||""):"")+l;2048<c.length&&(c=c.substring(0,c.lastIndexOf("&")),w=!0);
return{corsSrc:q+"?"+(P?"testcors=1&d_nsid="+h+"&":"")+"_ts="+(new Date).getTime(),src:c,originalSrc:e,truncated:w,corsPostData:d+b+l,isDeclaredIdCall:""!==r}},fireRequest:function(f){if("img"==f.tag)this.fireImage(f);else{var a=p.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"==f.tag?this.fireScript(f,a):"cors"==f.tag&&this.fireCORS(f,a)}},fireImage:function(a){var b=p,e,g;b.abortRequests||(b.firing=!0,e=new Image(0,0),b.sent.push(a),e.onload=
function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},g=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type;d.push(c);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},e.addEventListener?(e.addEventListener("error",g,!1),e.addEventListener("abort",g,!1)):e.attachEvent&&(e.attachEvent("onerror",g),e.attachEvent("onabort",g)),e.src=a.src)},fireScript:function(a,b){var e=this,h=p,k,q,r=a.src,l=a.postCallbackFn,
n="function"==typeof l,m=a.internalCallbackName;h.abortRequests||(h.firing=!0,window[m]=function(e){try{e!==Object(e)&&(e={});var k=a.callbackFn;h.firing=!1;h.fired.push(a);h.num_of_jsonp_responses++;k(e,b);n&&l(e,b)}catch(u){u.message="DIL jsonp callback caught error with message "+u.message;c=u.message;d.push(c);u.filename=u.filename||"dil.js";u.partner=g;DIL.errorModule.handleError(u);try{k({error:u.name+"|"+u.message},b),n&&l({error:u.name+"|"+u.message},b)}catch(r){}}finally{h.requestRemoval({script:q,
callbackName:m}),h.registerRequest()}},M?(h.firing=!1,h.requestRemoval({script:"no script created",callbackName:m})):(q=document.createElement("script"),q.addEventListener&&q.addEventListener("error",function(b){h.requestRemoval({script:q,callbackName:m});c="jsonp script tag error listener received the event of type "+b.type+" with src "+r;e.handleScriptError(c,a)},!1),q.type="text/javascript",q.src=r,k=DIL.variables.scriptNodeList[0],k.parentNode.insertBefore(q,k)),h.sent.push(a),h.declaredId.declaredId.request=
null)},fireCORS:function(a,b){function e(q){try{var u=JSON.parse(q);if(u!==Object(u)){h.handleCORSError(a,b,"Response is not JSON");return}}catch(l){h.handleCORSError(a,b,"Error parsing response as JSON");return}try{var r=a.callbackFn;k.firing=!1;k.fired.push(a);k.num_of_cors_responses++;r(u,b);x&&n(u,b)}catch(m){m.message="DIL handleCORSResponse caught error with message "+m.message;c=m.message;d.push(c);m.filename=m.filename||"dil.js";m.partner=g;DIL.errorModule.handleError(m);try{r({error:m.name+
"|"+m.message},b),x&&n({error:m.name+"|"+m.message},b)}catch(p){}}finally{k.registerRequest()}}var h=this,k=p,q=this.corsMetadata.corsType,r=a.corsSrc,l=a.corsInstance,m=a.corsPostData,n=a.postCallbackFn,x="function"===typeof n;if(!k.abortRequests){k.firing=!0;if(N)k.firing=!1;else try{l.open("post",r,!0),"XMLHttpRequest"===q?(l.withCredentials=!0,l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){4===this.readyState&&(200===this.status?e(this.responseText):
h.handleCORSError(a,b,"onreadystatechange"))}):"XDomainRequest"===q&&(l.onload=function(){e(this.responseText)}),l.onerror=function(c){h.handleCORSError(a,b,"onerror")},l.ontimeout=function(c){h.handleCORSError(a,b,"ontimeout")},l.send(m)}catch(s){this.handleCORSError(a,b,"try-catch")}k.sent.push(a);k.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){a.hasCORSError||(a.hasCORSError=!0,p.num_of_cors_errors++,a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){p.num_of_jsonp_errors++;
this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=p;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},s={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],
"undefined"!=typeof d&&null!=d&&e.push(d);return e},isPopulatedString:function(a){return"string"==typeof a&&a.length}},m={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[];b=b||"=";var e,g;for(e in a)g=a[e],"undefined"!=typeof g&&null!=g&&d.push(e+
b+(c?encodeURIComponent(g):g));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),g=0;g<d;g++)g in c&&(e[g]=b.call(b,c[g],g,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),
d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=[],g=0;g<d;g++)if(g in c){var h=c[g];b.call(b,h,g,c)&&e.push(h)}return e}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,g){var h=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+
(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(g?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!s.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(z.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/
1E3/60}};"error"==g&&0==h&&m.addListener(window,"load",function(){DIL.windowLoaded=!0});var C=function(){p.registerRequest();T();v||p.abortRequests||A.attachIframe();p.readyToRemove=!0;p.requestRemoval()},T=function(){v||setTimeout(function(){O||p.firstRequestHasFired||p.adms.admsProcessingStarted||p.adms.calledBack||("function"==typeof H?J.afterResult(H).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},S=document;"error"!=g&&(DIL.windowLoaded?C():"complete"!=S.readyState&&"loaded"!=
S.readyState?m.addListener(window,"load",C):DIL.isAddedPostWindowLoadWasCalled?m.addListener(window,"load",C):G||(n="number"==typeof n?parseInt(n,10):0,0>n&&(n=0),setTimeout(C,n||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));p.declaredId.setDeclaredId(K,"init");this.api=J;this.getStuffedVariable=function(a){var b=I.stuffed[a];b||"number"==typeof b||(b=m.getCookie(a))||"number"==typeof b||(b="");return b};this.validators=s;this.helpers=m;this.constants=z;this.log=d;R&&(this.pendingRequest=
l,this.requestController=p,this.setDestinationPublishingUrl=e,this.destinationPublishing=A,this.requestProcs=B,this.variables=I,this.callWindowLoadFunctions=C)},function(){var a=document,b;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",b=function(){a.removeEventListener("DOMContentLoaded",b,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},
DIL.extendStaticPropertiesAndMethods({version:"5.5",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof a?!!a():"boolean"==typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(b){return(new Image(0,
0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,b,d){b=b+"$"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;"string"!=typeof a&&(a="");b||(b=0);d=a+"$"+b;return d in this.dils?this.dils[d]:
Error("The DIL instance with partner = "+a+" and containerNSID = "+b+" was not found")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):""},xd:{postMessage:function(a,b,d){var c=1;b&&(window.postMessage?d.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(d.location=b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,
destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return"DIL error module has not been activated";c!==Object(c)&&(c={});var e=c.name?(new String(c.name)).toLowerCase():"",g=[];c={name:e,filename:c.filename?c.filename+"":"",partner:c.partner?c.partner+"":"no_partner",site:c.site?c.site+"":document.location.href,
message:c.message?c.message+"":""};g.push(e in b?b[e]:b.noerrortypedefined);a.api.pixels(g).logs(c).useImageRequest().submit();return"DIL error report sent"},pixelMap:b}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,b,d){var c="";b=b||"Error caught in DIL module/submodule: ";a===Object(a)?c=b+(a.message||"err has no message"):(c=b+"err is not a valid object",a={});a.message=c;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=
c}}});
DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil("error"),c=DIL.tools.decomposeURI(a||document.referrer),e="",g="",h={queryParam:"q"};return(e=d.helpers.filter([b===Object(b)?b:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!c.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(h,e),g=h.queryPattern?(e=
(""+c.search).match(h.queryPattern))?e[1]:"":c.uriParams[h.queryParam],decodeURIComponent(g||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var b=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){b.helpers.map(d.split("&"),function(b){b=b.split("=");a[b.shift()]=b.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},b=document.getElementsByTagName("meta"),d,c,e,g,h;d=0;for(e=arguments.length;d<e;d++)if(g=arguments[d],null!==g)for(c=0;c<b.length;c++)if(h=b[c],h.name==g){a[g]=h.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d,c){try{var e=this,g={name:"DIL Site Catalyst Module Error"},h=function(a){g.message=a;DIL.errorModule.handleError(g);return a};this.options=c===Object(c)?c:{};this.dil=null;if(b instanceof DIL)this.dil=b;else return h("dilInstance is not a valid instance of DIL");g.partner=b.api.getPartner();if(a!==Object(a))return h("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return h("m is not an object");b.trackVars=e.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,g,n=[];g=[];var x={},v=!1;if(d!==Object(d))return h("Error in m._t function: s is not an object");if(this.d){if("function"==typeof d.foreachVar)d.foreachVar(function(a,b){"undefined"!==typeof b&&(x[a]=b,v=!0)},this.trackVars);else{if(!(d.va_t instanceof Array))return h("Error in m._t function: s.va_t is not an array");
if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(n=a.split(",");b<n.length;b++)0<=c.indexOf(","+n[b]+",")&&g.push(n[b]);g.length&&(c=","+g.join(",")+",")}g=0;for(b=d.va_t.length;g<b;g++)a=d.va_t[g],0<=c.indexOf(","+a+",")&&"undefined"!==typeof d[a]&&null!==d[a]&&""!==d[a]&&(x[a]=d[a],v=!0)}e.includeContextData(d,
e,x).store_populated&&(v=!0);v&&this.d.api.signals(x,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=b;return g.message?g.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(n){return this.handle(n,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var b=[],d,c,e,g,h;if(a===Object(a)){d=a.names;if(d instanceof Array&&(e=d.length))for(c=0;c<e;c++)g=d[c],"string"==typeof g&&g.length&&b.push(g);a=a.iteratedNames;if(a instanceof Array&&
(e=a.length))for(c=0;c<e;c++)if(d=a[c],d===Object(d)&&(g=d.name,h=parseInt(d.maxIndex,10),"string"==typeof g&&g.length&&!isNaN(h)&&0<=h))for(d=0;d<=h;d++)b.push(g+d);if(b.length)return b.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,b,d){var c={},e=!1;if(a.contextData===Object(a.contextData)){a=a.contextData;b=b.options.replaceContextDataPeriodsWith;
var g,h;"string"===typeof b&&b.length||(b="_");for(g in a)a.hasOwnProperty(g)&&((h=a[g])||"number"===typeof h)&&(g=("contextData."+g).replace(/\./g,b),d[g]=h,e=!0)}c.store_populated=e;return c}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var c={name:"DIL GA Module Error"},e="";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",
c.message=e,DIL.errorModule.handleError(c));a instanceof Array&&a.length?this.arr=a:(e="gaArray is not an array or is empty",c.message=e,DIL.errorModule.handleError(c));this.tv=this.constructTrackVars(d);this.errorMessage=e}catch(g){this.handle(g,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var b=[],d,c,e,g;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){e=this.defaultTrackVars;g={};d=0;for(c=e.length;d<c;d++)g[e[d]]=
!0;this.defaultTrackVarsObj=g}else g=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(c=a.length))for(d=0;d<c;d++)e=a[d],"string"==typeof e&&e.length&&e in g&&b.push(e);if(b.length)return b}return this.defaultTrackVars},constructGAObj:function(a){var b={};a=a instanceof Array?a:this.arr;var d,c,e,g;d=0;for(c=a.length;d<c;d++)e=a[d],e instanceof Array&&e.length&&(e=[],g=a[d],e instanceof Array&&g instanceof Array&&Array.prototype.push.apply(e,g),g=e.shift(),"string"==typeof g&&
g.length&&(b[g]instanceof Array||(b[g]=[]),b[g].push(e)));return b},addToSignals:function(a,b){if("string"!=typeof a||""===a||null==b||""===b)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(b);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),b={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c,d){"string"==typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,e,g){this.addToSignals("c_itemOrderId",
a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",e);this.addToSignals("c_itemQuantity",g)},_addTrans:function(a,b,c,d,e,g,h,n){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",e);this.addToSignals("c_transCity",g);this.addToSignals("c_transState",h);this.addToSignals("c_transCountry",
n)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,c,e,g,h,n,v;c=0;for(e=d.length;c<e;c++)if(g=d[c],a.hasOwnProperty(g)&&b.hasOwnProperty(g)&&(v=a[g],v instanceof Array))for(h=0,n=v.length;h<n;h++)b[g].apply(this,v[h])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),
"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,b,d){try{this.callback=this.dil=null,this.errorMessage="",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,
this.cookieName=this.v(b)?b:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(c){this.handle(c,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var b,d,c,e,g,h;h=!1;var n=1;if(a===Object(a)&&(b=a.stuff)&&b instanceof Array&&(d=b.length))for(a=0;a<d;a++)if((c=b[a])&&c===Object(c)&&(e=c.cn,g=c.cv,e==this.cookieName&&this.v(g))){h=!0;break}if(h){b=
g.split(this.delimiter);"undefined"==typeof window._gaq&&(window._gaq=[]);c=window._gaq;a=0;for(d=b.length;a<d&&!(h=b[a].split("="),g=h[0],h=h[1],this.v(g)&&this.v(h)&&c.push(["_setCustomVar",n++,g,h,1]),n>this.LIMIT);a++);this.errorMessage=1<n?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;
this.dil.api.afterResult(function(b){a.process(b)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(b){return this.handle(b,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var c=[],e="";this.isSecurePageButNotEnabled(document.location.protocol)&&(e="Module has not been enabled for a secure page",c.push(e),d.message=e,DIL.errorModule.handleError(d));b instanceof
DIL?(this.dil=b,d.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",c.push(e),d.message=e,DIL.errorModule.handleError(d));"string"==typeof a&&a.length?this.aid=a:(e="aid is not a string or is empty",c.push(e),d.message=e,DIL.errorModule.handleError(d));this.errorMessage=c.join("\n")}catch(g){this.handle(g,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"==a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,b=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(d){}finally{a.calledBack=!0,"function"==typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(b,d);this.scriptsSent.push(b);return"Request sent to Peer39"},processData:function(a){var b,d,c,e,g={},h=!1;
this.returnedData.push(a);if(a instanceof Array)for(b=0,d=a.length;b<d;b++)c=a[b].split("="),e=c[0],c=c[1],e&&isFinite(c)&&!isNaN(parseInt(c,10))&&(g[e]instanceof Array||(g[e]=[]),g[e].push(c),h=!0);return{hasSignals:h,signals:g}},constructScript:function(){var a=document.createElement("script"),b=this.optionals,d=b.scriptId,c=b.scriptSrc,b=b.scriptParams;a.id="string"==typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"==typeof c&&c.length?a.src=c:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof b&&b.length&&(a.src+="?"+b));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};
/* jshint ignore:end */


// SiteCatalyst code
window.s = new AppMeasurement();  // jshint ignore:line

(function (s, $){
	s.scVersion='0.0.6|JS-'+s.version+'|152605';

	console.log('Analytics loaded, version: ', s.scVersion);

	s.account='nafsa-dev'; // PROD - TEMP
	s.debug = false;

	s.debugTracking=false;

	s.charSet='UTF-8';
	s.currencyCode='USD';
    s.fpCookieDomainPeriods = '2';
    s.trackInlineStats=true;
    s.linkLeaveQueryString=false;
    s.trackExternalLinks=true;
    s.trackDownloadLinks=true;
    s.linkExternalFilters='';
    s.linkDownloadFileTypes='exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,ppt,xls,doc,docm,docx,xlsx,xlsm';
    s.linkInternalFilters='javascript:,localhost';
    s.linkTrackVars=s.linkTrackEvents='None';
	s.trackingServer="nafsa.d1.sc.omtrdc.net"
	s.dc=112;
	s.nafsamcid = '50710C3A53DB1A090A490D4D@AdobeOrg';
    /*
		Setup visitor API service
    */
	var visitor = new Visitor(s.nafsamcid);
	visitor.trackingServer = s.trackingServer; // same as s.trackingServer
	
	s.visitor = Visitor.getInstance(s.nafsamcid);

	s.prop47 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

    //Fix for plugins that reference s.wd as AppMeasurement has changed this to s.w
    s.wd = s.w;	

    s.site = undefined;

    // Abstraction Mapping
	s.mapVars = {
	    pageName: 'pageName',
	    version: 'prop8',
	   	returnStatus: 'eVar3,prop12',
	   	visitorID: 'eVar15,prop15',
	   	folderName1: 'prop1,eVar6',
	   	folderName2: 'prop2,eVar7',
	   	folderName3: 'prop3,eVar8',
	   	daysSinceLastVisit: 'prop10,eVar10',
	   	visitNumber: 'prop13,eVar13',
	   	URLTracking: 'prop14,eVar14',
	   	link: 'prop4,eVar4',
	   	crossVisitParticipation: 'evar12',
	   	campaign: 'campaign',
	   	internalCampaign: 'eVar1',
	   	internalSearch: 'prop20,eVar2',
	   	internalSearchParticipation: 'eVar20',
	   	timeparting: 'prop5,eVar5',
	   	previousPage: 'prop9', 
	   	server: 'server,eVar9',
	   	products: 'products',
	   	orderID: 'purchaseID,eVar21',
	    events:{
	    	pageView:'event1',
	    	download:'event7',
	    	internalSearch:'event8',
	    	clickthru: 'event13',
	    	cickpast: 'event14',
	    	regComplete:'event10',
	    	purchase:'purchase'
	    },
	    getEventVars: function(event){return this.events[event];}
	};

	s.webEventMap = {
	    //galleryView:{type:'page'}
	};


	 s.prodsites = [
		{name: 'www.connectingourworld.org', prefix: 'cow'},
		{name: 'jobregistry.nafsa.org', prefix: 'jobreg'},
		{name: 'www.conferenceharvester.com', prefix: 'conf-harv'},
		{name: 'network.nafsa.org', prefix: 'network'},
		{name: 'am.nafsa.org', prefix: 'am'},
		{name: 'nafsa-am.isoveradev.com', prefix: 'am'},
		{name: 'www.nafsa.org', prefix: ''},
		{name: 'nafsa.org', prefix: ''},
		{name: 'blog.nafsa.org', prefix: 'blog'},
		{name: 'registration[0-9]*.experientevent.com', prefix: ''}
	 ];

	s.reportSuites = {
		development: 'nafsadev',
		production: 'nafsaprod'
	};

	

	s.doPlugins = function() {
		
		var s = this;

		if(!window.webData){
			window.webData = {};
			window.webData.events = [];
		}
		var webData = window.webData;

		s.setInternalFilters();
		s.setSite();
		s.account = s.getReportSuite();



		if(typeof webData.orderID !== 'undefined' && typeof webData.customerType !== 'undefined'){
			if(webData.customerType === 'existBuy'){
				var date = new Date();
				webData.orderID = webData.orderID + '_' + date.toJSON().replace('T', '_').replace(/[-:]/g, '').replace(/[.].*/, '');
			}

			if(webData.customerType === 'exist'){
				webData.events = [];
			}

		}

		webData.server = window.location.hostname;

		webData.pageName = s.getPageName();

		// Page View Event
		webData.events.push('pageView');

		//adobe visitor ID
		webData.visitorID = s.visitor.getMarketingCloudVisitorID();

		webData.version = s.scVersion;

		//Category, SubCat capture
		webData.folderName1 = s.getFolderName(1); 
		webData.folderName2 = s.getFolderName(2); 
		webData.folderName3 = s.getFolderName(3); 

		//days since last visit
		webData.daysSinceLastVisit = s.getDaysSinceLastVisit(); 

		//new vs. repeat users
		webData.returnStatus = s.getNewRepeat();

		//visit number 
		webData.visitNumber=s.getVisitNum(); 

		// URL Tracking 
		webData.URLTracking = window.location.href;

		// Cross Visit Participation
		webData.crossVisitParticipation = s.crossVisitParticipation(s.campaign,'s_campaigncvp','90','6',' > ');

		// Get Percent of Page Viewed */
		var ppvArray = s.getPercentPageViewed(s.pageName);

		// Campaign Tracking 
		webData.campaign = s.getValOnce(s.getQueryParam('cmpid'), 'cmpid');
		// Internal Campaign Tracking 
		webData.internalCampaign = s.getValOnce(s.getQueryParam('impid'), 'impid');
		//Internal Search
		webData.internalSearch = s.getValOnce(s.getQueryParam('searchtext'), 'f');

		// Internal Search Trigger Event
		if (window.location.href.indexOf('?searchtext')+1>0) {
			 webData.events.push('internalSearch');
		};

		if (webData.internalSearch) {
			webData.internalSearchParticipation=s.crossVisitParticipation(s.prop20,'s_propcvp','90','6',' > ');
		}

		//Click-Through and Click-Past Events

		var cp = s.clickPast(webData.campaign,'clickthru','clickpast'); //set click-through and click-past events

		if(cp){
			webData.events.push(cp);
		}

		// Time Parting
		var curdate = new Date();
		var temphr = s.getTimeParting('h','-8',curdate.getFullYear());  
		var tempday = s.getTimeParting('d','-8',curdate.getFullYear());  
		if(temphr) {
				webData.timeparting = tempday+":"+temphr;
		}

		// Get Previous Page Name
		var s_prevPage=s.getPreviousValue(s.pageName,"s_pv");
		webData.previousPage = s_prevPage?s_prevPage:'[No Previous Page Available]';

		var link=s.downloadLinkHandler();
		if(link){
			webData.link = link;
			webData.events.push('download');
			s.linkTrackVars="prop4,eVar4,events";
			s.linkTrackEvents="event7";
		}

		s.scDataMap();

		if(link){

			var ltv = ['events'];

            for(var index in s) { 
            	if(((/^prop/i).test(index) || (/^eVar/i).test(index)) && s[index] !== ''){
            		ltv.push(index);
            	}
			}

            s.linkTrackVars=ltv.join(',');
            s.linkTrackEvents=s.events;

		}

	};

	s.setSite = function(){
		var s = this;
		for(var i = 0; i<s.prodsites.length; i++){
			if(window.location.hostname.match(s.prodsites[i].name)){
				s.site = s.prodsites[i];
			}
		}
	};

	s.setInternalFilters = function(){
		var s = this;
		var filters = s.linkInternalFilters.split(',');
		for(var i = 0; i<s.prodsites.length; i++){
			if(window.location.hostname.match(s.prodsites[i].name)){
				filters.push(s.prodsites[i].name);
			}
		}
		s.linkInternalFilters = filters.join(',');
	};

	s.getTitleInfo = function(){
		var h1 = $('#MainContent h1:first').text().trim();
		if(h1 === ''){
			h1 = $('h2:first span:first').contents().get(0).nodeValue.trim();
		}
		return 'conf: 2015: ' + h1.toLowerCase();
	};

	s.getPageName = function(pageName) {
		var s = this;
		if(pageName){
			return pageName;
		}

		var host = window.location.host;
		var path = window.location.pathname.toLowerCase();

		if((/error.aspx/ig).test(path)){
			return 'conf: 2015: error';
		}


		if(host === 'qawebreg3.experientevent.com'){
			return s.getTitleInfo();
		}

		var regex = new RegExp('registration[0-9]*.experientevent.com', 'ig');
		if(host.match(regex)){
			return s.getTitleInfo();
		}

		
		if(path === '' || path === '/' || path === '/index.aspx'){
			if(s.site && s.site.prefix && s.site.prefix !== ''){
				return s.site.prefix + '>home';
			}

			return 'home';
		}


		if(s.site && s.site.prefix !== ''){
			path = s.site.prefix + '/' + path;
		}
		path = path.replace('//', '/');
		var name = s.trim(s.trim(path).replace(/((^\/)|(\/$))/ig, '')).split('/');

		//name = s.trim(name);
		return name.join('>');
	};



	s.getReportSuite = function(){
		if(s.debug){
			return s.reportSuites.development;
		}

		for(var i = 0; i<s.prodsites.length; i++){
			var regex = new RegExp(s.prodsites[i].name, "ig");
			if(window.location.host.match(regex)){
				s.site = s.prodsites[i];
				return s.reportSuites.production;
			}
		}

		return s.reportSuites.development;
	};

	s.scDataMap = function(){
		var s = this;
	    // Map abstraction to SC
	    if(typeof webData === 'object'){
	        // Itterate through map and if the data exist, then assign it to the applicable variable
	        //Download File & Event Tracking



	        for (var v in s.mapVars){
	            var mf=s.mapVars[v];
	            if(v!=='' && typeof webData[v] === 'string' && webData[v] !== ''){
	                if(/,/.test(mf)){
	                    var ms=mf.split(',');
	                    s[s.trim(ms[0])] = s.trimLc(webData[v]);
	                    var tv='D='+s.trim(ms[0]).replace('prop','c').replace('eVar','v');

	                    for(var dv=1;dv<ms.length;dv++){
	                        if(!s[s.trim(ms[dv])]){
	                        	s[s.trim(ms[dv])]=tv;
	                        }
	                    }
	                }else{
	                    s[mf] = s.trimLc(webData[v]);
	                }
	            }
	        }

	        // Assign events
	        if(typeof webData.events==='object' && typeof s.mapVars.events==='object'){
	            for (var e in webData.events){
	            	var en=s.trim(webData.events[e]);
	                if(en && s.mapVars.events[en]){
	                	s.events=s.apl(s.events,s.mapVars.events[en],',',1);
	                }
	            }
	        }

	        // Populate Defaults
	        if(typeof s.mapVars.defaults==='object'){
	            for (var dflt in s.mapVars.defaults){
	                var dfltVal=s.trimLc(s.mapVars.defaults[dflt]);
	                if(dfltVal&&!s[dflt]){
	                	s[dflt]=dfltVal;
	                }
	            }
	        }


	        if(typeof webData.products == 'object' && webData.products.constructor == Array){
	        	var products = [];
	        	for(var i=0; i < webData.products.length; i++){

	        		var temp = [];
	        		temp.push(""); // because the format is stupid
	        		temp.push(webData.products[i].name);
		        	temp.push(webData.products[i].quantity);
		        	temp.push(webData.products[i].saleAmount);

		        	products.push(temp.join(';'));
		        }

		        s.products = products.join(',');
	        }

	        // Custom Mappings
	        if(typeof webData.moduleTrack==='object'){

	            var lCk=s.trimLc(
	            	[
	            		webData.moduleTrack.compName, 
	            		webData.moduleTrack.slideNum, 
	            		webData.moduleTrack.compHead, 
	            		webData.moduleTrack.linkLocation, 
	            		webData.moduleTrack.linkTitle
	            	].join(':')

	            );
	            s.cookieLink(lCk);
	        }

	        
			
	    }
	};


	s.setWebEvent = function(id,data){
		var s = this;
	    // Generic link tracking
	    if(id.toLowerCase()==='link'){
	        s.scTrackLink(data.linkName||'Link clicked on');
	        return;
	    }

	    var curEvt=s.webEventMap[id],evData={}, events='';

	    for (var v in s.mapVars){
	        var mf=s.mapVars[v];
	        if(v!=='' && data && typeof mf!== 'object' && typeof data[v]=== 'string' && data[v]!==''){
	            if(/,/.test(mf)){
	                var ms=mf.split(',');
	                evData[s.trim(ms[0])] = s.trimLc(data[v]);
	                var tv='D='+s.trim(ms[0]).replace('prop','c').replace('eVar','v');

	                for(var dv=1;dv<ms.length;dv++){
	                    if(!evData[s.trim(ms[dv])]){
	                    	evData[s.trim(ms[dv])]=tv;
	                    }
	                }
	            }else{
	                evData[mf] = s.trimLc(data[v]);
	            }
	        }
	    }

	    // Custom Mapping

	    // Mapping based on defaults
	    if(typeof curEvt !== 'object'){
	        // Assign events
	        if(typeof s.mapVars.events==='object'){
	            if(id && s.mapVars.events[id]){
	            	events=s.apl(events,s.mapVars.events[id],',',1);
	            }
	        }

	        s.scTrackLink('Trigger link for '+id,events,evData);
	    }else{
	        var linkType=(curEvt.type||'event');
	        events=(curEvt.data && curEvt.data.events)?curEvt.data.events.join(','):'';

	        for (v in s.mapVars){
	            if(v!=='' && curEvt.data && typeof curEvt.data[v] !== 'undefined' && curEvt.data[v] !== '') {
	                evData[s.mapVars[v]] = (curEvt.data[v]).toLowerCase();
	            }
	        }

	        if(/page/i.test(linkType)) {
	        	s.scTrackPage('pageName',events,evData);
	        }
	        else {
	        	s.scTrackLink(curEvt.label,events,evData);
	        }
	    }
	};

	s.scTrackPage = function(pn, ev, adv) {
		var s = this;
		s.resetValues();
		s.pageName = s.trimLc(pn);
		s.events = ev;
		if (adv && typeof adv === 'object') {
			for (var i in adv) {
				this[i] = adv[i];
			}
		}
		s.t();
	};

	s.scTrackLink = function(txt,ev,adv){
	    var s = this;
	    if(ev){
	    	s.linkTrackVars='events';
	    	s.linkTrackEvents=s.events=ev;
	    }
	    else{
	    	s.linkTrackVars=s.linkTrackEvents='';
	    }
	    if(adv && typeof adv === 'object') {
	    	for(var i in adv){
	    		s.linkTrackVars=s.apl(s.linkTrackVars,i,',',1);
	    		s[i]=adv[i];
	    	}
	    }
	    if(!s.linkTrackVars){
	    	s.linkTrackVars=s.linkTrackEvents='None';
	    }
	    s.tl(true,'o',txt);
	};	
	/* Plugin Config */
	s.usePlugins=true;

	/* jshint ignore:start */
	s.readCookie = function(n) {return (n = new RegExp('(?:^|;\\s*)' + ('' + n).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && n[1];};

	// Replaces all instances of a search term
	s.replaceAll = function(str,srchTrm,replWith,ignrCase){return str.replace(eval(["/",srchTrm,"/g",((ignrCase) ? "i" : "")].join()),replWith);};
	// Debug log
	s.scLog = function(msg) {if (typeof console==="object" && typeof console.log==="function")console.log(msg);};

	// Variable exist / blank
	s.isBlank = function(str){return (!str||/^\s*$/.test(str));};
	// trims a string
	s.trim = function(str){return (str)?str.replace(/^\s+|\s+$/g,''):'';};
	// trim lowercase
	s.trimLc = function(str){return s.trim(str).toLowerCase();};
	// # days between two dates
	s.daysBetween = function(first, second) {
		var one=new Date(first.getFullYear(),first.getMonth(),first.getDate());
		var two=new Date(second.getFullYear(),second.getMonth(),second.getDate());
		return Math.floor((two.getTime() - one.getTime()) / 86400000);
	};
	// v0.1 FvR
	s.getUrlParam = function(params, delim, optURL){
		if(typeof delim === 'undefined' || !delim){
			delim = '|';
		}
		if(typeof optURL === 'undefined' || !optURL){
			optURL = window.location.search;
		}

		var paramParts = params.split(',');
		var values = [];

		for(var pIndx in paramParts){
			var value = optURL.match(new RegExp('[&?]' + paramParts[pIndx] + '=([^&]*)', 'i'));
			if (value && value.length>0){
				values.push(value[1]);
			}
		}

		return values.join(delim);
	};

	// v.0.1: View port classification
	s.getViewPort=function(){
		var e=window.innerWidth;
		if(e<768){return['Mobile',e].join('|');}
		if(e>1180){return['Desktop',e].join('|');}
		return['Tablet',e].join('|');
	};


	// *** PLUGINS SECTION ***
	// v2.7 - Tracking External Traffic
	s.channelManager=new Function("a","b","c","d","e","f","var s=this,g=new Date,h=0,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;g.setTime(g.getTime()+1800000);if(e){h=1;if(s.c_r(e))h=0;if(!s.c_w(e,1,g))s.c_w(e,1,0);if(!s.c_r(e))h=0;}i=s.referrer?s.referrer:document.referrer;i=i.toLowerCase();if(!i)j=1;else {k=i.indexOf('?')>-1?i.indexOf('?'):i.length;l=i.substring(0,k);m=s.split(i,'/');n=m[2].toLowerCase();o=s.linkInternalFilters.toLowerCase();o=s.split(o,',');for(p=0;p<o.length;p++){q=n.indexOf(o[p])==-1?'':i;if(q)break;}}if(!q&&!j){r=i;t=u=n;v='Other Natural Referrers';w=s.seList+'>'+s._extraSearchEngines;if(d==1){l=s.repl(l,'oogle','%');l=s.repl(l,'ahoo','^');i=s.repl(i,'as_q','*');}x=s.split(w,'>');for(y=0;y<x.length;y++){z=x[y];z=s.split(z,'|');A=s.split(z[0],',');for(B=0;B<A.length;B++){C=l.indexOf(A[B]);if(C>-1){if(z[2])D=u=z[2];else D=n;if(d==1){D=s.repl(D,'#',' - ');i=s.repl(i,'*','as_q');D=s.repl(D,'^','ahoo');D=s.repl(D,'%','oogle');}E=s.split(z[1],',');for(F=0;F<E.length;F++){if(i.indexOf(E[F]+'=')>-1||i.indexOf('https://www.google.')==0)G=1;H=s.getUrlParam(E[F],'',i).toLowerCase();if(G||H)break;}}if(G||H)break;}if(G||H)break;}}if(!q||f!='1'){q=s.getUrlParam(a,b);if(q){u=q;if(D)v='Paid Search';else v='Unknown Paid Channel';}if(!q&&D){u=D;v='Natural Search';}}if(j==1&&!q&&h==1)r=t=u=v='Typed/Bookmarked';I=s._channelDomain;if(I&&n){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=n.indexOf(P);if(Q>-1){v=L[0];break;}}if(Q>-1)break;}}I=s._channelParameter;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){Q=s.getUrlParam(M[O]);if(Q){v=L[0];break;}}if(Q)break;}}I=s._channelPattern;if(I){J=s.split(I,'>');for(K=0;K<J.length;K++){L=s.split(J[K],'|');M=s.split(L[1],',');N=M.length;for(O=0;O<N;O++){P=M[O].toLowerCase();Q=q.toLowerCase();R=Q.indexOf(P);if(R==0){v=L[0];break;}}if(R==0)break;}}S=v?q+t+v+H:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=q?q:'n/a';s._referrer=r?r:'n/a';s._referringDomain=t?t:'n/a';s._campaign=u?u:'n/a';s._channel=v?v:'n/a';s._partner=D?D:'n/a';s._keywords=G?H?H:'Keyword Unavailable':'n/a';}");

	// v1.1
	s.getValOnce=new Function("v","c","e","t","var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v");
	// apl (append list)
	s.apl=new Function("L","v","d","u","var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");
	// ver. 1.0 - remove event
	s.reml=new Function("ev","var s=this;if(!ev)ev='';return s.events.replace(ev,'').replace(/,,/gi,',').replace(/^,|,$/gi,'');");
	// v1.5
	s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
	// ver. 1.0 - s.join(v,p)| v - Array | p - formatting parameters (front,back,delim,wrap)
	s.join=new Function("v","p","var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
	// v1.0
	s.repl=new Function("x","o","n","var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
	// v.0.3 - get a value on every page
	s.getAndPersistValue=new Function("v","c","e","var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
	// v2.0
	s.getTimeParting=new Function("t","z","y","l", "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=String(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U.substring(2,4);X='090801|101407|111306|121104|131003|140902|150801|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substring(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.getTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.getHours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A}}else{return Z+', '+W}}}");
	// v1.0 - return previous value of designated variable (requires split utility)
	s.getPreviousValue=new Function("v","c","el","var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
	// Utility: p_c
	s.p_c=new Function("v","c","var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.length:x).toLowerCase()?v:0");
	// v.3.0
	s.getVisitNum=new Function("tp","c","c2","var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTime(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {return 'unknown visit number';}}else {if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
	s.dimo=new Function("m","y","var d=new Date(y,m+1,0);return d.getDate();");
	s.endof=new Function("x","var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=='m'){d=this.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return t;");

	// getPercentPageViewed v1.71
	s.getPercentPageViewed=new Function("n","var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a");
	// v1.1.H - capture time from last visit
	s.getDaysSinceLastVisit=new Function("c","var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");
	// v1.7 - stacks values from specified variable in cookie and returns value
	s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv","var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
	
	/* Plugin: clickThruQuality - this is an alteration of the original */
	s.clickThruQuality=new Function("scp","tcth_ev","cp_ev","cff_ev","cf_th","if(i<=1){var ev=(s.events?s.events+',':'');if(scp){s.events=ev+tcth_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w("
	+"'cf',tct,0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;};}else{s.c_w('cf',1,0);}}else{if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev+cp_ev;}}i++;}");
	/*
	 * Plugin getFolderName
	 */
	s.getFolderName=new Function("n","" 
	+"var p=s.wd.location.pathname.substring(0, document.location.pathname.lastIndexOf('/') + 1),pa=p.split('/');if(pa[0]==''){for(var " 
	+"i=0;i<pa.length;i++){pa[i]=i!=pa.length?pa[i+1]:null;}}return n?pa[" 
	+"parseInt(n)-1]:'';"); 

	/* v0.1 - Custom Get Time To Complete - Depends on jquery and jquery cookie plugin */
	s.getTimeToComplete2 = function (value,cookieName,daysToExpire){
		if (value == "start"){
			var startTime=new Date().getTime();
			var expirationDate=new Date();
			expirationDate.setTime(expirationDate.getTime()+daysToExpire*86400000);
			s.setCookie(cookieName, startTime,0);
			return "";
		} else if (value == "stop"){
			var startTime = s.getCookie(cookieName);
			if (!startTime) return "";
			var v = (new Date().getTime()-startTime)/1000;
			var td=86400,th=3600,tm=60,r=5,u,un;
			if(v>td){u=td;un='days';}
			else if(v>th){u=th;un='hours';}
			else if(v>tm){r=2;u=tm;un='minutes';}
			else{r=.2;u=1;un='seconds';}
			v=v*r/u;
			s.setCookie(cookieName, "", 0);
			return (Math.round(v)/r)+' '+un;
		}
	}

	s.getCookie = function (cookieName) {
	    try {
	      var re = new RegExp('[; ]' + cookieName + '=([^\\s;]*)');
	      var sMatch = (' ' + document.cookie).match(re);
	      if (cookieName && sMatch) { return unescape(sMatch[1]); }
	    } catch (ex) {
	      console.log('Could not read cookie [getCookie] data: ',
	        {'innerException': ex});
	      return '';
	    }
	};

	s.setCookie = function (name, value, expires) {
		if (!expires){
			expires = new Date();
			var expiredays = 365;
			expires.setDate(expires.getDate()+expiredays);
		}
		document.cookie = name + "=" + escape (value) + "; expires=" + expires.toGMTString() +  "; path=/";
	}

	s.timedStack = function(sv,cn){
			var s = this;
		    try{
		        if(!sv){return '';}
		        var exp=new Date();exp.setFullYear(exp.getFullYear()+5);
		        var tsn=new Date();
		        var ts=(s.c_r(cn)||tsn);s.c_w(cn,tsn,exp);
		        var td=Math.floor((Date.parse(tsn)-Date.parse(ts))/86400000);
		        return s.visitStack(sv+':'+td,'cvp_'+cn,s.scCookieLifeTime,'5',' > ');
		    }catch(err){s.scLogGlobalErr(err,'s_code','scTimedStack');}
		};

	s.getQueryParam = function(params, delim, optURL){
		if(typeof delim === 'undefined' || !delim){
			delim = '|';
		}
		if(typeof optURL === 'undefined' || !optURL){
			optURL = window.location.search;
		}

		var paramParts = params.split(',');
		var values = [];

		for(var pIndx in paramParts){
			var value = optURL.match(new RegExp('[&?]' + paramParts[pIndx] + '=([^&]*)', 'i'));
			if (value && value.length>0){
				values.push(value[1]);
			}
		}

		return values.join(delim);
	};
	s.visitStack=new Function("t","n","r","i","s","o","u", "var e=this,a;if(typeof u==='undefined')u=0;if(e.events&&o){var f=e.split(o,',');for(var l=0;l<f.length;l++){var c=new RegExp(f[l]);if(c.test(e.events)){a=1;break}}}if(!t||t==''){if(a){e.c_w(n,'');return''}else return''}t=escape(t);var h=new Array,p=new Array,d=e.c_r(n),v=0,m=new Array;if(d&&d!=''){h=e.split(d,'],[');for(var g=0;g<h.length;g++){h[g]=e.split(h[g].replace(/[\\[\\]']/g,''),',')}}var y=new Date;y.setFullYear(y.getFullYear()+5);h[(u==0&&h.length>0&&h[h.length-1][0]==t)?h.length-1:h.length]=[t,(new Date).getTime()];var b=h.length-i<0?0:h.length-i,w=new Date;for(var E=b;E<h.length;E++){var S=Math.round((w.getTime()-h[E][1])/86400000);if(S<r){m[v]=unescape(h[E][0]);p[v]=[h[E][0],h[E][1]];v++}}var x=e.join(p,{delim:',',front:'[',back:']',wrap:'\\''});e.c_w(n,x,y);return e.join(m,{delim:s});if(a)e.c_w(n,'')");
	s.p_gpv=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
	s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");

	/*
	 * Plugin: getNewRepeat 1.2
	 */
	s.getNewRepeat=new Function("d","cn",""
	+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
	+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
	+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
	+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
	+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
	
	s.p_fo=new Function("n",""
	+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
	+"new Object;return 1;}else {return 0;}");

	/*                                                                  
	* Plugin: clickPast - version 1.0
	*/
	s.clickPast = function(scp, ct_ev, cp_ev, cpc){
		var s = this, scp, ct_ev, cp_ev, cpc, ev, tct;
		if (s.p_fo(ct_ev) == 1) {
		    if (!cpc) {
		        cpc = 's_cpc';
		    }
		    //ev = s.events ? s.events + ',' : '';
		    if (scp) {
		        //s.events = ev + ct_ev;
		        s.c_w(cpc, 1, 0);
		        return ct_ev;
		    } else {
		        if (s.c_r(cpc) >= 1) {
		            //s.events = ev + cp_ev;
		            s.c_w(cpc, 0, 0);
		            return cp_ev;
		        }
		    }
		}

		return undefined;
	}
	/*
	 * Plugin: DynamicObjectIDs v1.5
	 
	s.setupDynamicObjectIDs=new Function(""
	+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
	+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
	+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
	+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
	+"re=1}");
	s.setOIDs=new Function("e",""
	+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
	+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)");
	*/

	/*
	* Plugin: downloadLinkHandler 0.7 - identify and report download links
	
	s.downloadLinkHandler=new Function("p","o",""
	+"var s=this,h=s.pgh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
	+"ype&&(h||s.linkName)))return'';i=h.href.indexOf('?');t=s[n];s[n]=p?"
	+"p:t;if(s.lt(h.href)=='d')s.linkType='d';else h='';s[n]=t;return o?h"
	+":h.href;");
	*/
	s.downloadLinkHandler = function(p, o){
		if(s.linkObject && s.linkType=='d'){
			return s.linkObject.href;
		}

		return '';
	};
	/* jshint ignore:end */

	//utility to addEventListener
    s.addEvent = function(element, event, fn) {
        if (element.addEventListener){
            element.addEventListener(event, fn, false);
        }
        else if (element.attachEvent) {
            element.attachEvent('on' + event, fn);
        }
    };

    //$(function(){
    	//console.log(window.s);
    	//window.s.doPlugins();
    	//var sc=window.s.t();
    	//if(sc)document.write(sc);
    //});

    
})(window.s, jQuery);





