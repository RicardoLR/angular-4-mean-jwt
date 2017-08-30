
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

]);


/** Los elementos se cargan desde arriba de la pantalla */
export const traerDeAfuera = trigger('traerDeAfuera', [

	transition(':enter', [
		style({
			opacity: 0,
			transform: 'translateY(-75%)' // translateX(-75%): de izquida al centro
		}),
		animate('500ms linear', style({
			opacity: 1,
			transform: 'translateY(0)'
		}))
	])

]);