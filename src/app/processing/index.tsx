import BannerProcess from './bannerProcess/bannerProcess';
import InterfacesBank from './interfacesBank/interfacesBank';
import ParticipantsProperty from './participantsProperty/participantsProperty';
import ProcessingServices from './processingServices/processingServices';
import TypeProcessingSistem from './typeProcessingSistem/typeProcessingSistem';
import UmaiServices from './umaiServices/umaiServices';

import { ProcessingApi } from '@/api/service/processing';

import s from './processing.module.scss';
import SchemeProcess from './schemeProcess';
import FixedPhone from '@/components/FixedPhone';


export const Processing = async () => {

  const {
    bannerAPI,
    underBannerProcessingAPI,
    interfacesTitleAPI,
    advantagesAPI,
    processingServicesAPI,
    participantsTitleAPI,
    schemeTitleAPI,
    systemsTitleAPI
  } = await ProcessingApi()

  return (
    <main className={s.container}>
      <BannerProcess banner={bannerAPI} underBannerProcessing={underBannerProcessingAPI} />
      <InterfacesBank data={interfacesTitleAPI}/>
      <UmaiServices data={advantagesAPI}/>
      <ProcessingServices data={processingServicesAPI}/>
      <ParticipantsProperty data={participantsTitleAPI}/>
      <SchemeProcess data={schemeTitleAPI} />
      <TypeProcessingSistem data={systemsTitleAPI}/>
      <FixedPhone classWrapper={s.fixedNone} booleanText={true} />
    </main>
  );
};