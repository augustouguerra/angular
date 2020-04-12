import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive.component.html',
    styles: ['./reactive.component.css']
})


export class ReativeComponent implements OnInit {
    statusArray: ['Stable', 'Critical', 'Finished'];
    forbbidenProjectname = ['Test'];

    signupForm: FormGroup;

    ngOnInit() {
        this.signupForm = new FormGroup({
            /*
            'projectName': new FormControl(null, [Validators.required, this.forbbidenProjectName.bind(this)]),
            */
            'projectName': new FormControl(null,
                [Validators.required],
                this.forbbidenProjectName),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'status': new FormControl(null)
        })
    }

    // SYNC VALIDATOR
    // forbbidenProjectName(control: FormControl): {[s: string]: boolean} {
    //     if (this.forbbidenProjectname.indexOf(control.value) !== -1) {
    //         return {'projectName': true};
    //     } 
    //     return null
    // } 

    // ASYNC VALIDATOR
    forbbidenProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Test') {
                    resolve({ 'projectnameIsForbbiden': true });
                } else {
                    resolve(null);
                }
            }, 1500)
        });
        return promise;
    }

    onSubmit() {
        console.log(this.signupForm.value);
    }
}