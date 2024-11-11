import { jsx as _jsx } from "react/jsx-runtime";
import { NoData } from './NoData';
export default {
    title: 'NoData',
    component: NoData,
};
const Template = (args) => _jsx(NoData, { ...args });
export const Default = Template.bind({});
Default.args = {
    message: 'Сообщение что данных нет'
};
