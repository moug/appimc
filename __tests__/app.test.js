
const { calcularImc, classificarImc } = require("../app");

describe(
    "Bateria de Testes Unitários do Projeto IMC", 
    ()=> {
        test("Deve lançar uma exceção de validação se peso ou altura for zero", 
            () => {
                expect(() => {
                    calcularImc(70, 0);
                }).toThrow("Validação falhou: Peso e Altura devem ser maiores que zero.");
            });

        test("Deve lançar uma exceção de validação se peso ou altura for negativo", 
            () => {
                expect(() => {
                    calcularImc(-70, 1.75);
                }).toThrow("Validação falhou: Peso e Altura devem ser maiores que zero.");
            });

        test("Deve retornar a faixa de peso correta para os valores do IMC: obesidade grau I", 
            () => {
                const classificacao = classificarImc(32);
                expect(classificacao).toBe("obesidade grau I");
            });
   
    }

    
);