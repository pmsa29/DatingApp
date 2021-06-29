import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
	title = 'The Dating App';
	users: any;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers(): void {
		this.http.get('https://localhost:5001/api/users').subscribe(data => {
			this.users = data;
		}, error => {
			console.log(error);
		});
	}
}
