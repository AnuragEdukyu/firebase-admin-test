import { getHeroImages } from '@/libs/getHeroImages';

export default async function Home() {
  const { bannerHeroImage, bannerImage } = await getHeroImages();

  return (
    <div>
      <h1>Firebase Admin Test</h1>
      <p>bannerHeroImage: {bannerHeroImage || 'EMPTY - server fetch failed'}</p>
      <p>bannerImage: {bannerImage || 'EMPTY - server fetch failed'}</p>
      {bannerHeroImage && (
        <img src={bannerHeroImage} alt="hero" width="400" />
      )}
    </div>
  );
}