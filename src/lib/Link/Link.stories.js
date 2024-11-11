import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from './Link';
export default {
    title: 'Link',
    component: Link,
};
const Template = (args) => _jsx(Link, { ...args });
export const Default = Template.bind({});
Default.args = {
    isSelected: false,
    children: 'Я ссылка'
};
export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
    isSelected: true,
    children: 'Я ссылка'
};
