const primaryMobile = {
  display: '+91 94697 40901',
  tel: '+919469740901',
  whatsapp: '919469740901',
};

const secondaryMobile = {
  display: '+91 93206 66818',
  tel: '+919320666818',
  whatsapp: '919320666818',
};

const whatsappLink = (message?: string) => {
  const baseUrl = `https://wa.me/${primaryMobile.whatsapp}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

export const getContactConfig = () => ({
  primaryMobile: {
    ...primaryMobile,
    telHref: `tel:${primaryMobile.tel}`,
  },
  secondaryMobile: {
    ...secondaryMobile,
    telHref: `tel:${secondaryMobile.tel}`,
  },
  whatsapp: {
    number: primaryMobile.whatsapp,
    messageHotel: whatsappLink(),
    checkAvailability: whatsappLink(
      'Hello Riverside Royale, I want to check room availability.',
    ),
    askTariff: whatsappLink(
      'Hello Riverside Royale, please share your current room tariff.',
    ),
    directions: whatsappLink(
      'Hello Riverside Royale, I need directions to NH 1, Andoo Road, Kargil.',
    ),
    hotelAvailability: whatsappLink(
      'Hello Riverside Royale, I am looking for a hotel in Kargil and want to check availability.',
    ),
    hotelRoomAvailability: whatsappLink(
      'Hello Riverside Royale, I am looking for a hotel in Kargil and want to check room availability.',
    ),
    bookHotel: whatsappLink(
      'Hello Riverside Royale, I want to book a hotel in Kargil.',
    ),
  },
});
