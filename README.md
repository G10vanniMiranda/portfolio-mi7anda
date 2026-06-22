# Portfólio Giovanni Miranda

Portfólio desenvolvido com Next.js, React, TypeScript, Tailwind CSS, Framer Motion e tsParticles.

## Desenvolvimento

```bash
npm install
npm run dev
```

Configure a URL pública usando o arquivo `.env.example` como referência:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## Validação

```bash
npm run check
npm run test:e2e
npm audit --omit=dev
```

O comando `check` executa lint, verificação de tipos e build de produção. Para testes E2E locais, mantenha `npm run dev` ativo em outro terminal. Os testes cobrem navegação, menu mobile e cards de projetos. O workflow em `.github/workflows/ci.yml` inicia o servidor automaticamente.

## Rotas

- `/`
- `/sobre`
- `/projetos`
- `/contato`
- `/robots.txt`
- `/sitemap.xml`
