const axios = require('axios').default;

module.exports = {
    async afterCreate(matricula) {
        const result = matricula.result;
        console.log(result)
        // const body = {
        //     capture: false,
        //     kind: "credit",
        //     reference: result.id,
        //     amount: 53,
        //     installments: 2,
        //     cardholderName: result.aluno.nome,
        //     cardNumber: "5448280000000007",
        //     expirationMonth: 12,
        //     expirationYear: 2028,
        //     securityCode: "235",
        //     softDescriptor: "string",
        //     subscription: false,
        //     origin: 1,
        //     distributorAffiliation: 0,
        //     brandTid: "string",
        //     storageCard: "1"
        // }
        // const token = {
        //     username: '15870660',
        //     password: '207aa98b1fb84febbedb73d8db0ef94c'
        // }
       
        // axios.post('https://sandbox-erede.useredecloud.com.br/v1/transactions',body , { auth: token})
        //   .then(function (response) {
        //     if (response.data.returnCode === '00') {
        //         console.log("Mandar pro SD!!!!")
        //     };
        //   })
        //   .catch(function (error) {
        //     console.log(error.response.data.returnMessage);
        //   });

        

    }
}