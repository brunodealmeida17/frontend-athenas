
# 🎨 Frontend - Angular (Gerenciamento de Pessoas)

Este é o frontend da aplicação, desenvolvido com **Angular 15+**, proporcionando uma interface interativa para o cadastro de pessoas e cálculo do peso ideal.

## 📂 Estrutura do Projeto

```
frontend/
│── src/
│   ├── app/
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── pessoa-list/    # Lista de pessoas
│   │   │   ├── pessoa-form/    # Formulário (modal) de cadastro
│   │   ├── services/           # Comunicação com API (PessoaService)
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.component.html  # Template principal
│── angular.json                # Configuração do Angular
│── package.json                # Dependências do projeto
│── tsconfig.json               # Configuração do TypeScript
```

## 🚀 Como Rodar o Projeto

### **1️⃣ Instalar o Node.js**
Certifique-se de ter o **Node.js 16+** instalado.

### **2️⃣ Instalar as Dependências**
```bash
npm install
```

### **3️⃣ Configurar o Backend**
No arquivo `pessoa.service.ts`, verifique se a URL da API do backend está correta:

```typescript
private apiUrl = "http://127.0.0.1:8000/api/pessoas/";
```

### **4️⃣ Rodar o Servidor Angular**
```bash
ng serve
```
A interface estará disponível em:  
🔗 `http://localhost:4200`

## 📌 Funcionalidades da Aplicação

✅ **Listagem de Pessoas**  
✅ **Pesquisa por Nome**  
✅ **Cadastro de Nova Pessoa (modal)**  
✅ **Edição e Exclusão de Pessoas**  
✅ **Cálculo do Peso Ideal**  

## 🎯 Tecnologias Utilizadas
- **Angular 15+**
- **Bootstrap**
- **TypeScript**
- **Angular Standalone Components**
- **Angular Services para consumo da API**