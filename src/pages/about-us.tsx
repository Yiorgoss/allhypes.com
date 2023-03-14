import { ReactElement } from 'react';
import { GetStaticProps, GetServerSideProps } from 'next';

import { t } from '@lingui/macro';

import MainLayout from '@/layouts/mainLayout';
import { loadTranslation } from '@/utils/utils';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const translation = await loadTranslation(
        ctx.locale!,
        process.env.NODE_ENV === 'production'
    );

    return {
        props: {
            translation
        }
    };
};

const AboutUs = () => {
    return (
        <div className="container mx-auto mt-[100px]">
            <h1 className="py-10 text-center text-4xl font-semibold">
                {t({ id: '', message: 'WE ARE THE ………… AGENCY' })}
            </h1>

            <div className=" mx-auto w-full px-3 text-xl font-normal tracking-wide md:w-[600px]">
                <div className="">
                    {t({
                        id: 'AboutUs.textBlock.1',
                        message:
                            'Η …… είναι μία δυναμική, ενεργητική διαφημιστική εταιρεία διεθνής εμβέλειας. Δημιουργώντας ένα περιβάλλον συνεργασίας φιλικό αλλά και ταυτόχρονα επαγγελματικό, χτίζουμε σχέσεις εμπιστοσύνης και εξέλιξης με τους πελάτες μας.'
                    })}
                </div>
                <div className="pt-5">
                    {t({
                        id: 'AboutUs.textBlock.2',
                        message:
                            'Στην εποχή του Generation Z ερχόμαστε να δώσουμε την ευκαιρία τόσο σε επιχειρήσεις όσο και σε μεμονωμένα πρόσωπα να αναδείξουν το προιόν ή το ταλέντο τους με τρόπο μεθοδικό και αποτελεσματικό και απώτερο σκοπό την κορυφή! Είμαστε μία εταιρεία που μπορεί να αναλάβει την διαφήμιση σας σε οποιοδήποτε στάδιο και αν βρίσκεται η επιχείρηση σας ή η προσωπική σας εξέλιξη. Με βασικό γνώμονα του στόχου σας σήμερα χτίζουμε το αύριο !'
                    })}
                </div>

                <div className="pt-5">
                    {t({
                        id: 'AboutUs.textBlock.3',
                        message:
                            'Στόχος μας είναι να προωθήσουμε την ιδέα σας με έναν τρόπο πρωτότυπο, εξειδικευμένο η λιγότερο πολύπλοκο που να εμπνέει τον αγοραστή ή ακόλουθο να αγοράσει από εσάς ή να ταξιδέψει μαζί σας στον κόσμο του διαδικτύου. Ειδικότητα μας είναι το PR & communication strategy, influencer marketing, business marketing, brand development & ideation, event management, social media management, sponsorships.'
                    })}
                </div>
            </div>
        </div>
    );
};

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
export default AboutUs;
