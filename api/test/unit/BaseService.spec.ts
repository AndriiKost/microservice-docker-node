import BaseService from '../../src/services/BaseService';

describe('BaseService', () => {

    it('Should log a message', () => {
        const svc = new BaseService();
        console.log = jest.fn();
        svc.log('success', 'foo-bar');

        expect(console.log).toHaveBeenCalledWith('success: foo-bar');
    });

})