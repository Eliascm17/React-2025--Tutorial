import admin from 'firebase-admin';

if (!admin.apps.length) {
    let privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: `${process.env.FIREBASE_CLIENT_EMAIL}`,
            privateKey,
            projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`
        }),
        databaseURL: 'https://react2025-fast-feedback.firebaseio.com'
    });
    console.log(process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'));
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
