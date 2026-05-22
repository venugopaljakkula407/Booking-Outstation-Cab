/**
 * testData.ts
 * Centralised test data for all scenarios.
 * Change values here without touching test files.
 */

export const cabsData = {
  fromLocation: 'delhi',
  toLocation: 'manali',
  pickupDay: '25',
};

export const giftCardData = {
  amount: '1000',
  quantity: '1',
  sender: {
    name: 'John',
    email: 'john12mailcom',        // intentionally invalid for error validation
    phone: '9876543210',
  },
  receiver: {
    name: 'Doe',
    email: 'doe12@gmail.com',
    retypeEmail: 'doe12@gmail.com',
    phone: '9876543201',
  },
};
