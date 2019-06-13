import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject, User } from '@/_models';
import { SchoolService, AuthenticationService } from '@/_services';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['../pages.component.scss'],
  providers: [SchoolService]
})
export class EnrollComponent implements OnInit { 

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  subjectsListAsync: Observable<Array<Subject>>;
  available: boolean;
  currentUser: User;

  constructor(private _formBuilder: FormBuilder, private schoolSvc: SchoolService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private authSvc: AuthenticationService) {
    this.currentUser = authSvc.currentUserValue;

    iconRegistry.addSvgIcon(
      'check_circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/check_circle.svg'));
    iconRegistry.addSvgIcon(
      'highlight_off',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/highlight_off.svg'));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.subjectsListAsync = this.schoolSvc.getAll<Subject>("subjects");
    this.firstFormGroup.valueChanges.subscribe(() => {
      //TODO: create an as-you-type filter
    });
  }

  onConfirmar() {
    
  }

  selectionChange(event) {
    if (event.selectedIndex === 0) {
      this.available = undefined;
    }
    if (event.selectedIndex === 1) {
      this.schoolSvc.tryEnroll(this.selectedSubject.id, this.currentUser.id).subscribe(resul => {
        this.available = resul;
        if (this.available) {
          this.secondFormGroup.setValue({
            secondCtrl: new FormControl()
          });
        }
        else {
          this.secondFormGroup.setErrors({ error: true });
        }
      });
    }
  }

  displayFn(subj?: Subject): string | undefined {
    return subj ? subj.name : undefined;
  }

  // convenience getter for easy access to form fields
  get selectedSubject() : Subject { return this.firstFormGroup.controls['firstCtrl'].value; }

}
