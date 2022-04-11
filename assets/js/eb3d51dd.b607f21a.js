"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7839],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,w=m["".concat(p,".").concat(c)]||m[c]||h[c]||i;return r?n.createElement(w,l(l({ref:t},u),{},{components:r})):n.createElement(w,l({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Technical requirements"},p=void 0,s={unversionedId:"gettingstarted/requirements",id:"gettingstarted/requirements",title:"Technical requirements",description:"Moodle is a PHP Application, which is backed by a relational database.",source:"@site/docs/gettingstarted/requirements.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/requirements",permalink:"/dinodevdocs/docs/gettingstarted/requirements",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/docs/gettingstarted/requirements.md",tags:[],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1649666506,formattedLastUpdatedAt:"11/04/2022",frontMatter:{title:"Technical requirements"},sidebar:"docs",previous:{title:"Quick start",permalink:"/dinodevdocs/docs/gettingstarted/quickstart"},next:{title:"Setup and installation",permalink:"/dinodevdocs/docs/gettingstarted/setup"}},u={},h=[{value:"PHP",id:"php",level:2},{value:"Relational Database",id:"relational-database",level:2}],m={toc:h};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Moodle is a PHP Application, which is backed by a relational database."),(0,i.kt)("p",null,"Five database types are supported, and several versions of PHP."),(0,i.kt)("h2",{id:"php"},"PHP"),(0,i.kt)("p",null,"Moodle 4.0 supports the following PHP versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"7.3"),(0,i.kt)("li",{parentName:"ul"},"7.4"),(0,i.kt)("li",{parentName:"ul"},"8.0")),(0,i.kt)("p",null,"The following PHP extensions are required (most of which are installed and enabled by default in most PHP installations):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.iconv"},"iConv"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.mbstring"},"mbstring"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.curl"},"curl"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.openssl"},"openssl"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.ctype"},"ctype"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.zip"},"zip"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.zlib"},"zlib"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.simplexml"},"simplexml"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.spl"},"spl"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.pcre"},"pcre"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.dom"},"dom"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.xml"},"xml"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.xmlreader"},"xmlreader"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.intl"},"intl"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.json"},"json"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.hash"},"hash"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.fileinfo"},"fileinfo"))),(0,i.kt)("h2",{id:"relational-database"},"Relational Database"),(0,i.kt)("p",null,"The following relational database servers are supported. The relevant PHP extension will also be required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")," (version 10.2.29 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (version 5.7 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgresql")," (version 10 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.pgsql.php"},"pgsql PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-au/sql-server/sql-server-downloads"},"Microsoft SQL Server")," (version 14.0 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.sqlsrv.php"},"SQLSRV PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/B19306_01/server.102/b14220/intro.htm"},"Oracle")," (version 11.2 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.oci8.php"},"OCI8 PHP Extension"))))}c.isMDXComponent=!0}}]);