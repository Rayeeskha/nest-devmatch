import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  private pageData(overrides: Record<string, unknown> = {}) {
    return {
      title: 'Riverside Royale Kargil | Riverside Hotel in Ladakh',
      description:
        'Riverside Royale is a hotel in Kargil, Ladakh on NH 1, Andoo Road with mountain views, comfortable rooms, cafe dining, parking, and direct booking support.',
      keywords:
        'Riverside Royale, River Side Royale, hotel in Kargil, Kargil hotel, Ladakh hotel, NH 1 Kargil hotel, Andoo Road hotel',
      canonicalUrl: 'https://riversideroyale.com/',
      ogTitle: 'Riverside Royale Kargil',
      ogDescription:
        'Stay elegant, stay royale at Riverside Royale, a riverside hotel in Kargil, Ladakh.',
      ogImage: '/assets/gallary/day_hotel_view.jpeg',
      ogUrl: 'https://riversideroyale.com/',
      favicon: '/assets/logo/logo3.png',
      ...overrides,
    };
  }

  @Get([''])
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
        'Use this page to add your hotel story, team details, facilities, and guest experience content.',
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
        'Use this page for room categories, prices, amenities, occupancy, policies, and booking notes.',
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
      bannerTitle: 'Comfortable Kargil hotel rooms for every route',
      bannerLead:
        'Use this page for room, cafe, exterior, mountain view, and guest area photos.',
    });
  }

  @Get(['blog'])
  @Render('blog')
  blog() {
    return this.pageData({
      title: 'Kargil Hotel Blog | Riverside Royale Travel Guide',
      description:
        'Read Riverside Royale hotel blogs for Kargil stays, NH 1 route access, rooms, cafe dining, parking, Ladakh road trips, and direct booking tips.',
      keywords:
        'Kargil hotel blog, Riverside Royale blog, hotel in Kargil guide, NH 1 Kargil stay, Ladakh hotel tips, Kargil travel guide',
      canonicalUrl: 'https://riversideroyale.com/blog',
      ogTitle: 'Kargil Hotel Blog by Riverside Royale',
      ogDescription:
        'SEO-friendly local travel tips for guests staying at Riverside Royale in Kargil, Ladakh.',
      ogImage: '/assets/gallary/mountain_cloud.jpeg',
      ogUrl: 'https://riversideroyale.com/blog',
      schemaBlog: true,
      isBlog: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/mountain_cloud.jpeg',
      bannerKicker: 'Kargil hotel blog',
      bannerTitle: 'Travel smarter through Kargil, Ladakh.',
      bannerLead:
        'Use this page for blog cards, Kargil travel tips, NH 1 guidance, and hotel articles.',
    });
  }

  @Get(['blog-single'])
  @Render('blog-single')
  blogSingle() {
    return this.pageData({
      title: 'Kargil Stay Guide | Riverside Royale',
      canonicalUrl: 'https://riversideroyale.com/blog-single',
      ogUrl: 'https://riversideroyale.com/blog-single',
      isBlog: true,
      showInnerBanner: true,
      bannerImage: '/assets/gallary/location_view.jpeg',
      bannerKicker: 'Featured guide',
      bannerTitle: 'Travel smarter through Kargil, Ladakh.',
      bannerLead:
        'Use this page for the full blog article body, table of contents, FAQs, and booking CTA.',
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
        'Use this page for phone, WhatsApp, address, map, enquiry form, and arrival instructions.',
    });
  }
}
