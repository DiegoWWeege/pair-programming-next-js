# Estudo Next-js

Projeto realizado utilizando a metodologia pair programming, visando aprimorar o conhecimento sobre os frameworks Next-js e tailwind.




## Autores

- [@DiegoWWeege](https://www.github.com/DiegoWWeege)

- [@guiCherpinski](https://www.github.com/guiCherpinski)






## Informações adicionais

 - Este projeto foi realizado utilizando documentações fornecidas pelo professor.

 - Tem como principal objetivo o reconhecimento dos principais métodos, qualidade e funcionalidades dos frameworks estudados.


## Como funciona o Next-js

Após iniciar um projeto next, diversos módulos e arquivos relacionados ao projeto são criados automaticamente, mas vamos direto aos principais.

Dentro do arquivo "next.config.ts" estão localizadas as configurações da sua aplicação Next. No caso deste projeto adicionados uma configuração que permite o Next a buscar imagens de algum lugar específico. A API fornece a url das imagens o Next valida se ele está autorizado à buscar nesta url e se sim, busca as imagens com sucesso.

Outra pasta importante dentro de um projeto Next é a pasta src, o source da sua aplicação. Dentro dela está localizado a pasta app e a pasta components, que deve ser criada pelo desenvolvedor, dentro destas pastas estarão os códigos da sua aplicação.

Assim que você abre a pasta app você tem acesso aos arquivos "globals.css", "layout.tsx" e "page.tsx", no momento da criação são geradas outras coisas dentro desta pasta, mas elas não possuem importância para nós.

- O arquivo "globals.css" contém o css da nossa aplicação, como estamos utilizando o tailwind, basta importa o framework para dentro deste arquivo e ele estará completo.

- O arquivo "layout.tsx" é o lugar onde os demais componentes e telas da sua aplicação são carregados, o HTML e o CSS recebidos por ele são compreendidos e formatados.

- O arquivo "page.tsx" é a tela inicial do seu sistema, ele retorna a Home da sua aplicação.

## IMPORTANTE!

- Se você criar uma pasta para um cardápio, como é o nosso caso, ele  também deverá conter um arquivo que será nomeado como "page.tsx".

- O Next interpreta o nome dos arquivos como a sua função, ou seja, o "page.tsx" é a página base, o arquivo "loading.tsx" é o que deve aparecer enquanto a página base carrega, o arquivo "error.tsx" é o que deve aparecer caso a sua página falhe em carregar e assim por diante.


## Components


- Dentro de src ao lado da pasta app, podemos criar a pasta components. Esta pasta serve para armazenar pequenos components reutilizáveis da nossa aplicação. Se você possui uma botão de login por exemplo, e ele está sendo utilizado em mais de uma página diferente, você pode criar um componente desse botão e apenas importá-lo em outras classes como um component HTML <BotaoLogin> (ele dever ser importado no arquivo para poder ser utilizado ;) ).


## Urls com ID

- Se quisermos criar uma página que responda quando na url for recebido algum valor temos que criar uma pasta com o nome do atributo dentro de colchetes, no caso da nossa aplicação:
"src/app/cardapio/[id]/ page/loading/error" 

## Funcionamento das páginas

Cada página ou componente dentro da nossa aplicação deve retornar um código HTML.

Após criarmos uma nova página e importarmos o conteúdo necessários, é necessário criar uma função que será exportada quando esta página for chamada, geralmente criamos uma função que é exportada base que é exportada sempre que a página ou componente forem importados.

"export default function {nomeDoelemnto}(){

    {possível lógica do processo}

    return(
    
        {código HTML / Lógica básica de visualização}
    )
}"


Se quisermos buscar o conteúdo de alguma API é necessário definir a função que faz isso como async.

"export default async function"

E se por algum acaso o componente ou página tiver alguma interação com o usuário é necessário escrever o seguinte no início do código: 

" 'use client' "


Quando temos alguma interação com o usuário também é possível utilizar o useState e useEffect.

- useState armazena valores que podem mudar ao longo do tempo.

- useEffect gerencia os efeitos colaterais que podem ocorrer a algum componente fora do fluxo normal de renderização.
