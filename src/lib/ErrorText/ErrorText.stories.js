import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorText } from './ErrorText';
export default {
    title: 'ErrorText',
    component: ErrorText,
};
const Template = (args) => _jsx(ErrorText, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    message: 'Это сообщение об ошибке бегите исправлять'
};
