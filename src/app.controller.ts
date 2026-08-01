import { Controller, Get, Render } from '@nestjs/common';
import { getContactConfig } from './config/contact.config';

@Controller()
export class AppController {
  private pageData(overrides: Record<string, unknown> = {}) {
    return {
      title: 'Riverside Royale | Hotel in Kargil on the Kashmir to Ladakh Route',
      description:
        'Riverside Royale is a hotel in Kargil, Ladakh on NH 1, Andoo Road with comfortable rooms, cafe dining, parking, mountain views, and direct booking support.',
      keywords:
        'Riverside Royale, River Side Royale, hotel in Kargil, Kargil hotel, Ladakh hotel, NH 1 Kargil hotel, Andoo Road hotel',
      canonicalUrl: 'https://riversideroyale.com/',
      ogTitle: 'Riverside Royale Hotel in Kargil',
      ogDescription:
        'Stay elegant, stay royale at Riverside Royale, a riverside hotel in Kargil, Ladakh.',
      ogImage: '/assets/gallary/day_hotel_view.jpeg',
      ogUrl: 'https://riversideroyale.com/',
      favicon: '/assets/logo/logo3.png',
      contact: getContactConfig(),
      ...overrides,
    };
  }

  @Get(['', 'index'])
  @Render('index')
  index() {
    return this.pageData({
      schemaHotel: true,
      isHome: true,
      showHomeHero: true,
      heroTitle: 'Riverside Royale Hotel in Kargil',
      heroLead:
        'Stay elegant, stay royale in a warm Ladakhi hotel with comfortable rooms, cafe dining, valley views, and easy access from the Srinagar-Leh highway.',
    });
  }

  @Get(['about'])
  @Render('about')
  about() {
    return this.pageData({
      title: 'About Riverside Royale | Hotel in Kargil',
      canonicalUrl: 'https://riversideroyale.com/about',
      ogUrl: 'https://riversideroyale.com/about',
      isAbout: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/front_hotel.jpeg',
      bannerKicker: 'About the hotel',
      bannerTitle: 'Riverside comfort in Kargil.',
      bannerLead:
        'A warm hotel stay on NH 1, Andoo Road for guests travelling through Kargil, Ladakh, and the Kashmir to Leh route.',
    });
  }

  @Get(['properties'])
  @Render('properties')
  properties() {
    return this.pageData({
      title: 'Rooms and Amenities | Riverside Royale Kargil',
      canonicalUrl: 'https://riversideroyale.com/properties',
      ogUrl: 'https://riversideroyale.com/properties',
      isRooms: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/room.jpeg',
      bannerKicker: 'Rooms and amenities',
      bannerTitle: 'Comfortable Kargil hotel rooms for every route',
      bannerLead:
        'Choose clean rooms, cafe dining, parking support, and direct booking help for your Kargil stay.',
    });
  }

  @Get(['gallery'])
  @Render('gallery')
  gallery() {
    return this.pageData({
      title: 'Gallery | Riverside Royale Kargil',
      canonicalUrl: 'https://riversideroyale.com/gallery',
      ogUrl: 'https://riversideroyale.com/gallery',
      isGallery: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/night_hotel_view.jpeg',
      bannerKicker: 'Photo gallery',
      bannerTitle: 'Riverside Royale rooms, cafe, and Kargil views',
      bannerLead:
        'See real hotel photos before you book your stay in Kargil.',
    });
  }

  @Get(['blog'])
  @Render('blog')
  blog() {
    return this.pageData({
      title: 'Riverside Royale Blog | Hotel in Kargil and Kashmir to Ladakh Stay Guide',
      description:
        'Read Riverside Royale travel guides for hotel stays in Kargil, Kashmir to Ladakh road trips, NH 1 access, rooms, cafe dining, parking, and direct booking tips.',
      keywords:
        'hotel in Kargil, hotel in Kashmir route, Riverside Royale, Kargil hotel, Kashmir to Ladakh hotel, hotel near NH 1 Kargil, Ladakh hotel guide',
      canonicalUrl: 'https://riversideroyale.com/blog',
      ogTitle: 'Riverside Royale Blog | Hotel in Kargil Guide',
      ogDescription:
        'Local hotel and travel tips for guests planning a Kargil stay on the Kashmir to Ladakh route.',
      ogImage: '/assets/gallary/mountain_cloud.jpeg',
      ogUrl: 'https://riversideroyale.com/blog',
      schemaBlog: true,
      isBlog: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/mountain_cloud.jpeg',
      bannerKicker: 'Riverside Royale blog',
      bannerTitle: 'Hotel in Kargil and Kashmir to Ladakh travel guides.',
      bannerLead:
        'Helpful hotel guides for Kargil stays, Kashmir to Ladakh road trips, NH 1 access, rooms, cafe dining, parking, and direct booking.',
    });
  }

  @Get(['hotel-in-kashmir', 'blog/hotel-in-kargil'])
  @Render('blog-single')
  blogSingle() {
    return this.pageData({
      title: 'Hotel in Kargil Guide | Riverside Royale on the Kashmir to Ladakh Route',
      description:
        'Plan your stay at Riverside Royale, a hotel in Kargil with rooms, cafe dining, parking, mountain views, and direct booking support for Kashmir to Ladakh travelers.',
      keywords:
        'hotel in Kargil, best hotel in Kargil, hotel in Kashmir to Ladakh route, Kargil hotel with parking, Riverside Royale Kargil',
      canonicalUrl: 'https://riversideroyale.com/blog-single',
      ogUrl: 'https://riversideroyale.com/blog-single',
      isBlog: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/location_view.jpeg',
      bannerKicker: 'Featured guide',
      bannerTitle: 'Hotel in Kargil guide by Riverside Royale.',
      bannerLead:
        'A practical guide for choosing a Kargil hotel while travelling from Kashmir to Ladakh, Srinagar to Leh, or Zanskar routes.',
    });
  }

  @Get(['contact'])
  @Render('contact')
  contact() {
    return this.pageData({
      title: 'Contact and Booking | Riverside Royale Kargil',
      canonicalUrl: 'https://riversideroyale.com/contact',
      ogUrl: 'https://riversideroyale.com/contact',
      isContact: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/day_hotel_view.jpeg',
      bannerKicker: 'Contact and booking',
      bannerTitle: 'Book direct with Riverside Royale Kargil.',
      bannerLead:
        'Call or WhatsApp Riverside Royale for room availability, meal timing, parking, directions, and booking support.',
    });
  }
}
