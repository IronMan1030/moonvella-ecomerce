import * as React from "react";
import { Paragraph3 } from "baseui/typography";
import { Radio, RadioGroup } from "baseui/radio";

const RadioField = ({ ...props }) => {
  return (
    <RadioGroup name="overrides">
      <Radio
        // overrides={{
        //   Label: ({ $value }) => <Paragraph3>Custom label for value: {$value}</Paragraph3>,
        //   RadioMarkOuter: {
        //     style: ({ $theme }) => ({
        //       backgroundColor: $theme.colors.positive,
        //     }),
        //   },
        // }}
        value="1"
      >
        First
      </Radio>
    </RadioGroup>
  );
};

export default RadioField;
