import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]
@Output()
  onDeleteId:  EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string | undefined): void {
    if (id)
      {
        this.onDeleteId.emit(id);
        console.log('Delete character: ', id);
      }
  }
}
