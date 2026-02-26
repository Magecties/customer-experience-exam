import MostWantedHero from "../components/MostWantedHero";

const JACKETS = [
  {
    id: 1,
    label: 'FAUX LEATHER MOTO JACKET',
    price: '2199 DKK',
    image: '/images/jacket-moto.png',   // ← your product image
  },
  {
    id: 2,
    label: 'FAUX LEATHER MOTO JACKET',
    price: '2199 DKK',
    image: '/images/jacket-track.png',
  },
  {
    id: 3,
    label: 'sebbi sutter min fede finger',
    price: '2199 DKK',
    image: '/images/jacket-bomber.png',
  },
];

export default function HomePage() {
  return (
    <main>
      <MostWantedHero
        items={JACKETS}
        onCardClick={(item) => console.log('clicked:', item)}
      />
    </main>
  );
}