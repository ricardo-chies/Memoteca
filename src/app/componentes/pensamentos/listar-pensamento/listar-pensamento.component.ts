import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo3'
    },
    {
      conteudo: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.",
      autoria: 'Romelu Lukaku',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
