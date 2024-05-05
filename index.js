const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory storage for animals
let animals = [
    { id: 1, name: "Lion", species: "Panthera leo", age: 5 },
    { id: 2, name: "Elephant", species: "Loxodonta africana", age: 10 },
    { id: 3, name: "Tiger", species: "Panthera tigris", age: 6 },
    { id: 4, name: "Giraffe", species: "Giraffa camelopardalis", age: 8 },
    { id: 5, name: "Zebra", species: "Equus zebra", age: 4 }
];

app.use(bodyParser.json());

// GET all animals
app.get('/animals', (req, res) => {
    res.json(animals);
})

// POST a new animal
app.post('/animals', (req, res) => {
    const { name, species, age } = req.query;
    const newAnimal = {
        id: animals.length + 1, 
        name,
        species,
        age: parseInt(age) 
    };
    animals.push(newAnimal);
    console.log('New animal added:', newAnimal);
    res.status(201).json(newAnimal);
});

// PUT (update) an existing animal
app.put('/animals/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, species, age } = req.query;

    animals = animals.map(animal => {
        if (animal.id === id) {
            const updatedAnimal = {
                ...animal,
                name: name || animal.name,
                species: species || animal.species,
                age: age ? parseInt(age) : animal.age
            };
            console.log('Animal updated:', updatedAnimal);
            return updatedAnimal;
        }
        return animal;
    });

    res.json(animals.find(animal => animal.id === id));
});

// DELETE an animal
app.delete('/animals/:id', (req, res) => {
    const id = parseInt(req.params.id);
    animals = animals.filter(animal => animal.id !== id);
    console.log('Animal deleted with ID:', id);
    res.status(204).send();
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
