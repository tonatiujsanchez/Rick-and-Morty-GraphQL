exports.id=453,exports.ids=[453],exports.modules={2996:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>pluck});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8002);function pluck(...properties){const length=properties.length;if(0===length)throw new Error("list of properties cannot be empty.");return source=>(0,_map__WEBPACK_IMPORTED_MODULE_0__.U)(function plucker(props,length){return x=>{let currentProp=x;for(let i=0;i<length;i++){const p=null!=currentProp?currentProp[props[i]]:void 0;if(void 0===p)return;currentProp=p}return currentProp}}(properties,length))(source)}},7057:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>withLatestFrom});var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5197),_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(509);function withLatestFrom(...args){return source=>{let project;"function"==typeof args[args.length-1]&&(project=args.pop());const observables=args;return source.lift(new WithLatestFromOperator(observables,project))}}class WithLatestFromOperator{constructor(observables,project){this.observables=observables,this.project=project}call(subscriber,source){return source.subscribe(new WithLatestFromSubscriber(subscriber,this.observables,this.project))}}class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.L{constructor(destination,observables,project){super(destination),this.observables=observables,this.project=project,this.toRespond=[];const len=observables.length;this.values=new Array(len);for(let i=0;i<len;i++)this.toRespond.push(i);for(let i=0;i<len;i++){let observable=observables[i];this.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.D)(this,observable,void 0,i))}}notifyNext(_outerValue,innerValue,outerIndex){this.values[outerIndex]=innerValue;const toRespond=this.toRespond;if(toRespond.length>0){const found=toRespond.indexOf(outerIndex);-1!==found&&toRespond.splice(found,1)}}notifyComplete(){}_next(value){if(0===this.toRespond.length){const args=[value,...this.values];this.project?this._tryProject(args):this.destination.next(args)}}_tryProject(args){let result;try{result=this.project.apply(this,args)}catch(err){return void this.destination.error(err)}this.destination.next(result)}}},5453:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EpisodiosModule:()=>EpisodiosModule});var common=__webpack_require__(8583),router=__webpack_require__(3575),core=__webpack_require__(639),data_service=__webpack_require__(2468);function EpisodiosComponent_li_5_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",5),core.TgZ(1,"span",6),core._uU(2),core.qZA(),core.TgZ(3,"span",7),core._uU(4),core.qZA(),core._uU(5," - "),core.TgZ(6,"span",8),core._uU(7),core.qZA(),core.qZA()),2&rf){const episode_r1=ctx.$implicit,idx_r2=ctx.index;core.xp6(2),core.Oqu(idx_r2+1),core.xp6(2),core.Oqu(episode_r1.episode),core.xp6(3),core.Oqu(episode_r1.name)}}class EpisodiosComponent{constructor(dataSvc){this.dataSvc=dataSvc,this.episodes$=this.dataSvc.episodes$}ngOnInit(){this.dataSvc.getData()}}EpisodiosComponent.\u0275fac=function EpisodiosComponent_Factory(t){return new(t||EpisodiosComponent)(core.Y36(data_service.D))},EpisodiosComponent.\u0275cmp=core.Xpm({type:EpisodiosComponent,selectors:[["app-episodios"]],decls:7,vars:3,consts:[[1,"episodios"],[1,"episodios__title"],[1,"container"],[1,"episodios__list"],["class","episodio",4,"ngFor","ngForOf"],[1,"episodio"],[1,"episodio__idx"],[1,"episodio__episode"],[1,"episodio__name"]],template:function EpisodiosComponent_Template(rf,ctx){1&rf&&(core.TgZ(0,"section",0),core.TgZ(1,"h1",1),core._uU(2,"Episodios"),core.qZA(),core.TgZ(3,"div",2),core.TgZ(4,"ul",3),core.YNc(5,EpisodiosComponent_li_5_Template,8,3,"li",4),core.ALo(6,"async"),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(5),core.Q6J("ngForOf",core.lcZ(6,1,ctx.episodes$)))},directives:[common.sg],pipes:[common.Ov],styles:[".episodios[_ngcontent-%COMP%]{padding:40px 0}.episodios__title[_ngcontent-%COMP%]{text-align:center;margin-bottom:48px;color:#161f4d}.episodios__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 auto;max-width:700px;grid-gap:2rem;gap:2rem}.episodio[_ngcontent-%COMP%]{padding:1.2rem 2rem;font-size:1.2rem;box-shadow:1px 1px 5px #0003}.episodio__idx[_ngcontent-%COMP%]{font-weight:700;margin-right:1rem}.episodio__episode[_ngcontent-%COMP%]{font-weight:600}"]});const routes=[{path:"",component:EpisodiosComponent}];class EpisodiosRoutingModule{}EpisodiosRoutingModule.\u0275fac=function EpisodiosRoutingModule_Factory(t){return new(t||EpisodiosRoutingModule)},EpisodiosRoutingModule.\u0275mod=core.oAB({type:EpisodiosRoutingModule}),EpisodiosRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});class EpisodiosModule{}EpisodiosModule.\u0275fac=function EpisodiosModule_Factory(t){return new(t||EpisodiosModule)},EpisodiosModule.\u0275mod=core.oAB({type:EpisodiosModule}),EpisodiosModule.\u0275inj=core.cJS({imports:[[common.ez,EpisodiosRoutingModule]]})},2468:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>DataService});var apollo_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7945),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6215),rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5257),rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2996),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7057),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3342),_angular_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(639),apollo_angular__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9904),_favoritos_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7565);const QUERY=apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
{
  episodes{
    results{
      name
      episode
    }
  }
  characters {
    results {
      id
      name
      status
      species
      gender
      created
      origin{
        name
      }
      location{
        name
      }
      image
    }
  }
}`;class DataService{constructor(apollo,favoritosSvc){this.apollo=apollo,this.favoritosSvc=favoritosSvc,this.episodeSubject=new rxjs__WEBPACK_IMPORTED_MODULE_2__.X(null),this.episodes$=this.episodeSubject.asObservable(),this.charactersSubject=new rxjs__WEBPACK_IMPORTED_MODULE_2__.X(null),this.characters$=this.charactersSubject.asObservable()}getPersonaje(idPersonaje){const QUERY_BY_ID=apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
          {
            character(id: ${idPersonaje}) {
              id
              name
              status
              species
              gender
              created
              episode{
                name
              }
              origin{
                name
              }
              location{
                name
              }
              image
            }
          }`;return this.apollo.watchQuery({query:QUERY_BY_ID}).valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.q)(1))}getNetxPage(pageNum){const QUERY_BY_PAGE=apollo_angular__WEBPACK_IMPORTED_MODULE_1__.gql`
          {
            characters(page: ${pageNum}) {
              results {
                id
                name
                status
                species
                gender
                created
                origin{
                  name
                }
                location{
                  name
                }
                image
              }
            }
          }`;this.apollo.watchQuery({query:QUERY_BY_PAGE}).valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.q)(1),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.j)("data","characters"),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.M)(this.characters$),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.b)(([apiResponse,characters])=>{this.parseNewData([...characters,...apiResponse.results])})).subscribe()}getData(){this.apollo.watchQuery({query:QUERY}).valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.q)(1),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.b)(({data:{characters:characters,episodes:episodes}})=>{this.episodeSubject.next(episodes.results),this.parseNewData(characters.results)})).subscribe()}parseNewData(characters){const favoritos=this.favoritosSvc.getFavorites(),newData=characters.map(char=>{const isFav=!!favoritos.find(fav=>fav.id===char.id);return{...char,isFavorite:isFav}});this.charactersSubject.next([...newData])}}DataService.\u0275fac=function DataService_Factory(t){return new(t||DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.LFG(apollo_angular__WEBPACK_IMPORTED_MODULE_8__._M),_angular_core__WEBPACK_IMPORTED_MODULE_7__.LFG(_favoritos_service__WEBPACK_IMPORTED_MODULE_0__.I))},DataService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_7__.Yz7({token:DataService,factory:DataService.\u0275fac,providedIn:"root"})},7565:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>FavoritosService});var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6215),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(639),ngx_toastr__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9344);class FavoritosService{constructor(toastr){this.toastr=toastr,this.charactersFavoritesSubject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.X(null),this.charactersFavorites$=this.charactersFavoritesSubject.asObservable(),this.initialStorage()}initialStorage(){JSON.parse(localStorage.getItem("myfovorites"))||localStorage.setItem("myfovorites",JSON.stringify([])),this.getFavorites()}getFavorites(){try{const charactersFavorites=JSON.parse(localStorage.getItem("myfovorites"));return this.charactersFavoritesSubject.next(charactersFavorites),charactersFavorites}catch(error){return console.error("Error al obtener los favoritos del Local Storage.",error),[]}}toggleFavorito(favorito){favorito.isFavorite=!favorito.isFavorite;this.getFavorites().find(fav=>fav.id===favorito.id)?this.removerFavorito(favorito):this.agregarFavorito(favorito)}agregarFavorito(favorito){try{const favoritos=this.getFavorites();localStorage.setItem("myfovorites",JSON.stringify([...favoritos,favorito])),this.charactersFavoritesSubject.next([...favoritos,favorito]),this.toastr.success("Se agrego a tus Favoritos ",favorito.name,{timeOut:1e3})}catch(error){console.error("Error al guardar el favorito en el Local Storage.",error),this.toastr.error("Error al guardar el favorito en el Local Storage.","Hubo un error",{timeOut:3e3})}}removerFavorito(favorito){try{const favoritosFilter=this.getFavorites().filter(fav=>fav.id!==favorito.id);localStorage.setItem("myfovorites",JSON.stringify(favoritosFilter)),this.charactersFavoritesSubject.next([...favoritosFilter]),this.toastr.warning("Se removio de tus Favoritos ",favorito.name,{timeOut:1e3})}catch(error){console.error("Error al aliminar el favorito en el Local Storage.",error),this.toastr.error("Error al aliminar el favorito en el Local Storage.","Hubo un error",{timeOut:3e3})}}}FavoritosService.\u0275fac=function FavoritosService_Factory(t){return new(t||FavoritosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.LFG(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__._W))},FavoritosService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Yz7({token:FavoritosService,factory:FavoritosService.\u0275fac,providedIn:"root"})}};