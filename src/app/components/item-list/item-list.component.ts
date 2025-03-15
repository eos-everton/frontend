// src/app/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from "../item-form/item-form.component";
import { ItemFormEditComponent } from "../item-form-edit/item-form-edit.component";


@Component({
  selector: 'app-item-list',
  imports: [
    FormsModule,
    CommonModule,
    ItemFormComponent,
    ItemFormEditComponent,
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  id: string = '';
  isItemsIn: boolean = false;
  isEditItemsIn: boolean = false;
  isTableIn: boolean = false;
  selectedItem: any = null;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {
        console.error('Erro ao carregar os itens', error);
      }
    );
  }

  deleteItems(id: number) {
    if (confirm('Tem certeza que deseja deletar este item?')) {
      this.itemService.deleteItem(id).subscribe({
        next: () => {
          this.items = this.items.filter((item) => item.id !== id);
          alert('Item deletado com sucesso!');
        },
        error: (err) => alert('Erro ao deletar o item: ' + err.message),
      });
    }
  }

  onItemUpdated(updatedItem: any) {
    const index = this.items.findIndex((i) => i.id === updatedItem.id);
    if (index !== -1) this.items[index] = updatedItem;
    this.selectedItem = null; // Esconde o formulário de edição
  }

  cancelEdit() {
    this.selectedItem = null; // Esconde o formulário sem salvar
  }

  addItems() {
    this.isItemsIn = true;
    this.isTableIn = true;
  }

  editItem(item: any) {
    console.log(item)
    this.selectedItem = { ...item };
  }
}
