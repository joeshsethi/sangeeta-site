// All site copy lives here so it's easy to update without touching layout code.

export const site = {
  name: "Sangeeta Singh-Kurtz",
  tagline: "Writer",
  instagram: "https://www.instagram.com/sangeeta.s.kurtz/",
  linkedin: "https://www.linkedin.com/in/sangeeta-singh-kurtz/",
  // Contact form endpoint — see README. Leave empty to fall back to a mailto: link.
  formEndpoint: "",
  contactEmail: "",
};

export const nav = [
  { to: "/", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/speaking", label: "Speaking" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const about = {
  photo: "/images/about.webp",
  photoCredit: { name: "Nicholas Takahashi", url: "https://www.instagram.com/ntakahashi217" },
};

export const work = {
  sections: [
    {
      heading: "Features & Investigations",
      items: [
        {
          title: "At Thailand’s Real White Lotus Hotel, Where the Ultrarich Get Coddled",
          blurb: "“Sometimes they’ll ask us to bring the sun.”",
          url: "https://www.vulture.com/article/white-lotus-thailand-hotel-four-seasons-koh-samui.html",
        },
        {
          title: "The Chaos Inside Diddy's Harlem Charter School",
          blurb: "Parents were drawn in by celebrity connections. Instead, their children faced violence and dysfunction.",
          url: "https://www.thecut.com/article/diddy-harlem-charter-school.html",
        },
        {
          title: "The Man of Your Dreams",
          blurb: "For $300, Replika sells an AI companion who will never die, argue, or cheat — until his algorithm is updated.",
          url: "https://www.thecut.com/article/ai-artificial-intelligence-chatbot-replika-boyfriend.html",
        },
        {
          title: "The Big Dissolve",
          blurb: "They blew out their faces. Now they’re melting them down.",
          url: "https://www.thecut.com/2023/02/buccal-fat-removal-dissolve-fillers-bella-hadid-angular-face.html",
        },
        {
          title: "City of Fakes",
          blurb: "Among a certain set of rich New Yorkers, counterfeit luxury bags may be more popular than the real thing",
          url: "https://www.thecut.com/2022/04/repladies-fake-luxury-bags.html",
        },
        {
          title: "How Much Would You Pay for Peace of Mind?",
          blurb: "Prenuvo sells a full-body MRI that’s supposed to ease your anxiety. Some patients say it does the opposite.",
          url: "https://www.thecut.com/article/prenuvo-mri-patients-anxiety.html",
        },
      ],
    },
    {
      heading: "Profiles",
      items: [
        {
          title: "The Meltdown At Miss Universe",
          blurb: "Nadeen Ayoub represented Palestine at the world's biggest and messiest beauty pageant.",
          url: "https://www.thecut.com/article/first-miss-palestine-nadeen-ayoub-interview.html",
        },
        {
          title: "Outdoor Voices Founder Ty Haney Has Moved On. Mostly.",
          blurb: "Three years after her dramatic exit as CEO, she still has some things she’d like to say.",
          url: "https://www.thecut.com/article/outdoor-voices-ty-haney-profile.html",
        },
        {
          title: "Into the Dollhouse",
          blurb: "America Ferrera taught a generation of women to reject traditional beauty standards. So what’s she doing in the Barbie movie?",
          url: "https://www.thecut.com/article/america-ferrera-barbie-movie-profile-cut-cover-july-2023.html",
        },
        {
          title: "The Couple Behind the Skims-Industrial Complex",
          blurb: "A big chunk of the Kardashian family business rides on Emma and Jens Grede.",
          url: "https://www.thecut.com/article/emma-grede-jens-grede-kim-kardashian-skims-kylie-jenner-khy-profile.html",
        },
        {
          title: "Sam Jay Is Still Figuring It Out",
          blurb: <>Profile of the controversial <em>SNL</em> comedian.</>,
          url: "https://www.thecut.com/2021/07/sam-jay-is-still-figuring-it-out.html",
        },
        {
          title: "The Mythmaking of Matthew McConaughey",
          blurb: <>The actor on his book <em>Greenlights</em>.</>,
          url: "https://www.thecut.com/2020/10/matthew-mcconaughey-greenlights-interview.html",
        },
        {
          title: "Aubrey Plaza Isn’t “a Total Psychopath,” You Know",
          blurb: <>The actress on <em>Black Bear</em> and Drake.</>,
          url: "https://www.thecut.com/2020/12/aubrey-plaza-talks-happiest-season-black-bear-and-drake.html",
        },
      ],
    },
  ],
  gallery: [
    "/images/work-1.webp",
    "/images/work-2.webp",
    "/images/work-3.webp",
    "/images/work-4.webp",
  ],
};

export const speaking = {
  heading: "Selected Talks & Media",
  photo: "/images/speaking.webp",
  items: [
    {
      title: "Do Dating Apps Really Want You to Find Love?",
      pub: "Offline with Jon Favreau",
      url: "https://www.youtube.com/watch?v=pgmvPxWDhSA",
    },
    {
      title: "Tinder is reportedly testing a $500 per month subscription plan. Is it worth it?",
      pub: "CNN",
      url: "https://www.cnn.com/videos/business/2023/01/19/nightcap-tinder-500-dollar-subscription-clip-orig-nb.cnn",
    },
    {
      title: "How dating apps are more and more “gamified”",
      pub: "Marketplace",
      url: "https://www.marketplace.org/shows/marketplace-tech/how-dating-apps-are-more-and-more-gamified/",
    },
    {
      title: "Sex and dating in the pandemic",
      pub: "NPR",
      url: "https://www.mprnews.org/episode/2020/10/01/davis-how-do-you-date-during-a-pandemic",
    },
    {
      title: "Mysteries at the Museum",
      pub: "The Travel Channel",
      url: "https://www.travelchannel.com/shows/mysteries-at-the-museum/episodes/lord-lucan-worlds-greatest-drag-racer-and-missing-caravaggio",
    },
  ],
};

export const projects = {
  heading: "Media Projects, Podcasts, & Newsletters",
  photo: "/images/projects.webp",
  items: [
    {
      title: "Land of the Giants",
      pub: "Vox and The Verge",
      blurb:
        "Host of the award-winning narrative podcast series about influential tech companies. The six-episode season focused on the billion-dollar dating app industry. The season won an Adweek Audio Award for best new technology podcast.",
      url: "https://podcasts.apple.com/us/podcast/land-of-the-giants/id1465767420",
    },
    {
      title: "En Plein Air",
      pub: "Substack",
      blurb: "A one year newsletter pop-up, intimate narrative travelogues.",
      url: "https://pleinair.substack.com/",
    },
    {
      title: "The Big Business of Immortality",
      pub: "Quartz",
      blurb: "Once upon a time I spoke to 100 people who think humans can live forever.",
      url: "https://qz.com/1578796/why-silicon-valley-titans-are-obsessed-with-immortality",
    },
  ],
};
