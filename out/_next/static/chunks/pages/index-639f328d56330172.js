(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(51692)}])},96301:function(e,t,n){"use strict";let a=n(63021),s=n(62613),i=n(37917);e.exports={abi:a,abiToken:s,contractAddresses:i}},51692:function(e,t,n){"use strict";let a,s,i;n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),l=n(9008),o=n.n(l),p=n(25675),u=n.n(p),c=n(97621);function d(){return(0,r.jsxs)("nav",{className:"p-3 z-10 flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#f5f7f8] to-[#0e0707] border-b-2 overflow-hidden",children:[(0,r.jsx)("div",{className:"mr-auto",children:(0,r.jsx)(u(),{src:"logo-00.jpg",width:72,height:72,alt:"Logo"})}),(0,r.jsx)("div",{className:"flex flex-col justify-center text-[#af292c] font-kake lg:mr-auto lg:text-5xl md:text-3xl sm:text-xl font-semibold",children:"ANTI-MEV Token"}),(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsx)(c.cg,{})})]})}var m=n(96301),y=n(83078),x=n(67294),f=n(25009);function b(){let{Moralis:e,isWeb3Enabled:t,chainId:n,account:l}=(0,y.Nr)();i=parseInt(n);let o=i in m.contractAddresses?m.contractAddresses[i][0]:null,[p,u]=(0,x.useState)("0"),[d,b]=(0,x.useState)("0"),[h,w]=(0,x.useState)("0"),[j,g]=(0,x.useState)("0"),[T,v]=(0,x.useState)("0"),N=(0,c.aa)(),{runContractFunction:k,data:M,isLoading:E,isFetching:A}=(0,y.JX)({abi:m.abi,contractAddress:o,functionName:"enterRaffle",msgValue:p,params:{}}),{runContractFunction:C}=(0,y.JX)({abi:m.abiToken,contractAddress:"0x8b88f72997f10c26CdeB500Fc6612C570a6a0A31",functionName:"balanceOf",params:{}}),{runContractFunction:V}=(0,y.JX)({abi:m.abi,contractAddress:o,functionName:"getEntranceFee",params:{}}),{runContractFunction:_}=(0,y.JX)({abi:m.abi,contractAddress:o,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:O}=(0,y.JX)({abi:m.abi,contractAddress:o,functionName:"getRecentWinner",params:{}}),{runContractFunction:S}=(0,y.JX)({abi:m.abi,contractAddress:o,functionName:"getRaffleState",params:{}});async function F(){let e=(await V()).toString(),t=(await _()).toString(),n=await O(),i=await S();0==i?a="Open":1==i&&(a="Closed"),g(i),v(s=t*e/1e18),u(e),b(t),w(n),g(i)}(0,x.useEffect)(()=>{t&&F()},[t]);let R=()=>{N({type:"success",message:"Transaction Complete!",title:"Transaction Notification",position:"topR"})},W=async e=>{try{await e.wait(1),F(),R(e)}catch(e){console.log(e)}};return(0,r.jsxs)("div",{className:"font-semibold",children:[o?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("button",{className:"p-2 font-kake bg-[#af292c]  hover:bg-[#600708] text-stone-200 rounded-2xl",onClick:async()=>await k({onSuccess:W,onError:e=>console.log(e)}),disabled:E||A,children:E||A?(0,r.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Lottery"}),(0,r.jsxs)("div",{className:"p-2 mt-2 bg-stone-200 opacity-90 lg:text-sm md:text-sm sm:text-xs text-xs rounded-2xl",children:[(0,r.jsxs)("p",{children:["Players: ",d]}),(0,r.jsxs)("p",{children:["Jackpot: ",s," ETH"]}),(0,r.jsxs)("p",{children:["Entrance: ",f.bM(p,"ether")," ETH"]}),(0,r.jsxs)("p",{children:["Current State: ",a]})]})]})}):(0,r.jsx)("div",{className:"text-[#af292c]",children:"Connect to Ethereum Mainnet"})," "]})}var h=n(99121);function w(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Anti-MEV Token"}),(0,r.jsx)("meta",{name:"description",content:"Crypto Token Website"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/logo-00.jpg"})]}),(0,r.jsx)(d,{}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../public/spider.png')]",children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("button",{className:"p-2 font-kake font-semibold float-left bg-[#af292c] hover:bg-[#600708] text-stone-200 rounded-2xl",onClick:async()=>window.open("https://app.uniswap.org/"),children:"Buy on Uniswap"})}),(0,r.jsxs)("div",{className:"m-3 flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"p-3 max-w-4xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsxs)("p",{className:" text-center",children:[(0,r.jsx)("span",{className:"font-semibold",children:"Anti-MEV"})," is a specialized crypto token that actively defends itself from MEV theft"]}),(0,r.jsxs)("p",{className:"mt-3",children:["Malicious"," ",(0,r.jsxs)("a",{href:"https://eigenphi.io/",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["MEV bots"," "]})," ","have extracted over $1.3 billion from Ethereum users"]}),(0,r.jsxs)("p",{className:"mt-3 text-center",children:["⇒ This"," ",(0,r.jsx)("span",{className:"font-semibold",children:'"invisible tax"'})," ","is now known as"," ",(0,r.jsx)("a",{href:"https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:"Maximal Extractable Value (MEV)"})," ","⇐"]}),(0,r.jsxs)("p",{className:"mt-3 text-center",children:["Our token was developed to"," ",(0,r.jsx)("span",{className:"font-semibold underline underline-offset-4",children:"protect users"})," ","from these undue losses"]})]}),(0,r.jsxs)("div",{className:" m-3 flex flex-row items-center justify-center space-x-4",children:[(0,r.jsx)(h.QZ,{url:"https://twitter.com/Anti_MEV",network:"twitter",fgColor:"white"}),(0,r.jsx)(h.QZ,{url:"https://discord.gg/nab3H9cyZQ",network:"discord",fgColor:"white"}),(0,r.jsx)(h.QZ,{url:"https://t.me",network:"telegram",fgColor:"white"})]}),(0,r.jsxs)("div",{className:"p-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsxs)("p",{className:" text-center",children:["The ",(0,r.jsx)("span",{className:"font-semibold",children:"MEV Mafia"})," pollutes our industry and robs profits from legitimate traders"]}),(0,r.jsxs)("ul",{className:" mt-3 space-y-4",children:[(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"We prevent sandwich attacks by requiring blocks to be mined between 2 transfers from 1 wallet"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Use decentralized sequencing tools to further defend against front-running"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Limit price manipulation by enforcing a Max Wallet size of 3% of supply"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:"Maintain a carefully curated list of known MEV attack bots"})]}),(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"11"}),(0,r.jsx)("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})]}),(0,r.jsx)("p",{className:"ml-3",children:'No buy or sell taxes - no pre-sale - no bogus "marketing wallet"'})]})]})]}),(0,r.jsxs)("div",{className:"p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsx)("p",{className:"",children:"At it's best, blockchain tech can provide cryptographically guaranteed agreements and transparent results"}),(0,r.jsxs)("p",{className:"mt-3",children:["For example, our lottery is a"," ",(0,r.jsxs)("a",{href:"https://vrf.chain.link/",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["verifiably random"," "]}),"and fully"," ",(0,r.jsxs)("a",{href:"https://automation.chain.link/",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["automated"," "]}),"smart contract that picks a winner each week"]}),(0,r.jsx)("p",{className:"mt-3",children:"Winners are eligible for generous airdrops of $aMEV tokens from a based dev"}),(0,r.jsx)("p",{className:"mt-3 text-center underline",children:(0,r.jsx)("span",{className:"underline font-semibold ",children:"MEV is theft... Anti-MEV gives back™"})})]}),(0,r.jsx)("div",{className:"mt-3 flex flex-col items-center justify-center",children:(0,r.jsx)(b,{className:""})}),(0,r.jsxs)("div",{className:"p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsxs)("p",{className:" text-center",children:[(0,r.jsxs)("a",{href:"https://www.dextools.io/app/en/pairs",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["Anti-MEV"," "]})," ","is a specialized crypto token that actively defends itself from MEV theft"]}),(0,r.jsxs)("p",{className:"mt-3",children:["Uses open source code from"," ",(0,r.jsxs)("a",{href:"https://www.openzeppelin.com/",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["Openzeppelin"," "]}),"and AI art from"," ",(0,r.jsxs)("a",{href:"https://discord.gg/midjourney",className:"text-sky-800 hover:text-sky-600 font-semibold leading-7",children:["Midjourney"," "]})]}),(0,r.jsxs)("div",{className:"ml-6 mt-3 text-base font-semibold",children:[(0,r.jsx)(u(),{className:"float-right rounded-md shadow-lg",src:"chainlink_badge.jpeg",width:175,height:64,alt:"Logo"}),(0,r.jsx)("p",{children:"Want to dig deeper into Anti-MEV?"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://github.com/deanbred/Anti-MEV-Token.git",className:"text-sky-800 hover:text-sky-600",children:"Read the code →"})})]})]}),(0,r.jsxs)("div",{className:"p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl",children:[(0,r.jsxs)("a",{className:"","data-theme":"light",href:"https://twitter.com/Anti_MEV?ref_src=twsrc%5Etfw",children:["Tweets by ",(0,r.jsx)("span",{className:"font-semibold",children:"@Anti-MEV"})]}),(0,r.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js"})]})]})]}),(0,r.jsx)("footer",{className:"text-[8px] text-center",children:"1KEOY"})]})}n(73935)},63021:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"vrfCoordinatorV2","type":"address"},{"internalType":"uint64","name":"subscriptionId","type":"uint64"},{"internalType":"bytes32","name":"gasLane","type":"bytes32"},{"internalType":"uint256","name":"interval","type":"uint256"},{"internalType":"uint256","name":"entranceFee","type":"uint256"},{"internalType":"uint32","name":"callbackGasLimit","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"name":"OnlyCoordinatorCanFulfill","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"RaffleEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"requestId","type":"uint256"}],"name":"RequestedRaffleWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"WinnerPicked","type":"event"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterRaffle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getEntranceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumWords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPlayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRaffleState","outputs":[{"internalType":"enum Raffle.RaffleState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRequestConfirmations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},62613:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"},{"internalType":"uint256","name":"_maxWallet","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockDelay","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bots","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_address","type":"address[]"},{"internalType":"bool[]","name":"_isBot","type":"bool[]"}],"name":"setBots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_maxWallet","type":"uint256"},{"internalType":"uint16","name":"_blockDelay","type":"uint16"},{"internalType":"contract ISwapRouter","name":"_swapRouter","type":"address"}],"name":"setVars","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"1":["0xEC6dC6dF9E97FAf99f62aaD64934136bE8142735"],"5":["0x877Ea63d40B1A653FAe54577fd371044a840f4e9"],"31337":["0x687bB6c57915aa2529EfC7D2a26668855e022fAE"],"11155111":["0x912a47f8247c32917138972022A80410719E7640"]}')}},function(e){e.O(0,[343,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);