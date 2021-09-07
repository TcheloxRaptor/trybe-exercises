   // users-manager/models/User.js

   // Começamos importando a conexão com o banco
   const connection = require('./connection');

   // Função que remove dos documentos da collection 'users', os campos indesejados
   function formatUser(document) {
        const {
            // Extraímos as propriedades `_id` e `password`
            _id,
            password,
            // Utilizamos o operador _rest_ (`...`) para guardar o resto (😉) das propriedades
            // numa constante chamada `user`.
            ...user
        } = document;

        // Criamos um novo objeto contento os campos já formatados
        const formattedResult = {
            // O campo `id` recebe o valor de `_id`
            id: _id,
            // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos
            // gravado em `user`
            ...user,
        };

        // Retornamos o objeto com os campos formatados
        return formattedResult;
   }

    // Criamos um método para verificar se os dados do usuário são válidos
    function isValid({ firstName, lastName, email, password }) {
        // Regex que valida strings de 6 ou mais caracteres alfanuméricos
        const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
        // Criamos um array para poder verificar com facilidade cada campo
        const fields = [firstName, lastName, email, password];

        // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
        if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
            return false;
        }

        // Por último, só precisamos garantir que `password` passa no regex.
        // Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`
        return PASSWORD_REGEX.test(password);
    }

    // Função responsável por criar o usuário no banco de dados
    function create({ firstName, lastName, email, password }) {
        // Utilizamos o `insertOne` para inserir o usuário na collection `users`
        return connection().then((db) => db
            .collection('users')
            .insertOne({ firstName, lastName, email, password }))
        // Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente
        // com os demais dados do usuário recém-criado
            .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
    }

    module.exports = {
        isValid,
        create,
    };
    