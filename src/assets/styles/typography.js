const FONT_FAMILY = {
    default: "arial",
    title: "verdana",
  };
  
  const FONT_FAMILY_SPECIALS = {
    complementary: "",
    prominent: "",
  };
  
  const FONTS = Object.assign({}, FONT_FAMILY, FONT_FAMILY_SPECIALS);
  
  const SIZES = {
    default: 1.3,
    base: 62.5,
  };
  
  const SIZE_TAGS = {
    h1: 3.2,
    h2: 2.6,
    h3: 2.4,
    h4: 2,
    h5: 1.8,
    h6: 1.6,
    p: 1.3,
  };
  
  const SIZE_SPECIALS = {
    xlarge: 2,
    large: 1.8,
    medium: 1.6,
    small: 1.2,
    xsmall: 1.1,
  };
  
  const FONT_SIZES = Object.assign({}, SIZES, SIZE_TAGS, SIZE_SPECIALS);
  
  const LINE_HEIGHT = {
    default: 1,
    small: 1.2,
    medium: 1.5,
    large: 2.2,
    xlarge: 2.5,
  };
  
  export {
    FONT_FAMILY,
    FONT_FAMILY_SPECIALS,
    FONTS,
    SIZES,
    SIZE_TAGS,
    FONT_SIZES,
    LINE_HEIGHT,
  };
  