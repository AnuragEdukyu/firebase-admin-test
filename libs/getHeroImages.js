import { getAdminDb } from './firebaseAdmin';

export async function getHeroImages() {
  try {
    const db = getAdminDb();

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 3000)
    );

    const fetchPromise = db
      .collection('homepage_assets')
      .doc('images')
      .get();

    const docSnap = await Promise.race([fetchPromise, timeoutPromise]);

    if (!docSnap.exists) {
      return { bannerHeroImage: '', bannerImage: '' };
    }

    const data = docSnap.data();
    return {
      bannerHeroImage: data?.heroSection?.bannerHeroImage || '',
      bannerImage: data?.heroSection?.bannerImage || '',
    };
  } catch (err) {
    console.error('getHeroImages failed:', err.message);
    return { bannerHeroImage: '', bannerImage: '' };
  }
}