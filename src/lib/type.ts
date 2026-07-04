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
    title: string;
    web: { title: string; icon: string }[];
    mobile: { title: string; icon: string }[];
  };
  backend: {
    title: string;
    tech: {
      title: string;
      icon: string;
    }[];
  };
  db: { title: string; tech: { title: string; icon: string }[] };
  tools: { title: "Outils"; tech: { title: string; icon: string }[] };
}

export interface Degrees {
  title: string;
  subtitle: string;
  degree: { title: string; description: string }[];
}

export interface Projects {
  title: string;
  subtitle: string;
  project: {
    name: string;
    tech: { tools: string; icon: string }[];
    description: string;
    photo: string[];
    link: string;
  }[];
}

export interface Experiences {
  title: string;
  subtitle: string;
  experience: {
    duration: string;
    poste: string;
    firm: string;
    tech: { tools: string; icon: string }[];
    description: string;
  }[];
}

export interface Contacts {
  title: string;
  subtitle: string;
  social: { link: string; icon: string }[];
  contact: { info: string; icon: string }[];
  form: { title: string; fields: { label: string; placeHolder: string }[]; send: string };
}

export interface Data {
  nav: Nav;
  header: Header;
  skills: Skills;
  degrees: Degrees;
  projects: Projects;
  experiences: Experiences;
  contacts: Contacts;
  footer: string;
}

export interface FullData {
  en: Data;
  fr: Data;
}
