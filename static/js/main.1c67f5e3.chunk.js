(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{148:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return O}));var n=a(2),c=a.n(n),i=a(5),r=a(36),s=a(73),l=new r.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),o=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var r,s,l,o,d,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>3&&void 0!==u[3]?u[3]:"recent",s=u.length>4&&void 0!==u[4]&&u[4],l=!1,o={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(i.a)(c.a.mark((function e(u,j){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){l||(l=!0,console.log("Rejecting for timeout..."),j({timeout:!0}))}),a);try{d=n.onSignature(t,(function(e,t){l=!0,o={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),j(o)):(console.log("Resolved via websocket",e),u(o))}),r)}catch(m){l=!0,console.error("WS error in setup",t,m)}case 2:if(l||!s){e.next=8;break}return Object(i.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getSignatureStatuses([t]);case 3:a=e.sent,o=a&&a.value[0],l||(o?o.err?(console.log("REST error for",t,o),l=!0,j(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),l=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,f(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 7:return o=e.sent,n._signatureSubscriptions[d]&&n.removeSignatureListener(d),l=!0,console.log("Returning status",o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=function(t,a,n,c){var i=[{pubkey:a,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:r.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:r.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new r.d.TransactionInstruction({keys:i,programId:o,data:e.from([])})},m=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var i,s,o,d,u,j,m,x,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new r.b(n,t,{preflightCommitment:"recent"}),e.next=3,r.a.fetchIdl(l,i);case 3:return s=e.sent,o=new r.a(s,l,i),d={id:a,connection:n,program:o},e.next=8,o.account.candyMachine.fetch(a);case 8:return u=e.sent,j=u.data.itemsAvailable.toNumber(),m=u.itemsRedeemed.toNumber(),x=j-m,b=u.data.goLiveDate.toNumber(),b=new Date(1e3*b),console.log({itemsAvailable:j,itemsRedeemed:m,itemsRemaining:x,goLiveDate:b}),e.abrupt("return",{candyMachine:d,itemsAvailable:j,itemsRedeemed:m,itemsRemaining:x,goLiveDate:b});case 16:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),a.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),a.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),a.toBuffer()],o);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(t,a,n,i){var l,o,u,m,p,O,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.d.Keypair.generate(),e.next=3,h(n,l.publicKey);case 3:return o=e.sent,u=t.connection,m=t.program,e.next=7,b(l.publicKey);case 7:return p=e.sent,e.next=10,x(l.publicKey);case 10:return O=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(s.a.span);case 13:return f=e.sent,e.next=16,m.rpc.mintNft({accounts:{config:a,candyMachine:t.id,payer:n,wallet:i,mint:l.publicKey,metadata:p,masterEdition:O,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:d,tokenProgram:s.b,systemProgram:r.d.SystemProgram.programId,rent:r.d.SYSVAR_RENT_PUBKEY,clock:r.d.SYSVAR_CLOCK_PUBKEY},signers:[l],instructions:[r.d.SystemProgram.createAccount({fromPubkey:n,newAccountPubkey:l.publicKey,space:s.a.span,lamports:f,programId:s.b}),s.c.createInitMintInstruction(s.b,l.publicKey,0,n,n),j(o,n,n,l.publicKey),s.c.createMintToInstruction(s.b,l.publicKey,o,n,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},f=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,a(8).Buffer)},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t){},394:function(e,t){},410:function(e,t){},411:function(e,t){},441:function(e,t){},496:function(e,t){},498:function(e,t){},512:function(e,t){},516:function(e,t){},518:function(e,t){},528:function(e,t){},530:function(e,t){},557:function(e,t){},559:function(e,t){},564:function(e,t){},566:function(e,t){},572:function(e,t){},574:function(e,t){},586:function(e,t){},589:function(e,t){},601:function(e,t){},602:function(e,t,a){"use strict";a.r(t);var n,c,i,r,s=a(1),l=a.n(s),o=a(30),d=a.n(o),u=(a(376),a(377),a(12)),j=a(639),m=a(627),x=a(641),b=(a(378),a(125)),h=a.p+"static/media/MdiTwitter.daa9e490.svg",p=a.p+"static/media/MdiYoutube.b2ee9a63.svg",O=a(3),f=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2);t[0],t[1],Object(b.useMediaQuery)({query:"(max-width: 1224px)"}),Object(b.useMediaQuery)({query:"(min-width: 1000px)"});return Object(O.jsx)("div",{children:Object(O.jsx)(j.a,{id:"navbarDiv",bg:"dark",expand:"lg",fixed:"top",children:Object(O.jsxs)(m.a,{fluid:!0,children:[Object(O.jsx)(j.a.Brand,{href:"#landingPage",id:"navbarTitle",children:"llamadramaclub"}),Object(O.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(x.a,{className:"me-auto",children:[Object(O.jsx)(x.a.Link,{href:"#roadmapComponent",children:Object(O.jsx)("p",{className:"canvasLink",children:"ROADMAP"})}),Object(O.jsxs)(x.a.Link,{href:"#creatorPartDiv",children:[" ",Object(O.jsx)("p",{className:"canvasLink",children:"CREATOR"})]}),Object(O.jsxs)(x.a.Link,{href:"#aboutPage",children:[" ",Object(O.jsx)("p",{className:"canvasLink",children:"ABOUT"})]}),Object(O.jsxs)(x.a.Link,{href:"#link",children:[" ",Object(O.jsx)("img",{src:p,alt:""})]}),Object(O.jsx)(x.a.Link,{href:"#link",children:Object(O.jsx)("img",{src:h,alt:""})})]})})]})})})},g=(a(384),function(){return Object(O.jsxs)("div",{id:"aboutPage",children:[Object(O.jsx)("h1",{id:"aboutTitle",children:"llamadramaclub"}),Object(O.jsx)("p",{className:"aboutText",children:"was created by a group of creatives with a passion for music,"}),Object(O.jsx)("p",{className:"aboutText",children:"theater"}),Object(O.jsx)("p",{className:"aboutText",children:"and animation. It is our goal to spearhead projects of various genres and collab with our favorite artist who dabbling in art, short film animation and gaming."})]})}),v=a(628),y=a(629),w=(a(385),function(e){var t=Object(b.useMediaQuery)({query:"(min-width: 1224px)"}),a=Object(b.useMediaQuery)({query:"(max-width: 1224px)"});return Object(O.jsxs)("div",{id:"examplesDiv",children:[t&&Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.firstPicture,alt:""})})}),Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.secondPicture,alt:""})})})," ",Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.thirdPicture,alt:""})})})," "]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.fourthPicture,alt:""})})}),Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.fifthPicture,alt:""})})})," ",Object(O.jsx)(y.a,{xs:4,sm:4,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsx)("div",{className:"ExampleImageContainer",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.sixthPicture,alt:""})})})," "]})," "]}),a&&Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.firstPicture,alt:""})})}),Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.secondPicture,alt:""})})})," "]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.thirdPicture,alt:""})})})," ",Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.fourthPicture,alt:""})})})]})," ",Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.fifthPicture,alt:""})})})," ",Object(O.jsx)(y.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"ExampleImageContainerMobile",children:Object(O.jsx)("img",{className:"ExampleImage",src:e.sixthPicture,alt:""})})})]})," "]})]})}),N=a(630),T=(a(386),function(){return Object(O.jsxs)("div",{id:"roadmapComponent",children:[Object(O.jsx)("h1",{children:"RoadMap"}),Object(O.jsx)("div",{children:Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:12,sm:12,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsxs)("div",{className:"roadmapTextContainer",children:[Object(O.jsx)("h2",{className:"roadmapTitle",children:"Resale"}),Object(O.jsx)("p",{className:"roadmapText",children:"Collectors will be able to grab llamas at a special discounted price with no mint limit."}),Object(O.jsx)("p",{className:"roadmapText",children:"5,000 llamas will be released."})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsxs)("div",{className:"roadmapTextContainer",children:[Object(O.jsx)("h2",{className:"roadmapTitle",children:"Launch day"}),Object(O.jsx)("p",{className:"roadmapText",children:"If you missed out on the presale, don\u2019t worry!"}),Object(O.jsx)("p",{className:"roadmapText",children:"5,000 more llamas will be released on launch day."})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:4,lg:4,xl:4,xxl:4,children:Object(O.jsxs)("div",{className:"roadmapTextContainer",children:[Object(O.jsx)("h2",{className:"roadmapTitle",children:"Videogame drop"}),Object(O.jsx)("p",{className:"roadmapText",children:"At 75%, we plan on launching development of our game world. We cannot express enough how diverse our game launches will be. Our goal is to create something for everyone to enjoy every quarter. NFT holders will instantly gain freebies in games once launched."})]})})," "]}),Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:12,sm:12,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsxs)("div",{className:"roadmapTextContainer",children:[Object(O.jsx)("h2",{className:"roadmapTitle",children:" Tesla Giveaway"}),Object(O.jsxs)("div",{className:"roadmapText",children:[Object(O.jsxs)("p",{children:[" ","That\u2019s right! At 100% We will be giving away a Tesla! - Follow Twitter, FB, Insta"]}),Object(O.jsx)("h3",{children:"Follow us on:"}),Object(O.jsx)(N.a,{variant:"warning",children:"Twitter"})," ",Object(O.jsx)(N.a,{variant:"warning",children:"Facebook"})," ",Object(O.jsx)(N.a,{variant:"warning",children:"Instagram"})," "]})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsxs)("div",{className:"roadmapTextContainer",children:[Object(O.jsx)("h2",{className:"roadmapTitle",children:"Animated short films"}),Object(O.jsx)("p",{className:"roadmapText",children:"We aren\u2019t called the drama club for nothing. - Llamadramaclub - plans on entertaining you with animated shorts that will make you laugh, - and hopefully leave you wanting more. NFT holders will gain early access to each episode before - general public"}),Object(O.jsx)("p",{className:"roadmapText",children:"Llamadramaclub plans on entertaining you with animated shorts that will make you laugh, and hopefully leave you wanting more. NFT holders will gain early access to each episode before general public"})]})})]})," "]})})]})}),P=(a(387),function(){return Object(O.jsxs)("div",{id:"faqComponent",children:[Object(O.jsx)("h1",{children:"FAQ"}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:12,sm:12,md:3,lg:3,xl:3,xxl:3,children:Object(O.jsxs)("div",{className:"faqTextContainer",children:[Object(O.jsx)("h2",{className:"faqTitle",children:"How do I get an NFT?"}),Object(O.jsx)("p",{className:"faqText",children:"Stay updated on all social media accounts. Presale and live mint details will be announced with direct link to the action."})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:3,lg:3,xl:3,xxl:3,children:Object(O.jsxs)("div",{className:"faqTextContainer",children:[Object(O.jsx)("h2",{className:"faqTitle",children:"When will the llamas be available?"}),Object(O.jsx)("p",{className:"faqText",children:"January 2022"})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:3,lg:3,xl:3,xxl:3,children:Object(O.jsxs)("div",{className:"faqTextContainer",children:[Object(O.jsx)("h2",{className:"faqTitle",children:"How many NFTs can I buy?"}),Object(O.jsx)("p",{className:"faqText",children:"There is no limit. We believe that our mission will attract the kind of investors that want to double down on us. Our goal is to show investors they made the right choice."})]})})," ",Object(O.jsx)(y.a,{xs:12,sm:12,md:3,lg:3,xl:3,xxl:3,children:Object(O.jsxs)("div",{className:"faqTextContainer",children:[Object(O.jsx)("h2",{className:"faqTitle",children:"Why Sol?"}),Object(O.jsx)("p",{className:"faqText",children:"Simple\u2026 Value. LDC is a project that will kick butt in the video game, art, and animation realms. The fractional gas fees allow us to give you more value for your investment."})]})})," "]})," "]})]})}),k=(a(388),function(){return Object(O.jsx)("div",{id:"creatorPartDiv",children:Object(O.jsxs)(m.a,{children:[" ",Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:12,sm:12,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{className:"creatorImgContainer",children:Object(O.jsx)("div",{className:"creatorImage"})})}),Object(O.jsx)(y.a,{xs:12,sm:12,md:6,lg:6,xl:6,xxl:6,children:Object(O.jsxs)("div",{id:"creatorText",children:[Object(O.jsx)("h1",{children:"Creator"}),Object(O.jsx)("h1",{children:"There's not enough text for this part. Do you want to keep or remove it?"}),Object(O.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, similique aut? Numquam sed voluptates in! Quisquam porro culpa eaque, commodi architecto voluptate, beatae laboriosam earum impedit odit dolorem adipisci facere."}),Object(O.jsx)(N.a,{id:"creatorBtn",variant:"dark",children:"Follow"})," "]})})]})]})})}),I=(a(389),function(){return Object(O.jsxs)("div",{id:"signUpDiv",children:[Object(O.jsx)("h1",{children:"Stay in touch"}),Object(O.jsx)("h2",{children:"Be the first to know about the exciting things to come for our Fuzzie Family."}),Object(O.jsxs)("div",{id:"signupForm",children:[Object(O.jsx)("input",{style:{padding:"10px"},className:"signupItem",type:"text",placeholder:"email address"}),Object(O.jsx)(N.a,{id:"signupBtn",className:"signupItem",variant:"warning",children:"Send"})," "]})]})}),S=(a(390),a.p+"static/media/0.75b135e3.png"),C=a.p+"static/media/1.f7c9a6a1.png",E=a.p+"static/media/2.989eded7.png",M=a.p+"static/media/3.ed566aa1.png",R=a.p+"static/media/9.dc5b246f.png",L=a.p+"static/media/11.7e7ee8ce.png",B=a.p+"static/media/12.3bbe3dca.png",A=a.p+"static/media/2018.de9fd019.png",q=a.p+"static/media/92.9dc9afd7.png",D=a.p+"static/media/97.bb8cc7d2.png",K=a.p+"static/media/2016.4fb815f3.png",W=a.p+"static/media/2017.a7edb480.png",F=a(9),Q=a(2),U=a.n(Q),Y=a(5),_=a(147),G=a(149),H=a(337),J=a(632),V=a(637),z=a(643),X=a(642),Z=(a(391),a(245),a.p+"static/media/13.1e81ff24.png"),$=a(16),ee=a(57),te=a(194),ae=a(148),ne=Object(G.a)(te.a)(n||(n=Object(_.a)([""]))),ce=G.a.span(c||(c=Object(_.a)([""]))),ie=G.a.div(i||(i=Object(_.a)([""]))),re=Object(G.a)(J.a)(r||(r=Object(_.a)([""]))),se=function(e){var t=e.days,a=e.hours,n=e.minutes,c=e.seconds;e.completed;return Object(O.jsxs)(ce,{children:[a+24*(t||0)," hours, ",n," minutes, ",c," seconds"]})},le=function(e){var t=Object(s.useState)(),a=Object(u.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(!1),r=Object(u.a)(i,2),l=r[0],o=r[1],d=Object(s.useState)(!1),j=Object(u.a)(d,2),x=j[0],b=j[1],h=Object(s.useState)(!1),p=Object(u.a)(h,2),f=p[0],g=p[1],w=Object(s.useState)(0),N=Object(u.a)(w,2),T=N[0],P=N[1],k=Object(s.useState)(0),I=Object(u.a)(k,2),S=I[0],C=I[1],E=Object(s.useState)(0),M=Object(u.a)(E,2),R=M[0],L=M[1],B=Object(s.useState)({open:!1,message:"",severity:void 0}),A=Object(u.a)(B,2),q=A[0],D=A[1],K=Object(s.useState)(new Date(e.startDate)),W=Object(u.a)(K,2),Q=W[0],_=W[1],G=Object(ee.c)(),J=Object(s.useState)(),te=Object(u.a)(J,2),ce=te[0],le=te[1],oe=function(){Object(Y.a)(U.a.mark((function t(){var a,n,c,i,r,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(ae.b)(G,e.candyMachineId,e.connection);case 4:a=t.sent,n=a.candyMachine,c=a.goLiveDate,i=a.itemsAvailable,r=a.itemsRemaining,s=a.itemsRedeemed,P(i),L(r),C(s),b(0===r),_(c),le(n);case 16:case"end":return t.stop()}}),t)})))()},de=function(){var t=Object(Y.a)(U.a.mark((function t(){var a,n,i,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,g(!0),!G||!(null===ce||void 0===ce?void 0:ce.program)){t.next=10;break}return t.next=5,Object(ae.c)(ce,e.config,G.publicKey,e.treasury);case 5:return a=t.sent,t.next=8,Object(ae.a)(a,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(n=t.sent)||void 0===n?void 0:n.err)?D({open:!0,message:"Mint failed! Please try again!",severity:"error"}):D({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),i=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(i="SOLD OUT!",b(!0)):312===t.t0.code&&(i="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to mint. Please fund your wallet.")),D({open:!0,message:i,severity:"error"});case 17:if(t.prev=17,!G){t.next=23;break}return t.next=21,e.connection.getBalance(G.publicKey);case 21:r=t.sent,c(r/$.LAMPORTS_PER_SOL);case 23:return g(!1),oe(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(Y.a)(U.a.mark((function t(){var a;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!G){t.next=5;break}return t.next=3,e.connection.getBalance(G.publicKey);case 3:a=t.sent,c(a/$.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[G,e.connection]),Object(s.useEffect)(oe,[G,e.candyMachineId,e.connection]),Object(O.jsx)("main",{children:Object(O.jsx)("div",{id:"landingPage",children:Object(O.jsxs)(m.a,{fluid:!0,id:"landingContainer",children:[Object(O.jsxs)(v.a,{children:[Object(O.jsx)(y.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(O.jsx)("div",{id:"landingImageContainer",children:Object(O.jsx)("img",{src:Z,alt:"",id:"landingImage"})})}),Object(O.jsx)(y.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(O.jsxs)("div",{id:"landingWelcomeGroup",children:[Object(O.jsx)("h2",{children:"Thousands of loveable llamas from the "}),Object(O.jsx)("h1",{children:"llamadramaclub"}),Object(O.jsx)("h2",{children:"are joining the NFT world January 2022."}),Object(O.jsxs)("div",{className:"mint-container",children:[G&&Object(O.jsxs)("p",{children:["Wallet ",Object(ae.d)(G.publicKey.toBase58()||"")]}),G&&Object(O.jsxs)("p",{children:["Balance: ",(n||0).toLocaleString()," SOL"]}),G&&Object(O.jsxs)("p",{children:["Total Available: ",T]}),G&&Object(O.jsxs)("p",{children:["Redeemed: ",S]}),G&&Object(O.jsxs)("p",{children:["Remaining: ",R]}),Object(O.jsx)(ie,{children:G?Object(O.jsx)(re,{disabled:x||f||!l,onClick:de,variant:"contained",id:"mintingButton",children:x?"SOLD OUT":l?f?Object(O.jsx)(V.a,{}):"MINT":Object(O.jsx)(H.a,{date:Q,onMount:function(e){return e.completed&&o(!0)},onComplete:function(){return o(!0)},renderer:se})}):Object(O.jsx)(ne,{id:"connectButton",children:"Connect Wallet"})}),Object(O.jsx)(z.a,{open:q.open,autoHideDuration:6e3,onClose:function(){return D(Object(F.a)(Object(F.a)({},q),{},{open:!1}))},children:Object(O.jsx)(X.a,{onClose:function(){return D(Object(F.a)(Object(F.a)({},q),{},{open:!1}))},severity:q.severity,children:q.message})})]})]})})]}),Object(O.jsx)(v.a,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)("div",{id:"LandingFollows",children:Object(O.jsxs)("div",{id:"followButtons",children:[Object(O.jsx)("span",{className:"followButton",children:Object(O.jsx)("button",{id:"twitterBtn",children:"Twitter"})}),Object(O.jsx)("span",{className:"followButton",children:Object(O.jsx)("button",{id:"discordBtn",children:"Discord"})})]})})})})]})})})},oe=a(36),de=a(131),ue=a(364),je=a(638),me=new oe.d.PublicKey("9Gg7MuYKW21Bb64A6XU83qMacfQRxigD2TDgS7eyaa9m"),xe=new oe.d.PublicKey("DxG8eZ9QuCLwLxQuR63mz2xDY59JopxdGmA3qhB1Na5H"),be=new oe.d.PublicKey("7QcagNPuXwWbkMR97NR8YEQd4jLhQDCttt3CPMH1gRCd"),he="devnet",pe=new oe.d.Connection("https://explorer-api.devnet.solana.com"),Oe=parseInt("1635466320",10),fe=Object(ue.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),ge=function(){var e=Object(s.useMemo)((function(){return Object($.clusterApiUrl)(he)}),[]),t=Object(s.useMemo)((function(){return[Object(de.a)(),Object(de.b)(),Object(de.c)(),Object(de.e)({network:he}),Object(de.d)({network:he})]}),[]);return Object(O.jsxs)("div",{id:"HomePage",children:[Object(O.jsx)(f,{}),Object(O.jsx)(je.a,{theme:fe,children:Object(O.jsx)(ee.a,{endpoint:e,children:Object(O.jsx)(ee.b,{wallets:t,autoConnect:!0,children:Object(O.jsx)(te.b,{children:Object(O.jsx)(le,{candyMachineId:be,config:xe,connection:pe,startDate:Oe,treasury:me,txTimeout:3e4})})})})}),Object(O.jsx)(g,{}),Object(O.jsx)(w,{firstPicture:S,secondPicture:C,thirdPicture:E,fourthPicture:M,fifthPicture:R,sixthPicture:L}),Object(O.jsx)(T,{}),Object(O.jsx)(w,{firstPicture:B,secondPicture:A,thirdPicture:q,fourthPicture:D,fifthPicture:K,sixthPicture:W}),Object(O.jsx)(P,{}),Object(O.jsx)(k,{}),Object(O.jsx)(I,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,644)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};d.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[602,1,2]]]);
//# sourceMappingURL=main.1c67f5e3.chunk.js.map