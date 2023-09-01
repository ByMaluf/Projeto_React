# Projeto React do Zero ao Avançado - Matheus Fraga

### `Commit N(1)`

Teste de criação do repositório

### `Commit N(2)`

Ciclo de vida dos Componentes - Class Components

#### COMPONENTES FUNCIONAIS POSSUEM CICLO DE VIDA?

Sim, os function components têm ciclo de vida. No en-tanto, o ciclo de vida dos function components é diferente do ciclo de vida dos class components.

Os function components não têm métodos de ciclo de vida como componentDidMount, componentDidUpdate ou componentWillUnmount. Em vez disso, os function compo-nents usam hooks para executar código no ciclo de vida de um componente.

Os hooks são funções que podem ser usadas para adi-cionar funcionalidade ao ciclo de vida de um componente. Por exemplo, o hook useEffect pode ser usado para executar código no componentDidMount, componentDidUpdate ou componentWillUnmount.

Portanto, a resposta é sim, os function components têm ciclo de vida, mas é um ciclo de vida diferente do ciclo de vida dos class components.

#### FUNÇÃO NÃO É MÉTODO?

Em programação, um método é uma função que é as-sociada a um objeto. Um objeto é uma entidade que pode armazenar dados e executar ações. Um método geralmente é usado para manipular os dados ou executar ações em um objeto.

Uma função é uma entidade que pode ser usada para calcular um valor ou executar um conjunto de ações. Uma função pode ser chamada de qualquer lugar de um progra-ma, não apenas em um objeto.

Portanto, a resposta à sua pergunta é não, uma função não é necessariamente um método. Uma função pode ser um método, mas também pode ser uma função independen-te.

#### É POSSÍVEL ENTÃO CLASS COMPONENST USAR HOOKS E FUNC-TION COMPONENTS USAR MÉTODOS DE CICLO DE VIDA?

Sim, é possível usar Hooks em componentes de classe (class components) e métodos de ciclo de vida em compo-nentes funcionais (functional components), mas essa não é uma prática comum e geralmente não é recomendada.

Em componentes de classe, os métodos de ciclo de vi-da, como componentDidMount, componentDidUpdate, etc., são a maneira tradicional de lidar com o ciclo de vida do componente. Usar Hooks em componentes de classe pode ser confuso e desnecessário, pois você já tem os métodos de ciclo de vida disponíveis.
Em contraste, os Hooks, como useState e useEffect, foram projetados especificamente para componentes funci-onais e simplificam a gestão de estado e efeitos colaterais. Usar métodos de ciclo de vida em componentes funcionais é menos comum agora, pois os Hooks fornecem uma maneira mais moderna e conveniente de lidar com essas funcionali-dades.

Portanto, a prática recomendada é a seguinte:

    • Em componentes de classe, continue a usar os méto-dos de ciclo de vida tradicionais.
    • Em componentes funcionais, use Hooks, como useSta-te e useEffect, para gerenciar estado e efeitos colate-rais, pois essa é a abordagem moderna e recomendada pelo React.

Dessa forma, você seguirá as práticas recomendadas e man-terá seu código mais claro e fácil de entender para outros desenvolvedores.


### `Commit N(3)`

Ciclo de vida dos Componentes - Class Components - Eventos

