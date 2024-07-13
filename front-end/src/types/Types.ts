// template para exportar tipos aqui! obs: necessario exportar no index.ts tambem para que seja acessivel 
// de forma mais pratica pelos outros codigos

export interface TemplateProps {
    templateName : string
    templateNumber : number
    templateArray? : number[] // simbolo ? diz que parametro eh opcional ou pode ser nulo
}