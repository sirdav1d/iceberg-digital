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
  }
}`;
