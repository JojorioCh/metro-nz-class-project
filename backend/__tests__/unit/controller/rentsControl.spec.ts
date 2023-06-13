import * as rentController from '../../../src/controllers/rentController';
import { createRequest, createResponse } from 'node-mocks-http';

describe('getAllRents', () => {
  test('should retrieve all rent listings and send them in the response', async () => {
    // Arrange
    const req = createRequest();
    const res = createResponse();
    const expected = [
      {
        location: 'Auckland',
        suburb: 'Grey Lynn',
        rentprice: 500,
        bedrooms: 3,
        propertytype: 'Unit',
        bathrooms: 2,
        carparks: 2,
      },
      {
        location: 'Auckland',
        suburb: 'Remuera',
        rentprice: 300,
        bedrooms: 1,
        propertytype: 'House',
        bathrooms: 1,
        carparks: 1,
      },
      {
        location: 'Auckland',
        suburb: 'Parnell',
        rentprice: 200,
        bedrooms: 2,
        propertytype: 'Townhouse',
        bathrooms: 1,
        carparks: 1,
      },
    ];

    // Act
    await rentController.getAllRents(req, res);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(expected);
  });
});

describe('getFilteredRents', () => {
  test('should retrieve rents that match the specified filters', async () => {
    // Arrange
    const req = createRequest({
      query: {
        location: 'Auckland',
        suburb: 'Grey Lynn',
        propertytype: 'Unit',
        rentmin: 400,
        rentmax: 600,
        bedrooms: 3,
      },
    });
    const res = createResponse();
    const expected = [
      {
        location: 'Auckland',
        suburb: 'Grey Lynn',
        rentprice: 500,
        bedrooms: 3,
        propertytype: 'Unit',
        bathrooms: 2,
        carparks: 2,
      },
    ];

    // Act
    await rentController.getFilteredRents(req, res);

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(expected);
  });
});

describe('getAllRents', () => {
  test('should return a 404 status code when no rents match the provided filters', async () => {
    // Arrange
    const req = createRequest({
      query: {
        location: 'Auckland',
        suburb: 'Invalid Suburb',
      },
    });
    const res = createResponse();
    const expected = {
      message: 'No rents found matching the provided criteria',
    };

    // Act
    await rentController.getFilteredRents(req, res);

    // Assert
    expect(res.statusCode).toBe(404);
    expect(res._getJSONData()).toEqual(expected);
  });
});
