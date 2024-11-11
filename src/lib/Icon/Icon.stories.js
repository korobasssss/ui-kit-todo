import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from './Icon';
import { FilterIcon } from '../../shared/assets';
export default {
    title: 'Icon',
    component: Icon,
};
const Template = (args) => _jsx(Icon, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    icon: FilterIcon,
    alt: 'это иконка'
};
