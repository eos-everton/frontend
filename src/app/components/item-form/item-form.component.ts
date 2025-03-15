import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  imports: [FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss',
})
export class ItemFormComponent {
  name: string = '';
  description: string = '';

  constructor(private itemService: ItemService, private router: Router) {}

  registerItems() {
    this.itemService.createItem(this.name, this.description).subscribe({
      next: (res) => {
        console.log('Cadastro bem-sucedido', res);
        alert('Cadastro bem-sucedido');
        this.router.navigate(['/items']).then(() => {
          location.reload();
        });
      },
      error: () => alert('error!'),
    });
  }
}
