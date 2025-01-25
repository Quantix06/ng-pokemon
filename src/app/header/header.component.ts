import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
@Component({
  selector: "app-header",
  imports: [FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  template: `
    <header class="header">
      <div class="container">
        <h1>Suivi - Projet Angular</h1>
        <input type="text" class="search-bar"  [(ngModel)]="searchQuery" (change)="onSearch()"placeholder="Rechercher..." />
        <select class="select" [(ngModel)]="sort" (change)="handleChange()">
          <option value="asc">Ascendant</option>
          <option value="desc">Descendant</option> 
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </header>
  `,
  styles: `.header {
    background-color: blue;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .container {
      display: flex;
      align-items: center;
      gap: 1rem;
  
      h1 {
        font-size: 1.5rem;
      }
  
      .search-bar {
        padding: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
      }
      .select {
        padding: 0.5rem;
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
      }
    }
  }
  `,
})
export class HeaderComponent {
  sort = "asc";
  searchQuery="";
  @Output() sortEvent = new EventEmitter<String>();
  @Output() searchEvent = new EventEmitter<String>();

  handleChange() {
    this.sortEvent.emit(this.sort);
    return this.sort;
  }
  onSearch() {
    this.searchEvent.emit(this.searchQuery);
    return this.searchQuery;
  }

}
