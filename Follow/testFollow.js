import Followback from "./Followback";

const TestFollow = () => {};

TestFollow.insert = (following) => {
    return Followback.post("/Following.do", following);
};

export default TestFollow;