import {ordenar_AZ, ordenar_Rating, filtrar_Generos} from './redux/actions/index.js'

describe('Action - Tests:', ()=>{
    it('Debe retornar una action con las propiedades type "FILTRO_GENEROS" y payload, su valor lo recibe por argumento', ()=>{
        expect(filtrar_Generos('Action')).toEqual({
            type: 'FILTRO_GENEROS',
            payload: 'Action'
        })
    })
    
    it('Debe retornar una action con las propiedades type "ORDEN_AZ" y payload, su valor lo recibe por argumento', ()=>{
        expect(ordenar_AZ('Asc')).toEqual({
            type: 'ORDEN_AZ',
            payload: 'Asc'
        })
    })
    it('Debe retornar una action con las propiedades type "ORDEN_RATING" y payload, su valor lo recibe por argumento', ()=>{
        expect(ordenar_Rating('alto')).toEqual({
            type: 'ORDEN_RATING',
            payload: 'alto'
        })
    })
})