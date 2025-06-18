import React from 'react';
import PageHeader from '../components/PageHeader';
import { useTranslation } from 'react-i18next';

const Companies = () => {
    const { t } = useTranslation();
    return (
        <>
            <PageHeader title={t('services.companies.title')} />
            <div className="py-4 px-4 text-center mt-5 mb-5">
                <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
                    {t('services.companies.description')}
                </p>
            </div>
        </>
    );
};

export default Companies;