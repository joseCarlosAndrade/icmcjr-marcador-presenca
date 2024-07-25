// template para exportar tipos aqui! obs: necessario exportar no index.ts tambem para que seja acessivel 
// de forma mais pratica pelos outros codigos

export interface TemplateProps {
    templateName : string
    templateNumber : number
    templateArray? : number[] // simbolo ? diz que parametro eh opcional ou pode ser nulo
}

// Definição da interface PossivelUsuario para simulação do BD
export interface PossivelUsuario {
    nome: string;
    email: string;
}

// Enum para definir os tipos de cargo
export enum Cargos {
    Membro = 'Membro',
    Diretor = 'Diretor'
}

// Definição da interface Usuario para simulação do BD
export interface Usuario {
    nome: string;
    cargo: Cargos;
}