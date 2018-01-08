
$(document).ready( function printNews(){
    $(".js-back").hide();/*oculta icono flecha en index1 con hide  -- ETAPA1*/
    $('p').append('NUEVAS RECETAS')/*agrega texto nuevas recetas  --ETAPA2*/
    renderHighlightedRecipes(recipesArray);/*LLAMA FUNCION ETAPA 4 */
});



/*--ETAPA 3*/
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log("Recipes: ", recipesArray);
	for(var i= 0; i<= recipesArray.length; i++){/*recorre array recetas*/
		if(recipesArray [i].highlighted){/*Verificar en el arreglo si tiene la propiedad highlighted en true.*/
			renderRecipe(recipesArray[i])/*manda a llamar la función renderRecipe pasándole como parámetro el objeto que cumplió la condición*/
		}
	}
	
}

/*--ETAPA 4*/

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) { //parametro que contiene el array con el que se trabajara.
    console.log('Voy a pintar la receta: ', recipe);
    $(".list-recipes").append('<a class="item-recipe" href="#">'+ //  se añaden etiquetas html llamado a div vacio list-recipes.
    '<span class="attribution">'+//en los titulos se coloca el nombre del array para ingresar a los objetos que contiene.
    '<span class="title-recipe">'+ recipe.title +'</span>'+
    '<span class="metadata-recipe">'+
    '<span class="author-recipe">'+ recipe.source.name +'</span>'+
    '<span class="bookmarks-recipe">'+
    '<span class="icon-bookmark"></span>'+
    '</span>'+'</span>'+'</span>'+
    '<img src="img/recipes/640x480/' + recipe.name + '.jpg"/>'+'</a>');

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


