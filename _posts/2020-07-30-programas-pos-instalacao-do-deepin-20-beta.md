---
title: Programas pós instalação do deepin 20 beta
description: Alguns programas úteis que você pode instalar após a instalação do deepin
  20.
tags: deepin
image: ''
comments: true
edit_url: false
mathjax: false

---
Uma boa noite a todos. 

Neste poste veremos algumas alternativas de softwares para nosso querido deepin. Em especial a versão que no momento desta publicação, está em sua versão beta. 

Você provavelmente tem suas escolhas na hora de baixar algum software pra instalar em seu pc ou notebook. Este poste é exatamente utilizado os programas que na minha opinião, são essenciais para o meu dia a dia em particular. 

Vamos ao que interessa:

* **Navegador**

  Para navegar na internet eu utilizo o navegador da google, o Chrome :

Baixe o pacote deb [aqui](https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb)

Se sua instalação é nova, aconselho a desinstalar o chromium somente após a instalação do chrome. Pois sua estrutura necessita de algumas bibliotecas do chromium, assim você evita o uso do terminal para correção de alguma coisa que pode faltar. 

* **IDE**: 

  Para escrever linhas de códigos ou edições. o Sublime é uma excelente opção, além de leve, é super completo

**Instalação**:

Instele a chave GPG com o comando abaixo:

    wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -

Crie a source list com o próximo comando. Para instalação e atualização.

**Versão estável**

    echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

Atualize os repositório de seu sistema:

    sudo apt-get update

E por fim, instale o sublime text com este comando:

    sudo apt-get install sublime-text

* **Mensageiro** 

  O Telegram é essencial para um bom bate papo, novidades no mundo linux e etc... Eu sempre utilizo a versão beta, e nunca tive problemas com bugs, e sempre tenho acesso as novidades.

  [Telegram beta desktop Linux](https://telegram.org/dl/desktop/linux?beta=1)


* **DDE-Launcher**

  Enquanto não sai o novo dde launcher nas atualizações oficiais do deepin 20 beta  eu sempre instalo o pacote rsrs.

  [Dowload DDE-Launcher](https://github.com/nilsonlinux/deepin/blob/master/dde-launcher_5.1.0.6-1_amd64.deb?raw=true)

  Tenho um post sobre a instalação [aqui](https://nilsonlinux.github.io/dde-launcher-deepin20)

![](/uploads/software.jpg)
