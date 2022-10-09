import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { styled } from '@mui/system';
import React from "react"

const StyledRadio = styled(Radio)(() => ({
    color: '#5EB245',
    "&.Mui-checked": {
        color: '#5EB245'
    }
}))

interface MyProps {
    option1: string,
    option2: string,
    option3: string,
    questionNumber: number
}

const Question = ({option1, option2, option3, questionNumber}: MyProps) => {
    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value={`q${questionNumber}_1`} control={<StyledRadio />} label={option1} />
                <FormControlLabel value={`q${questionNumber}_2`} control={<StyledRadio />} label={option2} />
                <FormControlLabel value={`q${questionNumber}_3`} control={<StyledRadio />} label={option3} />
            </RadioGroup>
        </FormControl>
    )
}

export default Question