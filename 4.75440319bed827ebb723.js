(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{WLUK:function(t,c,e){"use strict";e.r(c),e.d(c,"ProductsModule",function(){return D});var o=e("ofXK"),r=e("tyNb"),n=e("fXoL"),i=e("lJxs"),a=e("AytR"),s=e("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.$products=this.getAllProductsApi()}getAllProductsApi(){return this.http.get(""+a.a.products_api)}getAllProducts(){return this.$products}getInternationalProducts(){return this.$products=this.getAllProductsApi(),this.$products.pipe(Object(i.a)(t=>t.filter(t=>!0===t.isInternational)))}getProductById(t){return this.$products||(this.$products=this.getAllProductsApi()),this.$products.pipe(Object(i.a)(c=>c.filter(c=>c.id===t)))}getProductsByCategory(t,c=!1){return this.$products="United States"!=localStorage.getItem("defaultLocation")?this.getInternationalProducts():this.getAllProductsApi(),this.$products.pipe(c?Object(i.a)(c=>c.filter(c=>c.category===t).slice(0,3)):Object(i.a)(c=>c.filter(c=>c.category===t)))}}return t.\u0275fac=function(c){return new(c||t)(n.Ub(s.a))},t.\u0275prov=n.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=e("sYmb");const b=function(t){return["product",t]};function p(t,c){if(1&t&&(n.Nb(0,"a",9),n.wc(1),n.ac(2,"translate"),n.Mb()),2&t){const t=n.Zb(2);n.gc("routerLink",n.jc(4,b,t.product.id)),n.wb(1),n.yc(" ",n.bc(2,2,"COMPONENTS.PRODUCT-CART.more-btn"),"")}}const u=function(t){return["/","product",t]};function g(t,c){if(1&t&&(n.Nb(0,"a",9),n.wc(1),n.ac(2,"translate"),n.Mb()),2&t){const t=n.Zb(2);n.gc("routerLink",n.jc(4,u,t.product.id)),n.wb(1),n.xc(n.bc(2,2,"COMPONENTS.PRODUCT-CART.more-btn"))}}function h(t,c){1&t&&(n.Nb(0,"div",10),n.Nb(1,"span"),n.wc(2,"\ud83c\udf0e"),n.Mb(),n.Mb())}function m(t,c){1&t&&(n.Nb(0,"div",10),n.Nb(1,"span"),n.wc(2,"\ud83d\udcc8"),n.Mb(),n.Mb())}function M(t,c){if(1&t&&(n.Lb(0),n.Nb(1,"div",1),n.Jb(2,"img",2),n.Nb(3,"div",3),n.Nb(4,"h5",4),n.wc(5),n.ac(6,"slice"),n.Mb(),n.Nb(7,"p",5),n.wc(8),n.Mb(),n.uc(9,p,3,6,"a",6),n.uc(10,g,3,6,"a",6),n.Nb(11,"div",7),n.uc(12,h,3,0,"div",8),n.uc(13,m,3,0,"div",8),n.Mb(),n.Mb(),n.Mb(),n.Kb()),2&t){const t=n.Zb();n.wb(2),n.gc("src",t.product.image,n.pc)("alt",t.product.title),n.wb(3),n.xc(n.dc(6,8,t.product.title,0,15)),n.wb(3),n.yc("$",t.product.price,""),n.wb(1),n.gc("ngIf",t.isMainPage),n.wb(1),n.gc("ngIf",!t.isMainPage),n.wb(2),n.gc("ngIf",t.product.isInternational),n.wb(1),n.gc("ngIf",t.product.isTopSales)}}let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=n.Cb({type:t,selectors:[["app-product-card"]],inputs:{product:"product",isMainPage:"isMainPage"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"card"],["height","150",1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["class","btn btn-primary",3,"routerLink",4,"ngIf"],[1,"row"],["class","col-6 text-center",4,"ngIf"],[1,"btn","btn-primary",3,"routerLink"],[1,"col-6","text-center"]],template:function(t,c){1&t&&n.uc(0,M,14,12,"ng-container",0),2&t&&n.gc("ngIf",c.product)},directives:[o.k,r.b],pipes:[o.p,d.c],styles:[".card-img-top[_ngcontent-%COMP%]{object-fit:scale-down;padding:10px}"]}),t})();function w(t,c){1&t&&(n.Nb(0,"div",4),n.Nb(1,"a",5),n.wc(2),n.ac(3,"translate"),n.Mb(),n.Mb()),2&t&&(n.wb(2),n.xc(n.bc(3,1,"PAGES.PRODUCT-DETAILS.go-back-btn")))}function S(t,c){if(1&t&&(n.Nb(0,"div",6),n.Nb(1,"div",7),n.Nb(2,"div",8),n.Jb(3,"img",9),n.Mb(),n.Mb(),n.Nb(4,"div",10),n.Nb(5,"div",11),n.Nb(6,"h3"),n.wc(7),n.Mb(),n.Nb(8,"h6"),n.wc(9),n.Mb(),n.Nb(10,"h3"),n.wc(11),n.Mb(),n.Nb(12,"p"),n.wc(13),n.Mb(),n.Mb(),n.Jb(14,"hr"),n.Nb(15,"div",11),n.Nb(16,"button",12),n.wc(17),n.ac(18,"translate"),n.Mb(),n.Nb(19,"button",13),n.wc(20),n.ac(21,"translate"),n.Mb(),n.Mb(),n.Mb(),n.Mb()),2&t){const t=n.Zb();n.wb(3),n.gc("src",t.productData.image,n.pc)("alt",t.productData.title),n.wb(4),n.xc(t.productData.title),n.wb(2),n.xc(t.productData.category),n.wb(2),n.yc("$",t.productData.price,""),n.wb(2),n.xc(t.productData.description),n.wb(4),n.xc(n.bc(18,8,"PAGES.PRODUCT-DETAILS.buy-btn")),n.wb(3),n.xc(n.bc(21,10,"PAGES.PRODUCT-DETAILS.add-to-cart-btn"))}}function O(t,c){1&t&&n.Jb(0,"app-product-card",16),2&t&&n.gc("product",c.$implicit)("isMainPage",!1)}function y(t,c){if(1&t&&(n.Nb(0,"div",14),n.Nb(1,"h2"),n.wc(2),n.ac(3,"translate"),n.Mb(),n.Nb(4,"div",6),n.uc(5,O,1,2,"app-product-card",15),n.ac(6,"async"),n.Mb(),n.Mb()),2&t){const t=n.Zb();n.wb(2),n.xc(n.bc(3,2,"PAGES.PRODUCT-DETAILS.may-like")),n.wb(3),n.gc("ngForOf",n.bc(6,4,t.$productsLikeThis))}}let P=(()=>{class t{constructor(t,c){this.activeRoute=t,this.productService=c}ngOnInit(){this.activeRoute.paramMap.subscribe(t=>{this.productId=t.get("id"),this.productId&&this.productService.getProductById(Number(this.productId)).subscribe(t=>{this.productData=t[0],this.$productsLikeThis=this.productService.getProductsByCategory(this.productData.category,!0)})})}}return t.\u0275fac=function(c){return new(c||t)(n.Ib(r.a),n.Ib(l))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-details"]],decls:4,vars:3,consts:[[1,"container","section"],["class","container py-4",4,"ngIf"],["class","row",4,"ngIf"],["class","others-container my-5",4,"ngIf"],[1,"container","py-4"],["routerLink","/",1,"btn","btn-outline-info"],[1,"row"],[1,"col-lg-4","col-md-4","col-sm-12"],[1,"product-image-container","py-md-5","px-md-5","py-sm-2"],[1,"product-image","fade-in",3,"src","alt"],[1,"col-lg-8","col-md-8","col-sm-12"],[1,"py-md-5","px-md-5","py-sm-2"],[1,"btn","btn-primary"],[1,"btn","btn-outline-secondary","ml-4"],[1,"others-container","my-5"],["class","col-lg-4 col-md-6 col-sm-12 my-2",3,"product","isMainPage",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-sm-12","my-2",3,"product","isMainPage"]],template:function(t,c){1&t&&(n.Nb(0,"section",0),n.uc(1,w,4,3,"div",1),n.uc(2,S,22,12,"div",2),n.uc(3,y,7,6,"div",3),n.Mb()),2&t&&(n.wb(1),n.gc("ngIf",c.productData),n.wb(1),n.gc("ngIf",c.productData),n.wb(1),n.gc("ngIf",c.productData))},directives:[o.k,r.b,o.j,f],pipes:[d.c,o.b],styles:[".section[_ngcontent-%COMP%]{min-height:100vh}.product-image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.product-image[_ngcontent-%COMP%]{max-width:100%}@media (max-width:768px){.product-image[_ngcontent-%COMP%]{max-height:350px}}"]}),t})();var v=e("JEiN"),N=e("3Pt+");function I(t,c){1&t&&n.Jb(0,"app-product-card",24),2&t&&n.gc("product",c.$implicit)("isMainPage",!0)}function A(t,c){1&t&&(n.Nb(0,"div"),n.wc(1),n.ac(2,"translate"),n.Mb()),2&t&&(n.wb(1),n.xc(n.bc(2,1,"PAGES.HOME.no-records")))}let E=(()=>{class t{constructor(t,c){this.productService=t,this.locationService=c,this.category="",this.searchString=""}ngOnInit(){this.$products=this.productService.getAllProducts(),this.locationService.$defaultLocation.subscribe(t=>{this.$products="United States"!=localStorage.getItem("defaultLocation")?this.productService.getInternationalProducts():this.productService.getAllProductsApi()}),this.sortOptionSelected=localStorage.getItem("sortOption")||C.DEFAULT,this.categoryOptionSelected=localStorage.getItem("categoryOption")||"all",this.searchString=localStorage.getItem("search")||"",this.checkLocalStorageForCache()}checkLocalStorageForCache(){localStorage.getItem("categoryOption")&&this.onSelectCategoryOption(localStorage.getItem("categoryOption")),localStorage.getItem("sortOption")&&this.filterProducts(localStorage.getItem("sortOption")),localStorage.getItem("search")&&this.onSearchProduct(localStorage.getItem("search"))}filterProducts(t){this.$products=t!=C.DEFAULT?this.$products.pipe(Object(i.a)(c=>t===C.LOWER?c.sort((t,c)=>t.price-c.price):t===C.HIGHEST?c.sort((t,c)=>c.price-t.price):t===C.POPULAR?c.filter(t=>!0===t.isTopSales):[])):this.productService.$products}onSelectOrderOption(t){localStorage.setItem("sortOption",t),this.sortOptionSelected=t,this.filterProducts(this.sortOptionSelected)}resetAllFilterOptions(){localStorage.removeItem("sortOption"),localStorage.removeItem("categoryOption"),localStorage.removeItem("search"),this.sortOptionSelected=C.DEFAULT,this.categoryOptionSelected="all",this.searchString="",this.$products=this.productService.getAllProducts()}onSelectCategoryOption(t){localStorage.setItem("categoryOption",t),this.categoryOptionSelected=t,"all"!=this.categoryOptionSelected?this.$products=this.productService.getProductsByCategory(this.categoryOptionSelected):(this.resetAllFilterOptions(),this.$products=this.productService.getAllProducts())}onSearchProduct(t){localStorage.setItem("search",t),this.searchString=t,""!=this.searchString&&(this.$products=this.$products.pipe(Object(i.a)(t=>t.filter(t=>t.title.toLowerCase().includes(this.searchString.toLowerCase())))))}}return t.\u0275fac=function(c){return new(c||t)(n.Ib(l),n.Ib(v.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-home"]],decls:57,vars:51,consts:[[1,"container","py-4","filter-container"],[1,"row"],[1,"col-lg-8","col-md-12","col-sm-12"],[1,"form-group"],["for","categoriesSelect"],["id","categoriesSelect",1,"form-control","custom-select","mr-md-3","ml-md-2",3,"ngModel","ngModelChange"],["selected","","value","all"],["value","electronics"],["value","jewelery"],["value","men clothing"],["value","women clothing"],["for","sortingSelect"],["id","sortingSelect",1,"form-control","custom-select","ml-md-2",3,"ngModel","ngModelChange"],["selected","","value","default"],["value","lower"],["value","highest"],["value","popular"],[1,"col-lg-3","col-md-12","col-sm-12"],["type","text","id","exampleInputEmail1",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[1,"col-lg-1","col-md-12","col-sm-12"],[1,"btn","btn-danger",3,"click"],[1,"container","py-4","products-container"],["class","col-lg-4 col-md-6 col-sm-12 mb-3 fade-in",3,"product","isMainPage",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-4","col-md-6","col-sm-12","mb-3","fade-in",3,"product","isMainPage"]],template:function(t,c){if(1&t&&(n.Nb(0,"div",0),n.Nb(1,"h4"),n.wc(2),n.ac(3,"translate"),n.Mb(),n.Nb(4,"div",1),n.Nb(5,"div",2),n.Nb(6,"div",3),n.Nb(7,"label",4),n.wc(8),n.ac(9,"translate"),n.Mb(),n.Nb(10,"select",5),n.Xb("ngModelChange",function(t){return c.categoryOptionSelected=t})("ngModelChange",function(t){return c.onSelectCategoryOption(t)}),n.Nb(11,"option",6),n.wc(12),n.ac(13,"translate"),n.Mb(),n.Nb(14,"option",7),n.wc(15),n.ac(16,"translate"),n.Mb(),n.Nb(17,"option",8),n.wc(18),n.ac(19,"translate"),n.Mb(),n.Nb(20,"option",9),n.wc(21),n.ac(22,"translate"),n.Mb(),n.Nb(23,"option",10),n.wc(24),n.ac(25,"translate"),n.Mb(),n.Mb(),n.Nb(26,"label",11),n.wc(27),n.ac(28,"translate"),n.Mb(),n.Nb(29,"select",12),n.Xb("ngModelChange",function(t){return c.sortOptionSelected=t})("ngModelChange",function(t){return c.onSelectOrderOption(t)}),n.Nb(30,"option",13),n.wc(31),n.ac(32,"translate"),n.Mb(),n.Nb(33,"option",14),n.wc(34),n.ac(35,"translate"),n.Mb(),n.Nb(36,"option",15),n.wc(37),n.ac(38,"translate"),n.Mb(),n.Nb(39,"option",16),n.wc(40),n.ac(41,"translate"),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(42,"div",17),n.Nb(43,"div",3),n.Nb(44,"input",18),n.Xb("ngModelChange",function(t){return c.searchString=t})("ngModelChange",function(t){return c.onSearchProduct(t)}),n.ac(45,"translate"),n.Mb(),n.Mb(),n.Mb(),n.Nb(46,"div",19),n.Nb(47,"div",3),n.Nb(48,"button",20),n.Xb("click",function(){return c.resetAllFilterOptions()}),n.wc(49),n.ac(50,"translate"),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(51,"div",21),n.Nb(52,"div",1),n.uc(53,I,1,2,"app-product-card",22),n.ac(54,"async"),n.uc(55,A,3,3,"div",23),n.ac(56,"async"),n.Mb(),n.Mb()),2&t){let t=null;n.wb(2),n.xc(n.bc(3,19,"PAGES.HOME.filter-title")),n.wb(6),n.yc("",n.bc(9,21,"PAGES.HOME.category.title"),": "),n.wb(2),n.gc("ngModel",c.categoryOptionSelected),n.wb(2),n.xc(n.bc(13,23,"PAGES.HOME.category.options.all")),n.wb(3),n.xc(n.bc(16,25,"PAGES.HOME.category.options.electronics")),n.wb(3),n.xc(n.bc(19,27,"PAGES.HOME.category.options.jewelery")),n.wb(3),n.xc(n.bc(22,29,"PAGES.HOME.category.options.man")),n.wb(3),n.xc(n.bc(25,31,"PAGES.HOME.category.options.women")),n.wb(3),n.yc("",n.bc(28,33,"PAGES.HOME.order.title"),":"),n.wb(2),n.gc("ngModel",c.sortOptionSelected),n.wb(2),n.xc(n.bc(32,35,"PAGES.HOME.order.options.default")),n.wb(3),n.xc(n.bc(35,37,"PAGES.HOME.order.options.lower")),n.wb(3),n.xc(n.bc(38,39,"PAGES.HOME.order.options.higher")),n.wb(3),n.xc(n.bc(41,41,"PAGES.HOME.order.options.best")),n.wb(4),n.hc("placeholder",n.bc(45,43,"PAGES.HOME.search-bar")),n.gc("ngModel",c.searchString),n.wb(5),n.xc(n.bc(50,45,"PAGES.HOME.reset-btn")),n.wb(4),n.gc("ngForOf",n.bc(54,47,c.$products)),n.wb(2),n.gc("ngIf",0==(null==(t=n.bc(56,49,c.$products))?null:t.length))}},directives:[N.h,N.e,N.f,N.g,N.i,N.a,o.j,o.k,f],pipes:[d.c,o.b],styles:[".products-container[_ngcontent-%COMP%]{min-height:100vh}.custom-select[_ngcontent-%COMP%]{width:35%}@media (max-width:768px){.custom-select[_ngcontent-%COMP%]{width:100%}}"]}),t})();var C=function(t){return t.DEFAULT="default",t.LOWER="lower",t.HIGHEST="highest",t.POPULAR="popular",t}({});const x=[{path:"",children:[{path:"",component:E},{path:"product/:id",component:P}]}];let L=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(c){return new(c||t)},imports:[[r.c.forChild(x)],r.c]}),t})();var $=e("1kSV");let D=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(c){return new(c||t)},imports:[[o.c,L,N.b,$.h,d.b]]}),t})()}}]);