# Implementação do shadcn/ui

## Stack validada

- Next.js 16.2.9 com App Router
- React 19.2.7
- TypeScript em modo estrito
- Tailwind CSS 4.3.1
- PostCSS com `@tailwindcss/postcss`
- ESLint 9 com `eslint-config-next`
- Alias `@/*` apontando para a raiz do projeto
- Prettier 3 com ordenação de classes Tailwind

## Configuração

- Preset: `radix-nova`
- Componentes: `components/ui`
- Utilitário `cn()`: `lib/utils.ts`
- Tokens e temas: `app/globals.css`
- Temas disponíveis: `light`, `dark` e `system`
- Provider: `components/theme-provider.tsx`
- Seletor de tema: `components/theme-toggle.tsx`
- Configuração do registry: `components.json`

## Componentes instalados

Accordion, Alert, AlertDialog, Avatar, Badge, Breadcrumb, Button, Calendar,
Card, Checkbox, Collapsible, Command, ContextMenu, DatePicker, Dialog, Drawer,
DropdownMenu, Field, Form, HoverCard, Input, InputGroup, Label, NavigationMenu,
Pagination, Popover, Progress, RadioGroup, ScrollArea, Select, Separator, Sheet,
Skeleton, Sonner, Switch, Table, Tabs, Textarea e Tooltip.

### Compatibilidades

- `Toast` foi descontinuado pelo registry atual. `Sonner` é a substituição
  oficial e está configurado globalmente.
- `DatePicker` não é distribuído como item isolado. Foi criado como composição
  de `Calendar`, `Popover` e `Button`.
- A documentação atual recomenda `Field + Controller` para formulários. O
  projeto mantém esse padrão e também oferece `components/ui/form.tsx` para
  compatibilidade com a API tradicional do React Hook Form.

## Dependências adicionadas

- Base: `shadcn`, `radix-ui`, `lucide-react`
- Estilos: `class-variance-authority`, `clsx`, `tailwind-merge`,
  `tw-animate-css`
- Tema: `next-themes`
- Componentes: `cmdk`, `date-fns`, `react-day-picker`, `sonner`, `vaul`
- Formulários: `react-hook-form`, `@hookform/resolvers`, `zod`
- Formatação: `prettier`, `prettier-plugin-tailwindcss`

## Integrações realizadas

- Menu mobile próprio migrado para `Sheet`.
- CTAs migrados para `Button` com variantes.
- Cards de projetos migrados para `Card`.
- Seletor Light/Dark/System adicionado à navegação.
- `TooltipProvider` e `Toaster` configurados no layout raiz.
- Cores fixas principais migradas para tokens de tema.
- Papel semântico `article` preservado nos cards de projeto.

## Performance

Os componentes ficam disponíveis no código-fonte, mas só entram no bundle
quando importados. Componentes pesados como Calendar, Command e Drawer não são
importados globalmente. Apenas ThemeProvider, TooltipProvider, Toaster,
DropdownMenu e Sheet participam da infraestrutura global atual.

## Próximas melhorias recomendadas

- Criar um formulário de contato com `Field`, React Hook Form e Zod.
- Usar `Badge` para tecnologias e status dos projetos.
- Usar `Tabs` para filtrar projetos por categoria.
- Adicionar `Skeleton` quando houver dados ou imagens remotas.
- Usar `Dialog` para estudos de caso detalhados.
- Adicionar testes de teclado específicos para Dialog, Select e Command quando
  esses componentes entrarem em fluxos reais.

## Comandos de qualidade

```bash
npm run format
npm run check
npm run test:e2e
npm audit
```
