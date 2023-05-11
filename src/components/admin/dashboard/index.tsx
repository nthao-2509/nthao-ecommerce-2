import { Flex, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import CardCustom from 'common/admin/CardCustom'
import React, { PureComponent } from 'react'
import { StyleAdminDashboard } from '../style'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const IndexDashboard = () => {
  return (
    <StyleAdminDashboard>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex gap={10} p={8} flex={1} align={'center'} justify={'start'}>
          <CardCustom>
            <Flex flex={1} align={'center'} justify={'start'}>
              <div className='view'>
                <Stat>
                  <StatLabel>
                    <div className='dashboard__title'>
                      <h3>Total Sales & Costs</h3>
                    </div>
                    <div className='dashboard__des'>
                      <span>Lates 7 days</span>
                    </div>
                  </StatLabel>
                  <StatNumber>
                    <span className='dashboard__total'>$345,670</span>
                  </StatNumber>
                  <StatHelpText>
                    <div className='dashboard__help-text'>
                      <div className='number'>
                        <StatArrow type='increase' />
                        23.36%
                      </div>
                      <div className='detail'>vs last 7 days</div>
                    </div>
                  </StatHelpText>
                </Stat>
              </div>
              <div className='chart'>
                <Stack display={'block'}>
                  <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey='name' />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#0F60FF' dot={false} strokeWidth={3} />
                    <Line type='monotone' dataKey='uv' stroke='#0FB7FF' dot={false} strokeWidth={3} />
                  </LineChart>
                </Stack>
              </div>
            </Flex>
          </CardCustom>
          <CardCustom>
            <Flex flex={1} align={'center'} justify={'start'}>
              <div className='view'>
                <Stat>
                  <StatLabel>
                    <div className='dashboard__title'>
                      <h3>Sessions</h3>
                    </div>
                    <div className='dashboard__des'>
                      <span>Lates 7 days</span>
                    </div>
                  </StatLabel>
                  <StatNumber>
                    <span className='dashboard__total'>$16.5</span>
                  </StatNumber>
                  <StatHelpText>
                    <div className='dashboard__help-text'>
                      <div className='number'>
                        <StatArrow type='decrease' />
                        3%
                      </div>
                      <div className='detail'>vs last 7 days</div>
                    </div>
                  </StatHelpText>
                </Stat>
              </div>
              <div className='chart'>
                <Stack display={'block'}>
                  <LineChart
                    width={360}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey='name' />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#D02626' dot={false} strokeWidth={3} />
                  </LineChart>
                </Stack>
              </div>
            </Flex>
          </CardCustom>
        </Flex>
      </Stack>
    </StyleAdminDashboard>
  )
}

export default IndexDashboard
