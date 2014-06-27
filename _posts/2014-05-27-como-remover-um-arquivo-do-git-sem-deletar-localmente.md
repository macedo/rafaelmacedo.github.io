---
layout: post
title: Como remover um arquivo do git sem deletar localmente
---

O comando `git rm` nos permite remover arquivos ou pastas do nosso controle de versão e localmente. Entretanto, as vezes precisamos de remover o arquivo apenas do controle de versão. Alguns exemplos comuns são arquivos de configuraçã e gerados por IDE's.

Adicionando a opção `--cached` permite remover o arquivo apenas do controle de versão mantendo-o localmente em disco.

    git rm --cached file

Após rodar o comando acima, adicione o arquivo ao `gitignore`. Assim o arquivo especificado não será listado no git status evitando ser adicionado acidentalmente.
