// import { Request, Response } from 'express';
// import getAllUsers from './getAllUsers';

// describe('Get all users', () => {
//     let mockRequest: Partial<Request>;
//     let mockResponse: Partial<Response>;
//     let responseObjetc = {};

//     beforeEach(() => {
//         mockRequest = {};
//         mockResponse = {
//             statusCode: 0,
//             send: jest.fn().mockImplementation(result => {
//                 responseObjetc = result;
//             })
//         }
//     });

//     test('200 - users', () => {
//         const expectedStatusCode = 200;
//         const expectedResponse = {
//             users: [
//                 {
//                     name: 'Api para teste',
//                     description: 'Teste sendo transmido com sucesso'
//                 }
//             ]
//         };

//         getAllUsers(mockResponse as Response, mockRequest as Request);

//         expect(mockResponse.statusCode).toBe(expectedStatusCode);
//         expect(responseObjetc).toEqual(expectedResponse);
//     });
// });