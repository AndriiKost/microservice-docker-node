import CarService from '../../src/services/CarService';
import { MockHttpService } from '../mock/MockHttpService';

describe('CarService', () => {

    describe('getAll method', () => {

        it('should call /car endpoint', () => {
            const mockHttp = new MockHttpService();
            const carService = new CarService(mockHttp);
            carService.getAll();

            expect(mockHttp.getCount).toEqual(1);
            expect(mockHttp.getUrl).toContain('/car');
        });

    });

    describe('getOne method', () => {

        it('should call /car/:id endpoint', () => {
            const mockHttp = new MockHttpService();
            const id = 'foo-bar';
            const carService = new CarService(mockHttp);
            carService.getOne(id);

            expect(mockHttp.getCount).toEqual(1);
            expect(mockHttp.getUrl).toContain(`/car/${id}`);
        });

    });


});