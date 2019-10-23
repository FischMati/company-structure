import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";

Enzyme.configure({adapter: new Adapter()});

export const waitForAsync = () => new Promise((resolve) => setImmediate(resolve));
export const mountAsync =
    async (component: any) => {
        const mounted = mount(component);

        await waitForAsync();
        mounted.update();

        return mounted;
    };