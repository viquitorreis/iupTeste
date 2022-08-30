import { Veiculo } from './veiculo.model';
export interface User {
    id?: number,
    name: string,
    email?: string,
    telefone?: string,
    senha: string,
    veiculos: Array<Veiculo>
}
