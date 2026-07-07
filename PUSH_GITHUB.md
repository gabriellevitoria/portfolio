# Instruções para Push no GitHub

Seu repositório local está pronto! Siga os passos abaixo para fazer push para o GitHub.

## 1. Crie um repositório no GitHub

1. Vá para [github.com/new](https://github.com/new)
2. **Repository name**: `portfolio` (ou `portfólio` se aceitar caracteres especiais)
3. **Description**: `Portfolio de Gabrielle - UX/UI Designer`
4. **Visibility**: `Public` (para compartilhar o portfólio)
5. ⚠️ **Não inicialize** com README ou .gitignore (já temos)
6. Clique em **Create repository**

## 2. Conecte seu repositório local ao GitHub

Copie e execute estes comandos no terminal (substitua `SEU_USUARIO` e `portfolio` se necessário):

```bash
cd "C:\Users\gabri\OneDrive\Documentos\Portifólio"

# Adicione o remote (origem)
git remote add origin https://github.com/SEU_USUARIO/portfolio.git

# Renomeie a branch para main (opcional, mas recomendado)
git branch -M main

# Faça o push do primeiro commit
git push -u origin main
```

Se pedido, use seu **Personal Access Token** (PAT) do GitHub como senha:
- Crie um PAT em: https://github.com/settings/tokens
- Escopo: `repo` (acesso completo a repositórios)
- Cole como senha quando solicitado

## 3. Verifique o push

Vá para `https://github.com/SEU_USUARIO/portfolio` e confirme que os arquivos estão lá.

## Próximas vezes

Após cada mudança:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

---

**Dúvidas?** Veja [GitHub Docs - Push](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
