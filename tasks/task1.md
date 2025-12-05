# Tarefa: Adicionar Endpoints para Automação com Discord

## Objetivo
Implementar estrutura base de endpoints para integração de automação com Discord, preparando o projeto para futuras implementações de lógica.

## Escopo

### 1. Instalação e Configuração do Supabase
- Instalar cliente Supabase utilizando o modulo do supabase para o nuxt
    - Inicializar cliente Supabase reutilizável
    - tambem criar helpers para utilização.
- Criar arquivo de configuração com variáveis de ambiente (URL e chave API)

### 2. Criação de Rotas/Endpoints
As seguintes rotas devem ser criadas **sem lógica implementada**:

- **POST** `/api/discord/events` - Receber eventos/webhooks do Discord
- **POST** `/api/discord/messages` - Enviar mensagens para Discord
- **POST** `/api/discord/roles` - Gerenciar atribuição de roles
- **GET** `/api/discord/users/:userId` - Recuperar dados de usuário do Discord
- **POST** `/api/discord/automation` - Criar/iniciar automações
- **GET** `/api/discord/automation/:automationId` - Recuperar status de automação
- **POST** `/api/discord/commands` - Registrar/criar novos comandos
- **GET** `/api/discord/commands` - Listar todos os comandos disponíveis
- **GET** `/api/discord/commands/:commandId` - Recuperar detalhes de um comando
- **PUT** `/api/discord/commands/:commandId` - Atualizar comando existente
- **DELETE** `/api/discord/commands/:commandId` - Deletar comando
- **POST** `/api/discord/commands/:commandId/execute` - Executar um comando

### 3. Arquivos Helpers/Utils
Criar estrutura de helpers para integração Discord:

- `helpers/supabase.ts` - Funções de conexão com banco de dados
- `helpers/discordClient.ts` - Inicialização do cliente Discord
- `utils/discordValidation.ts` - Validar tokens, IDs e payloads do Discord
- `utils/eventProcessor.ts` - Processador base de eventos (vazio)
- `utils/messageFormatter.ts` - Formatação de mensagens para Discord

## Resultado Esperado
Projeto estruturado e pronto para implementação de lógica dos endpoints, com integração Supabase configurada e helpers organizados.