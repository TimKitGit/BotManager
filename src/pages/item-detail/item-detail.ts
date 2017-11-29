import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Api } from '../../providers/api/api'

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items,
    public alertCtrl: AlertController, public api: Api,) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  renameUser(){
    console.log('Clicked rename');
    let prompt = this.alertCtrl.create({
      title: 'Rename user',
      message: "Enter a new name for this user",
      inputs: [
        {
          name: 'newName',
          placeholder: 'New name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let newName = data.newName;
            // функция обращается к api, передает в пост запросе новое имя, после чего возвращает 
            // обновленные данные пользователя.
            // this.api.renameUser(this.item.id, newName, this.item.avatarUrl).then(
            //   this.item = this.api.getCurrentUser(this.item.id),
            // );
            this.item.name = newName; // переименование без api !!только внутри приложения!!
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}