import * as yup from 'yup';


const contactSchema =  yup.object().shape({
        name: yup.string().required('Please enter your full name'),
        email: yup.string().email().required('Please enter a valid email'),
        phone: yup.number().required('Please enter a phone number'),
        message: yup.string().required('Please enter a Message for us')
});

export default contactSchema
