import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {business} from '../config/business';
import {products} from '../data/products';
import styles from './index.module.css';

const values = [
  ['Purely eggless', 'Every bake begins without eggs—not as an adaptation, but as the point of view.'],
  ['Balanced sweetness', 'Flavour and texture lead, with sweetness held in thoughtful balance.'],
  ['Small-batch', 'Made to order in limited weekly slots, with care at every finish.'],
  ['Made for celebrations', 'Bakes designed to feel at home in your most meaningful moments.'],
  ['Local to Waterloo', 'Founder-made for celebrations across Waterloo Region.'],
];

const faqs = [
  ['Is everything eggless?', 'Yes. All products are made without eggs. Please review our allergy note below.'],
  ['Do you accommodate allergies?', `Confirm with MELT. ${business.allergyStatement}`],
  ['How early should customers order?', business.orderNoticePeriod],
  ['Where is pickup?', business.pickupWording],
  ['Do you deliver?', business.deliveryAvailability],
  ['Can designs be customized?', 'Confirm with MELT. Share your date, size, flavour direction and design ideas in your enquiry.'],
];

function InstagramLink({children, className}: {children: ReactNode; className?: string}) {
  return <a className={className} href={business.instagramUrl} target="_blank" rel="noreferrer">{children}</a>;
}

function ProductCard({product, featured = false}: {product: (typeof products)[number]; featured?: boolean}) {
  const image = useBaseUrl(product.image);
  return (
    <article className={`${styles.productCard} ${featured ? styles.featuredProduct : ''}`}>
      <img src={image} alt={product.imageAlt} width={featured ? 1200 : 800} height={featured ? 900 : 640} loading={featured ? 'eager' : 'lazy'} />
      <div className={styles.productBody}>
        <p className={styles.eyebrow}>{product.category}{product.seasonal ? ' · Seasonal' : ''}</p>
        <Heading as={featured ? 'h2' : 'h3'}>{product.name}</Heading>
        <p>{product.shortDescription}</p>
        <p className={styles.notes}>{product.flavourNotes.join(' · ')}</p>
        <div className={styles.productMeta}><span>{product.price}</span><span>{product.availabilityNote}</span></div>
      </div>
    </article>
  );
}

export default function Home(): ReactNode {
  const featured = products.find((product) => product.featured)!;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Bakery', name: business.name,
    description: 'Small-batch, made-to-order eggless celebration bakes.',
    areaServed: business.serviceArea, url: business.instagramUrl,
    sameAs: [business.instagramUrl], address: { '@type': 'PostalAddress', addressRegion: 'Ontario', addressCountry: 'CA' },
  };

  return (
    <Layout title="Eggless celebration bakes in Waterloo" description="Purely eggless, thoughtfully sweet celebration bakes made to order in Waterloo Region.">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Made to order · Waterloo Region</p>
            <Heading as="h1">Eggless, never an afterthought.</Heading>
            <p className={styles.heroLead}>Celebration bakes made in Waterloo—purely eggless and just enough sweet.</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} to="/#bakes">Explore Our Bakes</Link>
              <InstagramLink className={styles.secondaryButton}>Order on Instagram</InstagramLink>
            </div>
            <p className={styles.availability}>Small-batch and made to order, with limited weekly availability.</p>
          </div>
          <div className={styles.heroImage} aria-hidden="true"><img src={useBaseUrl('/img/products/rasmalai-celebration.webp')} alt="" /></div>
        </section>

        <section className={styles.section} id="bakes">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Signature collection</p><Heading as="h2">Familiar flavours, considered anew.</Heading><p>Editable examples of the kinds of bakes MELT can create. Enquire for current options and pricing.</p></div>
          <ProductCard product={featured} featured />
          <div className={styles.productGrid}>{products.filter((p) => !p.featured).map((p) => <ProductCard key={p.name} product={p} />)}</div>
        </section>

        <section className={`${styles.section} ${styles.story}`} id="story">
          <div><p className={styles.eyebrow}>The baker behind MELT</p><Heading as="h2">Meet Garima.</Heading></div>
          <div><p>MELT is Garima’s Waterloo-based home bakery, built around the belief that eggless baking deserves its own delicious point of view.</p><p>Each order brings together balanced sweetness, thoughtful flavour, and presentation that feels worthy of the moment—made in small batches, for one celebration at a time.</p></div>
        </section>

        <section className={`${styles.section} ${styles.values}`}>
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Why MELT</p><Heading as="h2">Care you can taste.</Heading></div>
          <div className={styles.valueGrid}>{values.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><Heading as="h3">{title}</Heading><p>{body}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.order}`} id="order">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>How to order</p><Heading as="h2">From idea to celebration.</Heading></div>
          <ol>{[
            ['Browse', 'Explore the collection and gather ideas for your occasion.'],
            ['Send an enquiry', `Message ${business.instagramHandle} with your date and what you have in mind.`],
            ['Confirm the details', 'Together, confirm flavour, size, date, design and applicable order terms.'],
            ['Plan pickup', business.pickupWording],
          ].map(([title, body], i) => <li key={title}><span>{i + 1}</span><div><Heading as="h3">{title}</Heading><p>{body}</p></div></li>)}</ol>
        </section>

        <section className={`${styles.section} ${styles.faq}`} id="faq">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Good to know</p><Heading as="h2">Frequently asked.</Heading></div>
          <div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
          <aside className={styles.allergy}><strong>Allergy note</strong><p>{business.allergyStatement}</p></aside>
        </section>

        <section className={styles.finalCta}><p className={styles.eyebrow}>Your celebration, thoughtfully baked</p><Heading as="h2">Made for the moments worth melting into.</Heading><InstagramLink className={styles.creamButton}>Start an enquiry on Instagram <span aria-hidden="true">↗</span></InstagramLink></section>
      </main>
      <footer className={styles.siteFooter}>
        <div><strong>{business.name}</strong><p>{business.tagline}</p></div><div><p>{business.serviceArea}</p><InstagramLink>{business.instagramHandle}</InstagramLink></div><p className={styles.footerAllergy}>{business.allergyStatement}</p><p>© {new Date().getFullYear()} {business.name}</p>
      </footer>
    </Layout>
  );
}
