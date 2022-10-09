import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { styled } from '@mui/system';
import React from "react"

const StyledRadio = styled(Radio)(() => ({
    color: '#5EB245',
    "&.Mui-checked": {
        color: '#5EB245'
    }
}))

type Option = {
    value: string;
    text: string;
}
interface MyProps {
    options: Option[], 
    handleOption: (question: number, value: string) => void
}

const Question = ({options, handleOption}: MyProps) => {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {options.map((option: Option) => <FormControlLabel key={option.text} value={option.value} control={<StyledRadio />} label={option.text} onChange={() => handleOption(Number(option.value[0]), option.value)} />)}
            </RadioGroup>
        </FormControl>
    )
}

export default Question