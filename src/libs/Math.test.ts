import {Math} from './Math';

describe('Testando a biblioteca Math', () => {
    
    it('should sum two numbers correctly', () => {
        const reponse = Math.sum(5, 10);
        expect(reponse).toBe(15);
    });
    
    it('should subtract two numbers correctly', () => {
        const reponse = Math.sub(4, 2);
        expect(reponse).toBe(2);
    });
    
    it('should multiply two numbers correctly', () => {
        const reponse = Math.mut(3, 5);
        expect(reponse).toBe(15);
    });
    
    it('should divide two numbers correctly', () => {
        const reponse = Math.div(15, 5);
        expect(reponse).toBe(3);
    
        const response2 = Math.div(3, 0);
        expect(response2).toBe(false);
    });
});

