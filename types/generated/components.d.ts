import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_blocks_advantages';
  info: {
    description: '';
    displayName: 'advantages';
  };
  attributes: {
    number: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    text: Schema.Attribute.String;
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
    alt_field: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image description'>;
    button: Schema.Attribute.String;
    card_paragraph: Schema.Attribute.Component<'blocks.paragraph', true>;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
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
    address: Schema.Attribute.Component<'components.address', true> &
      Schema.Attribute.Required;
    email: Schema.Attribute.Component<'components.email', false> &
      Schema.Attribute.Required;
    instagram: Schema.Attribute.Component<'components.instagram', false> &
      Schema.Attribute.Required;
    map_link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10168.945675482133!2d-73.8520030792104!3d40.73462019222683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e2c9f40d3d3%3A0x9be550f4a7fea8cf!2zNjMtMzYgMTEwdGggU3QsIEZvcmVzdCBIaWxscywgTlkgMTEzNzUsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1713348979667!5m2!1sru!2sru'>;
    phone: Schema.Attribute.Component<'components.phone', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contacts'>;
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
      Schema.Attribute.Required &
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
    main_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mobile_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface BlocksHowSupported extends Struct.ComponentSchema {
  collectionName: 'components_blocks_how_supporteds';
  info: {
    description: '';
    displayName: 'how_supported';
  };
  attributes: {
    how_supported_tags: Schema.Attribute.Component<
      'components.how-supported-tags',
      true
    >;
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
    alt_field: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'image description'>;
    image: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
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
    descriptions: Schema.Attribute.Component<'blocks.paragraph', true>;
    item: Schema.Attribute.Component<'blocks.advantages', true> &
      Schema.Attribute.Required;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    description: '';
    displayName: 'paragraphs';
  };
  attributes: {
    text: Schema.Attribute.Text;
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
    isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    paragraphs: Schema.Attribute.Component<'blocks.paragraph', true> &
      Schema.Attribute.Required;
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
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ways to help'>;
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
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'What we do'>;
  };
}

export interface ComponentsAddress extends Struct.ComponentSchema {
  collectionName: 'components_components_addresses';
  info: {
    description: '';
    displayName: 'address';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['#fffae9', '#f2ffef']>;
    borderColor: Schema.Attribute.Enumeration<['#dfd1a2', '#ccdbc9']>;
    text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'63-36 110th St, Forest Hills, NY 11375'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Office address'>;
  };
}

export interface ComponentsEmail extends Struct.ComponentSchema {
  collectionName: 'components_components_emails';
  info: {
    description: '';
    displayName: 'email';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'info@kindheartsfund.com'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
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
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your question'>;
    email: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Enter email address'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Introduce yourself'>;
  };
}

export interface ComponentsHowSupportedTags extends Struct.ComponentSchema {
  collectionName: 'components_components_how_supported_tags';
  info: {
    displayName: 'how_supported_tags';
  };
  attributes: {
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'tax free'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInstagram extends Struct.ComponentSchema {
  collectionName: 'components_components_instagrams';
  info: {
    description: '';
    displayName: 'instagram';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.instagram.com/kindheartsfund?igsh=NnoxcjZ0dHV6N2d6'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
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
    href: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'17186350030'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'+1 (718) 6 350 030'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Call us'>;
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
      'components.how-supported-tags': ComponentsHowSupportedTags;
      'components.instagram': ComponentsInstagram;
      'components.list': ComponentsList;
      'components.period': ComponentsPeriod;
      'components.phone': ComponentsPhone;
      'components.section-names': ComponentsSectionNames;
    }
  }
}
