import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
<footer class="footer">
  <p>Marchal Quentin - Ynov 2024/2025</p>
</footer>

  `,
  styles: `.footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 1rem;
  
    p {
      margin: 0;
      font-size: 1rem;
    }
  }
    `
})
export class FooterComponent {

}
