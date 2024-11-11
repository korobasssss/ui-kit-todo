import { jsx as _jsx } from "react/jsx-runtime";
export const Icon = ({ icon, alt = icon, classNames }) => {
    return (_jsx("img", { className: classNames, src: icon, alt: alt }));
};
