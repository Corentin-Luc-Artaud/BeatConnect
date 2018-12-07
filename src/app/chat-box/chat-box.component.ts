import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  public messages: Message[];
  public connectedUserToken: string;
  public messageContent: string;
  public class: string;
  public model;

  constructor() {
    this.connectedUserToken = 'OK';
    this.class = 'none';
  }

  ngOnInit() {
    this.getMessages();
    this.model = this.createmodel();
  }

  answer() {
    for (const key in this.model) {
      let re = RegExp(key);
      if (key !== '^[a-z]') {
        re = RegExp(key, 'i');
      }
      if (re.test(this.messageContent)) {
        this.messages.push({message :
            this.model[key][Math.floor(Math.random() * (this.model[key].length))], time: Date.now(), who: 'Bot'});
        return;
      }
    }
    return;
  }

  close() {
    this.class = 'none';
  }

  open() {
    this.class = 'block';
  }

  sendMessage() {
    this.messages.push({message : this.messageContent, time: Date.now(), who: 'User'});
    this.answer();
    this.messageContent = '';
  }

  getMessages() {
    this.messages = [{
      message : 'Salut l\'intru',
      time : Date.now(),
      who : 'Bot'
    }, {
      message : 'Ok',
      time : Date.now(),
      who : 'User'
    }, ];
  }

  createmodel() {
    return {
      '^$': [
        'Vous êtes censé me parler...',
        'Une phrase est normalement composée de mots...'
      ],
      '^[a-z]': [
        'Une majuscule au début d\'une phrase !'
      ],
      'aled|help|secours|aide|mayday': [
        'On est jamais mieux servi que par soi-même !',
        'Miaou',
      ],
      'bonne nuit': [
        'Les machines dorment maintenant ?'
      ],
      'bonjour': [
        'toi même'
      ],
      'dis .*': [
        'Ca te ferait plaisir, avoues !',
        'Seulement si tu dis fzojvzn.'
      ],
      'fzojvzn': [
        'Tu l\'as vraiment fait en plus !'
      ],
      'chez moi|maison|perdu': [
        'Lis la carte !!!!',
        'Tous les chemins mènent à Rome !!!!!!!!!!!!!!!!',
        'TOUT DROIT',
        'On va tous mourir !'
      ],
      'mort|meurt|mourir': [
        'Omae wa mou shindeiru.'
      ],
      'mourrir': [
        'Mourir avec un seul r, parce qu\'on ne meurt qu\'une fois.'
      ],
      'chut|tais|insupportable': [
        'No u.'
      ],
      't ki|Qui es.tu|Pr.sente': [
        'Je suis un robot qui répond aux questions que mes développeurs ont bien voulu implémenter.'
      ],
      'd.sol': [
        'Ah.',
        'Tant que tu comprends.'
      ],
      '.*': [
        'Ceci est une réponse par défaut parce que je n\'ai pas compris.'
      ]
    };
  }

}
