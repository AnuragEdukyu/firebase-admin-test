import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminDb() {
  console.log("Admin Pannel")
  if (getApps().length > 0) {
    return getFirestore();
  }

  const privateKey = process.env.FIREBASE_PRIVATE_KEY
    ?.replace(/\\n/g, '\n');

  console.log('Project ID:', process.env.FIREBASE_PROJECT_ID);
  console.log('Client Email:', process.env.FIREBASE_CLIENT_EMAIL);
  console.log('Private Key start:', privateKey?.substring(0, 50));

  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  });

  return getFirestore();
}

export { getAdminDb };