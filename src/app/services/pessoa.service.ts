import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/pessoas/';

export class PessoaService {
  static async listar() {
    return (await axios.get(API_URL)).data;
  }

  static async criar(pessoa: any) {
    return (await axios.post(API_URL, pessoa)).data;
  }

  static async atualizar(id: number, pessoa: any) {
    return (await axios.put(`${API_URL}${id}/`, pessoa)).data;
  }

  static async excluir(id: number) {
    return (await axios.delete(`${API_URL}${id}/`)).data;
  }

  static async calcularPesoIdeal(id: number) {
    return (await axios.get(`${API_URL}${id}/calcular_peso_ideal/`)).data;
  }

  static async pesquisarPorCpf(cpf: string) {
    return (await axios.get(`${API_URL}buscar_por_cpf/?cpf=${cpf}`)).data;
  }
}
