import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "show title"

  showText = false;

  todayDate = new Date()

  toggleText(event: any): void {
    this.showText = !this.showText
    console.log(event)
  }

  itemImageUrl = '../favicon.ico'


  getMin(a: number, b: number) {
    if (a < b) return a;
    return b;
  }

  saveMe() {
    console.log("saveed")
  }

  fontSizepx = 16

  callPhone(phone: string) {
    console.log(phone)
  }

  isSpecial = true;
  currentClass = {}
  currentStyle = {}

  setCurrentClass() {
    this.currentClass = {
      saveable: true,
      modified: false,
      special: true
    }
  }

  name = "Suraj"

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-size': '40px'
    }
  }

  isActive = true

  items = [
    { name: 'Suraj' },
    { name: 'dUTTA' },
    { name: 'sONU' },
  ]


  constructor(private logService: LogService, private dataService: DataService) { }

  // intervalSub: any;

  fakeUsers: any = []

  ngOnInit() {
    this.logService.logMessage("Hello")
    this.setCurrentClass()
    this.setCurrentStyle()
    this.dataService.getData().subscribe(res => {
      console.log(res)
      this.fakeUsers = res
    })
  }

  species = ['fish', 'cat', 'dog']
  model = new Pet(1, 'Goldie', 'fish')
  submited = false;

  onSubmit() {
    console.log(this.model)
    this.submited = true
  }

  greet = new FormControl('')

  updateName() {
    this.greet.setValue('Morning')
  }


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  onSubmit2() {
    console.log(this.profileForm.value)
  }


  nameInput = '';


  // ngOnDestroy() {
  //   if(this.intervalSub) {
  //     clearInterval(this.intervalSub)
  //   }
  // }

}
