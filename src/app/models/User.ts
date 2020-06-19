/// <reference types="@types/googlemaps" />
import { isError } from "util";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const User = {
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    emailVerified: null,
    stores: [],
    tutorialSeen: null,
    isLoggeIn: null,
    geolocal: {lat: 41.871, lng: 12.52},
    maxDistance: 100,

    get: () => {
        return {
            uid: User.uid,
            email: User.email,
            displayName: User.displayName,
            photoURL: User.photoURL,
            emailVerified: User.emailVerified,
            stores: User.stores,
            tutorialSeen: User.tutorialSeen,
            isLoggedIn: User.isLoggeIn,
            geolocal: User.geolocal,
            maxDistance: User.maxDistance,
        }
    },

    set: (data: any) => {
        User.uid = data.uid? data.uid: User.uid;
        User.email = data.email? data.email: User.email;
        User.displayName = data.displayName? data.displayName: User.displayName;
        User.photoURL = data.photoURL? data.photoURL: User.photoURL;
        User.emailVerified = data.emailVerified? data.emailVerified: User.emailVerified;
        User.stores = data.stores? data.stores: User.stores;
        User.tutorialSeen = data.tutorialSeen? data.tutorialSeen: User.tutorialSeen;
        User.isLoggeIn = data.isLoggedIn? data.isLoggedIn: User.isLoggeIn;
        User.geolocal = data.geolocal? data.geolocal: User.geolocal;
        User.maxDistance = data.maxDistance? data.maxDistance: User.maxDistance;
    },

    hasStores: () => {
        return (User.stores.length > 0)? true: false; 
    },

    save: () => {
        Storage.set({key:'user', value:JSON.stringify(User.get())})
    }
}

export default User;