# ApexSpecs

### Engenharia automotiva, em cada detalhe.

O **ApexSpecs** é uma experiência web dedicada a carros de alta performance. Explore modelos icônicos, compare especificações e descubra o que existe sob o capô — em uma interface visual, responsiva e feita para destacar cada veículo.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/code%20quality-ESLint-4b32c3?logo=eslint&logoColor=white)](https://eslint.org/)

**[Acesse o repositório](https://github.com/Viniciusacostaa/ApexSpecs)**

---

## Sobre o projeto

O ApexSpecs transforma fichas técnicas em páginas visuais para quem aprecia design, engenharia e desempenho automotivo. A página inicial apresenta uma seleção de veículos; cada modelo tem uma página própria com galeria, números de performance e informações sobre o motor.

### Modelos em destaque

| Modelo | Motor | Potência | 0–100 km/h | Velocidade máxima |
| --- | --- | ---: | ---: | ---: |
| Porsche 911 GT3 (992.2 / 2027) | Boxer de seis cilindros, 4,0 L, aspirado | 510 cv | 3,4 s | 311 km/h |
| BMW M4 CS (G82) | Seis cilindros em linha, 3,0 L, biturbo | 550 cv | 3,4 s | 302 km/h |
| Mercedes-AMG GT Black Series (C190) | V8, 4,0 L, biturbo | 730 cv | 3,2 s | 325 km/h |

> Os dados são apresentados conforme cadastrados no projeto e têm finalidade informativa.

## Experiência

- **Página inicial** com apresentação da marca e cartões para acessar cada veículo.
- **Páginas de detalhes** com geração, introdução, especificações e conteúdo sobre o conjunto motriz.
- **Galeria interativa** com navegação por controles, rotação automática e suporte à preferência por movimento reduzido do sistema.
- **Identidade visual própria**, com imagens locais, tipografia e estilos organizados por componente.
- **Componentes reutilizáveis e tipados** para cartões, galerias e fichas de veículos.

## Tecnologias

- [Next.js 16](https://nextjs.org/) com App Router
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) com integração Turbopack
- [ESLint 9](https://eslint.org/) para análise estática

## Como executar

### Requisitos

- [Node.js](https://nodejs.org/) **20.9 ou superior**
- npm
- Git (opcional, para clonar o repositório)

### Instalação

```bash
git clone https://github.com/Viniciusacostaa/ApexSpecs.git
cd ApexSpecs
npm ci
```

### Servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. O servidor atualiza a aplicação conforme você altera os arquivos.

### Outros comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run lint` | Analisa o código com ESLint. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run start` | Inicia a versão de produção já compilada. |

Para executar em produção localmente:

```bash
npm run build
npm run start
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── page.tsx                         # Página inicial e seleção de veículos
│   ├── layout.tsx                       # Layout global, fontes e metadados
│   ├── globals.css                      # Estilos globais
│   ├── Porsche/page.tsx                 # Ficha do Porsche 911 GT3
│   ├── Bmw/page.tsx                     # Ficha do BMW M4 CS
│   ├── Mercedes/page.tsx                # Ficha do Mercedes-AMG GT Black Series
│   └── components/
│       ├── cardCar/                     # Cartão de veículo
│       ├── footer/                      # Rodapé
│       ├── hero/                        # Cabeçalho da marca
│       └── vehicle-detail/              # Ficha, galeria e tipos compartilhados
└── assets/
    └── imagens/                         # Imagens locais dos veículos e motores
```

## Adicionar ou atualizar um veículo

1. Crie ou atualize a página do modelo em `src/app/<Marca>/page.tsx`.
2. Importe imagens da pasta `src/assets/imagens/` e configure os dados do componente `VehicleDetail`: identificação, galeria, especificações e motor.
3. Adicione um `VehicleCard` correspondente à lista `cars` em `src/app/page.tsx`, com o caminho da página e os dados exibidos na página inicial.
4. Execute `npm run lint` e `npm run build` para validar as alterações.

As páginas de veículo compartilham os componentes em `src/app/components/vehicle-detail/`, mantendo a apresentação e os controles da galeria consistentes entre modelos.

## Publicação

O projeto pode ser implantado em uma plataforma compatível com Next.js. Para instruções específicas de hospedagem, consulte a [documentação oficial de implantação do Next.js](https://nextjs.org/docs/app/getting-started/deploying).

---

Feito para quem vive a paixão por carros e engenharia.

**ApexSpecs — Engineered for Apex.**
