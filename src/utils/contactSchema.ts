import * as yup from 'yup';


const contactSchema =  yup.object().shape({
        name: yup.string().required('Please enter your full name'),
        phone: yup.number().required('Please enter a phone number'),
        email: yup.string().email().required('Please enter a valid email'),
        message: yup.string().required('Please enter a Message for us')
});

export default contactSchema
