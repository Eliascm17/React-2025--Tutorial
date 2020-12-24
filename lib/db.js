import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
    return firestore
        .collection('users')
        .doc(uid)
        .set({ uid, ...data }, { merge: true }, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Data saved successfully!');
            }
        });
}

export function createSite(data) {
    return firestore.collection('sites').add(data);
}
