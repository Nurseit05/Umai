import { ParticipantsTitleTS } from '@/api/service/processing/processType';

import BlockList from './BlockList/blockList';

import s from './participantsProperty.module.scss';

const ParticipantsProperty = ({data}: {data: ParticipantsTitleTS}) => {

    if (!data) {
        return null;
    }

    const participantsList = data?.processing_participants;

    return (
        <section className={s.container} >
            <h4>{data?.title}</h4>
            <div className={s.wrapperList} >
                {participantsList.map(item =>
                    <BlockList
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                    />
                )}
            </div>
        </section>
    );
};

export default ParticipantsProperty;