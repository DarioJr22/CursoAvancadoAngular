/** Example file/folder data. */
export const files = [
  {
    name: 'Reactive Forms',
    type: 'link',
    rota:'/reactiveForms',
    icon:'library_books'
  },
  {
    name: 'Estudos de caso',
    type: 'pasta',
    children: [
      {
        name: 'Produtos - (Estudo de grid)',
        type: 'link',
        icon:'dashboard',
        rota:'/produtos'
      },
      {
        name: 'Componentes Individuais - (Estudo de Componentes)',
        type: 'link',
        icon:'developer_board',
        rota:'/produtos/lib-components'
      },
      {
        name: 'Componentes Individuais - (Estudo de Pipes)',
        type: 'link',
        icon:'compare_arrows',
        rota:'/pipes'
      }

    ]
  }
];
