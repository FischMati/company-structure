import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter: new Adapter()});

export const waitForAsync = () => new Promise((resolve) => setImmediate(resolve));