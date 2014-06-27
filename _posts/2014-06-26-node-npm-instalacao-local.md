---
layout: post
title: Instalando nodejs + npm com um usuário sem privilégio de root
---

Ultimamente tenho desenvolvido bastante em nodejs seja para aprendizado ou projetos pessoais. Uma coisa que
sempre me encomodou foi o fato do [npm](http://npmjs.org) (Node Package Manager) precisar de privilégios root (sudo).

Felizmente isso pode ser contornado instalando o nodejs + npm com um usuário normal seguindo alguns simples passos descritos a seguir [[1]](#note-1).


1.Adicione ao `~/.npmrc` as seguintes linhas

    root    = "$HOME/.local/lib/node_modules"
    binroot = "$HOME/.local/bin"
    manroot = "$HOME/.local/share/man"

2.Download e instalação do nodejs

    cd /tmp
    wget http://nodejs.org/dist/v0.10.29/node-v0.10.29.tar.gz
    tar -xpf node-v0.10.29.tar.gz && cd node-v0.10.29
    ./configure --prefix=~/.local && make && make install

3.Agora vamos criar um link simbólico para o `~/.node_modules`.

    cd ..
    ln -s .local/lib/node_modules .node_modules

4.E por ultimo adicione `~/.local/bi`n ao $PATH

    echo "export PATH=$HOME/.local/bin:$PATH" >> $HOME/.bashrc
    source $HOME/.bashrc


Com isso, ao instalar um pacote npm com a flag global ele será instalado localmente (~/.local) não necessitando de privilégios root mais.

<em class="notes" id="note-1">[1] Os passos descritos vão instalar o Nodejs e npm em `~/.local`. Por padrão ele seria instalado em `/usr/local`</em>
