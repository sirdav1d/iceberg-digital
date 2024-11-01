/** @format */

export const HomeQuery = `query MyQuery {
  homepages {
    headline
    logoNav {
      url
    }
    subheadline
    ctaHero
    imageHero {
      url
    }
    clientList
    logoList {
      url
    }
    featureTitle
    features {
      id
      title
      description
      image {
        url
      }
      icon {
        html
        raw
      }
      iconSvg
    }
    benefitsTitle
    benefits {
      id
      title
      description
      image {
        url
      }
    }
    testimonials {
      id
      name
      position
      testimonialDescription
      logo {
        url
      }
      avatar {
        url
      }
    }
  }
}`;

export const PoliticQuery = `query MyQuery {
  politics {
    politicContent
    termContent
  }
}`;
