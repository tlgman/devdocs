"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4623],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2162:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={title:"Peer reviewing",description:"All the information related to the peer-reviewing process during the Moodle development.",tags:["Processes","Core development","Git","Peer-review"]},l=void 0,d={unversionedId:"development/process/peer-review",id:"development/process/peer-review",title:"Peer reviewing",description:"All the information related to the peer-reviewing process during the Moodle development.",source:"@site/general/development/process/peer-review.md",sourceDirName:"development/process",slug:"/development/process/peer-review",permalink:"/dinodevdocs/general/development/process/peer-review",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/general/development/process/peer-review.md",tags:[{label:"Processes",permalink:"/dinodevdocs/general/tags/processes"},{label:"Core development",permalink:"/dinodevdocs/general/tags/core-development"},{label:"Git",permalink:"/dinodevdocs/general/tags/git"},{label:"Peer-review",permalink:"/dinodevdocs/general/tags/peer-review"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1649666506,formattedLastUpdatedAt:"11/04/2022",frontMatter:{title:"Peer reviewing",description:"All the information related to the peer-reviewing process during the Moodle development.",tags:["Processes","Core development","Git","Peer-review"]},sidebar:"development",previous:{title:"Development process",permalink:"/dinodevdocs/general/development/process"},next:{title:"Introduction",permalink:"/dinodevdocs/general/development/tracker"}},c={},p=[{value:"Checklist",id:"checklist",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Output",id:"output",level:3},{value:"Component library",id:"component-library",level:3},{value:"Language",id:"language",level:3},{value:"Databases",id:"databases",level:3},{value:"Testing instructions and automated tests",id:"testing-instructions-and-automated-tests",level:3},{value:"Security",id:"security",level:3},{value:"Privacy",id:"privacy",level:3},{value:"Performance and clustering",id:"performance-and-clustering",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Git",id:"git",level:3},{value:"Third party code",id:"third-party-code",level:3},{value:"Sanity check",id:"sanity-check",level:3},{value:"Icons",id:"icons",level:3},{value:"The Moodle mobile app",id:"the-moodle-mobile-app",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Process",id:"process",level:2},{value:"Completing Peer review as a community member",id:"completing-peer-review-as-a-community-member",level:3},{value:"Peer review for development by HQ or a known common contributor",id:"peer-review-for-development-by-hq-or-a-known-common-contributor",level:3},{value:"Peer review for external developers",id:"peer-review-for-external-developers",level:3},{value:"Replies templates",id:"replies-templates",level:4},{value:"See also",id:"see-also",level:2}],h={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"checklist"},"Checklist"),(0,i.kt)("p",null,"These are points to consider while peer-reviewing issues. Further explanation below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[] Syntax\n[] Output\n[] Component library\n[] Language\n[] Databases\n[] Testing (instructions and automated tests)\n[] Security\n[] Privacy (see Privacy API)\n[] Performance and Clustering\n[] Documentation\n[] Git\n[] Third party code\n[] Sanity check\n[] Icons\n[] The Moodle mobile app / web services\n[] Accessibility (Optional)\n")),(0,i.kt)("p",null,"Acceptable check-marks are Y (for yes), N (for no) or - (for not applicable). All N check-marks should be accompanied by an explanation of the problem that still needs to be addressed."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"To allow the community of Moodle developers to work together, conventions should be followed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code is easy to understand and, where it isn't, comments have been provided."),(0,i.kt)("li",{parentName:"ul"},"Variables are named correctly (all lower case, no camel-case, no underscores)."),(0,i.kt)("li",{parentName:"ul"},"Functions are named correctly (all lower case, no camel-case, underscores allowed)."),(0,i.kt)("li",{parentName:"ul"},"PHP DocBlocks have been updated and adhere to coding style guide."),(0,i.kt)("li",{parentName:"ul"},"Where functions are being removed, the Deprecation process is followed."),(0,i.kt)("li",{parentName:"ul"},"The code doesn't use deprecated functions."),(0,i.kt)("li",{parentName:"ul"},"$_GET, $_POST, $_REQUEST, $_COOKIE, and $_SESSION are never used.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"Coding style guide")," for details. Most of the previous items list are checked automatically by the CiBot (Automated code review). So in this case it's recommended to review the execution results to validate that there aren't errors. However, take into account that for now, CiBot is not checking all file types (it happens, for instance, with the Javascript files)."))),(0,i.kt)("h3",{id:"output"},"Output"),(0,i.kt)("p",null,"Output needs to be controlled by renderers to achieve consistency and correct application of themes."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output renders are used to generate output strings, including HTML tags;"),(0,i.kt)("li",{parentName:"ul"},"HTML output is valid html5;"),(0,i.kt)("li",{parentName:"ul"},"No inline styles have been used in HTML output (everything has to be in CSS);"),(0,i.kt)("li",{parentName:"ul"},"CSS has been added to the appropriate CSS files (base, specific area, sometimes canvas); and"),(0,i.kt)("li",{parentName:"ul"},"The code doesn't use buffered output unless absolutely necessary."),(0,i.kt)("li",{parentName:"ul"},"All visual output has a RTL alternative included"),(0,i.kt)("li",{parentName:"ul"},"Feedback any notices (E_STRICT, etc) seen into the MDL.")),(0,i.kt)("h3",{id:"component-library"},"Component library"),(0,i.kt)("p",null,"Any improvement or new feature that introduces UI features to Moodle core from Moodle 4.0 onwards must be documented within the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Component_library"},"Component library"),"."),(0,i.kt)("p",null,"This applies to any feature introduced or updated from Moodle 4.0 onwards, which:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any User Interface in the Moodle core component"),(0,i.kt)("li",{parentName:"ul"},"Any User Interface in any Moodle core subsystem"),(0,i.kt)("li",{parentName:"ul"},"Any User Interface in a Moodle plugin which is intended to be re-used"),(0,i.kt)("li",{parentName:"ul"},"Any User Interface feature which is intended to be re-used by another part of the code")),(0,i.kt)("p",null,"Ensure that any new User Interface feature in Moodle 4.0 or later which matches the above criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is documented in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Component_library"},"Component library"),""),(0,i.kt)("li",{parentName:"ul"},"Includes examples of usage"),(0,i.kt)("li",{parentName:"ul"},"Has appropriate descriptions"),(0,i.kt)("li",{parentName:"ul"},"Respects all Moodle-supplied themes")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To achieve appropriate internationalisation of Moodle, language strings must be managed correctly."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New language strings are named correctly (all lower case, no camel-case, underscores are permissible in some cases);"),(0,i.kt)("li",{parentName:"ul"},"Help strings are named and formatted as described in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Help_strings"},"Help strings"),";"),(0,i.kt)("li",{parentName:"ul"},"Language strings are used instead of hard-coded strings for text output;"),(0,i.kt)("li",{parentName:"ul"},"Language strings have not been removed or renamed, had their meaning changed or had their parameters changed in stable branches (permitted only in master); and"),(0,i.kt)("li",{parentName:"ul"},"",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/AMOS_commands"},"AMOS commands")," have been specified when moving or copying language strings.")),(0,i.kt)("h3",{id:"databases"},"Databases"),(0,i.kt)("p",null,"DB calls are the greatest performance bottleneck in Moodle."),(0,i.kt)("p",null,"If there is SQL code you can test quickly then do so."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are minimal DB calls (no excessive use of the DB); and"),(0,i.kt)("li",{parentName:"ul"},"The code uses SQL compatible with all the supported DB engines (check all selected fields appear in an 'ORDER BY' clause).")),(0,i.kt)("h3",{id:"testing-instructions-and-automated-tests"},"Testing instructions and automated tests"),(0,i.kt)("p",null,"It is the developer's responsibility to test code before integration. Issues should not be sent for peer review without tests so that the peer reviewer can assess their quality and use them to consider the scope of the issue."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are specific testing instructions that state how, as well as what, to test. Please ensure that the testing instructions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Are in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Testing_instructions_guide"},"correct format"),";"),(0,i.kt)("li",{parentName:"ul"},"Are clear; and"),(0,i.kt)("li",{parentName:"ul"},"Are concise;"),(0,i.kt)("li",{parentName:"ul"},"They consider other perspectives of other users perhaps not considered by original developers e.g. Moodle mobile app users"))),(0,i.kt)("li",{parentName:"ul"},"The assignee has tested according to the instructions and verified that they are passing (This is the responsibility of the assignee, not the peer reviewer)"),(0,i.kt)("li",{parentName:"ul"},"New unit tests have been added when there is a change in functionality; and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unit tests pass")," for related areas where changes have been made."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Behat tests pass")," for related areas where changes have been made, especially when it involved UI changes.")),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"The user community relies on Moodle being responsibly secure."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User login is checked where an identity is needed;"),(0,i.kt)("li",{parentName:"ul"},"Sesskey values are checked before all write actions where appropriate (some read actions as well);"),(0,i.kt)("li",{parentName:"ul"},"Capabilities are checked where roles differ;"),(0,i.kt)("li",{parentName:"ul"},"User inputs are properly escaped (eg the correct param type is used and risky types such as raw are only used where necessary and safe to do so); and"),(0,i.kt)("li",{parentName:"ul"},"If the issue itself is a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/security"},"security")," issue, the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Process#Security_issues"},"security process")," is being followed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure that the fix is ",(0,i.kt)("strong",{parentName:"li"},"not")," available in a public repository (ie. a personal Github account); stand-alone patches should be provided instead."),(0,i.kt)("li",{parentName:"ul"},"The issue will not be integrated until just before the next minor version release.")))),(0,i.kt)("h3",{id:"privacy"},"Privacy"),(0,i.kt)("p",null,"The user community relies on Moodle keeping user's privacy."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No unnecessary personal user data is saved;"),(0,i.kt)("li",{parentName:"ul"},"All personal user data is saved in compliance with General Data Protection Regulation (GDPR) which is an EU directive;"),(0,i.kt)("li",{parentName:"ul"},"For all stored data you will need to:"),(0,i.kt)("li",{parentName:"ul"},"Describe the type of data that they store;"),(0,i.kt)("li",{parentName:"ul"},"Provide a way to export that data; and"),(0,i.kt)("li",{parentName:"ul"},"Provide a way to delete that data.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See more info in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Privacy_API"},"Privacy API"),"."))),(0,i.kt)("h3",{id:"performance-and-clustering"},"Performance and clustering"),(0,i.kt)("p",null,"It is easy to write code that works sufficiently well when you are working on either small sets of data or with a small number of active users. Picking performance issues can be quite difficult and can required a complex level of understanding of both the section of code being reviewed, but also other parts that interact with it."),(0,i.kt)("p",null,"Clustering is when the same code is run on different computers and an end user could send each request to a different computer. This can produce a number of concurrency issues if not thought through. One example is; If you complete an opcache_reset(), no other server except the one you ran it on knows that it happened. So data can get out of sync."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any filesystem, database or cache accesses are done in the most efficient way."),(0,i.kt)("li",{parentName:"ul"},"That any code or function that appear expensive are not in critical paths. eg; They don't load on every page."),(0,i.kt)("li",{parentName:"ul"},"The least possible code is running to complete the task, especially looking for hidden loops. They can appear from calling functions."),(0,i.kt)("li",{parentName:"ul"},"Any code that runs is not specific to a single node. (eg opcache_reset()) This ensures clusters will run correctly."),(0,i.kt)("li",{parentName:"ul"},"If the code could affect performance at all, make sure there is a comment noting what was considered.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What they did to mitigate performance impact, or why they thought it wasn't an issue."),(0,i.kt)("li",{parentName:"ul"},"Why they made certain trade-offs.")))),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Work does not stop when code is integrated."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The PHPdoc comments on all classes, methods and fields are useful. (Comments that just repeat the function name are not helpful! Add value.)"),(0,i.kt)("li",{parentName:"ul"},"Where an API has been changed significantly, the relevant upgrade.txt file has been updated with information."),(0,i.kt)("li",{parentName:"ul"},'Where something has been deprecated, that the comments don\'t just say "do NOT use this any more!!!" but acutally say what should be done instead.'),(0,i.kt)("li",{parentName:"ul"},"Appropriate ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tracker_issue_labels"},"labels")," have been added when there has been a function change, particularly",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"docs_required (any functional change, usually paired with ui_change),"),(0,i.kt)("li",{parentName:"ul"},"dev_docs_required (any change to APIs, usually paired with api_change),"),(0,i.kt)("li",{parentName:"ul"},"ui_change (any functional change, usually paired with docs_required, except ui_change remains permanetly),"),(0,i.kt)("li",{parentName:"ul"},"api_change (any change to APIs that devs will need to know about, usually paired with dev_docs_required, except api_change remains permanetly),"),(0,i.kt)("li",{parentName:"ul"},"unit_test_required and acceptance_test_required, when there are api or ui changes needing improved coverage, and"),(0,i.kt)("li",{parentName:"ul"},"qa_test_required (significant functional change, not covered by unit/acceptance ones)."))),(0,i.kt)("li",{parentName:"ul"},"Also, verify that the components for the issue are correctly set, so maintainers (subscribed by default) will be mailed about issues early in the process.")),(0,i.kt)("h3",{id:"git"},"Git"),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The commit matches the ",(0,i.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style")),(0,i.kt)("li",{parentName:"ul"},"The Git history is clean and the work has been rebased to logical commits; and"),(0,i.kt)("li",{parentName:"ul"},"The original author of the work provided as a patch has been given credit within the commit (as author of in the commit message if changes were made).")),(0,i.kt)("h3",{id:"third-party-code"},"Third party code"),(0,i.kt)("p",null,"Does the change contain ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Plugin_with_third_party_libraries"},"third party code"),"? If so, ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code is licensed under a ",(0,i.kt)("a",{parentName:"li",href:"http://www.gnu.org/licenses/license-list.html#GPLCompatibleLicenses%7C"},"GPL compatible license"),"."),(0,i.kt)("li",{parentName:"ul"},"The instructions for upgrading/importing the library and contained within a readme_moodle.txt file."),(0,i.kt)("li",{parentName:"ul"},"The library is recorded in a thirdparty.xml file, including licensing information."),(0,i.kt)("li",{parentName:"ul"},"Third party code has been scanned to check for url accessible entry points that could be exploited. These should either be disabled, or if required functionality they should be checked for security weaknesses."),(0,i.kt)("li",{parentName:"ul"},"Does not duplicate the functionality of any existing api or third party library in core."),(0,i.kt)("li",{parentName:"ul"},"Any modifications to third party code are recorded in readme_moodle.txt")),(0,i.kt)("h3",{id:"sanity-check"},"Sanity check"),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The code seems to solve the described problem completely within its reported scope (and further issues have been created to resolve remaining parts or further refactoring);"),(0,i.kt)("li",{parentName:"ul"},"The code makes sense in relation to the broader codebase (look at the whole function, not just the altered code); and"),(0,i.kt)("li",{parentName:"ul"},"The developer has searched for and fixed other areas that may also have been affected by the same problem."),(0,i.kt)("li",{parentName:"ul"},"Verify that the related component maintainers, if known, have participated and are aware of the issue (as assignee, or existing comments...). If they have not, please perform a friendly @mention to make them aware about the issue. A list of component leads is available here: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Component_Leads"},"https://docs.moodle.org/dev/Component_Leads")),(0,i.kt)("li",{parentName:"ul"},"If any version numbers have been changed in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/version.php"},"version.php")," files, then the changes follow ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_versions#How_to_increment_version_numbers_in_core"},"the rule for updating version numbers in core"),"."),(0,i.kt)("li",{parentName:"ul"},"There are comments on tracker explaining why current approach was taken and why other options (especially large issues). If not comment asking them to explain")),(0,i.kt)("h3",{id:"icons"},"Icons"),(0,i.kt)("p",null,"Are new icons being introduced? If so, ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The icons abide by our icon guidelines with regards to size, design and format"),(0,i.kt)("li",{parentName:"ul"},"The icons are do not unnecessarily add new ways of expressing existing concepts"),(0,i.kt)("li",{parentName:"ul"},"The icons are in a pix folder that makes sense")),(0,i.kt)("h3",{id:"the-moodle-mobile-app"},"The Moodle mobile app"),(0,i.kt)("p",null,"The Moodle app supports most of the student-related Moodle functionality. It is important to think about how a change in that type of functionality might affect it."),(0,i.kt)("p",null,"Ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The issue is labelled with affects_mobileapp when the developer suspects that the changes can affect the app."),(0,i.kt)("li",{parentName:"ul"},"New module settings are returned via the existing Web Services in the module"),(0,i.kt)("li",{parentName:"ul"},"When the code includes a new Web Service that will be necessary for the Moodle app, the new Web Service is included in the mobile service"),(0,i.kt)("li",{parentName:"ul"},"New global settings that affect new features for the app are included in the WebServices returning global settings (tool_mobile_get_config)"),(0,i.kt)("li",{parentName:"ul"},"The testing instructions include testing steps for the Moodle App")),(0,i.kt)("h3",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"We aim for Moodle to be accessible to everyone, especially to people with disabilities. When peer-reviewing a patch that introduces changes on the frontend, it would be good to do a quick accessibility check on the page or on the UI elements affected by the patch."),(0,i.kt)("p",null,"Some quick checks that can be done to check for accessibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automated tools"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Does it pass automated accessibility checks? (e.g. via ",(0,i.kt)("a",{parentName:"li",href:"https://www.deque.com/axe/devtools/"},"axe DevTools")," or ",(0,i.kt)("a",{parentName:"li",href:"https://wave.webaim.org/"},"WAVE Web Accessibility Evaluation Tool"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Colours"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Do the text have sufficient colour contrast against the background?"),(0,i.kt)("li",{parentName:"ul"},"If the patch introduces elements that convey information through colours, are there alternative means to convey this information to users with visual impairments?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTML validity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Does the patch generate a page with valid HTML? (e.g. checked via ",(0,i.kt)("a",{parentName:"li",href:"https://validator.w3.org/nu/#textarea"},"Nu HTML validator"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keyboard navigation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Can you successfully navigate through the interface via keyboard?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Screen reader'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When using a screen reader (e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://support.google.com/chromebook/answer/7031755?hl=en"},"ChromeVox"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.nvaccess.org/"},"NVDA"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.freedomscientific.com/products/software/jaws/"},"JAWS"),", etc), are the UI components being properly and clearly announced?")))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although these checks are optional, we encourage everyone to keep accessibility in mind when doing peer reviews."))),(0,i.kt)("p",null,"During peer reviews, please mark this category with either of the following (whichever's applicable):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Y")," - When accessibility has been checked and no accessibility issues were found."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"N")," - When accessibility has been checked but accessibility issues were found."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"N/A")," - When an accessibility check is not applicable for the patch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S")," - To indicate that an accessibility check might be needed but has been skipped by the peer reviewer.")),(0,i.kt)("h2",{id:"process"},"Process"),(0,i.kt)("p",null,"Peer review process helps to prepare the issue for integration. The peer reviewer is another developer who was not involved in the development process on the issue and therefore can take a fresh look and notice something that original developer might have forgotten during development. It is important to check that the bug actually is present and the code fixes it without creating new regressions."),(0,i.kt)("h3",{id:"completing-peer-review-as-a-community-member"},"Completing Peer review as a community member"),(0,i.kt)("p",null,"Any other developer can review any change. That is why it is called 'peer' review. However, not everyone has the necessary permissions in the tracker to click the buttons 'Start peer review', 'Finish peer review' etc. This should not discourage you from looking at other contributors code and providing comments and feedback. The issue will still need to wait for someone with the right permissions to come along and click the buttons, but they can read your review and then need do no more than double-check some points, which will save a lot of time."),(0,i.kt)("p",null,'To provide feedback to the developer, leave the issue in "Waiting for Peer Review" (since you don\'t have permission to do anything else, and also that makes it easy for someone with sufficient permissions to find the issue and move it forwards). Review the code using the checklist below, including any appropriate comments. Once finished, please post a comment clearly stating the outcome of your review. If you think it needs more work then indicate what needs to be changed. If you are happy with the patch, leave a clear comment that you believe this is ready to be made part of Moodle. This can then easily be seen by a HQ developer or component lead and they can quickly take appropriate action.'),(0,i.kt)("p",null,"If a followup review happens to identify something you did not find, you have an opportunity to expand your knowledge and provide better reviews in the future as well as having saved everybody else some time."),(0,i.kt)("p",null,"Feedback to indicate the issue is ready to progress might look like the following;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thanks again for your contribution. I have reviewed the patch:\n\n[Copy and paste the checklist here, and complete it]\n\nI don't have permission to use the peer review buttons on this issue. I hope that someone with sufficient permissions will move the issue forwards soon.\n")),(0,i.kt)("p",null,"You should now add the '",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Tracker_issue_labels"},"ready_for_integration"),"' tag to the issue to indicate you have passed the peer review and it can move to the next step."),(0,i.kt)("p",null,"Feedback to indicate the issue requires further work might look like the following;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thanks for providing a patch. I think the following points require further work\n\n[Copy and paste the checklist here, and complete it]\n\nPlease indicate If you are willing to continue working on this issue and complete the solution.\n")),(0,i.kt)("p",null,"Can you help with peer reviewing? If so, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?filter=13607"},"list of issues waiting for peer review"),"."),(0,i.kt)("h3",{id:"peer-review-for-development-by-hq-or-a-known-common-contributor"},"Peer review for development by HQ or a known common contributor"),(0,i.kt)("p",null,"When code comes from a HQ developer or external developer who has been contributing significantly to Moodle and is well acquainted with Moodle standards, peer review is limited to checking the code according to the Checklist below."),(0,i.kt)("p",null,"If everything is fine, the peer reviewer submits the issue for integration."),(0,i.kt)("p",null,"If some additional work is needed or the author specifically asked not to submit for integration yet, the peer reviewer clicks on \u201cFinish peer review\u201d and the issue state returns to \u201cDevelopment in progress\u201d. Usually the name of the peer reviewer stays on the issue and if a second peer review is requested it is expected that the same Peer reviewer picks it up. If the peer reviewer is not able to do the second review, they should remove their name and comment about it. Otherwise the issue does not appear on \u201cwaiting for peer review\u201d dashboard. Please remember that not all jira users have permission to submit for integration."),(0,i.kt)("h3",{id:"peer-review-for-external-developers"},"Peer review for external developers"),(0,i.kt)("p",null,"When the code has come from an external developer, the peer reviewer will also help the developer to lead the issue to integration. In this case the peer reviewer should not use \u201cFinish peer review\u201d button."),(0,i.kt)("p",null,"If the issue needs additional work, the peer reviewer comments about the suggested changes but does not change the status of the issue and it remains as \u201cPeer review in progress\u201d. If the author of the patch does not reply in 4 days, the peer reviewer may select either to complete the patch themselves or reopen the issue. The decision should be based on the amount of work required to complete the solution, for example, changing coding style or commit message, rebasing, backporting, adding testing instructions, etc. should be performed by the peer reviewer. This may require picking the commits into reviewer\u2019s git branch."),(0,i.kt)("p",null,"It is very important to give the credit to the author of the code by either keeping their authorship on the commit or adding \u201cThanks to XXXX for providing the patch\u201d to the commit message. If the author of the patch is not in jira-developers group the special user 'moodle.com' should be entered in Assignee field."),(0,i.kt)("p",null,"There could be situations when the patch is incomplete, does not fix the original issue, creates regressions or otherwise is not correct. As stated above, the peer reviewer should comment about it and wait for the feedback from the author. If there is no feedback, or the author can not work on this issue any more, and the peer reviewer also does not find it easy and important enough to complete, the issue needs to be reopened. Button \u201cFail peer review\u201d (available to HQ developers only) will reset the issue status to \u201cReopened\u201d. On this screen peer reviewer should remove assignee, peer reviewer and \u201cpatch\u201d label from the issue. This way issue will become available again for anybody who want to work on it. All communication will remain in comments and issue history."),(0,i.kt)("p",null,"If the issue has passed peer review but the integrator or tester has raised some questions about it, then normally the developer who created the patch would be expected to respond. If they do no respond quickly enough, then the peer reviewer is expected to step in and take responsibility for the change they reviewed."),(0,i.kt)("p",null,"Once the issue is ready for integration, you can submit it to integration on behalf of the developer. Most external developers (those who are not in the jira-developers group) do not have permission to submit their own issues to integration so cannot do it themselves."),(0,i.kt)("h4",{id:"replies-templates"},"Replies templates"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thanks for providing a patch.\nI have reviewed your code and can confirm that it addresses the reported issue. We would like to include it in core. Moodle values its contributors and tries to give them credit when possible. If you are interested in your name appearing on the https://moodle.org/dev/contributions.php page you can create a git commit that we will then pull into Moodle. You can learn more about Git and how Moodle uses it at [Git for developers|https://docs.moodle.org/dev/Git_for_developers] page. Please let me know if you want to prepare a git branch. Or if you don\u2019t have time to go through the whole process at the moment I can pick your patch myself.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thanks for providing a patch.\nYour code looks almost ready for integration into Moodle. There are just some little things that need to be changed to comply with Moodle standards. Can you please take a look at the review results below and tell me if you are able to modify your branch to address them.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I have reviewed your patch, it addresses the problem and complies with Moodle standards. I'm pushing this issue for integration. Following Moodle [Process|https://docs.moodle.org/dev/Process] it will go through integration review and testing before being included in the product. There might be additional questions from an integrator and/or a tester at those stages. It would be appreciated if you read tracker emails and can reply to questions if needed. If everything goes well during the next two stages your issue will be included in the next weekly release and your count on https://moodle.org/dev/contributions.php page will increase.\nThanks again for your contribution.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Thanks for providing a patch.\nUnfortunately this patch does not fully address the reported issue. ... DETAILS...\n\nEven though the code does solve the issue in the short-term it is very likely to create regressions .....\n\nI have spent some time reviewing the patch and I would recommend that you .....\n\nPlease let me know If you are willing to continue working on this issue and complete the solution.\n")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/plugins/view.php?plugin=local_codechecker"},"Code checker plugin"))))}u.isMDXComponent=!0}}]);