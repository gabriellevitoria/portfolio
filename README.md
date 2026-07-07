# Portfólio — Gabrielle (UX/UI Designer)

Portfólio estático em HTML puro, sem build. Hospedado em VPS.

## Estrutura

```
.
├── index.html                 # Home do portfólio
├── vivelon.html              # Case: Vivelon (e-commerce)
├── pitanga.html              # Case: Pitanga (fintech wearable) — em breve
├── rota.html                 # Case: Rota Financeira (fintech mobile) — em breve
├── oura-ring.html            # Case: Oura Ring (pesquisa) — em breve
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   └── styles.css        # Estilos compartilhados (todas as páginas)
    ├── js/
    │   └── main.js           # JavaScript compartilhado (todas as páginas)
    └── img/
        ├── gabrielle-retrato.jpg          # Foto do hero
        ├── gabrielle-quadro.jpg           # Foto do sobre
        └── telas/                         # Screenshots dos cases
            ├── vivelon-home.jpg
            ├── vivelon-pdp.jpg
            └── ...
```

## Como editar

### Conteúdo
- Procure por **EDITAR:** nos arquivos HTML para pontos que dependem de você (durações reais, métricas, links, dados pessoais).
- Textos em **PT/EN**: cada texto tem `<span class="pt">…</span>` e `<span class="en">…</span>` lado a lado. Edite ambos.

### Adicionar fotos dos cases
1. Salve os screenshots na pasta `assets/img/telas/` com nomes descritivos.
2. Em cada case, substitua `<div class="ph ..."></div>` por `<img src="assets/img/telas/seu-arquivo.jpg" alt="">`.

### Adicionar novos cases
1. Copie um case existente (ex: `vivelon.html`) como template.
2. Atualize o conteúdo, textos bilíngues e links.
3. Atualize o `index.html` para adicionar o novo case na seção de projetos.

## Como rodar localmente

Basta abrir os arquivos `.html` no navegador — não há dependências ou build.

```bash
# Opção 1: abra direto no navegador
open index.html

# Opção 2: servidor local (Python 3)
python3 -m http.server 8000
# Visite: http://localhost:8000
```

## Como publicar na VPS

1. Compacte toda a pasta:
   ```bash
   zip -r portfólio.zip .
   ```

2. Faça upload para a VPS via SFTP/SSH.

3. Descompacte na pasta pública do web server:
   ```bash
   unzip portfólio.zip
   ```

## Recursos

- **CSS unificado**: `assets/css/styles.css` é compartilhado por todas as páginas.
- **JS unificado**: `assets/js/main.js` contém toda a lógica (linguagem PT/EN, reveal on scroll, cursor custom, etc.).
- **Design System**: componentes e tokens reutilizáveis em cada case.
- **Bilíngue**: suporta PT e EN via `localStorage`.

## Notas técnicas

- Sem build, sem dependências — HTML puro.
- Animações CSS em `assets/css/styles.css`.
- Interatividade com vanilla JavaScript em `assets/js/main.js`.
- Responsive design: mobile, tablet, desktop.
- Acessibilidade: ARIA labels, focus states, prefers-reduced-motion.

## Autoria

**Gabrielle** — UX/UI Designer  
[comercialgabriellevitoria@gmail.com](mailto:comercialgabriellevitoria@gmail.com)
