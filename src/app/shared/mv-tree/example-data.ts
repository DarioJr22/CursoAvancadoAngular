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
        name: 'Componentes prontos',
        type: 'link',
        icon:'developer_board',
        rota:''
      },
      {
        name: 'Componentes Individuais',
        type: 'link',
        rota:'',
        icon:'developer_board'
      }
    ]
  }
];
