import {DialogService, Prompt} from 'aurelia-dialog/index';
export class App {
  static inject = [DialogService];
  constructor(dialogService) {
    this.dialogService = dialogService;
  }
  submit(){
    this.dialogService.open({ viewModel: Prompt, model: 'Good or Bad?'}).then(() => {
      console.log('good');
    }).catch(() => {
      console.log('bad');
    });
  }
}
