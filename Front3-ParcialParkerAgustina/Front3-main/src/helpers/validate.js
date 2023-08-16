export const validate = (book, description) => {
    const msg = {
        type: "",
        body: {
            message: ""
        }
    }

    if (! description || description.length < 10) {
        msg.type = 'Error'
        msg.body.message = "Por favor chequea que la información sea correcta";
    }

    if (!title || book.length < 3 || book.length > 40) {
        msg.type = 'Error'
        msg.body.message = `Por favor chequea que la información sea correcta`;
    }

    return msg
}