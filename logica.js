/**
 * Esta funcion realiza un toggler the los elementos.
 * Se obtiene el atributo data-target que hace referencia al elemento al que mostrar.
 * Los elementos a ocultar tienen que estar en el mismo nivel ya que se llama al padre para ocultarlos.
 * Esto significa que solo pueden estar los elementos que van a ser afectados.
 * Una vez se oculten/muestren se activa el elemento en la lista.
 * @param toggler {PointerEvent}
 */
const changeToggler = (toggler) => {
    const dataTarget = toggler.target.getAttribute("data-target")
    if(dataTarget) {
        /**
         * Se utiliza querySelector para poder utilizar classes (.toggleTarget) o ids (#container)
         * @type {HTMLElement}
         */
        const target = document.querySelector(dataTarget)
        if(target) {
            /**
             * Elementos al mismo nivel del target del boton.
             * Estos se utilizan para mostrarlos o no.
             * @type {HTMLElement[]}
             */
            const parentChildren = [...target.parentElement.children]
            parentChildren.forEach((targets) => targets.style.display = "none")
            target.style.display = "grid" // Se devuelve el valor que tenia antes. Modificar si se cambia.
        }

        /**
         * Elementos en la lista de botones, estos tienen que estar al mismo nivel ya que se llama al padre
         * para ser afectados.
         * @type {HTMLElement[]}
         */
        const togglerSiblings = [...toggler.target.parentElement.children]
        togglerSiblings.forEach((togglerSibling) => togglerSibling.classList.remove("active"))
        toggler.target.classList.add("active")
    }
}

/**
 * Listado de todos los elementos con la clase que utilizamos para dar la funcionalidad de toggler.
 * Se utiliza para añadir el evento de click con nuestro controlador que modifica
 * la visibilidad del objetivo del atributo data-target.
 * @type {HTMLElement[]}
 */
const togglerGroups = [...document.getElementsByClassName("toggler-group")]
togglerGroups.forEach((togglerGroup) => {
    /**
     * Lista de elementos a añadir el event de toggler.
     * Esta lista debe tener un elemento activo por defecto.
     * Sino, se llama al evento para añadirlo.
     * @type {HTMLElement[]}
     */
    const children = [...togglerGroup.children]
    const activeChildren = children.filter((child) => child.classList.contains("active"))

    children.forEach((children) => children.addEventListener("click", changeToggler))

    if(children.length > 0 && activeChildren.length === 0) {
        children[0].click()
    }
})