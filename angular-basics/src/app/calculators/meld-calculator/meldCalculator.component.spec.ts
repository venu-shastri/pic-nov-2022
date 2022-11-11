import {MeldCalculatorComponent} from './meldCalculator.component'

describe("MeldCalculatorComponentTestSuite",()=>{

    it("Component Instantiation Test",()=>{

        const obj=new MeldCalculatorComponent();
        expect(obj).toBeTruthy();
    });
    it("Given_InputvitalsSet_When_Calculated_Then_MeldScoreToBeValidValue",()=>{
        const obj=new MeldCalculatorComponent();
        obj.setBilirubin("2");
        obj.setCreatinine("3");
        obj.setSodium("4");
        obj.setINR("2");

        obj.calculateMeldScore();
        expect(obj.meldScore).toBe(11);
    });
});