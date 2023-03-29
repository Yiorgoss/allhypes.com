import * as yup from 'yup';

const talentSchema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    igAcc: yup.string(),
    igFollowers: yup.string(),
    ttAcc: yup.string(),
    ttFollowers: yup.string(),
    ytAcc: yup.string(),
    ytFollowers: yup.string(),
    cpaIGPost: yup.string(),
    cpaIGStory: yup.string(),
    cpaIGGive: yup.string(),
    cpaTTVideo: yup.string(),
    cpaYTVideo: yup.string(),
    specialOffers: yup.string()
});

export default talentSchema
