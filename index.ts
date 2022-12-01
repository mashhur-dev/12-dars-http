import PromptSync from "prompt-sync";

const prompt = PromptSync()

const fruits = [
    'Apple',
    'Ananas',
    'Banana',
    'Strawberry'
]

const vegatables = [
    'Gashir',
    'Bodring',
    'Pomidor',
    'Chesnok'
]

while (true) {
    const request = prompt("String: ")
    const body = prompt('Body: ')
    if (request == ' ') {
        break
    }

    const array = request.split(' ')
    const method = array[0]
    const resource = array[1]

    if (resource == 'fruits') {
        if (method == 'GET') {
            console.log('Response: ', fruits);
        }
        else if (method == 'POST') {
            fruits.push(body)
            console.log('Response: ', 'Your data has pushed.');
        }
        else {
            console.log('404: Resource ' + resource + ' hasnot method ' + method)
        }
    }
    else {
        console.log('404: Resource ' + resource + ' not found ' + method);
    }


    
    // if (request == 'GET fruits') {
    //     console.log('Response: ', fruits);
    // }else{
    //     console.log('Error ' + request); 
    // }
    // if (request == 'GET vegatables') {
    //     console.log('Response: ',vegatables);
    // }else{
    //     console.log('Error ' + request); 
    // }+

    // console.log(request)
}