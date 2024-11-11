import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonIcon } from './ButtonIcon';
import { SearchIcon } from '../../shared/assets';
export default {
    title: 'ButtonIcon',
    component: ButtonIcon,
};
const Template = (args) => _jsx(ButtonIcon, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    icon: SearchIcon,
    alt: 'Поиск'
};
