document.addEventListener('DOMContentLoaded', ()=>
{
    //seleciona o formulário na dom
    const form = document.querySelector('form');

    //adicionar um evento de submit
    form.addEventListener('submit', async(event) =>
    {
        //prevenir que a pagina recarregue ao enviar o form
        event.preventDefault();
        
        //coletar o valor dos campos dos inputs dos formulários
        const textValue = document.getElementById('text').value;
        const emailValue = document.getElementById('email')?.value;

        //criar um objeto com os dados do formulário
        const formData =
        {
            text: textValue,
            email: emailValue,
        };
        
        //exibe os dados coletados no console
        console.log('Dados coletados', formData);

        //utilizar a tech api para enviar os dados para o servidor
        //utilizando o método post
        const response = await fetch('http://www.api.com/cadastro',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            })
    })
})
