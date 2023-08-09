import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,

)

export const ActiveMembersCard = () => {
   return (
      <Card
         css={{
            // mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
             // mh:'500px'
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$6', py: '$4'}} direction={'row'} align={'center'}>
                <Flex css={{gap: '$6', py: '$4'}} direction={'column'} align={'center'}>

                     <div>
                        <div style={{fontWeight:"bold",color:'white'}} className="fs-4 fw-semibold">
                           Active Members
                        </div>
                        <div style={{fontWeight:"bold",color:'white'}}>1,000</div>
                         <div>
                             <div className="mt-3 mx-3" style={{ height: '80px',width:'200px'}}>
                                 <Line
                                     options={{
                                         plugins: {
                                             legend: {
                                                 display: false,
                                             },
                                         },
                                         maintainAspectRatio: false,
                                         scales: {
                                             x: {
                                                 grid: {
                                                     display: false,
                                                     // drawBorder: false,
                                                 },
                                                 ticks: {
                                                     display: false,
                                                 },
                                             },
                                             y: {
                                                 min: 30,
                                                 max: 89,
                                                 display: false,
                                                 grid: {
                                                     display: false,
                                                 },
                                                 ticks: {
                                                     display: false,
                                                 },
                                             },
                                         },
                                         elements: {
                                             line: {
                                                 borderWidth: 1,
                                                 tension: 0.4,
                                             },
                                             point: {
                                                 radius: 4,
                                                 hitRadius: 10,
                                                 hoverRadius: 4,
                                             },
                                         },
                                     }}
                                     data={{
                                         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                         datasets: [{
                                             label: 'My First dataset',
                                             backgroundColor: 'transparent',
                                             borderColor: 'rgba(255,255,255,.55)',
                                             data: [65, 59, 84, 84, 51, 55, 40],
                                         }],
                                     }}
                                 />
                             </div>
                         </div>
                     </div>
                </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};
