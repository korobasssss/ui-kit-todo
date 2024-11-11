import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "./Button";
export default {
    title: 'Button',
    component: Button,
};
const Template = (args) => _jsx(Button, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    children: 'Я кнопка',
    theme: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Я кнопка',
    theme: 'secondary'
};
export const None = Template.bind({});
None.args = {
    children: 'Я кнопка',
    theme: 'none'
};
