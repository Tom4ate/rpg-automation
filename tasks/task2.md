# Descrição da Tarefa: Refatoração do Dashboard com Componentes Genéricos Reutilizáveis

## Objetivo
Refatorar o componente Dashboard para utilizar componentes genéricos e reutilizáveis, eliminando dependências hardcoded e permitindo composição flexível através de rotas.

## Rotas Definidas
- `/dashboard` - Dashboard principal
- `/dashboard/analytics` - Análise de dados
- `/dashboard/reports` - Relatórios
- `/dashboard/settings` - Configurações

## Componentes Genéricos a Serem Criados

| Componente | Caminho | Responsabilidade |
|-----------|---------|-----------------|
| `BaseLayout` | `@/components/layouts/BaseLayout.vue` | Layout principal reutilizável |
| `BaseHeader` | `@/components/common/BaseHeader.vue` | Header genérico com title e actions |
| `BaseCard` | `@/components/common/BaseCard.vue` | Card genérico para conteúdo |
| `BaseGrid` | `@/components/common/BaseGrid.vue` | Grid responsivo para layouts |
| `BaseStats` | `@/components/common/BaseStats.vue` | Container genérico para estatísticas |
| `StatItem` | `@/components/common/StatItem.vue` | Item individual de estatística |

## Requisitos de Implementação
- Props configuráveis para cada componente
- Slots para conteúdo flexível
- Temas/variantes de styling
- Responsividade mobile-first
- Sem dependências de lógica específica de dashboard
## Tarefas de Criação das Páginas

### 1. Página `/dashboard` - Dashboard Principal

**Visual Geral:**
- Layout em grid com sidebar navegável à esquerda
- Área principal com fundo neutro claro
- Header fixo no topo com título e ações rápidas

**Disposição de Componentes:**
```
┌─────────────────────────────────────────┐
│ BaseHeader (título, breadcrumb, ações)  │
├──────────┬──────────────────────────────┤
│ Sidebar  │ BaseGrid (3 colunas)         │
│ Naveg.   │ ┌────────┬────────┬────────┐ │
│          │ │BaseCard│BaseCard│BaseCard│ │
│          │ │ (KPI)  │ (KPI)  │ (KPI)  │ │
│          │ ├────────┴────────┴────────┤ │
│          │ │    BaseStats (full)      │ │
│          │ │  ┌──────┬──────┬──────┐  │ │
│          │ │  │Item 1│Item 2│Item 3│  │ │
│          │ │  └──────┴──────┴──────┘  │ │
│          │ └──────────────────────────┘ │
└──────────┴──────────────────────────────┘
```

**Conteúdo:**
- 3 BaseCards topo (KPIs: Receita, Usuários, Conversão)
- BaseStats com 6 StatItems (métricas principais)
- Gráfico de tendências (em BaseCard)

### 2. Página `/dashboard/analytics` - Análise de Dados

**Visual Geral:**
- Grid responsivo com cards de análise
- Filtros no topo (data, categoria)
- Gráficos em cards dimensionáveis

**Disposição de Componentes:**
```
Header com filtros
└─ BaseGrid (2 colunas)
    ├─ BaseCard (Gráfico linha)
    ├─ BaseCard (Gráfico pizza)
    ├─ BaseCard (Tabela dados)
    └─ BaseCard (Mapa calor)
```

### 3. Página `/dashboard/reports` - Relatórios

**Visual Geral:**
- Layout lista de relatórios disponíveis
- Cards formatados como relatórios
- Ações de download/visualização

**Disposição de Componentes:**
```
Header com busca/filtros
└─ BaseGrid (1-2 colunas)
    ├─ BaseCard (Relatório 1 com preview)
    ├─ BaseCard (Relatório 2 com preview)
    └─ BaseCard (Relatório 3 com preview)
```

### 4. Página `/dashboard/settings` - Configurações

**Visual Geral:**
- Formulário estruturado em abas/seções
- Cards para grupos de configurações
- Botões de ação (Salvar, Cancelar)

**Disposição de Componentes:**
```
Header
└─ BaseGrid (1 coluna)
    ├─ BaseCard (Perfil)
    ├─ BaseCard (Notificações)
    ├─ BaseCard (Segurança)
    └─ BaseCard (Preferências)
```
