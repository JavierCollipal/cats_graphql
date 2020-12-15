//Estudiar a fondo esta funcion
//a modo de resumen, nos va permitir crear ACTION creators de una manera mas facil
//funcion currying
export const mac = (type, ...argNames) => {
	//Los action creators son funciones que devuelven un objeto,
	//esta funcion currying esta cumpliendo con efectivamente devolver una funcion.
	//por que ...args?,
	return function ac(...args) {
		console.info(args);
		//genera un objeto action y incluye el tipo de arriba
		const action = { type };
		//por cada argumento de la primera llamada, va asignando a action una propiedad con el nombre del argumento que pasamos
		//y el valor de cada propiedad, es lo que pasamos al momento de llamar la accion mediante dispatch
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index];
		});
		//finalmente la retorna el action creator, con esto la funcion automatiza
		//el escribir () => ({type}) se reduce en mac(type)
		//el escribir (payload, otrasPropiedades) => ({type, payload,otrasPropiedades})
		//se reduce en mac(type, ['payload','otrasPropiedades'])
		return action;
	};
};
