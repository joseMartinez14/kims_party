
const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * datalist.length);
    return datalist[randomIndex];
}

export const datalist = [
    {
        condition: 'Los que tengan mas tiempo de conocer a Kim',
        action: 'Toman 2 tragos',
        type: 'Random',
        answer: '',
    },
    {
        condition: 'Los que no le dijeron feliz cumpleaños a Kim el propio día del cumpleaños',
        action: 'Toman 1 shot (manda huevo)',
        type: 'Random',
        answer: '',
    },
    {
        condition: 'Como se llama la mamá de kim?',
        action: 'Si contesta correctamente reparte 4 tragos sino se los toma',
        type: 'Question',
        answer: 'Marcela',
    },
    {
        condition: 'Como se llama el papá de kim?',
        action: 'Si contesta correctamente reparte 4 tragos sino se los toma',
        type: 'Question',
        answer: 'Christian',
    },
    {
        condition: 'A que escuela fue Kim?',
        action: 'Si contesta correctamente reparte 6 tragos sino se toma 3',
        type: 'Question',
        answer: 'Escuela Moya',
    },
]



/*
{
        condition: '',
        action: '',
        type: '',
        answer: '',
    },
*/

