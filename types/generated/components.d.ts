import type { Schema, Struct } from '@strapi/strapi';

export interface ColorColor extends Struct.ComponentSchema {
  collectionName: 'components_color_colors';
  info: {
    displayName: 'color';
  };
  attributes: {
    color: Schema.Attribute.String;
  };
}

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'highlights';
  };
  attributes: {
    highlights: Schema.Attribute.Text;
  };
}

export interface ProductAvailableOffers extends Struct.ComponentSchema {
  collectionName: 'components_product_available_offers';
  info: {
    displayName: 'availableOffers';
    icon: 'eye';
  };
  attributes: {
    bankOffer: Schema.Attribute.Text;
    offerText: Schema.Attribute.Text;
    partnerOffer: Schema.Attribute.Text;
    specialPrice: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'color.color': ColorColor;
      'highlights.highlights': HighlightsHighlights;
      'product.available-offers': ProductAvailableOffers;
    }
  }
}
