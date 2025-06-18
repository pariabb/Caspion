import React from 'react';
import PageHeader from '../components/PageHeader';
import { useTranslation } from 'react-i18next';

const Evaluation = () => {
    const { t } = useTranslation();
    return (
        <>
            <PageHeader title={t('services.evaluation.title')} />
            <div className="py-4 px-5 mt-5 mb-5 text-center">
                <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
                    {t('services.evaluation.description')}
                </p>
            </div>
        </>
    );
};

export default Evaluation;