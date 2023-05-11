import React from 'react'
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, SliderMark, Tooltip } from '@chakra-ui/react'
import Colors from 'modules/Colors'
const IndexRangeSlider = () => {
  const [sliderValue, setSliderValue] = React.useState<number[]>([0, 100])
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <>
      <RangeSlider
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onChange={(val: number[]) => setSliderValue(val)}
        aria-label={['min', 'max']}
        colorScheme='pink'
        defaultValue={[0, 999]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>

        <Tooltip hasArrow backgroundColor={Colors.pink} color='white' placement='top' isOpen={showTooltip} label={`$${sliderValue?.[0]}`}>
          <RangeSliderThumb index={0} />
        </Tooltip>
        <Tooltip backgroundColor={Colors.pink} hasArrow color='white' placement='top' isOpen={showTooltip} label={`$${sliderValue?.[1]}`}>
          <RangeSliderThumb index={1} />
        </Tooltip>
      </RangeSlider>
    </>
  )
}

export default IndexRangeSlider
