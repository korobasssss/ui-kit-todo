import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from './Input';
import { SearchIcon } from '../../shared/assets';
export default {
    title: 'Input',
    component: Input,
};
const Template = (args) => _jsx(Input, { ...args });
export const Default = Template.bind({});
Default.args = {
    label: 'Это описание к инпуту',
    placeholder: 'Это плейсхолдер'
};
export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    label: 'Это описание к инпуту обязательное',
    placeholder: 'Это плейсхолдер',
    isRequired: true
};
export const Error = Template.bind({});
Error.args = {
    label: 'Это описание к инпуту',
    placeholder: 'Это плейсхолдер',
    error: 'Это ошибка инпута',
    isRequired: true
};
export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
    leftIcon: SearchIcon,
    placeholder: 'Это плейсхолдер',
};
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
    rightIcon: SearchIcon,
    placeholder: 'Это плейсхолдер',
};
