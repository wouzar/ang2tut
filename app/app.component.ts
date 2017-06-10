/**
 * Created by wouzar on 10.06.17.
 */
import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']

})
export class AppComponent {
    message = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Victor', username: 'wouzar' },
        { id: 26, name: 'Nastya', username: 'nastya' },
        {id : 27, name: 'Pall', username: 'calpall'}
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

}