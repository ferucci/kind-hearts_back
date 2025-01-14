import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_blocks_advantages';
  info: {
    description: '';
    displayName: 'advantages';
  };
  attributes: {
    number: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.Integer;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    button: Schema.Attribute.String;
    card_paragraph: Schema.Attribute.Component<'blocks.paragraph', true>;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    linkTo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContacts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    description: '';
    displayName: 'contacts';
  };
  attributes: {
    address: Schema.Attribute.Component<'components.address', true>;
    email: Schema.Attribute.Component<'components.email', false>;
    instagram: Schema.Attribute.Component<'components.instagram', false>;
    map_link: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'components.phone', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Contacts'>;
  };
}

export interface BlocksContent1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_1s';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    add_list: Schema.Attribute.Component<'blocks.cookies-list', true>;
    description: Schema.Attribute.Component<'blocks.paragraph', true>;
    list: Schema.Attribute.Component<'components.list', true>;
    paragraphs: Schema.Attribute.Component<'blocks.paragraph', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCookiesList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cookies_lists';
  info: {
    displayName: 'cookies_list';
  };
  attributes: {
    list: Schema.Attribute.Component<'blocks.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_forms';
  info: {
    description: '';
    displayName: 'form';
  };
  attributes: {
    fields: Schema.Attribute.Component<'components.form-items', false>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Fill out the form and we will contact you shortly.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get a personal consultation'>;
  };
}

export interface BlocksHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_blocks';
  info: {
    description: '';
    displayName: 'hero_block';
  };
  attributes: {
    button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Want to help'>;
    images: Schema.Attribute.Component<'blocks.hero-images', false> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Kindness is proof of God'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Charitable Foundation \u00ABKind Hearts\u00BB'>;
  };
}

export interface BlocksHeroImages extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_images';
  info: {
    description: '';
    displayName: 'hero_images';
  };
  attributes: {
    main_image: Schema.Attribute.Media<'images' | 'files'>;
    mobile_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface BlocksHowSupported extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_supporteds';
  info: {
    description: '';
    displayName: 'how_supported';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'blocks.advantages', true>;
    menuItem_title: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'blocks.paragraph', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'How the state supports philanthropists'>;
  };
}

export interface BlocksOurCasesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_cases_blocks';
  info: {
    displayName: 'our_cases_block';
  };
  attributes: {};
}

export interface BlocksOurCasesCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_cases_cards';
  info: {
    description: '';
    displayName: 'our_cases_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    period: Schema.Attribute.Component<'components.period', false>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksOurData extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_data';
  info: {
    description: '';
    displayName: 'advantages_block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    item: Schema.Attribute.Component<'blocks.advantages', true>;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    description: '';
    displayName: 'paragraphs';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface BlocksPoliceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_police_sections';
  info: {
    displayName: 'police_section';
  };
  attributes: {
    inner_blocks: Schema.Attribute.Component<'blocks.content-1', true>;
    link_connection: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'interpretation'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPolicy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_policies';
  info: {
    description: '';
    displayName: 'policy';
  };
  attributes: {
    content: Schema.Attribute.Component<'blocks.paragraph', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Privacy Policy'>;
  };
}

export interface BlocksSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_blocks_spoilers';
  info: {
    description: '';
    displayName: 'Spoiler';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTags extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface BlocksWaysToHelp extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ways_to_helps';
  info: {
    description: '';
    displayName: 'ways_to_help';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'We accept any donations of any size: you can bring donations of substances, food, things (from real estate and transportation to children\u2019s toys).'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Ways to help'>;
  };
}

export interface BlocksWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_what_we_dos';
  info: {
    description: '';
    displayName: 'what_we_do';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.card', true> &
      Schema.Attribute.Required;
    paragraphs: Schema.Attribute.Component<'blocks.paragraph', true>;
    tags: Schema.Attribute.Component<'blocks.tags', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'What we do'>;
  };
}

export interface ComponentsAddress extends Struct.ComponentSchema {
  collectionName: 'components_components_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    borderColor: Schema.Attribute.String;
    text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'63-36 110th St, Forest Hills, NY 11375'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Office address'>;
  };
}

export interface ComponentsEmail extends Struct.ComponentSchema {
  collectionName: 'components_components_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'mailto:info@kindheartsfund.com'>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'info@kindheartsfund.com'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'E-mail us'>;
  };
}

export interface ComponentsFormItems extends Struct.ComponentSchema {
  collectionName: 'components_components_form_items';
  info: {
    description: '';
    displayName: 'form_items';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Your question'>;
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter email address'>;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Introduce yourself'>;
  };
}

export interface ComponentsInstagram extends Struct.ComponentSchema {
  collectionName: 'components_components_instagrams';
  info: {
    displayName: 'instagram';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.instagram.com/kindheartsfund?igsh=NnoxcjZ0dHV6N2d6'>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'@kindheartsfund'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Follow us on social media'>;
  };
}

export interface ComponentsList extends Struct.ComponentSchema {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    item: Schema.Attribute.Text;
  };
}

export interface ComponentsPeriod extends Struct.ComponentSchema {
  collectionName: 'components_components_periods';
  info: {
    description: '';
    displayName: 'period';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.DefaultTo<'June 2025'>;
    datetime: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2025-06'>;
  };
}

export interface ComponentsPhone extends Struct.ComponentSchema {
  collectionName: 'components_components_phones';
  info: {
    description: '';
    displayName: 'phone';
  };
  attributes: {
    phone: Schema.Attribute.BigInteger &
      Schema.Attribute.DefaultTo<'17186350030'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Call us'>;
    visual: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+1 (718) 6 350 030'>;
  };
}

export interface ComponentsSectionNames extends Struct.ComponentSchema {
  collectionName: 'components_components_section_names';
  info: {
    description: '';
    displayName: 'section_names';
  };
  attributes: {
    link_connection: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'interpretation'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.advantages': BlocksAdvantages;
      'blocks.card': BlocksCard;
      'blocks.contacts': BlocksContacts;
      'blocks.content-1': BlocksContent1;
      'blocks.cookies-list': BlocksCookiesList;
      'blocks.form': BlocksForm;
      'blocks.hero-block': BlocksHeroBlock;
      'blocks.hero-images': BlocksHeroImages;
      'blocks.how-supported': BlocksHowSupported;
      'blocks.our-cases-block': BlocksOurCasesBlock;
      'blocks.our-cases-card': BlocksOurCasesCard;
      'blocks.our-data': BlocksOurData;
      'blocks.paragraph': BlocksParagraph;
      'blocks.police-section': BlocksPoliceSection;
      'blocks.policy': BlocksPolicy;
      'blocks.spoiler': BlocksSpoiler;
      'blocks.tags': BlocksTags;
      'blocks.ways-to-help': BlocksWaysToHelp;
      'blocks.what-we-do': BlocksWhatWeDo;
      'components.address': ComponentsAddress;
      'components.email': ComponentsEmail;
      'components.form-items': ComponentsFormItems;
      'components.instagram': ComponentsInstagram;
      'components.list': ComponentsList;
      'components.period': ComponentsPeriod;
      'components.phone': ComponentsPhone;
      'components.section-names': ComponentsSectionNames;
    }
  }
}
