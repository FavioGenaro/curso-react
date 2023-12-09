import { useEffect,  useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
    const [ formState, setFormState ] = useState( initialForm );

    const [formValidation, setFormValidation] = useState({}) // nos avisara sobre las validaciones de cada input
    
    useEffect(() => {
        createValidators()
    }, [formState]) // cada vez que hay un cambio en el formulario (cambio de cualquiera de los campos)

    useEffect(() => {
        setFormState(initialForm); // llenamos el formulario con los nuevos valores
    }, [initialForm]) // si el valor inicial cambia (hay una nueva nota)

    const isFormValid = useMemo( () => { // este solo retorna true o false

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false; // retorna false si es diferente de null
        } 

        return true; // true si todos son iguales a null

    }, [formValidation]) // solo se vuelve a memorizar si cambia el formValidation

    const onInputChange = ({ target }) => { // e.target, puede ser el email o password
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // asignamos el nuevo valor al campo (name: email o password)
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => { // para realizar validaciones en los campos
        const formCheckedValues = {}; // este es el objeto que vamos a retornar
        

        for (const formField of Object.keys( formValidations )) { // verificamos cada uno de los datos que estan en formValidations(parametro)
            const [ fn, errorMessage ] = formValidations[formField]; // destructuramos la función de validación fn y el mensaje de error

            // si se cumple la validación, retorna un null y sino el errorMessage
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues ); // cambiamos el estado de formValidation, le pasamos el objeto con las validaciones ya hecha
        // console.log(formCheckedValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation, // destructuramos todos los valores de la validación
        isFormValid
    }
}