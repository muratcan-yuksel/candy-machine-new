(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{148:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return f}));var n=a(2),c=a.n(n),i=a(5),s=a(36),r=a(73),l=new s.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),o=new s.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new s.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var s,r,l,o,d,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>3&&void 0!==u[3]?u[3]:"recent",r=u.length>4&&void 0!==u[4]&&u[4],l=!1,o={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(i.a)(c.a.mark((function e(u,j){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){l||(l=!0,console.log("Rejecting for timeout..."),j({timeout:!0}))}),a);try{d=n.onSignature(t,(function(e,t){l=!0,o={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),j(o)):(console.log("Resolved via websocket",e),u(o))}),s)}catch(m){l=!0,console.error("WS error in setup",t,m)}case 2:if(l||!r){e.next=8;break}return Object(i.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getSignatureStatuses([t]);case 3:a=e.sent,o=a&&a.value[0],l||(o?o.err?(console.log("REST error for",t,o),l=!0,j(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),l=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 7:return o=e.sent,n._signatureSubscriptions[d]&&n.removeSignatureListener(d),l=!0,console.log("Returning status",o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=function(t,a,n,c){var i=[{pubkey:a,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:s.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:r.b,isSigner:!1,isWritable:!1},{pubkey:s.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.d.TransactionInstruction({keys:i,programId:o,data:e.from([])})},m=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var i,r,o,d,u,j,m,x,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new s.b(n,t,{preflightCommitment:"recent"}),e.next=3,s.a.fetchIdl(l,i);case 3:return r=e.sent,o=new s.a(r,l,i),d={id:a,connection:n,program:o},e.next=8,o.account.candyMachine.fetch(a);case 8:return u=e.sent,j=u.data.itemsAvailable.toNumber(),m=u.itemsRedeemed.toNumber(),x=j-m,b=u.data.goLiveDate.toNumber(),b=new Date(1e3*b),console.log({itemsAvailable:j,itemsRedeemed:m,itemsRemaining:x,goLiveDate:b}),e.abrupt("return",{candyMachine:d,itemsAvailable:j,itemsRedeemed:m,itemsRemaining:x,goLiveDate:b});case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),a.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),a.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d.PublicKey.findProgramAddress([t.toBuffer(),r.b.toBuffer(),a.toBuffer()],o);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n,i){var l,o,u,m,p,f,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=s.d.Keypair.generate(),e.next=3,h(n,l.publicKey);case 3:return o=e.sent,u=t.connection,m=t.program,e.next=7,b(l.publicKey);case 7:return p=e.sent,e.next=10,x(l.publicKey);case 10:return f=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(r.a.span);case 13:return O=e.sent,e.next=16,m.rpc.mintNft({accounts:{config:a,candyMachine:t.id,payer:n,wallet:i,mint:l.publicKey,metadata:p,masterEdition:f,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:d,tokenProgram:r.b,systemProgram:s.d.SystemProgram.programId,rent:s.d.SYSVAR_RENT_PUBKEY,clock:s.d.SYSVAR_CLOCK_PUBKEY},signers:[l],instructions:[s.d.SystemProgram.createAccount({fromPubkey:n,newAccountPubkey:l.publicKey,space:r.a.span,lamports:O,programId:r.b}),r.c.createInitMintInstruction(r.b,l.publicKey,0,n,n),j(o,n,n,l.publicKey),r.c.createMintToInstruction(r.b,l.publicKey,o,n,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,a(8).Buffer)},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t){},394:function(e,t){},410:function(e,t){},411:function(e,t){},441:function(e,t){},496:function(e,t){},498:function(e,t){},512:function(e,t){},516:function(e,t){},518:function(e,t){},528:function(e,t){},530:function(e,t){},557:function(e,t){},559:function(e,t){},564:function(e,t){},566:function(e,t){},572:function(e,t){},574:function(e,t){},586:function(e,t){},589:function(e,t){},601:function(e,t){},602:function(e,t,a){"use strict";a.r(t);var n,c,i,s,r=a(1),l=a.n(r),o=a(30),d=a.n(o),u=(a(376),a(377),a(12)),j=a(639),m=a(627),x=a(641),b=(a(378),a(124)),h=a.p+"static/media/logo.09a3c546.png",p=a(3),f=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2);t[0],t[1],Object(b.useMediaQuery)({query:"(max-width: 1224px)"}),Object(b.useMediaQuery)({query:"(min-width: 1000px)"});return Object(p.jsx)("div",{children:Object(p.jsx)(j.a,{id:"navbarDiv",bg:"dark",expand:"lg",fixed:"top",children:Object(p.jsxs)(m.a,{fluid:!0,children:[Object(p.jsx)(j.a.Brand,{href:"#landingPage",id:"navbarTitle",children:Object(p.jsx)("img",{id:"realLogo",src:h,alt:""})}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(x.a,{className:"me-auto",children:[Object(p.jsx)(x.a.Link,{href:"#roadmapComponent",children:Object(p.jsx)("p",{className:"canvasLink",children:"ROADMAP"})}),Object(p.jsxs)(x.a.Link,{href:"#aboutPage",children:[" ",Object(p.jsx)("p",{className:"canvasLink",children:"ABOUT"})]}),Object(p.jsxs)(x.a.Link,{href:"#faqComponent",children:[" ",Object(p.jsx)("p",{className:"canvasLink",children:"FAQ"})]}),Object(p.jsxs)(x.a.Link,{href:"#signUpDiv",children:[" ",Object(p.jsx)("p",{className:"canvasLink",children:"STAY IN TOUCH"})]})]})})]})})})},O=(a(384),function(){return Object(p.jsxs)("div",{id:"aboutPage",children:[Object(p.jsx)("h1",{id:"aboutTitle",children:"LLAMADRAMACLUB"}),Object(p.jsx)("p",{className:"aboutText",children:"was created by a group of creatives with a passion for music, theater and animation."}),Object(p.jsx)("p",{className:"aboutText",children:"It is our goal to spearhead projects of various genres and collaborate with our favorite artists who dabble in art, short film animation and gaming."})]})}),g=a(628),v=a(629),y=(a(385),function(e){var t=Object(b.useMediaQuery)({query:"(min-width: 1224px)"}),a=Object(b.useMediaQuery)({query:"(max-width: 1224px)"});return Object(p.jsxs)("div",{id:"examplesDiv",children:[t&&Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("div",{"data-aos":"fade-right",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.firstPicture,alt:""})})}),Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.secondPicture,alt:""})})})," ",Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.thirdPicture,alt:""})})})," "]})}),Object(p.jsxs)("div",{"data-aos":"fade-left",children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.fourthPicture,alt:""})})}),Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.fifthPicture,alt:""})})})," ",Object(p.jsx)(v.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(p.jsx)("div",{className:"ExampleImageContainer",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.sixthPicture,alt:""})})})," "]})," "]})]}),a&&Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("div",{"data-aos":"fade-right",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.firstPicture,alt:""})})}),Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.secondPicture,alt:""})})})," "]})}),Object(p.jsxs)("div",{"data-aos":"fade-left",children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.thirdPicture,alt:""})})})," ",Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.fourthPicture,alt:""})})})]})," "]}),Object(p.jsxs)("div",{"data-aos":"fade-right",children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.fifthPicture,alt:""})})})," ",Object(p.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(p.jsx)("img",{className:"ExampleImage",src:e.sixthPicture,alt:""})})})]})," "]})]})]})}),w=a(630),N=(a(386),function(){return Object(p.jsxs)("div",{id:"roadmapComponent",children:[Object(p.jsx)("h1",{id:"roadmapCompTitle",children:"RoadMap"}),Object(p.jsx)("div",{children:Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsxs)("div",{"data-aos":"fade-down-right",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"roadmapTextContainer",children:[Object(p.jsx)("h2",{className:"roadmapTitle",children:"Presale"}),Object(p.jsx)("p",{className:"roadmapText",children:"Collectors will be able to grab llamas at a special discounted price with no mint limit."}),Object(p.jsx)("p",{className:"roadmapText",children:"5,000 llamas will be released."})]})})," "]}),Object(p.jsxs)("div",{"data-aos":"fade-up-left",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"roadmapTextContainer",children:[Object(p.jsx)("h2",{className:"roadmapTitle",children:"Launch day"}),Object(p.jsx)("p",{className:"roadmapText",children:"If you missed out on the presale, don\u2019t worry!"}),Object(p.jsx)("p",{className:"roadmapText",children:"5,000 more llamas will be released on launch day."})]})})," "]}),Object(p.jsxs)("div",{"data-aos":"fade-up-right",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"roadmapTextContainer",children:[Object(p.jsx)("h2",{className:"roadmapTitle",children:"Videogame drop"}),Object(p.jsx)("p",{className:"roadmapText",children:"At 75%, we plan on launching development of our game world. We cannot express enough how diverse our game launches will be. Our goal is to create something for everyone to enjoy every quarter. NFT holders will instantly gain freebies in games once launched."})]})})," "]}),Object(p.jsx)("div",{"data-aos":"fade-up-left",children:Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"roadmapTextContainer",children:[Object(p.jsx)("h2",{className:"roadmapTitle",children:"Animated short films"}),Object(p.jsx)("p",{className:"roadmapText",children:"We aren\u2019t called the drama club for nothing. - Llamadramaclub - plans on entertaining you with animated shorts that will make you laugh, - and hopefully leave you wanting more. NFT holders will gain early access to each episode before - general public"}),Object(p.jsx)("p",{className:"roadmapText",children:"Llamadramaclub plans on entertaining you with animated shorts that will make you laugh, and hopefully leave you wanting more. NFT holders will gain early access to each episode before general public"})]})})}),Object(p.jsxs)("div",{"data-aos":"zoom-in-up",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"roadmapTextContainer",children:[Object(p.jsx)("h2",{className:"roadmapTitle",children:" TESLA GIVEAWAY!!!!!"}),Object(p.jsxs)("div",{className:"roadmapText",children:[Object(p.jsxs)("p",{children:[" ","That\u2019s right! At 100% We will be giving away a Tesla!"]}),Object(p.jsx)("h3",{children:"Follow us on:"}),Object(p.jsx)(w.a,{className:"roadmapBtn",variant:"warning",children:Object(p.jsx)("a",{className:"roadmapLinkButton",href:"https://twitter.com/llamadramaclub",children:"Twitter"})})," ",Object(p.jsx)(w.a,{className:"roadmapBtn",variant:"warning",children:"Facebook"})," ",Object(p.jsx)(w.a,{className:"roadmapBtn",variant:"warning",children:"Instagram"})," "]})]})})," "]})]})," "]})})]})}),T=(a(387),function(){return Object(p.jsxs)("div",{id:"faqComponent",children:[Object(p.jsx)("h1",{id:"faqCompTitle",children:"FAQ"}),Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(g.a,{children:[Object(p.jsxs)("div",{"data-aos":"flip-up",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"faqTextContainer",children:[Object(p.jsx)("h2",{className:"faqTitle",children:"How do I get an NFT?"}),Object(p.jsx)("p",{className:"faqText",children:"Stay updated on all social media accounts. Presale and live mint details will be announced with direct link to the action."})]})})," "]}),Object(p.jsxs)("div",{"data-aos":"flip-up",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"faqTextContainer",children:[Object(p.jsx)("h2",{className:"faqTitle",children:"When will the llamas be available?"}),Object(p.jsx)("p",{className:"faqText",children:"January 2022"})]})})," "]}),Object(p.jsxs)("div",{"data-aos":"flip-up",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"faqTextContainer",children:[Object(p.jsx)("h2",{className:"faqTitle",children:"How many NFTs can I buy?"}),Object(p.jsx)("p",{className:"faqText",children:"There is no limit. We believe that our mission will attract the kind of investors that want to double down on us. Our goal is to show investors they made the right choice."})]})})," "]}),Object(p.jsxs)("div",{"data-aos":"flip-up",children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(p.jsxs)("div",{className:"faqTextContainer",children:[Object(p.jsx)("h2",{className:"faqTitle",children:"Why Sol?"}),Object(p.jsx)("p",{className:"faqText",children:"Simple\u2026 Value. LDC is a project that will kick butt in the video game, art, and animation realms. The fractional gas fees allow us to give you more value for your investment."})]})})," "]})]})," "]})]})}),P=(a(388),function(){return Object(p.jsxs)("div",{id:"signUpDiv",children:[Object(p.jsx)("h1",{id:"signupTitle",children:"Stay in touch"}),Object(p.jsx)("h2",{className:"signupText",children:"Be the first to know about the exciting things to come for our Llamadramaclub Family."}),Object(p.jsxs)("div",{id:"signupForm",children:[Object(p.jsx)("input",{style:{padding:"10px"},className:"signupItem",type:"text",placeholder:"email address"}),Object(p.jsx)(w.a,{id:"signupBtn",className:"signupItem",variant:"warning",children:"Send"})," "]})]})}),k=a.p+"static/media/banner.ef3fd868.png",S=(a(389),function(){return Object(p.jsx)("div",{id:"bannerDiv",children:Object(p.jsx)("img",{id:"bannerImage",src:k,alt:""})})}),I=(a(390),a.p+"static/media/0.75b135e3.png"),C=a.p+"static/media/1.f7c9a6a1.png",L=a.p+"static/media/2.989eded7.png",E=a.p+"static/media/3.ed566aa1.png",B=a.p+"static/media/9.dc5b246f.png",M=a.p+"static/media/11.7e7ee8ce.png",A=a.p+"static/media/12.3bbe3dca.png",R=a.p+"static/media/2018.de9fd019.png",D=a.p+"static/media/92.9dc9afd7.png",K=a.p+"static/media/97.bb8cc7d2.png",q=a.p+"static/media/2016.4fb815f3.png",W=a.p+"static/media/2017.a7edb480.png",F=a(9),U=a(2),Q=a.n(U),Y=a(5),_=a(147),G=a(149),H=a(337),V=a(632),J=a(637),z=a(643),X=a(642),Z=(a(391),a(245),a.p+"static/media/mainGif.e594bd47.gif"),$=a(16),ee=a(57),te=a(194),ae=a(148),ne=Object(G.a)(te.a)(n||(n=Object(_.a)([""]))),ce=G.a.span(c||(c=Object(_.a)([""]))),ie=G.a.div(i||(i=Object(_.a)([""]))),se=Object(G.a)(V.a)(s||(s=Object(_.a)([""]))),re=function(e){var t=e.days,a=e.hours,n=e.minutes,c=e.seconds;e.completed;return Object(p.jsxs)(ce,{children:[a+24*(t||0)," hours, ",n," minutes, ",c," seconds"]})},le=function(e){var t=Object(r.useState)(),a=Object(u.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),l=s[0],o=s[1],d=Object(r.useState)(!1),j=Object(u.a)(d,2),x=j[0],b=j[1],h=Object(r.useState)(!1),f=Object(u.a)(h,2),O=f[0],y=f[1],w=Object(r.useState)(0),N=Object(u.a)(w,2),T=N[0],P=N[1],k=Object(r.useState)(0),S=Object(u.a)(k,2),I=S[0],C=S[1],L=Object(r.useState)(0),E=Object(u.a)(L,2),B=E[0],M=E[1],A=Object(r.useState)({open:!1,message:"",severity:void 0}),R=Object(u.a)(A,2),D=R[0],K=R[1],q=Object(r.useState)(new Date(e.startDate)),W=Object(u.a)(q,2),U=W[0],_=W[1],G=Object(ee.c)(),V=Object(r.useState)(),te=Object(u.a)(V,2),ce=te[0],le=te[1],oe=function(){Object(Y.a)(Q.a.mark((function t(){var a,n,c,i,s,r;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(ae.b)(G,e.candyMachineId,e.connection);case 4:a=t.sent,n=a.candyMachine,c=a.goLiveDate,i=a.itemsAvailable,s=a.itemsRemaining,r=a.itemsRedeemed,P(i),M(s),C(r),b(0===s),_(c),le(n);case 16:case"end":return t.stop()}}),t)})))()},de=function(){var t=Object(Y.a)(Q.a.mark((function t(){var a,n,i,s;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,y(!0),!G||!(null===ce||void 0===ce?void 0:ce.program)){t.next=10;break}return t.next=5,Object(ae.c)(ce,e.config,G.publicKey,e.treasury);case 5:return a=t.sent,t.next=8,Object(ae.a)(a,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(n=t.sent)||void 0===n?void 0:n.err)?K({open:!0,message:"Mint failed! Please try again!",severity:"error"}):K({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),i=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(i="SOLD OUT!",b(!0)):312===t.t0.code&&(i="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to mint. Please fund your wallet.")),K({open:!0,message:i,severity:"error"});case 17:if(t.prev=17,!G){t.next=23;break}return t.next=21,e.connection.getBalance(G.publicKey);case 21:s=t.sent,c(s/$.LAMPORTS_PER_SOL);case 23:return y(!1),oe(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(Y.a)(Q.a.mark((function t(){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!G){t.next=5;break}return t.next=3,e.connection.getBalance(G.publicKey);case 3:a=t.sent,c(a/$.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[G,e.connection]),Object(r.useEffect)(oe,[G,e.candyMachineId,e.connection]),Object(p.jsx)("main",{children:Object(p.jsx)("div",{id:"landingPage",children:Object(p.jsxs)(m.a,{fluid:!0,id:"landingContainer",children:[Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(p.jsx)("div",{id:"landingImageContainer",children:Object(p.jsx)("img",{src:Z,alt:"",id:"landingImage"})})}),Object(p.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(p.jsxs)("div",{id:"landingWelcomeGroup",children:[Object(p.jsxs)("h2",{className:"welcomeTexts",children:["Thousands of loveable llamas from the"," "]}),Object(p.jsx)("h1",{className:"welcomeTexts",children:"llamadramaclub"}),Object(p.jsx)("h2",{className:"welcomeTexts",children:"are joining the NFT world January 2022."}),Object(p.jsxs)("div",{className:"mint-container",children:[G&&Object(p.jsxs)("p",{children:["Wallet ",Object(ae.d)(G.publicKey.toBase58()||"")]}),G&&Object(p.jsxs)("p",{className:"mintingTexts",children:["Balance: ",(n||0).toLocaleString()," SOL"]}),G&&Object(p.jsxs)("p",{className:"mintingTexts",children:["Total Available: ",T]}),G&&Object(p.jsxs)("p",{className:"mintingTexts",children:["Redeemed: ",I]}),G&&Object(p.jsxs)("p",{className:"mintingTexts",children:["Remaining: ",B]}),Object(p.jsx)(ie,{children:G?Object(p.jsx)(se,{disabled:x||O||!l,onClick:de,variant:"contained",id:"mintingButton",children:x?"SOLD OUT":l?O?Object(p.jsx)(J.a,{}):"MINT":Object(p.jsx)(H.a,{date:U,onMount:function(e){return e.completed&&o(!0)},onComplete:function(){return o(!0)},renderer:re})}):Object(p.jsx)(ne,{id:"connectButton",children:Object(p.jsx)("p",{id:"connectBtnText",children:" Connect Wallet"})})}),Object(p.jsx)(z.a,{open:D.open,autoHideDuration:6e3,onClose:function(){return K(Object(F.a)(Object(F.a)({},D),{},{open:!1}))},children:Object(p.jsx)(X.a,{onClose:function(){return K(Object(F.a)(Object(F.a)({},D),{},{open:!1}))},severity:D.severity,children:D.message})})]})]})})]}),Object(p.jsx)(g.a,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)("div",{id:"LandingFollows",children:Object(p.jsxs)("div",{id:"followButtons",children:[Object(p.jsx)("span",{className:"followButton",children:Object(p.jsx)("button",{id:"twitterBtn",children:Object(p.jsx)("a",{className:"linkButton",href:"https://twitter.com/llamadramaclub",children:"Twitter"})})}),Object(p.jsx)("span",{className:"followButton",children:Object(p.jsxs)("button",{id:"discordBtn",children:[" ",Object(p.jsx)("a",{className:"linkButton",href:"discord/llamadramaclub",children:"Discord"})]})})]})})})})]})})})},oe=a(36),de=a(130),ue=a(364),je=a(638),me=new oe.d.PublicKey("9Gg7MuYKW21Bb64A6XU83qMacfQRxigD2TDgS7eyaa9m"),xe=new oe.d.PublicKey("DxG8eZ9QuCLwLxQuR63mz2xDY59JopxdGmA3qhB1Na5H"),be=new oe.d.PublicKey("7QcagNPuXwWbkMR97NR8YEQd4jLhQDCttt3CPMH1gRCd"),he="devnet",pe=new oe.d.Connection("https://explorer-api.devnet.solana.com"),fe=parseInt("1635466320",10),Oe=Object(ue.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),ge=function(){var e=Object(r.useMemo)((function(){return Object($.clusterApiUrl)(he)}),[]),t=Object(r.useMemo)((function(){return[Object(de.a)(),Object(de.b)(),Object(de.c)(),Object(de.e)({network:he}),Object(de.d)({network:he})]}),[]);return Object(p.jsxs)("div",{id:"HomePage",children:[Object(p.jsx)(f,{}),Object(p.jsx)(S,{}),Object(p.jsx)(je.a,{theme:Oe,children:Object(p.jsx)(ee.a,{endpoint:e,children:Object(p.jsx)(ee.b,{wallets:t,autoConnect:!0,children:Object(p.jsx)(te.b,{children:Object(p.jsx)(le,{candyMachineId:be,config:xe,connection:pe,startDate:fe,treasury:me,txTimeout:3e4})})})})}),Object(p.jsx)(O,{}),Object(p.jsx)(y,{firstPicture:I,secondPicture:C,thirdPicture:L,fourthPicture:E,fifthPicture:B,sixthPicture:M}),Object(p.jsx)(N,{}),Object(p.jsx)(y,{firstPicture:A,secondPicture:R,thirdPicture:D,fourthPicture:K,fifthPicture:q,sixthPicture:W}),Object(p.jsx)(T,{}),Object(p.jsx)(P,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,644)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};d.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[602,1,2]]]);
//# sourceMappingURL=main.d0d1b662.chunk.js.map