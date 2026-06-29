export interface Nav {
  list: { label: string; path: string; icon: string }[];
  social: { link: string; icon: string }[];
}

export interface Header {
  intro: string;
  service: string;
  getCV: string;
  goToContact: string;
  social: { link: string; icon: string }[];
}

export interface Skills {
  title: string;
  subtitle: string;
  frontend: {
    web: { title: string; icon: string }[];
    mobile: { title: string; icon: string }[];
  };
  backend: {
    title: string;
    icon: string;
  }[];
  db: { title: string; icon: string }[];
  tools: { title: string; icon: string }[];
}

export interface Degrees {
  title: string;
  subtitle: string;
  degree: { title: string; description: string }[];
}

export interface Projects {
  title: string;
  subtitle: string;
  projet: {
    name: string;
    tech: { tool: string; icon: string }[];
    description: string;
    photo: string[];
  }[];
}

export interface Experiences {
  title: string;
  subtitle: string;
  exprience: {
    duration: string;
    poste: string;
    firm: string;
    tech: { tool: string; icon: string }[];
    description: string;
  }[];
}

export interface Contacts {
  title: string;
  subtitle: string;
  social: { link: string; icon: string }[];
  contact: { info: string; icon: string }[];
  form: { title: string; fields: { label: string }[] };
}

export interface Data {
  fr: {
    nav: Nav;
    header: Header;
    skills: Skills;
    degrees: Degrees;
    projects: Projects;
    experiences: Experiences;
    contact: Contacts;
    footer: string;
  };
  en: {
    nav: Nav;
    header: Header;
    skills: Skills;
    degrees: Degrees;
    projects: Projects;
    experiences: Experiences;
    contact: Contacts;
    footer: string;
  };
}
