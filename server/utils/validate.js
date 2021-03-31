exports.errors = (type) => {
    switch (Object.keys(type)[0]){
        case 'email':
            return 'Email já existe!';
    }
}