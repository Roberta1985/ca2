import { Injectable } from '@angular/core';
 import { Storage } from '@ionic/storage';

 const STORAGE_KEY = 'favouriteChars';
 const STORAGE_KEY2 = 'favouriteEp';

 @Injectable({
   providedIn: 'root'
 })

 export class FavouriteService {

   constructor(private storage: Storage) { }

   getAllFavouriteChars() {
     return this.storage.get(STORAGE_KEY);
   }

   isFavourite(charId) {
     return this.getAllFavouriteChars().then(result => {
       return result && result.indexOf(charId) !== -1;
     });
   }

   favouriteChar(charId) {
     return this.getAllFavouriteChars().then(result => {
       if (result) {
         result.push(charId);
         return this.storage.set(STORAGE_KEY, result);
       } else {
         return this.storage.set(STORAGE_KEY, [charId]);
       }
     });
   }

   unfavouriteChar(charId) {
     return this.getAllFavouriteChars().then(result => {
       if (result) {
         var index = result.indexOf(charId);
         result.splice(index, 1);
         return this.storage.set(STORAGE_KEY, result);
       }
     });
   }
   //Favourite of Episodes 
   getAllFavouriteEps() {
     return this.storage.get(STORAGE_KEY2);
   }

   isFav(epId) {
     return this.getAllFavouriteEps().then(result => {
       return result && result.indexOf(epId) !== -1;
     });
   }

   favouriteEp(epId) {
     return this.getAllFavouriteEps().then(result => {
       if (result) {
         result.push(epId);
         return this.storage.set(STORAGE_KEY2, result);
       } else {
         return this.storage.set(STORAGE_KEY2, [epId]);
       }
     });
   }

   unfavouriteEp(epId) {
     return this.getAllFavouriteEps().then(result => {
       if (result) {
         var index = result.indexOf(epId);
         result.splice(index, 1);
         return this.storage.set(STORAGE_KEY2, result);
       }
     });
   }

 }
