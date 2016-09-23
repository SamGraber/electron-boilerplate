import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `<h1>{{title}}</h1>
            <div>
                Some content
            </div>`
})
export class AppComponent { 
    public title: string = 'Hello World';
}
