
$(document).ready( function printNews(){
    $(".js-back").hide();/*oculta icono flecha en index1 con hide   ETAPA1*/
    $('p').append('NUEVAS RECETAS')/*agrega texto nuevas recetas  ETAPA2*/
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {/*ETAPA 3*/
	for(var i= 0; i<= recipesArray.length; i++){/*recorre array recetas*/
		if(recipesArray [i].highlighted == true){/*Verificar en elarreglo si tiene la propiedad highlighted en true.*/
			renderRecipe(recipesArray[i])/*manda a llamar la función renderRecipe pasándole como parámetro el objeto que cumplió la condición*/
		}
	}
}

/*console.log('Recipes: ', recipesArray);*/


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


