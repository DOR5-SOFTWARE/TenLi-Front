import {
	Component, OnInit, Input, Output, OnChanges, EventEmitter,
	trigger, state, style, animate, transition
} from '@angular/core';

@Component({

	selector: 'modal-message',
	templateUrl: 'modal-message.component.html',
	styleUrls: ['modal-message.component.css'],

	animations: [
		trigger('message', [
			transition('void => *', [
				style({
					opacity: 1
				}),
				animate('0.8s ease-in')
			]),
			transition('* => void', [
				animate('0.8s 20 ease-out', style({
					opacity: 1
				}))
			])
		]),
		trigger('overlay', [
			transition('void => *', [
				style({
					opacity: 0.8
				}),
				animate('0.8s ease-in')
			]),
			transition('* => void', [
				animate('0.8s 20 ease-out', style({
					opacity: 0.8
				}))
			])
		])
	]
})

export class ModalMessageComponent implements OnInit {
	@Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	overlayVisible = false;

	constructor() { }

	ngOnInit() { }

	close() {
		this.visibleChange.emit(this.visible);
		this.visible = false;

	}
}