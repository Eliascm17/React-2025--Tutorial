import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: `${process.env.FIREBASE_CLIENT_EMAIL}`,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
        }),
        databaseURL: 'https://react2025-fast-feedback.firebaseio.com'
    });
    console.log('private key', process.env.FIREBASE_PRIVATE_KEY);
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
