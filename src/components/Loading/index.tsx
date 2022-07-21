import React, {FC} from 'react';
import st from './loading.module.scss';

/**
 * Компонент загрузки страницы*/
const Loading: FC = () => {
    return (
        <div className={st.loading}>
            <div className={st.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;