export default function HeroBg({ Component = null }) {
  return (
    <section className="main-banner-vid main-banner-image flex items-center justify-center gap-4 py-14 h-full">
     
      {Component ? <Component /> : ''}
    </section>
  );
}