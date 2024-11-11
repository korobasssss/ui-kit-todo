import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from './Select';
import { useState } from 'react';
import '../../index.css';
export default {
    title: 'Select',
    component: Select,
};
const Template = (args) => {
    const [selected, setSelected] = useState({ value: 1, label: 'это 1' });
    return (_jsx(Select, { ...args, value: selected, setSelected: setSelected, options: [
            { value: 1, label: 'это 1' },
            { value: 2, label: 'это 2' },
            { value: 3, label: 'это 3' },
            { value: 4, label: 'это 4' },
        ] }));
};
export const Default = Template.bind({});
Default.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
};
export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
    isRequired: true
};
export const DefaultRequiredError = Template.bind({});
DefaultRequiredError.args = {
    label: 'описание',
    placeholder: 'Это плейсхолдер',
    error: 'Это сообщение ошибки',
    isRequired: true
};
