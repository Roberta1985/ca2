import { Injectable } from '@angular/core';
 import { Storage } from '@ionic/storage';

 const StoreKEY = 'favouriteChars';
 const StoreKEY2 = 'favouriteEp';

 @Injectable({
   providedIn: 'root'
 })

 export class FavouriteService {

   constructor(private storage: Storage) { }

   getAllFavouriteChars() {
     return this.storage.get(StoreKEY);
   }

   isFavourite(characterId) {
     return this.getAllFavouriteChars().then(result => {
       return result && result.indexOf(characterId) !== -1;
     });
   }

   favouriteChar(characterId) {
     return this.getAllFavouriteChars().then(result => {
       if (result) {
         result.push(characterId);
         return this.storage.set(StoreKEY, result);
       } else {
         return this.storage.set(StoreKEY, [characterId]);
       }
     });
   }

   unfavouriteChar(characterId) {
     return this.getAllFavouriteChars().then(result => {
       if (result) {
         var index = result.indexOf(characterId);
         result.splice(index, 1);
         return this.storage.set(StoreKEY, result);
       }
     });
   }
   //Episodes 
   getAllFavouriteEps() {
     return this.storage.get(StoreKEY2);
   }

   isFav(episodeId) {
     return this.getAllFavouriteEps().then(result => {
       return result && result.indexOf(episodeId) !== -1;
     });
   }

   favouriteEp(episodeId) {
     return this.getAllFavouriteEps().then(result => {
       if (result) {
         result.push(episodeId);
         return this.storage.set(StoreKEY2, result);
       } else {
         return this.storage.set(StoreKEY2, [episodeId]);
       }
     });
   }

   unfavouriteEp(episodeId) {
     return this.getAllFavouriteEps().then(result => {
       if (result) {
         var index = result.indexOf(episodeId);
         result.splice(index, 1);
         return this.storage.set(StoreKEY2, result);
       }
     });
   }

 }
