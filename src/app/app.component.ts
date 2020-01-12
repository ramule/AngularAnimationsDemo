import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'color': 'yellow',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'color': 'yellow',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(800)),
      //transition('highlighted => normal' , animate(100))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'color': 'yellow',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'color': 'yellow',
        transform: 'translateX(100px)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(10px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(800)),
      transition('highlighted => normal', animate(600)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(2000), style({
          borderRadius: '50px'
        }),
        animate(1000)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        'color': 'yellow',
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        group([
          animate(500, style({
            opacity: 0,
            color: 'red'
          })),
          animate(800, style({
            opacity: 1,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        'color': 'yellow',
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.3,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 0.6,
            offset: 0.6
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    let index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal',
      this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal'
  }

  onShrink() {
    this.wildState = 'shrunken'
  }
}
