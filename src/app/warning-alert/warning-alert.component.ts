import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    // templateUrl: './warning-alert.component.html',
    template: `
        <p>Uh oh! Something\'s wrong...</p>
    `,
    styles: [`
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    `]
})

export class WarningAlertComponent {

}