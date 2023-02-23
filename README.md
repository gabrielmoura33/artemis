<p align="center">
     <img src="./Design/banner.png"  />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gabrielmoura33/artemis">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gabrielmoura33/artemis">
  
  <a href="https://github.com/gabrielmoura33/artemis/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielmoura33/artemis">
  </a>

  <a href="https://github.com/gabrielmoura33/artemis/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gabrielmoura33/artemis">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 💻 Projeto

O projeto **Artemis** tem como objetivo desenvolver um eficiente sistema de gestão para uma organização não-governamental (ONG) dedicada à causa animal. O sistema terá funcionalidades que permitirão a postagem de notícias relevantes sobre a atuação da ONG, bem como a prestação de contas de suas atividades e recursos financeiros.

Além disso, o sistema terá uma importante função social, disponibilizando informações sobre animais que se encontram sob os cuidados da ONG e que estão disponíveis para adoção. O sistema será de fácil uso e navegabilidade, oferecendo ao usuário uma experiência positiva e intuitiva, além de facilitar a divulgação e acesso às informações da ONG em **tempo real**.

# :artificial_satellite: Modelagem e projeto arquitetural

O diagrama abaixo refere-se a solução arquitetural que desenvolvemos para o projeto, a arquitetura consistirá em um cliente web e um cliente mobile que devem se comunicar através de chamadas HTTP a um serviço principal. Em simultâneo este mesmo serviço deverá comunicar-se através do Apache Kafka com outros dois serviços, um responsável pela localização dos animais adotados e/ou para adoção e outro responsável pela notificação dos e-mail aos usuários da plataforma.

![Visão Geral da Solução](./Arquitetura/arquitetura.png "Visão Geral da Solução")

## 🎨 Layout

<p align="center">
    <img alt="Artemis" title="#Artemis" src="/Design/capa.png"/>
</p>

<!--
[![](https://img.shields.io/pypi/v/mvt)](https://pypi.org/project/mvt/)
[![Documentation Status](https://readthedocs.org/projects/mvt/badge/?version=latest)](https://docs.mvt.re/en/latest/?badge=latest)
[![CI](https://github.com/mvt-project/mvt/actions/workflows/python-package.yml/badge.svg)](https://github.com/mvt-project/mvt/actions/workflows/python-package.yml)
[![Downloads](https://pepy.tech/badge/mvt)](https://pepy.tech/project/mvt) -->

## :books: Tecnologias Utilizadas

- [**Node.js**](https://nodejs.org/en/) + [**NestJS**](https://nestjs.com)
- [**GraphQL**](https://graphql.org)
- [**Apollo + Apollo Federation**](https://www.apollographql.com)
- [**Apache Kafka**](https://kafka.apache.org)
- [**Socket IO**](https://socket.io/pt-br/)
- [**NextJS**](https://nextjs.org)
- [**Prisma ORM**](https://www.prisma.io)

## :books: Requisitos

- [**Node.js**](https://nodejs.org/en/).
- [**Docker**](https://www.docker.com/).

**@Author:** 👨🏾‍💻 - Gabriel de Moura e Souza. <br />
**@Linkedin:** [Gabriel de Moura e Souza](linkedin.com/in/gabriel-de-moura-e-souza/) <br />
**@Instagraam:** [@gabrielmoura.dev](https://www.instagram.com/gabrielmoura.dev/) <br />
