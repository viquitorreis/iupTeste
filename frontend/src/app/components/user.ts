import { Veiculo } from './veiculo.model';
export interface User {
    filter(arg0: (user: any) => boolean);
    id?: number,
    name: string,
    email?: string,
    telefone?: string,
    senha: string,
    veiculos: Array<Veiculo>
}
