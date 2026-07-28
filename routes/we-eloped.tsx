const sections = [
  {
    title: 'We Eloped!',
    contents: `<p>We ran away to Vegas and got married by Hellvis! We'd love to see you in Brighton for our Elopement Party on <strong>September 26th</strong> at <strong>The Joker, Brighton</strong></p>`,
    //image: 'elopement/img-1.webp',
  },
  {
    title: 'Venue Details',
    contents: `
    <strong>When?</strong> September 26th from 4pm to late <br/>
    <strong>Where?</strong> Upstairs at The Joker, Brighton <br/>
    Kids are welcome, but are only allowed in the venue until 8pm
    `,
    image: 'elopement/img-1.webp',
  },
  {
    title: 'Other details',
    contents: `
    <strong>What to expect?</strong>Music, food, drinks, karaoke? Dancing?<br/>
    <strong>Food</strong> There will be buffet style food, and cake<br/>
    <strong>Dress Code</strong> We will be wearing our wedding outfits, so please come dressed up in something you would want to wear to a (Vegas) wedding reception`,
    image: 'elopement/img-4.webp',
  },
  {
    title: 'RSVP',
    contents: `<p>Please let us know if you are coming, if you’re bringing family, if you have dietary requirements, etc! Scan the QR code below, or click <a href="https://google.com">here</a> to RSVP</p>
    <img class="qr" src="elopement/qrcode.svg"/>`,
    image: 'elopement/img-3.webp',
  }
]

const Section = ({title,contents,image}) => (
  <section className="split-section">
      {image && <div className="image-block">
          <img src={image} alt=""/>
      </div>}
      <div className="text-block">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: contents }}/>
      </div>
  </section>
)

const Elopement = () => (
<>
<head>
    <title>We Eloped!</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Molle:ital@1&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="elopement/style.css"/>
</head>
<body>

    <main className="container">

        <header>
            <img src="elopement/img-2.webp"/>
            <h1>Chloë & David got Hitched!</h1>
        </header>

        {sections.map(Section)}

        <div className="iframe-wrapper" style={{
          display: 'flex', justifyContent: 'center', paddingTop: 8,
        }}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.4697803971876!2d-0.14160012323561116!3d50.833855271668014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758577c739578f%3A0x74f8ee7581e898d5!2sThe%20Joker%20-%20Brighton!5e1!3m2!1sen!2suk!4v1783379255278!5m2!1sen!2suk" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </main>

</body>
</>
)

export default Elopement
