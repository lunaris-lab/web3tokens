"use strict";(self.webpackChunkweb3tokens=self.webpackChunkweb3tokens||[]).push([[6078],{3315:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=r(4848),s=r(8453);const c={},a="ERC20Burnable",i={id:"auto/structures/ERC20/extensions/ERC20Burnable",title:"ERC20Burnable",description:"Constructor",source:"@site/docs/auto/structures/ERC20/extensions/ERC20Burnable.md",sourceDirName:"auto/structures/ERC20/extensions",slug:"/auto/structures/ERC20/extensions/ERC20Burnable",permalink:"/web3tokens/docs/auto/structures/ERC20/extensions/ERC20Burnable",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/auto/structures/ERC20/extensions/ERC20Burnable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC20",permalink:"/web3tokens/docs/auto/structures/ERC20/"},next:{title:"ERC20FlashMint",permalink:"/web3tokens/docs/auto/structures/ERC20/extensions/ERC20FlashMint"}},l={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Methods",id:"methods",level:2},{value:"burn(args)",id:"burn",level:3},{value:"burnFrom(args)",id:"burnFrom",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"erc20burnable",children:"ERC20Burnable"}),"\n",(0,t.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"new ERC20Burnable(config: IContractConfig);\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Param"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"config"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"IContractConfig:interface",children:"IContractConfig"})}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)("div",{class:"api-section",children:[(0,t.jsxs)("div",{class:"api-column",children:[(0,t.jsx)("h2",{children:"Properties"}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)(n.a,{href:"#address",children:"address"})})})]}),(0,t.jsxs)("div",{class:"api-column",children:[(0,t.jsx)("h2",{children:"Methods"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.a,{href:"#burn",children:"burn"})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.a,{href:"#burnFrom",children:"burnFrom"})})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"address",children:"address"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns"})}),"\n",(0,t.jsx)(n.p,{children:"Type: Address"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"burn",children:"burn(args)"}),"\n",(0,t.jsxs)(n.p,{children:["Destroys a ",(0,t.jsx)(n.code,{children:"value"})," amount of tokens from the caller's balance."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"args"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"/docs/auto/types/ERC20/extensions/ERC20Burnable/IERC20BurnableBurnParams",children:"IERC20BurnableBurnParams"})}),(0,t.jsxs)(n.td,{children:["The parameters to be passed into ",(0,t.jsx)(n.code,{children:"burn"})," function of the ERC20 contract."]})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const balance = await erc20.balanceOf(myAddress); // return 200000n\n\nconst tx = await erc20.burn({\n  // value is in lower units. (see ERC20.decimals)\n  value: erc20.toLowerUnits(10)\n}).execute();\n\n// wait for 3 confirmations\nawait tx.waitForReceipt(3);\n\n// check balance again\nconst newBalance = await erc20.balanceOf(myAddress); // return 100000n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"})," a ",(0,t.jsx)(n.code,{children:"ContractOperation"})," instance."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.a,{href:"/docs/auto/structures/ContractOperation",children:"ContractOperation"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"burnFrom",children:"burnFrom(args)"}),"\n",(0,t.jsxs)(n.p,{children:["Destroys a ",(0,t.jsx)(n.code,{children:"value"})," amount of tokens from ",(0,t.jsx)(n.code,{children:"account"}),", deducting from the caller's allowance."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The caller must have allowance for ",(0,t.jsx)(n.code,{children:"accounts"}),"'s tokens of at least ",(0,t.jsx)(n.code,{children:"value"}),"."]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"args"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.a,{href:"/docs/auto/types/ERC20/extensions/ERC20Burnable/IERC20BurnableBurnFromParams",children:"IERC20BurnableBurnFromParams"})}),(0,t.jsxs)(n.td,{children:["The parameters to be passed into ",(0,t.jsx)(n.code,{children:"burnFrom"})," function of the ERC20 contract."]})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const balance = await erc20.balanceOf(accountAddress); // return 200000n\n\n// value is in lower units. (see ERC20.decimals)\nconst tx = await erc20.burnFrom({\n   account: accountAddress,\n   value: erc20.toLowerUnits(10)\n}).execute(); // burn 10 tokens\n\n// wait for 3 confirmations\nawait tx.waitForReceipt(3);\n\n// check balance again\nconst newBalance = await erc20.balanceOf(accountAddress); // return 100000n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"})," a ",(0,t.jsx)(n.code,{children:"ContractOperation"})," instance."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.a,{href:"/docs/auto/structures/ContractOperation",children:"ContractOperation"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);