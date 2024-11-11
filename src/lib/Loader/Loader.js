import { jsx as _jsx } from "react/jsx-runtime";
import { LoaderStepOneIcon, LoaderStepTwoIcon, LoaderStepThreeIcon, LoaderStepFourIcon } from '../../shared/assets';
import { Icon } from '../Icon';
import styles from './styles.module.scss';
export const Loader = () => {
    const allSteps = [LoaderStepOneIcon, LoaderStepTwoIcon, LoaderStepThreeIcon, LoaderStepFourIcon];
    return (_jsx("div", { className: styles.SLoader, children: allSteps.map((icon, index) => {
            return (_jsx(Icon, { classNames: styles.SItem, icon: icon }, index));
        }) }));
};
