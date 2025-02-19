import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PessoaService } from './services/pessoa.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  pessoas: any[] = [];
  usuario: any = {};
  editando: boolean = false;
  cpfPesquisa: string = '';
  inputTimeout: any;
  pesoAtual: number = 0;
  pesoIdeal: number = 0;

  async excluirPessoa(id: number) {
    await PessoaService.excluir(id);
    this.pessoas = await PessoaService.listar();
  }

  async calcularPeso(id: number) {
    const pessoa = this.pessoas.find(p => p.id === id);
    if (pessoa) {
      this.pesoAtual = pessoa.peso;
      const { peso_ideal } = await PessoaService.calcularPesoIdeal(id);
      this.pesoIdeal = peso_ideal;
      const modalElement = document.getElementById('pesoModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }

  abrirModal(pessoa?: any) {
    this.editando = !!pessoa;
    this.usuario = pessoa ? { ...pessoa } : {};
    const modalElement = document.getElementById('usuarioModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  async salvarUsuario() {
    if (this.editando) {
      await PessoaService.atualizar(this.usuario.id, this.usuario);
    } else {
      await PessoaService.criar(this.usuario);
    }
    this.pessoas = await PessoaService.listar();
    this.usuario = {};
    const modal = document.getElementById('usuarioModal');
    if (modal) {
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }
  }

  onCpfInput() {
    clearTimeout(this.inputTimeout);
    this.inputTimeout = setTimeout(() => {
      this.pesquisarPorCpf();
    }, 500);
  }

  async pesquisarPorCpf() {
    if (this.cpfPesquisa) {
      this.pessoas = await PessoaService.pesquisarPorCpf(this.cpfPesquisa);
    } else {
      this.pessoas = await PessoaService.listar();
    }
  }
}
