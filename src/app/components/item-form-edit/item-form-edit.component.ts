import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form-edit',
  imports: [FormsModule],
  templateUrl: './item-form-edit.component.html',
  styleUrl: './item-form-edit.component.scss',
})
export class ItemFormEditComponent {
  @Input() item: any; // Recebe o item a ser editado
  @Output() itemUpdated = new EventEmitter<any>(); // Emite evento após atualização
  @Output() cancelEdit = new EventEmitter<void>(); // Emite evento ao cancelar edição

  constructor(private itemService: ItemService, private router: Router) {}

  editItems() {

    if (!this.item.id) {
      alert('Erro: ID do item não encontrado!');
      return;
    }
    console.log(this.item);
    this.itemService.updateItem(this.item).subscribe({
      next: (res) => {
        this.itemUpdated.emit(res);
        alert('Item atualizado com sucesso!');
        this.router.navigate(['/items']).then(() => {
          location.reload();
        });
      },
      error: () => alert('error!'),
    });
  }

  cancel() {
    this.cancelEdit.emit(); // Notifica o pai que a edição foi cancelada
  }
}
