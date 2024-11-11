import { jsx as _jsx } from "react/jsx-runtime";
import '../../index.css';
import { Textarea } from './Textarea';
export default {
    title: 'Textarea',
    component: Textarea,
};
const Template = (args) => _jsx(Textarea, { ...args });
export const Default = Template.bind({});
Default.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер'
};
export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер',
    isRequired: true
};
export const DefaultRequiredError = Template.bind({});
DefaultRequiredError.args = {
    label: 'Описание',
    placeholder: 'Плейсхолдер',
    error: 'Сообщение об ошибке',
    isRequired: true
};
