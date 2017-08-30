
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

/** usar inyectando
	import { fundido } from '../../moduloanimations/animation';

	@Component({
		...
		animations: [fundido]
	})


<mi-etiquera [@FadeIn]
*/
export const fundido = trigger('FadeIn', [
	
	state('*', style({
		opacity : 1
	})),

	transition(':enter', [
		style({
			opacity : 0
		}),
		animate('500ms linear')
	]),
	
	transition(':leave', [
		
		// ojo como cambia animate con style
		animate('500ms linear', style({
			opacity : 0
		}))

	])

])