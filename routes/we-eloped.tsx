const sections = [
  {
    title: 'Venue Details',
    contents: `
    <strong>When?</strong> September 26th from 4pm 'til late <br/>
    <strong>Where?</strong> Upstairs at The Joker, Brighton <br/>
    <div style="margin-top:0.5em;"><strong>Please note:</strong> Kids are welcome, but under-18s are only allowed in the venue until 8pm. There is no lift available, only stairs up to the venue.</div>
    `,
    image: 'elopement/img-1.webp',
  },
  {
    title: 'What to expect',
    contents: `
    There will be music, food, drinks, maybe dancing and karaoke!<br/>
    We will be showing a short video of our ceremony with Hellvis in Las Vegas<br/>
<br/>
    <strong>Food:</strong> There will be a variety of buffet style foods, and cake!<br/>
    <strong>Drink:</strong> Order drinks at our private bar<br/>
    <strong>What to wear:</strong> We will be wearing our wedding outfits, so please come dressed up in something you would want to wear to a Vegas wedding reception`,
    image: 'elopement/img-4.webp',
  },
  {
    title: 'RSVP',
    contents: `<p>Please let us know if you are coming, if you are bringing anybody else, if you have any dietary requirements, etc - click <a href="https://google.com">here</a> to RSVP</p>
    <br/>
    We don't need any presents, we would just love for you to join us if you can!
    <br/><br/>
    If you have any questions, just ask!
`,
    image: 'elopement/img-3.webp',
  }
]

const Section = ({title,contents,image}) => (
  <section className="split-section">
      {image && <div className="image-block">
          <img src={image} alt=""/>
      </div>}
      <div className="text-block" style={{textAlign:'start'}}>
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

        <section>
          <p>We ran away to Las Vegas and got married by Hellvis! We'd love to celebrate with you at our Elopement Party on <strong>Saturday September 26th</strong> at <strong>The Joker in Brighton</strong></p>
        </section>


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
