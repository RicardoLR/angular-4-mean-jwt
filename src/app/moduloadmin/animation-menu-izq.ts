
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


export const entradaizq = trigger('FadeLat', [
	
	transition(':enter', [
		style({
			opacity : 0,
			transform: 'translateX(-80%)'
		}),
		animate('500ms linear'),
		style({
			opacity: 1,
			transform: 'translateX(0)'
		})
	])	

])