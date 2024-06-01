interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string;
}

function apresentar(pessoa: Pessoa) {
    return `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`;
}

const pessoa: Pessoa = {
    nome: 'João',
    idade: 30
};

const outraPessoa: Pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: 'Desenvolvedora'
};


console.log(apresentar(pessoa));

const pessoas: Pessoa[] = [
    pessoa,
    outraPessoa
];

console.log(pessoas);

const numeros: number[] = [1, 2, 3, 4, 5];
