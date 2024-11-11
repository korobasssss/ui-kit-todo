import { jsx as _jsx } from "react/jsx-runtime";
import { Popup } from './Popup';
export default {
    title: 'Popup',
    component: Popup,
};
const Template = (args) => _jsx(Popup, { ...args });
export const DefaultSizeS = Template.bind({});
DefaultSizeS.args = {
    title: 'Это заголовок попапа размера S',
    isOpen: true,
    buttonSubmitName: 'Отправить',
    buttonCancelName: 'Отменить',
    children: 'Я дите попапа',
    size: 's'
};
export const DefaultSizeM = Template.bind({});
DefaultSizeM.args = {
    title: 'Это заголовок попапа размера M',
    isOpen: true,
    buttonSubmitName: 'Отправить',
    buttonCancelName: 'Отменить',
    children: 'Я дите попапа',
    size: 'm'
};
export const DefaultWithoutButtons = Template.bind({});
DefaultWithoutButtons.args = {
    title: 'Это заголовок попапа размера M',
    isOpen: true,
    children: 'Я дите попапа',
    size: 'm'
};
