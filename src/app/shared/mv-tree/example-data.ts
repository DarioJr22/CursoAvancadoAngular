/** Example file/folder data. */
export const files = [
  {
    name: 'Reactive Forms',
    type: 'link',
    rota:'/reactiveForms',
    icon:'library_books'
  },
  {
    name: 'Livraria de Componentes',
    type: 'pasta',
    children: [
      {
        name: 'Componentes Individuais',
        type: 'link',
        rota:'/produtos/lib-components',
        icon:'developer_board'
      }
    ]
  },
  {
    name: 'Estudos de caso',
    type: 'pasta',
    children: [
      {
        name: 'Produtos',
        type: 'link',
        icon:'developer_board',
        rota:'/produtos'
      }
    ]
  }
];
